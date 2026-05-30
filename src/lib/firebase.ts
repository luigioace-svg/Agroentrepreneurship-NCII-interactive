import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInAnonymously,
  updateProfile,
  onAuthStateChanged,
  signOut,
  type User,
} from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAo3XU_f_UWi_pU09qF9Js_73Leqyrtvw4",
  authDomain: "agroentrepreneurship-ncii.firebaseapp.com",
  projectId: "agroentrepreneurship-ncii",
  storageBucket: "agroentrepreneurship-ncii.firebasestorage.app",
  messagingSenderId: "430333488307",
  appId: "1:430333488307:web:ca4c3042b92d81b97e14c6",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

// Sign in with Google
export async function signInWithGoogle(): Promise<User> {
  const result = await signInWithPopup(auth, googleProvider);
  await ensureUserDoc(result.user);
  return result.user;
}

// Sign in as guest with a name
export async function signInAsGuest(name: string): Promise<User> {
  const result = await signInAnonymously(auth);
  await updateProfile(result.user, { displayName: name });
  await ensureUserDoc(result.user, name);
  return result.user;
}

// Sign out
export async function signOutUser(): Promise<void> {
  await signOut(auth);
}

// Create or update user document in Firestore
async function ensureUserDoc(user: User, guestName?: string): Promise<void> {
  const ref = doc(db, 'users', user.uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) {
    await setDoc(ref, {
      uid: user.uid,
      name: guestName || user.displayName || 'Student',
      email: user.email || null,
      photoURL: user.photoURL || null,
      isAnonymous: user.isAnonymous,
      createdAt: serverTimestamp(),
      progress: {},
      quizResults: [],
    });
  }
}

export { onAuthStateChanged, type User };
