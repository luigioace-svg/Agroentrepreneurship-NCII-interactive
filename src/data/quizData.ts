export type Difficulty = 'easy' | 'medium' | 'hard';

export interface QuizQuestion {
  id: number;
  question: string;
  questionTl: string;
  options: string[];
  optionsTl: string[];
  correctAnswer: number; // index of correct option
  explanation: string;
  explanationTl: string;
  difficulty: Difficulty;
}

export interface QuizCategory {
  id: string;
  icon: string;
  title: string;
  titleTl: string;
  description: string;
  descriptionTl: string;
  questions: QuizQuestion[];
}

export const quizCategories: QuizCategory[] = [
  {
    id: 'intro',
    icon: 'Sprout',
    title: 'Introduction & Concepts',
    titleTl: 'Pagpapakilala at mga Konsepto',
    description: 'Basic concepts, definitions, and principles of agroentrepreneurship',
    descriptionTl: 'Mga pangunahing konsepto, kahulugan, at prinsipyo ng agroentrepreneurship',
    questions: [
      {
        id: 1,
        question: 'What is agroentrepreneurship?',
        questionTl: 'Ano ang agroentrepreneurship?',
        options: ['Combination of agriculture and entrepreneurship', 'Type of machinery', 'Government tax', 'Chemical farming'],
        optionsTl: ['Kombinasyon ng agrikultura at entrepreneurship', 'Uri ng makinarya', 'Buwgis ng gobyerno', 'Paggamit ng kemikal sa pagsasaka'],
        correctAnswer: 0,
        explanation: 'Agroentrepreneurship is the combination of agriculture and entrepreneurship.',
        explanationTl: 'Ang agroentrepreneurship ay ang kombinasyon ng agrikultura at entrepreneurship.',
        difficulty: 'easy'
      },
      {
        id: 2,
        question: 'How many hours is the TESDA Agroentrepreneurship NC II course?',
        questionTl: 'Ilan ang oras ng kursong TESDA Agroentrepreneurship NC II?',
        options: ['100 hours', '239 hours', '500 hours', '150 hours'],
        optionsTl: ['100 oras', '239 oras', '500 oras', '150 oras'],
        correctAnswer: 1,
        explanation: 'The TESDA Agroentrepreneurship NC II course is 239 hours.',
        explanationTl: 'Ang kursong TESDA Agroentrepreneurship NC II ay 239 oras.',
        difficulty: 'easy'
      },
      {
        id: 3,
        question: 'Which of the following is a core goal of agroentrepreneurship?',
        questionTl: 'Alin sa mga sumusunod ang pangunahing layunin ng agroentrepreneurship?',
        options: ['Eliminate all farming', 'Generate profit while sustaining productivity', 'Replace all farmers with machines', 'Stop food production'],
        optionsTl: ['Puksain ang lahat ng pagsasaka', 'Kumita ng tubo habang pinapanatili ang produktibidad', 'Palitan ang lahat ng magsasaka ng makina', 'Itigil ang produksyon ng pagkain'],
        correctAnswer: 1,
        explanation: 'Core goals include generating profit while sustaining agricultural productivity.',
        explanationTl: 'Ang mga pangunahing layunin ay kinabibilangan ng pagkita ng tubo habang pinapanatili ang produktibidad sa agrikultura.',
        difficulty: 'easy'
      },
      {
        id: 4,
        question: 'What does PPE stand for?',
        questionTl: 'Ano ang ibig sabihin ng PPE?',
        options: ['Equipment used for safety', 'A form of gambling', 'A political strategy', 'A transportation fee'],
        optionsTl: ['Kagamitan para sa kaligtasan', 'Uri ng sugal', 'Estratehiya sa pulitika', 'Bayad sa transportasyon'],
        correctAnswer: 0,
        explanation: 'PPE stands for Personal Protective Equipment — equipment used for safety.',
        explanationTl: 'Ang PPE ay nangangahulugang Personal Protective Equipment — kagamitan para sa kaligtasan.',
        difficulty: 'easy'
      },
      {
        id: 5,
        question: 'Which is NOT one of Stephen Covey\'s 7 Habits?',
        questionTl: 'Alin ang HINDI isa sa 7 Habits ni Stephen Covey?',
        options: ['Be proactive', 'Begin with the end in mind', 'Work alone always', 'Sharpen your saw'],
        optionsTl: ['Maging proaktibo', 'Simulan sa dulo sa isip', 'Laging magtrabaho mag-isa', 'Patalasin ang lagari'],
        correctAnswer: 2,
        explanation: '"Work alone always" is not one of the 7 Habits. The habits include being proactive, beginning with the end in mind, putting first things first, thinking win-win, seeking first to understand, synergizing, and sharpening the saw.',
        explanationTl: 'Ang "Laging magtrabaho mag-isa" ay hindi isa sa 7 Habits. Ang mga habits ay kinabibilangan ng pagiging proaktibo, pagsisimula sa dulo sa isip, paglalagay ng una sa una, pag-iisip ng win-win, paghahanap ng pag-unawa, pagsynergy, at pagpapalakas ng lagari.',
        difficulty: 'medium'
      },
      {
        id: 6,
        question: 'What is the first habit in Stephen Covey\'s 7 Habits?',
        questionTl: 'Ano ang unang habit sa 7 Habits ni Stephen Covey?',
        options: ['Begin with the end in mind', 'Be proactive', 'First things first', 'Think win-win'],
        optionsTl: ['Simulan sa dulo sa isip', 'Maging proaktibo', 'Unahin ang una', 'Mag-isip ng win-win'],
        correctAnswer: 1,
        explanation: 'The first habit is "Be proactive" — take initiative and control over your environment.',
        explanationTl: 'Ang unang habit ay "Maging proaktibo" — kumuha ng inisyatiba at kontrol sa iyong kapaligiran.',
        difficulty: 'easy'
      },
      {
        id: 7,
        question: 'Agroentrepreneurship helps with:',
        questionTl: 'Ang agroentrepreneurship ay tumutulong sa:',
        options: ['Reducing food supply', 'Nation-building and food security', 'Stopping farming', 'Increasing urban migration'],
        optionsTl: ['Pagbawas ng supply ng pagkain', 'Nation-building at food security', 'Pagtigil ng pagsasaka', 'Pagdami ng urban migration'],
        correctAnswer: 1,
        explanation: 'Agroentrepreneurship is a tool for nation-building, food security, and farmer empowerment.',
        explanationTl: 'Ang agroentrepreneurship ay isang kasangkapan para sa nation-building, food security, at pagpapalakas ng kakayahan ng magsasaka.',
        difficulty: 'easy'
      },
      {
        id: 8,
        question: 'Which entrepreneurial trait involves taking calculated risks?',
        questionTl: 'Aling katangian ng entrepreneur ang nagsasangkot ng pagkuha ng kalkuladong panganib?',
        options: ['Risk-taking ability', 'Laziness', 'Avoidance', 'Fearfulness'],
        optionsTl: ['Kakayahang mag-risk', 'Katamaran', 'Pag-iwas', 'Pagkatakot'],
        correctAnswer: 0,
        explanation: 'Risk-taking ability is a key entrepreneurial trait — taking calculated, informed risks.',
        explanationTl: 'Ang kakayahang mag-risk ay isang pangunahing katangian ng entrepreneur — pagkuha ng kalkuladong, impormadong panganib.',
        difficulty: 'easy'
      },
      {
        id: 9,
        question: 'What are the three competency categories in the NC II course?',
        questionTl: 'Ano ang tatlong kategorya ng competency sa kursong NC II?',
        options: ['Basic, Common, Core', 'Easy, Medium, Hard', 'Theory, Practice, Exam', 'Math, Science, English'],
        optionsTl: ['Basic, Common, Core', 'Madali, Katamtaman, Mahirap', 'Teorya, Pagsasanay, Pagsusulit', 'Math, Science, English'],
        correctAnswer: 0,
        explanation: 'The three competency categories are Basic, Common, and Core.',
        explanationTl: 'Ang tatlong kategorya ng competency ay Basic, Common, at Core.',
        difficulty: 'medium'
      },
      {
        id: 10,
        question: 'What does SMART stand for in goal setting?',
        questionTl: 'Ano ang ibig sabihin ng SMART sa pagtatakda ng layunin?',
        options: ['Simple, Measurable, Achievable, Relevant, Timely', 'Specific, Measurable, Achievable, Relevant, Time-bound', 'Small, Manageable, Actionable, Realistic, Trackable', 'Strategic, Marketable, Attainable, Resourceful, Targeted'],
        optionsTl: ['Simple, Measurable, Achievable, Relevant, Timely', 'Specific, Measurable, Achievable, Relevant, Time-bound', 'Small, Manageable, Actionable, Realistic, Trackable', 'Strategic, Marketable, Attainable, Resourceful, Targeted'],
        correctAnswer: 1,
        explanation: 'SMART stands for Specific, Measurable, Achievable, Relevant, Time-bound.',
        explanationTl: 'Ang SMART ay nangangahulugang Specific, Measurable, Achievable, Relevant, Time-bound.',
        difficulty: 'medium'
      }
    ]
  },
  {
    id: 'market',
    icon: 'BarChart3',
    title: 'Market Opportunities',
    titleTl: 'Mga Oportunidad sa Merkado',
    description: 'Market research, supply chain, buyer identification, and value chain',
    descriptionTl: 'Pananaliksik sa merkado, supply chain, pagkilala sa mamimili, at value chain',
    questions: [
      {
        id: 11,
        question: 'Which is part of the 4Ps of Marketing?',
        questionTl: 'Alin ang bahagi ng 4Ps ng Marketing?',
        options: ['Product', 'Prayer', 'Process', 'Permission'],
        optionsTl: ['Produkto', 'Dasal', 'Proseso', 'Pahintulot'],
        correctAnswer: 0,
        explanation: 'The 4Ps of Marketing are Product, Price, Place, and Promotion.',
        explanationTl: 'Ang 4Ps ng Marketing ay Produkto, Presyo, Lugar, at Promosyon.',
        difficulty: 'easy'
      },
      {
        id: 12,
        question: 'What does market research help identify?',
        questionTl: 'Ano ang natutulungan ng market research na tukuyin?',
        options: ['Customer needs', 'Weather forecast only', 'Farm animals', 'Political parties'],
        optionsTl: ['Mga pangangailangan ng customer', 'Weather forecast lamang', 'Mga hayop sa bukid', 'Mga partidong pulitikal'],
        correctAnswer: 0,
        explanation: 'Market research helps identify customer needs and preferences.',
        explanationTl: 'Ang market research ay tumutulong na tukuyin ang mga pangangailangan at kagustuhan ng customer.',
        difficulty: 'easy'
      },
      {
        id: 13,
        question: 'What best describes supply chain?',
        questionTl: 'Ano ang pinakamahusay na naglalarawan ng supply chain?',
        options: ['Movement of products from producers to consumers', 'A form of gambling', 'A political strategy', 'A transportation fee'],
        optionsTl: ['Paggalaw ng mga produkto mula sa producer patungo sa consumer', 'Uri ng sugal', 'Estratehiya sa pulitika', 'Bayad sa transportasyon'],
        correctAnswer: 0,
        explanation: 'Supply chain is the movement of products from producers to consumers.',
        explanationTl: 'Ang supply chain ay ang paggalaw ng mga produkto mula sa producer patungo sa consumer.',
        difficulty: 'easy'
      },
      {
        id: 14,
        question: 'What best describes value chain?',
        questionTl: 'Ano ang pinakamahusay na naglalarawan ng value chain?',
        options: ['Activities that add value to products', 'A form of gambling', 'A political strategy', 'A transportation fee'],
        optionsTl: ['Mga aktibidad na nagdadagdag ng halaga sa mga produkto', 'Uri ng sugal', 'Estratehiya sa pulitika', 'Bayad sa transportasyon'],
        correctAnswer: 0,
        explanation: 'Value chain refers to activities that add value to products.',
        explanationTl: 'Ang value chain ay tumutukoy sa mga aktibidad na nagdadagdag ng halaga sa mga produkto.',
        difficulty: 'easy'
      },
      {
        id: 15,
        question: 'What are the 4Cs of Marketing?',
        questionTl: 'Ano ang 4Cs ng Marketing?',
        options: ['Customer Value, Cost, Convenience, Communication', 'Cash, Credit, Check, Coin', 'Create, Capture, Convert, Close', 'Customer, Company, Competitor, Collaborator'],
        optionsTl: ['Customer Value, Cost, Convenience, Communication', 'Cash, Credit, Check, Coin', 'Create, Capture, Convert, Close', 'Customer, Company, Competitor, Collaborator'],
        correctAnswer: 0,
        explanation: 'The 4Cs of Marketing are Customer Value, Cost, Convenience, and Communication.',
        explanationTl: 'Ang 4Cs ng Marketing ay Customer Value, Cost, Convenience, at Communication.',
        difficulty: 'medium'
      },
      {
        id: 16,
        question: 'What does market mapping show?',
        questionTl: 'Ano ang ipinakikita ng market mapping?',
        options: ['Visual representation of market players', 'Weather patterns', 'Farm layouts', 'Family trees'],
        optionsTl: ['Visual na representasyon ng mga manlalaro sa merkado', 'Mga pattern ng panahon', 'Layout ng bukid', 'Family trees'],
        correctAnswer: 0,
        explanation: 'Market mapping is a visual representation of market players and product flow.',
        explanationTl: 'Ang market mapping ay isang visual na representasyon ng mga manlalaro sa merkado at daloy ng produkto.',
        difficulty: 'easy'
      },
      {
        id: 17,
        question: 'Which describes the Law of Supply correctly?',
        questionTl: 'Alin ang tama na naglalarawan ng Batas ng Supply?',
        options: ['Higher price = Higher supply', 'Higher price = Lower supply', 'Lower price = Higher supply', 'Price has no effect on supply'],
        optionsTl: ['Mas mataas na presyo = Mas mataas na supply', 'Mas mataas na presyo = Mas mababang supply', 'Mas mababang presyo = Mas mataas na supply', 'Ang presyo ay walang epekto sa supply'],
        correctAnswer: 0,
        explanation: 'The Law of Supply states that higher prices lead to higher supply.',
        explanationTl: 'Ang Batas ng Supply ay nagsasabing ang mas mataas na presyo ay nagdudulot ng mas mataas na supply.',
        difficulty: 'easy'
      },
      {
        id: 18,
        question: 'What are the three kinds of buyers?',
        questionTl: 'Ano ang tatlong uri ng mamimili?',
        options: ['Tightwads, Spendthrifts, Average Spenders', 'Rich, Poor, Middle class', 'Young, Adult, Elderly', 'Local, National, International'],
        optionsTl: ['Tightwads, Spendthrifts, Average Spenders', 'Mayaman, Mahirap, Middle class', 'Bata, Adulto, Matanda', 'Lokal, Pambansa, Internasyonal'],
        correctAnswer: 0,
        explanation: 'The three kinds of buyers are Tightwads, Spendthrifts, and Average Spenders.',
        explanationTl: 'Ang tatlong uri ng mamimili ay Tightwads, Spendthrifts, at Average Spenders.',
        difficulty: 'easy'
      },
      {
        id: 19,
        question: 'Which is a value-adding activity?',
        questionTl: 'Alin ang isang value-adding na aktibidad?',
        options: ['Processing', 'Sleeping', 'Ignoring customers', 'Wasting materials'],
        optionsTl: ['Pagpoproseso', 'Pagtulog', 'Pagpapabaya sa mga customer', 'Pagsasayang ng mga materyales'],
        correctAnswer: 0,
        explanation: 'Processing is a value-adding activity that transforms raw products.',
        explanationTl: 'Ang pagpoproseso ay isang value-adding na aktibidad na nagbabago ng raw products.',
        difficulty: 'easy'
      },
      {
        id: 20,
        question: 'What does the Law of Demand state?',
        questionTl: 'Ano ang sinasabi ng Batas ng Demand?',
        options: ['Higher price = Lower demand', 'Higher price = Higher demand', 'Price has no effect', 'Lower price = Lower demand'],
        optionsTl: ['Mas mataas na presyo = Mas mababang demand', 'Mas mataas na presyo = Mas mataas na demand', 'Ang presyo ay walang epekto', 'Mas mababang presyo = Mas mababang demand'],
        correctAnswer: 0,
        explanation: 'The Law of Demand states that higher prices lead to lower demand.',
        explanationTl: 'Ang Batas ng Demand ay nagsasabing ang mas mataas na presyo ay nagdudulot ng mas mababang demand.',
        difficulty: 'easy'
      }
    ]
  },
  {
    id: 'production',
    icon: 'Wheat',
    title: 'Farm Production Planning',
    titleTl: 'Pagpaplano ng Produksyon sa Bukid',
    description: 'Production activities, farm assessment, supplier selection, and records',
    descriptionTl: 'Mga aktibidad sa produksyon, pagtatasa ng bukid, pagpili ng supplier, at mga rekord',
    questions: [
      {
        id: 21,
        question: 'What is the first step in the rice production flow?',
        questionTl: 'Ano ang unang hakbang sa daloy ng produksyon ng palay?',
        options: ['Land Preparation', 'Harvesting', 'Milling', 'Packaging'],
        optionsTl: ['Paghahanda ng Lupa', 'Pag-aani', 'Paggiling', 'Pagbabalot'],
        correctAnswer: 0,
        explanation: 'The first step in rice production is Land Preparation.',
        explanationTl: 'Ang unang hakbang sa produksyon ng palay ay ang Paghahanda ng Lupa.',
        difficulty: 'easy'
      },
      {
        id: 22,
        question: 'What does SWOT stand for?',
        questionTl: 'Ano ang ibig sabihin ng SWOT?',
        options: ['Strengths, Weaknesses, Opportunities, Threats', 'Simple, Workable, Organized, Timely', 'Strategic, Working, Operational, Tactical', 'Sales, Workers, Owners, Traders'],
        optionsTl: ['Strengths, Weaknesses, Opportunities, Threats', 'Simple, Workable, Organized, Timely', 'Strategic, Working, Operational, Tactical', 'Sales, Workers, Owners, Traders'],
        correctAnswer: 0,
        explanation: 'SWOT stands for Strengths, Weaknesses, Opportunities, Threats.',
        explanationTl: 'Ang SWOT ay nangangahulugang Strengths, Weaknesses, Opportunities, Threats.',
        difficulty: 'easy'
      },
      {
        id: 23,
        question: 'Which is a component of a Farm Production Plan?',
        questionTl: 'Alin ang bahagi ng Farm Production Plan?',
        options: ['Values, Vision, Mission, Goals', 'Video games', 'Social media', 'Vacation plans'],
        optionsTl: ['Mga Halaga, Bisyon, Misyon, Layunin', 'Video games', 'Social media', 'Mga plano sa bakasyon'],
        correctAnswer: 0,
        explanation: 'Components include Values, Vision, Mission, and Goals for the farm.',
        explanationTl: 'Ang mga bahagi ay kinabibilangan ng mga Halaga, Bisyon, Misyon, at Layunin para sa bukid.',
        difficulty: 'easy'
      },
      {
        id: 24,
        question: 'What is a Complete Budget?',
        questionTl: 'Ano ang Kumpletong Budget?',
        options: ['Summarizes all expenses and returns for entire farm', 'Only tracks water usage', 'A list of employees', 'Farm decoration costs'],
        optionsTl: ['Nagbubuod ng lahat ng gastos at return para sa buong bukid', 'Nagt-track lamang ng paggamit ng tubig', 'Isang listahan ng mga empleyado', 'Gastos sa dekorasyon ng bukid'],
        correctAnswer: 0,
        explanation: 'A Complete Budget summarizes all expenses and returns for the entire farm.',
        explanationTl: 'Ang Kumpletong Budget ay nagbubuod ng lahat ng gastos at return para sa buong bukid.',
        difficulty: 'medium'
      },
      {
        id: 25,
        question: 'What is the last step in rice production flow before consumption?',
        questionTl: 'Ano ang huling hakbang sa daloy ng produksyon ng palay bago konsumo?',
        options: ['Cooked Rice', 'Harvesting', 'Drying', 'Milling'],
        optionsTl: ['Luto na Bigas', 'Pag-aani', 'Pagpapatuyo', 'Paggiling'],
        correctAnswer: 0,
        explanation: 'The final step in the rice production flow is Cooked Rice (consumption).',
        explanationTl: 'Ang huling hakbang sa daloy ng produksyon ng palay ay ang Luto na Bigas (konsumo).',
        difficulty: 'easy'
      },
      {
        id: 26,
        question: 'Which is a criterion for selecting suppliers?',
        questionTl: 'Alin ang pamantayan sa pagpili ng supplier?',
        options: ['Price', 'Favorite color', 'Birthday', 'Favorite food'],
        optionsTl: ['Presyo', 'Paboritong kulay', 'Kaarawan', 'Paboritong pagkain'],
        correctAnswer: 0,
        explanation: 'Price is one of the criteria for selecting suppliers.',
        explanationTl: 'Ang presyo ay isa sa mga pamantayan sa pagpili ng supplier.',
        difficulty: 'easy'
      },
      {
        id: 27,
        question: 'What is growth rate?',
        questionTl: 'Ano ang growth rate?',
        options: ['Rate of change in value over time', 'Speed of a car', 'Weight of produce', 'Number of workers'],
        optionsTl: ['Rate ng pagbabago sa halaga sa paglipas ng panahon', 'Bilis ng kotse', 'Timbang ng produkto', 'Bilang ng mga manggagawa'],
        correctAnswer: 0,
        explanation: 'Growth rate describes the rate of change in value over a given time period.',
        explanationTl: 'Ang growth rate ay naglalarawan ng rate ng pagbabago sa halaga sa isang tiyak na panahon.',
        difficulty: 'medium'
      },
      {
        id: 28,
        question: 'Which is NOT a production risk factor?',
        questionTl: 'Alin ang HINDI salik ng panganib sa produksyon?',
        options: ['Pest & Diseases', 'Typhoons', 'Equipment breakdown', 'Customer satisfaction'],
        optionsTl: ['Pest at Sakit', 'Bagyo', 'Pagkasira ng kagamitan', 'Kasiyahan ng customer'],
        correctAnswer: 3,
        explanation: 'Customer satisfaction is not a production risk factor. Production risks include pests, diseases, typhoons, and equipment breakdown.',
        explanationTl: 'Ang kasiyahan ng customer ay hindi salik ng panganib sa produksyon. Ang mga panganib sa produksyon ay kinabibilangan ng peste, sakit, bagyo, at pagkasira ng kagamitan.',
        difficulty: 'medium'
      },
      {
        id: 29,
        question: 'How can production risks be handled?',
        questionTl: 'Paano mahahawakan ang mga panganib sa produksyon?',
        options: ['Diversification and Insurance', 'Ignoring them', 'Hoping they go away', 'Blaming others'],
        optionsTl: ['Diversification at Insurance', 'Pagpapabaya sa mga ito', 'Pag-asang mawawala sila', 'Pagbibintang sa iba'],
        correctAnswer: 0,
        explanation: 'Production risks can be handled through diversification, insurance, excess capacity, and other strategies.',
        explanationTl: 'Ang mga panganib sa produksyon ay maaaring mahawakan sa pamamagitan ng diversification, insurance, labis na kapasidad, at iba pang estratehiya.',
        difficulty: 'medium'
      },
      {
        id: 30,
        question: 'What comes after Harvesting in the rice production flow?',
        questionTl: 'Ano ang sumusunod pagkatapos ng Pag-aani sa daloy ng produksyon ng palay?',
        options: ['Threshing', 'Planting', 'Fertilizing', 'Weeding'],
        optionsTl: ['Pagbabasbas', 'Pagtatanim', 'Paglalagay ng pataba', 'Pagdadamo'],
        correctAnswer: 0,
        explanation: 'After Harvesting comes Threshing in the rice production flow.',
        explanationTl: 'Pagkatapos ng Pag-aani ay ang Pagbabasbas sa daloy ng produksyon ng palay.',
        difficulty: 'easy'
      }
    ]
  },
  {
    id: 'finance',
    icon: 'Coins',
    title: 'Financial Management',
    titleTl: 'Pamamahala ng Pananalapi',
    description: 'Budget planning, financial services, loans, and investments',
    descriptionTl: 'Pagpaplano ng budget, mga serbisyong pinansyal, mga loan, at pamumuhunan',
    questions: [
      {
        id: 31,
        question: 'What is budgeting?',
        questionTl: 'Ano ang pagbubudget?',
        options: ['Planning income and expenses', 'Planting seeds', 'Harvesting crops', 'Transporting products'],
        optionsTl: ['Pagpaplano ng kita at gastos', 'Pagtatanim ng binhi', 'Pag-aani ng pananim', 'Pagtransporte ng mga produkto'],
        correctAnswer: 0,
        explanation: 'Budgeting is planning income and expenses.',
        explanationTl: 'Ang pagbubudget ay pagpaplano ng kita at gastos.',
        difficulty: 'easy'
      },
      {
        id: 32,
        question: 'What is cash flow?',
        questionTl: 'Ano ang cash flow?',
        options: ['Movement of money in and out of the business', 'A form of gambling', 'A political strategy', 'A transportation fee'],
        optionsTl: ['Paggalaw ng pera papasok at palabas ng negosyo', 'Uri ng sugal', 'Estratehiya sa pulitika', 'Bayad sa transportasyon'],
        correctAnswer: 0,
        explanation: 'Cash flow is the movement of money in and out of the business.',
        explanationTl: 'Ang cash flow ay ang paggalaw ng pera papasok at palabas ng negosyo.',
        difficulty: 'easy'
      },
      {
        id: 33,
        question: 'What does savings mean?',
        questionTl: 'Ano ang ibig sabihin ng savings?',
        options: ['Money set aside for future use', 'A form of gambling', 'A political strategy', 'A transportation fee'],
        optionsTl: ['Pera na itinabi para sa hinaharap', 'Uri ng sugal', 'Estratehiya sa pulitika', 'Bayad sa transportasyon'],
        correctAnswer: 0,
        explanation: 'Savings is money set aside for future use.',
        explanationTl: 'Ang savings ay pera na itinabi para sa hinaharap.',
        difficulty: 'easy'
      },
      {
        id: 34,
        question: 'What is the Time Value of Money?',
        questionTl: 'Ano ang Time Value of Money?',
        options: ['Money today is worth more than money in the future', 'Money loses all value over time', 'Time can be converted to money', 'Only future money matters'],
        optionsTl: ['Ang pera ngayon ay mas mahalaga kaysa sa pera sa hinaharap', 'Ang pera ay nawawalan ng halaga sa paglipas ng panahon', 'Ang oras ay maaaring gawing pera', 'Ang pera sa hinaharap lang ang mahalaga'],
        correctAnswer: 0,
        explanation: 'Time Value of Money means money today is worth more than money in the future due to earning potential.',
        explanationTl: 'Ang Time Value of Money ay nangangahulugang ang pera ngayon ay mas mahalaga kaysa sa pera sa hinaharap dahil sa potensyal na kita.',
        difficulty: 'medium'
      },
      {
        id: 35,
        question: 'What is the 50/30/20 rule?',
        questionTl: 'Ano ang tuntuning 50/30/20?',
        options: ['50% Needs, 30% Wants, 20% Financial Goals', '50% Food, 30% Rent, 20% Fun', '50% Save, 30% Spend, 20% Invest', '50% Farm, 30% Home, 20% Business'],
        optionsTl: ['50% Pangangailangan, 30% Kagustuhan, 20% Layuning Pinansyal', '50% Pagkain, 30% Renta, 20% Saya', '50% Ipon, 30% Gastos, 20% Invest', '50% Bukid, 30% Bahay, 20% Negosyo'],
        correctAnswer: 0,
        explanation: 'The 50/30/20 rule allocates 50% to Needs, 30% to Wants, and 20% to Financial Goals.',
        explanationTl: 'Ang tuntuning 50/30/20 ay naglalaan ng 50% sa Pangangailangan, 30% sa Kagustuhan, at 20% sa Layuning Pinansyal.',
        difficulty: 'easy'
      },
      {
        id: 36,
        question: 'What is a loan amortization?',
        questionTl: 'Ano ang loan amortization?',
        options: ['Payment schedule for repaying a loan', 'A type of farm tool', 'A marketing strategy', 'A harvest method'],
        optionsTl: ['Iskedyul ng pagbabayad para sa pagbabayad ng loan', 'Uri ng kasangkapan sa bukid', 'Estratehiya sa pagmemerkado', 'Paraan ng pag-aani'],
        correctAnswer: 0,
        explanation: 'Loan amortization is the payment schedule for repaying a loan.',
        explanationTl: 'Ang loan amortization ay ang iskedyul ng pagbabayad para sa pagbabayad ng loan.',
        difficulty: 'medium'
      },
      {
        id: 37,
        question: 'Which is a basic loan requirement?',
        questionTl: 'Alin ang pangunahing kinakailangan sa loan?',
        options: ['Business Plan', 'Video game collection', 'Social media followers', 'Favorite color'],
        optionsTl: ['Business Plan', 'Koleksyon ng video game', 'Mga tagasunod sa social media', 'Paboritong kulay'],
        correctAnswer: 0,
        explanation: 'A Business Plan is a basic loan requirement.',
        explanationTl: 'Ang Business Plan ay isang pangunahing kinakailangan sa loan.',
        difficulty: 'easy'
      },
      {
        id: 38,
        question: 'What is financial literacy?',
        questionTl: 'Ano ang financial literacy?',
        options: ['Ability to manage money effectively', 'Ability to count fast', 'Ability to farm', 'Ability to speak many languages'],
        optionsTl: ['Kakayahang mamahala ng pera nang epektibo', 'Kakayahang bumilang nang mabilis', 'Kakayahang magsaka', 'Kakayahang magsalita ng maraming wika'],
        correctAnswer: 0,
        explanation: 'Financial literacy is the ability to understand and apply financial skills effectively.',
        explanationTl: 'Ang financial literacy ay ang kakayahang maunawaan at ilapat nang epektibo ang mga kasanayan sa pananalapi.',
        difficulty: 'easy'
      },
      {
        id: 39,
        question: 'What is the Risk-Return Trade-Off?',
        questionTl: 'Ano ang Risk-Return Trade-Off?',
        options: ['Higher risk investments offer higher potential returns', 'Risk and return are the same thing', 'There is no relationship', 'Lower risk means higher return'],
        optionsTl: ['Ang mga pamumuhunang may mas mataas na panganib ay nag-aalok ng mas mataas na potensyal na return', 'Ang panganib at return ay parehong bagay', 'Walang relasyon', 'Ang mas mababang panganib ay nangangahulugang mas mataas na return'],
        correctAnswer: 0,
        explanation: 'The Risk-Return Trade-Off means higher risk investments offer higher potential returns.',
        explanationTl: 'Ang Risk-Return Trade-Off ay nangangahulugang ang mga pamumuhunang may mas mataas na panganib ay nag-aalok ng mas mataas na potensyal na return.',
        difficulty: 'medium'
      },
      {
        id: 40,
        question: 'Where can farmers save money to earn interest?',
        questionTl: 'Saan maaaring magtabi ang mga magsasaka ng pera para kumita ng interes?',
        options: ['Bank or cooperative', 'Under the mattress', 'In a hole', 'In the barn'],
        optionsTl: ['Bangko o kooperatiba', 'Sa ilalim ng kutson', 'Sa isang butas', 'Sa bodega'],
        correctAnswer: 0,
        explanation: 'Farmers can save money in a bank or cooperative to earn interest.',
        explanationTl: 'Ang mga magsasaka ay maaaring magtabi ng pera sa bangko o kooperatiba para kumita ng interes.',
        difficulty: 'easy'
      }
    ]
  },
  {
    id: 'marketing-sell',
    icon: 'Megaphone',
    title: 'Marketing & Selling',
    titleTl: 'Pagmemerkado at Pagbebenta',
    description: 'Price monitoring, marketing strategies, and recording transactions',
    descriptionTl: 'Pagmamanman ng presyo, mga estratehiya sa pagmemerkado, at pagrerekord ng mga transaksyon',
    questions: [
      {
        id: 41,
        question: 'What does promotion mean in marketing?',
        questionTl: 'Ano ang ibig sabihin ng promotion sa marketing?',
        options: ['Activities used to advertise products', 'A form of gambling', 'A political strategy', 'A transportation fee'],
        optionsTl: ['Mga aktibidad na ginagamit sa pag-aadvertise ng mga produkto', 'Uri ng sugal', 'Estratehiya sa pulitika', 'Bayad sa transportasyon'],
        correctAnswer: 0,
        explanation: 'Promotion refers to activities used to advertise products.',
        explanationTl: 'Ang promotion ay tumutukoy sa mga aktibidad na ginagamit sa pag-aadvertise ng mga produkto.',
        difficulty: 'easy'
      },
      {
        id: 42,
        question: 'What is Contract Farming?',
        questionTl: 'Ano ang Contract Farming?',
        options: ['A forward agreement for production and supply', 'Growing flowers', 'Selling animals', 'Building houses'],
        optionsTl: ['Isang forward agreement para sa produksyon at supply', 'Pagtatanim ng bulaklak', 'Pagbebenta ng hayop', 'Pagtatayo ng bahay'],
        correctAnswer: 0,
        explanation: 'Contract Farming is a forward agreement between a farmer and buyer for production and supply.',
        explanationTl: 'Ang Contract Farming ay isang forward agreement sa pagitan ng magsasaka at mamimili para sa produksyon at supply.',
        difficulty: 'medium'
      },
      {
        id: 43,
        question: 'What should you keep when recording transactions?',
        questionTl: 'Ano ang dapat panatilihin sa pagrerekord ng mga transaksyon?',
        options: ['Records and receipts', 'Old newspapers', 'Broken tools', 'Empty bottles'],
        optionsTl: ['Mga rekord at resibo', 'Lumang diyaryo', 'Sira na kasangkapan', 'Mga basong bote'],
        correctAnswer: 0,
        explanation: 'You should keep records and receipts when recording transactions.',
        explanationTl: 'Dapat mong panatilihin ang mga rekord at resibo sa pagrerekord ng mga transaksyon.',
        difficulty: 'easy'
      },
      {
        id: 44,
        question: 'What is Group Marketing (COOP)?',
        questionTl: 'Ano ang Group Marketing (COOP)?',
        options: ['Farmers organize into cooperatives', 'Individual selling', 'Online gaming', 'Social media posting'],
        optionsTl: ['Ang mga magsasaka ay nag-oorganisa sa mga kooperatiba', 'Indibidwal na pagbebenta', 'Online gaming', 'Social media posting'],
        correctAnswer: 0,
        explanation: 'Group Marketing (COOP) is when farmers organize into cooperatives to consolidate products and negotiate better prices.',
        explanationTl: 'Ang Group Marketing (COOP) ay kung ang mga magsasaka ay nag-oorganisa sa mga kooperatiba upang pagsamahin ang mga produkto at makipag-negosyo ng mas mahusay na presyo.',
        difficulty: 'easy'
      },
      {
        id: 45,
        question: 'How do you compute Net Income?',
        questionTl: 'Paano kalkulahin ang Net Income?',
        options: ['Sales - Cost of Goods Sold - Marketing Cost', 'Sales + Cost', 'Sales x 2', 'Sales only'],
        optionsTl: ['Benta - Cost of Goods Sold - Gastos sa Marketing', 'Benta + Gastos', 'Benta x 2', 'Benta lamang'],
        correctAnswer: 0,
        explanation: 'Net Income = Sales - Cost of Goods Sold - Marketing Cost.',
        explanationTl: 'Ang Net Income = Benta - Cost of Goods Sold - Gastos sa Marketing.',
        difficulty: 'medium'
      }
    ]
  },
  {
    id: 'safety',
    icon: 'Shield',
    title: 'Safety & Common Competencies',
    titleTl: 'Kaligtasan at mga Karaniwang Kasanayan',
    description: 'Farm safety, customer service, quality standards, and estimation',
    descriptionTl: 'Kaligtasan sa bukid, serbisyo sa customer, mga pamantayan sa kalidad, at pagtatantya',
    questions: [
      {
        id: 46,
        question: 'Why is it important to wear PPE during farm operations?',
        questionTl: 'Bakit mahalaga ang pagsusuot ng PPE sa operasyon sa bukid?',
        options: ['To prevent injuries and health risks', 'To look professional', 'To work faster', 'To follow fashion trends'],
        optionsTl: ['Upang maiwasan ang mga injury at panganib sa kalusugan', 'Para magmukhang propesyonal', 'Para mas mabilis magtrabaho', 'Para sumunod sa fashion trends'],
        correctAnswer: 0,
        explanation: 'PPE is worn to prevent injuries and health risks during farm operations.',
        explanationTl: 'Ang PPE ay isinusuot upang maiwasan ang mga injury at panganib sa kalusugan sa operasyon sa bukid.',
        difficulty: 'easy'
      },
      {
        id: 47,
        question: 'Before operating farm machinery, what should you do first?',
        questionTl: 'Bago operahan ang makinarya sa bukid, ano ang dapat gawin muna?',
        options: ['Read and follow the operator\'s manual', 'Check fuel only', 'Start the engine immediately', 'Ask a friend for advice'],
        optionsTl: ['Basahin at sundin ang operator\'s manual', 'Suriin lang ang gasolina', 'Simulan agad ang makina', 'Magtanong sa kaibigan'],
        correctAnswer: 0,
        explanation: 'You should read and follow the operator\'s manual before operating farm machinery.',
        explanationTl: 'Dapat mong basahin at sundin ang operator\'s manual bago operahan ang makinarya sa bukid.',
        difficulty: 'easy'
      },
      {
        id: 48,
        question: 'What is the safest way to handle pesticides?',
        questionTl: 'Ano ang pinakaligtas na paraan sa paghawak ng pestisidyo?',
        options: ['Wear gloves, mask, and protective clothing', 'Mix them with bare hands', 'Apply without reading labels', 'Store in food containers'],
        optionsTl: ['Magsuot ng gloves, mask, at protective clothing', 'Paghaluin gamit ang mga kamay', 'Ilapat nang hindi binabasa ang mga label', 'Imbakin sa mga lalagyan ng pagkain'],
        correctAnswer: 0,
        explanation: 'The safest way is to wear gloves, mask, and protective clothing when handling pesticides.',
        explanationTl: 'Ang pinakaligtas na paraan ay ang pagsusuot ng gloves, mask, at protective clothing sa paghawak ng pestisidyo.',
        difficulty: 'easy'
      },
      {
        id: 49,
        question: 'What should you do if a chemical spills on your skin?',
        questionTl: 'Ano ang dapat gawin kung may kemikal na tumapon sa balat?',
        options: ['Wash immediately with plenty of water', 'Cover it with clothing', 'Ignore it', 'Wait until work is finished'],
        optionsTl: ['Hugasan agad nang maraming tubig', 'Takpan ng damit', 'Balewalain', 'Maghintay hanggang matapos ang trabaho'],
        correctAnswer: 0,
        explanation: 'Wash the affected area immediately with plenty of water.',
        explanationTl: 'Hugasan agad ang apektadong lugar nang maraming tubig.',
        difficulty: 'easy'
      },
      {
        id: 50,
        question: 'Why is training important in farm safety?',
        questionTl: 'Bakit mahalaga ang pagsasanay sa kaligtasan sa bukid?',
        options: ['To ensure workers know how to prevent and respond to hazards', 'To impress visitors', 'To reduce boredom', 'To increase productivity only'],
        optionsTl: ['Upang tiyakin na alam ng mga manggagawa kung paano maiwasan at tumugon sa mga panganib', 'Upang maakit ang mga bisita', 'Upang mabawasan ang pagkainip', 'Upang taasan lamang ang produktibidad'],
        correctAnswer: 0,
        explanation: 'Training ensures workers know how to prevent and respond to hazards.',
        explanationTl: 'Ang pagsasanay ay tinitiyak na alam ng mga manggagawa kung paano maiwasan at tumugon sa mga panganib.',
        difficulty: 'easy'
      },
      {
        id: 51,
        question: 'Which is a basic math skill for agroentrepreneurs?',
        questionTl: 'Alin ang pangunahing kasanayan sa matematika para sa mga agroentrepreneur?',
        options: ['Calculating percentages', 'Playing games', 'Watching TV', 'Sleeping'],
        optionsTl: ['Pagkalkula ng porsyento', 'Paglalaro ng mga laro', 'Panonood ng TV', 'Pagtulog'],
        correctAnswer: 0,
        explanation: 'Calculating percentages is a basic math skill for agroentrepreneurs.',
        explanationTl: 'Ang pagkalkula ng porsyento ay isang pangunahing kasanayan sa matematika para sa mga agroentrepreneur.',
        difficulty: 'easy'
      },
      {
        id: 52,
        question: 'What is the correct way to lift heavy loads?',
        questionTl: 'Ano ang tamang paraan sa pagbuhat ng mabibigat na kargamento?',
        options: ['Use your legs and keep your back straight', 'Bend your back and pull', 'Lift quickly without thinking', 'Ask children to help'],
        optionsTl: ['Gamitin ang mga binti at panatilihing tuwid ang likod', 'Yumuko at hilahin', 'Buhat nang mabilis nang walang pag-iisip', 'Humingi ng tulong sa mga bata'],
        correctAnswer: 0,
        explanation: 'Use your legs and keep your back straight when lifting heavy loads.',
        explanationTl: 'Gamitin ang iyong mga binti at panatilihing tuwid ang iyong likod sa pagbuhat ng mabibigat na kargamento.',
        difficulty: 'easy'
      },
      {
        id: 53,
        question: 'What does quality customer service involve?',
        questionTl: 'Ano ang kinabibilangan ng de-kalidad na serbisyo sa customer?',
        options: ['Understanding customer needs', 'Ignoring complaints', 'Being rude', 'Selling bad products'],
        optionsTl: ['Pag-unawa sa mga pangangailangan ng customer', 'Pagpapabaya sa mga reklamo', 'Pagiging bastos', 'Pagbebenta ng masamang produkto'],
        correctAnswer: 0,
        explanation: 'Quality customer service involves understanding customer needs and providing excellent support.',
        explanationTl: 'Ang de-kalidad na serbisyo sa customer ay nagsasangkot ng pag-unawa sa mga pangangailangan ng customer at pagbibigay ng mahusay na suporta.',
        difficulty: 'easy'
      },
      {
        id: 54,
        question: 'Where should farm chemicals be stored?',
        questionTl: 'Saan dapat imbakin ang mga kemikal sa bukid?',
        options: ['In locked, labeled cabinets away from food', 'Mixed with animal feed', 'Under the bed', 'In open containers near water'],
        optionsTl: ['Sa naka-lock, may label na cabinet na malayo sa pagkain', 'Nahalo sa pagkain ng hayop', 'Sa ilalim ng kama', 'Sa bukas na lalagyan malapit sa tubig'],
        correctAnswer: 0,
        explanation: 'Farm chemicals should be stored in locked, labeled cabinets away from food.',
        explanationTl: 'Ang mga kemikal sa bukid ay dapat imbakin sa naka-lock, may label na cabinet na malayo sa pagkain.',
        difficulty: 'easy'
      },
      {
        id: 55,
        question: 'Which is a fire safety measure?',
        questionTl: 'Alin ang hakbang sa kaligtasan mula sa sunog?',
        options: ['Keep fire extinguishers accessible', 'Store fuel near open flames', 'Smoke while refueling', 'Ignore fire drills'],
        optionsTl: ['Panatilihing accessible ang mga fire extinguisher', 'Mag-imbak ng gasolina malapit sa bukas na apoy', 'Manigarilyo habang nagre-refuel', 'Balewalain ang mga fire drill'],
        correctAnswer: 0,
        explanation: 'Keeping fire extinguishers accessible is a fire safety measure.',
        explanationTl: 'Ang pagpapanatili ng mga fire extinguisher na accessible ay isang hakbang sa kaligtasan mula sa sunog.',
        difficulty: 'easy'
      }
    ]
  }
];
