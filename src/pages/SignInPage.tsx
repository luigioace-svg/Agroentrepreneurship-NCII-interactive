import { useState } from 'react';
import { signInWithGoogle, signInAsGuest } from '@/lib/firebase';

interface SignInPageProps {
  onSuccess?: () => void;
}

export function SignInPage({ onSuccess }: SignInPageProps) {
  const [guestName, setGuestName] = useState('');
  const [mode, setMode] = useState<'choose' | 'guest'>('choose');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGoogle = async () => {
    setLoading(true);
    setError('');
    try {
      await signInWithGoogle();
      onSuccess?.();
    } catch (e) {
      setError('Google sign-in failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleGuest = async () => {
    if (!guestName.trim()) { setError('Please enter your name.'); return; }
    setLoading(true);
    setError('');
    try {
      await signInAsGuest(guestName.trim());
      onSuccess?.();
    } catch (e) {
      setError('Sign-in failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-forest flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #d4a017 0%, transparent 50%), radial-gradient(circle at 80% 20%, #4a7c59 0%, transparent 50%)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20"
          style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(212,160,23,0.3) 40px, rgba(212,160,23,0.3) 41px)' }} />
        {/* Decorative wheat/leaf shapes */}
        <div className="absolute top-10 left-10 text-6xl opacity-10 rotate-12">🌾</div>
        <div className="absolute top-20 right-16 text-5xl opacity-10 -rotate-12">🌿</div>
        <div className="absolute bottom-20 left-20 text-5xl opacity-10 rotate-6">🌱</div>
        <div className="absolute bottom-10 right-10 text-6xl opacity-10 -rotate-6">🌾</div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo / Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/20 border-2 border-gold/40 mb-4 mx-auto">
            <span className="text-4xl">🌾</span>
          </div>
          <h1 className="font-display text-3xl font-bold text-white leading-tight">
            AgroEntrepreneurship
          </h1>
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mt-1">
            NC II · TESDA · Interactive Review
          </p>
          <p className="text-white/60 text-sm mt-3">
            Sign in to track your progress and save your scores
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {mode === 'choose' ? (
            <div className="p-8">
              <h2 className="text-forest font-bold text-xl text-center mb-6">Welcome, Student!</h2>

              {/* Google Sign In */}
              <button
                onClick={handleGoogle}
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 border-2 border-earth/20 rounded-xl px-5 py-4 text-forest font-semibold hover:bg-mist transition-all mb-4 disabled:opacity-50"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="flex-1 h-px bg-earth/20" />
                <span className="text-earth/50 text-xs font-medium">OR</span>
                <div className="flex-1 h-px bg-earth/20" />
              </div>

              {/* Guest Mode */}
              <button
                onClick={() => setMode('guest')}
                className="w-full bg-forest text-white font-semibold rounded-xl px-5 py-4 hover:bg-sage transition-all"
              >
                Continue as Guest
              </button>

              {error && <p className="text-red-500 text-sm text-center mt-4">{error}</p>}

              <p className="text-earth/50 text-xs text-center mt-5 leading-relaxed">
                Your progress is automatically saved. Guest data is tied to this device.
              </p>
            </div>
          ) : (
            <div className="p-8">
              <button onClick={() => { setMode('choose'); setError(''); }}
                className="flex items-center gap-2 text-earth/60 text-sm mb-6 hover:text-forest transition-colors">
                ← Back
              </button>
              <h2 className="text-forest font-bold text-xl mb-2">Enter Your Name</h2>
              <p className="text-earth/60 text-sm mb-6">Your name will identify your progress in the system.</p>

              <input
                type="text"
                value={guestName}
                onChange={e => setGuestName(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleGuest()}
                placeholder="e.g. Juan dela Cruz"
                className="w-full border-2 border-mist rounded-xl px-4 py-3 text-forest font-medium outline-none focus:border-sage transition-all mb-4"
                autoFocus
              />

              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

              <button
                onClick={handleGuest}
                disabled={loading || !guestName.trim()}
                className="w-full bg-forest text-white font-semibold rounded-xl px-5 py-4 hover:bg-sage transition-all disabled:opacity-50"
              >
                {loading ? 'Signing in...' : 'Start Learning →'}
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <p className="text-center text-white/30 text-xs mt-6">
          AgroEntrepreneurship NC II · TESDA Philippines
        </p>
      </div>
    </div>
  );
}
