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
  },

  {
    id: 'crop',
    icon: 'Leaf',
    title: 'Crop Production & Soil Management',
    titleTl: 'Produksyon ng Pananim at Pamamahala ng Lupa',
    description: 'Soil preparation, seed selection, planting, pest management, and harvesting',
    descriptionTl: 'Paghahanda ng lupa, pagpili ng binhi, pagtatanim, pamamahala ng peste, at pag-aani',
    questions: [
      // ── EASY ──
      {
        id: 56,
        question: 'What is the primary purpose of soil tillage?',
        questionTl: 'Ano ang pangunahing layunin ng pagsasaka ng lupa?',
        options: ['To loosen and aerate the soil for planting', 'To compact the soil', 'To remove all nutrients', 'To dry out the field'],
        optionsTl: ['Upang maluwag at mai-aerate ang lupa para sa pagtatanim', 'Upang i-compact ang lupa', 'Upang alisin ang lahat ng nutrients', 'Upang patuyuin ang bukid'],
        correctAnswer: 0,
        explanation: 'Soil tillage loosens and aerates the soil, making it suitable for planting.',
        explanationTl: 'Ang pagsasaka ng lupa ay nagpapaluwag at nag-a-aerate ng lupa, na ginagawa itong angkop para sa pagtatanim.',
        difficulty: 'easy'
      },
      {
        id: 57,
        question: 'Which type of soil is best for most crops?',
        questionTl: 'Anong uri ng lupa ang pinakamainam para sa karamihan ng pananim?',
        options: ['Loam soil', 'Pure sand', 'Pure clay', 'Gravel'],
        optionsTl: ['Loam na lupa', 'Purong buhangin', 'Purong clay', 'Graba'],
        correctAnswer: 0,
        explanation: 'Loam soil is best for most crops because it has a balanced mix of sand, silt, and clay.',
        explanationTl: 'Ang loam na lupa ay pinakamainam para sa karamihan ng pananim dahil mayroon itong balanseng halo ng buhangin, silt, at clay.',
        difficulty: 'easy'
      },
      {
        id: 58,
        question: 'What is the purpose of crop rotation?',
        questionTl: 'Ano ang layunin ng crop rotation?',
        options: ['To maintain soil health and reduce pests', 'To plant the same crop every year', 'To increase soil erosion', 'To remove water from soil'],
        optionsTl: ['Upang mapanatili ang kalusugan ng lupa at mabawasan ang mga peste', 'Upang magtanim ng parehong pananim bawat taon', 'Upang dagdagan ang soil erosion', 'Upang alisin ang tubig mula sa lupa'],
        correctAnswer: 0,
        explanation: 'Crop rotation maintains soil health, reduces pests and diseases, and improves yield.',
        explanationTl: 'Ang crop rotation ay nagpapanatili ng kalusugan ng lupa, nagpapababa ng mga peste at sakit, at nagpapabuti ng ani.',
        difficulty: 'easy'
      },
      {
        id: 59,
        question: 'What does pH level in soil measure?',
        questionTl: 'Ano ang sinusukat ng pH level sa lupa?',
        options: ['Acidity or alkalinity of the soil', 'Amount of water in soil', 'Number of insects in soil', 'Temperature of soil'],
        optionsTl: ['Acidity o alkalinity ng lupa', 'Dami ng tubig sa lupa', 'Bilang ng mga insekto sa lupa', 'Temperatura ng lupa'],
        correctAnswer: 0,
        explanation: 'Soil pH measures the acidity or alkalinity, which affects nutrient availability for plants.',
        explanationTl: 'Ang soil pH ay sumusukat ng acidity o alkalinity, na nakakaapekto sa availability ng nutrients para sa mga halaman.',
        difficulty: 'easy'
      },
      {
        id: 60,
        question: 'What is composting?',
        questionTl: 'Ano ang composting?',
        options: ['Breaking down organic matter into fertilizer', 'Burning farm waste', 'Spraying chemicals on soil', 'Removing topsoil'],
        optionsTl: ['Pagbasag ng organic matter para maging pataba', 'Pagsusunog ng basura sa bukid', 'Pagspray ng kemikal sa lupa', 'Pag-alis ng topsoil'],
        correctAnswer: 0,
        explanation: 'Composting is the process of breaking down organic matter into natural fertilizer.',
        explanationTl: 'Ang composting ay ang proseso ng pagbasag ng organic matter para maging natural na pataba.',
        difficulty: 'easy'
      },
      {
        id: 61,
        question: 'What is the correct way to select quality seeds?',
        questionTl: 'Ano ang tamang paraan sa pagpili ng de-kalidad na binhi?',
        options: ['Choose seeds that are uniform, clean, and disease-free', 'Pick the cheapest seeds available', 'Use any old seeds from storage', 'Choose seeds by color only'],
        optionsTl: ['Pumili ng mga binhing pantay, malinis, at walang sakit', 'Pumili ng pinakamura', 'Gumamit ng lumang binhi mula sa imbakan', 'Pumili ng binhi batay sa kulay lamang'],
        correctAnswer: 0,
        explanation: 'Quality seeds should be uniform, clean, and free from disease to ensure good germination.',
        explanationTl: 'Ang de-kalidad na binhi ay dapat pantay, malinis, at walang sakit upang matiyak ang magandang pagsisibol.',
        difficulty: 'easy'
      },
      {
        id: 62,
        question: 'What is mulching used for in farming?',
        questionTl: 'Para saan ginagamit ang mulching sa pagsasaka?',
        options: ['To retain soil moisture and suppress weeds', 'To increase soil temperature drastically', 'To remove nutrients from soil', 'To compact the soil'],
        optionsTl: ['Upang mapanatili ang moisture ng lupa at sugpuin ang mga damo', 'Upang dramatikong itaas ang temperatura ng lupa', 'Upang alisin ang nutrients mula sa lupa', 'Upang i-compact ang lupa'],
        correctAnswer: 0,
        explanation: 'Mulching retains soil moisture, suppresses weeds, and regulates soil temperature.',
        explanationTl: 'Ang mulching ay nagpapanatili ng moisture ng lupa, sumisugpo ng mga damo, at nag-a-regulate ng temperatura ng lupa.',
        difficulty: 'easy'
      },
      {
        id: 63,
        question: 'What is the most basic pest control method?',
        questionTl: 'Ano ang pinaka-pangunahing paraan ng pest control?',
        options: ['Manually removing pests by hand', 'Applying maximum pesticide', 'Burning all crops', 'Flooding the field'],
        optionsTl: ['Mano-manong pag-alis ng mga peste', 'Pag-apply ng maximum na pestisidyo', 'Pagsusunog ng lahat ng pananim', 'Pagbabaha ng bukid'],
        correctAnswer: 0,
        explanation: 'Manual removal is the most basic and eco-friendly pest control method.',
        explanationTl: 'Ang mano-manong pag-alis ay ang pinaka-pangunahing at eco-friendly na paraan ng pest control.',
        difficulty: 'easy'
      },
      // ── MEDIUM ──
      {
        id: 64,
        question: 'What is Integrated Pest Management (IPM)?',
        questionTl: 'Ano ang Integrated Pest Management (IPM)?',
        options: ['Using multiple pest control strategies in combination', 'Using only chemical pesticides', 'Ignoring pests until harvest', 'Flooding fields to kill all pests'],
        optionsTl: ['Paggamit ng maraming estratehiya ng pest control nang sabay', 'Paggamit lamang ng kemikal na pestisidyo', 'Pagpapabaya sa mga peste hanggang pag-aani', 'Pagbabaha ng mga bukid para patayin ang lahat ng peste'],
        correctAnswer: 0,
        explanation: 'IPM uses a combination of biological, cultural, mechanical, and chemical methods to control pests sustainably.',
        explanationTl: 'Ang IPM ay gumagamit ng kombinasyon ng biological, cultural, mechanical, at chemical na pamamaraan para kontrolin ang mga peste nang sustainable.',
        difficulty: 'medium'
      },
      {
        id: 65,
        question: 'What is nitrogen fixation important for in agriculture?',
        questionTl: 'Bakit mahalaga ang nitrogen fixation sa agrikultura?',
        options: ['It converts atmospheric nitrogen into a form plants can use', 'It removes nitrogen from soil', 'It kills harmful bacteria', 'It dries the soil faster'],
        optionsTl: ['Ini-convert nito ang atmospheric nitrogen sa anyong magagamit ng halaman', 'Inaalis nito ang nitrogen mula sa lupa', 'Pinapatay nito ang mga nakakapinsalang bacteria', 'Nagpapatuyo nito ng lupa nang mas mabilis'],
        correctAnswer: 0,
        explanation: 'Nitrogen fixation converts atmospheric nitrogen into ammonia or nitrates that plants can absorb for growth.',
        explanationTl: 'Ang nitrogen fixation ay nag-co-convert ng atmospheric nitrogen sa ammonia o nitrates na maaaring masipsip ng mga halaman para sa paglaki.',
        difficulty: 'medium'
      },
      {
        id: 66,
        question: 'What is the purpose of irrigation in farming?',
        questionTl: 'Ano ang layunin ng irrigation sa pagsasaka?',
        options: ['To supply water to crops artificially', 'To drain excess water', 'To remove soil nutrients', 'To compact the soil'],
        optionsTl: ['Upang mag-supply ng tubig sa mga pananim nang artipisyal', 'Upang i-drain ang labis na tubig', 'Upang alisin ang nutrients ng lupa', 'Upang i-compact ang lupa'],
        correctAnswer: 0,
        explanation: 'Irrigation artificially supplies water to crops when natural rainfall is insufficient.',
        explanationTl: 'Ang irrigation ay artipisyal na nagbibigay ng tubig sa mga pananim kung ang natural na ulan ay hindi sapat.',
        difficulty: 'medium'
      },
      {
        id: 67,
        question: 'What does post-harvest handling primarily aim to do?',
        questionTl: 'Ano ang pangunahing layunin ng post-harvest handling?',
        options: ['Reduce losses and maintain product quality', 'Increase crop weight', 'Speed up decomposition', 'Remove all packaging'],
        optionsTl: ['Bawasan ang mga pagkalugi at panatilihin ang kalidad ng produkto', 'Dagdagan ang timbang ng pananim', 'Pabilisin ang decomposition', 'Alisin ang lahat ng packaging'],
        correctAnswer: 0,
        explanation: 'Post-harvest handling aims to reduce losses and maintain the quality of agricultural products.',
        explanationTl: 'Ang post-harvest handling ay naglalayong bawasan ang mga pagkalugi at panatilihin ang kalidad ng mga produktong agrikultural.',
        difficulty: 'medium'
      },
      {
        id: 68,
        question: 'What is the difference between organic and inorganic fertilizer?',
        questionTl: 'Ano ang pagkakaiba ng organic at inorganic na pataba?',
        options: ['Organic comes from natural sources; inorganic is synthetically made', 'Organic is always more expensive', 'Inorganic is always better', 'They are the same thing'],
        optionsTl: ['Ang organic ay mula sa natural na pinagkukunan; ang inorganic ay synthetically na gawa', 'Ang organic ay palaging mas mahal', 'Ang inorganic ay palaging mas mahusay', 'Magkapareho sila'],
        correctAnswer: 0,
        explanation: 'Organic fertilizers come from natural sources like compost and manure; inorganic fertilizers are synthetically produced.',
        explanationTl: 'Ang organic na pataba ay nagmumula sa natural na pinagkukunan tulad ng compost at dumi ng hayop; ang inorganic ay synthetically na ginawa.',
        difficulty: 'medium'
      },
      {
        id: 69,
        question: 'What is soil erosion and how can it be prevented?',
        questionTl: 'Ano ang soil erosion at paano ito maiwasan?',
        options: ['Loss of topsoil due to wind/water; prevented by contour farming and cover crops', 'Gain of topsoil; prevented by flooding', 'Loss of water; prevented by removing plants', 'Increase in soil nutrients; no prevention needed'],
        optionsTl: ['Pagkawala ng topsoil dahil sa hangin/tubig; naiwasan sa pamamagitan ng contour farming at cover crops', 'Pagdami ng topsoil; naiwasan sa pamamagitan ng pagbabaha', 'Pagkawala ng tubig; naiwasan sa pamamagitan ng pag-alis ng mga halaman', 'Pagtaas ng nutrients ng lupa; walang kailangang pag-iwas'],
        correctAnswer: 0,
        explanation: 'Soil erosion is the loss of topsoil due to wind or water. It can be prevented through contour farming, cover crops, and terracing.',
        explanationTl: 'Ang soil erosion ay ang pagkawala ng topsoil dahil sa hangin o tubig. Maaari itong maiwasan sa pamamagitan ng contour farming, cover crops, at terracing.',
        difficulty: 'medium'
      },
      // ── HARD ──
      {
        id: 70,
        question: 'What is the concept of Sustainable Agriculture?',
        questionTl: 'Ano ang konsepto ng Sustainable Agriculture?',
        options: ['Farming that meets current needs without compromising future generations', 'Using maximum chemicals for highest yield', 'Farming only for profit regardless of environment', 'Cutting all trees to expand farmland'],
        optionsTl: ['Pagsasaka na nakakatugon sa kasalukuyang pangangailangan nang hindi nakokompromiso ang hinaharap na henerasyon', 'Paggamit ng maximum na kemikal para sa pinakamataas na ani', 'Pagsasaka para sa tubo lamang anuman ang epekto sa kalikasan', 'Pagputol ng lahat ng puno para palawakin ang bukid'],
        correctAnswer: 0,
        explanation: 'Sustainable agriculture meets current food needs while preserving resources for future generations.',
        explanationTl: 'Ang sustainable agriculture ay nakakatugon sa kasalukuyang pangangailangan sa pagkain habang pinopreserba ang mga resources para sa hinaharap na henerasyon.',
        difficulty: 'hard'
      },
      {
        id: 71,
        question: 'What is vermicomposting?',
        questionTl: 'Ano ang vermicomposting?',
        options: ['Using earthworms to decompose organic waste into rich fertilizer', 'A type of chemical fertilizer', 'A method of flood irrigation', 'A pest control technique'],
        optionsTl: ['Paggamit ng mga earthworm para i-decompose ang organic waste para maging mayamang pataba', 'Uri ng kemikal na pataba', 'Paraan ng flood irrigation', 'Teknik ng pest control'],
        correctAnswer: 0,
        explanation: 'Vermicomposting uses earthworms to break down organic waste into nutrient-rich fertilizer called vermicast.',
        explanationTl: 'Ang vermicomposting ay gumagamit ng mga earthworm para sirain ang organic waste para maging nutrient-rich na pataba na tinatawag na vermicast.',
        difficulty: 'hard'
      },
      {
        id: 72,
        question: 'What does Good Agricultural Practices (GAP) ensure?',
        questionTl: 'Ano ang tinitiyak ng Good Agricultural Practices (GAP)?',
        options: ['Safe, sustainable, and quality food production', 'Maximum chemical use', 'Fastest harvesting possible', 'Least labor use'],
        optionsTl: ['Ligtas, sustainable, at de-kalidad na produksyon ng pagkain', 'Maximum na paggamit ng kemikal', 'Pinakamabilis na pag-aani', 'Pinakakaunting paggamit ng lakas-paggawa'],
        correctAnswer: 0,
        explanation: 'GAP ensures that agricultural products are produced safely, sustainably, and with consistent quality.',
        explanationTl: 'Ang GAP ay tinitiyak na ang mga produktong agrikultural ay ginagawa nang ligtas, sustainable, at may consistent na kalidad.',
        difficulty: 'hard'
      },
      {
        id: 73,
        question: 'What is the role of mycorrhizal fungi in plant growth?',
        questionTl: 'Ano ang papel ng mycorrhizal fungi sa paglaki ng halaman?',
        options: ['They help plants absorb water and nutrients more efficiently', 'They cause plant diseases', 'They kill beneficial insects', 'They increase soil acidity drastically'],
        optionsTl: ['Tinutulungan nila ang mga halaman na mas mahusay na masipsip ang tubig at nutrients', 'Nagdudulot sila ng sakit sa halaman', 'Pinapatay nila ang mga kapaki-pakinabang na insekto', 'Dramatikong pinapataas nila ang acidity ng lupa'],
        correctAnswer: 0,
        explanation: 'Mycorrhizal fungi form symbiotic relationships with plant roots, helping them absorb water and nutrients more efficiently.',
        explanationTl: 'Ang mycorrhizal fungi ay bumubuo ng symbiotic na relasyon sa mga ugat ng halaman, na tumutulong sa kanila na mas mahusay na masipsip ang tubig at nutrients.',
        difficulty: 'hard'
      },
      {
        id: 74,
        question: 'What is the purpose of a crop calendar in farm management?',
        questionTl: 'Ano ang layunin ng crop calendar sa pamamahala ng bukid?',
        options: ['To plan planting and harvesting schedules based on seasons', 'To track employee birthdays', 'To record daily weather only', 'To calculate loan payments'],
        optionsTl: ['Upang magplano ng mga iskedyul ng pagtatanim at pag-aani batay sa mga panahon', 'Upang subaybayan ang mga kaarawan ng empleyado', 'Upang i-record lamang ang pang-araw-araw na panahon', 'Upang kalkulahin ang mga bayad sa utang'],
        correctAnswer: 0,
        explanation: 'A crop calendar helps farmers plan planting, maintenance, and harvesting activities according to seasonal conditions.',
        explanationTl: 'Ang crop calendar ay tumutulong sa mga magsasaka na magplano ng mga aktibidad sa pagtatanim, pagpapanatili, at pag-aani ayon sa mga kondisyon ng panahon.',
        difficulty: 'hard'
      },
      {
        id: 75,
        question: 'What is biological pest control?',
        questionTl: 'Ano ang biological pest control?',
        options: ['Using natural predators or organisms to control pest populations', 'Spraying maximum chemicals', 'Burning infested crops', 'Using plastic covers on all plants'],
        optionsTl: ['Paggamit ng natural na predators o organisms para kontrolin ang populasyon ng peste', 'Pag-spray ng maximum na kemikal', 'Pagsusunog ng mga naimpektahang pananim', 'Paggamit ng plastic na takip sa lahat ng halaman'],
        correctAnswer: 0,
        explanation: 'Biological pest control uses natural enemies like predatory insects, parasites, or pathogens to manage pest populations.',
        explanationTl: 'Ang biological pest control ay gumagamit ng natural na kaaway tulad ng predatory insects, parasites, o pathogens para pamahalaan ang populasyon ng peste.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'business',
    icon: 'Briefcase',
    title: 'Business Planning & Operations',
    titleTl: 'Pagpaplano at Operasyon ng Negosyo',
    description: 'Business plan preparation, costing, pricing, and farm enterprise management',
    descriptionTl: 'Paghahanda ng business plan, costings, pricing, at pamamahala ng farm enterprise',
    questions: [
      // ── EASY ──
      {
        id: 76,
        question: 'What is a business plan?',
        questionTl: 'Ano ang business plan?',
        options: ['A written document describing goals and strategies of a business', 'A list of farm tools', 'A record of daily expenses only', 'A government form'],
        optionsTl: ['Isang nakasulat na dokumento na naglalarawan ng mga layunin at estratehiya ng negosyo', 'Isang listahan ng mga kasangkapan sa bukid', 'Isang talaan ng pang-araw-araw na gastos lamang', 'Isang form ng gobyerno'],
        correctAnswer: 0,
        explanation: 'A business plan is a written document describing a business\'s goals, strategies, and financial projections.',
        explanationTl: 'Ang business plan ay isang nakasulat na dokumento na naglalarawan ng mga layunin, estratehiya, at proyeksyon ng pananalapi ng negosyo.',
        difficulty: 'easy'
      },
      {
        id: 77,
        question: 'What is a direct cost in farm production?',
        questionTl: 'Ano ang direct cost sa produksyon sa bukid?',
        options: ['Cost directly tied to producing a product like seeds and labor', 'Cost of advertising only', 'Cost of farm rent', 'Cost of depreciation'],
        optionsTl: ['Gastos na direktang nauugnay sa paglikha ng produkto tulad ng binhi at lakas-paggawa', 'Gastos sa advertising lamang', 'Gastos sa upa ng bukid', 'Gastos sa depreciation'],
        correctAnswer: 0,
        explanation: 'Direct costs are those directly tied to production, such as seeds, fertilizer, and labor.',
        explanationTl: 'Ang direct costs ay ang mga gastos na direktang nauugnay sa produksyon, tulad ng binhi, pataba, at lakas-paggawa.',
        difficulty: 'easy'
      },
      {
        id: 78,
        question: 'What is an indirect cost?',
        questionTl: 'Ano ang indirect cost?',
        options: ['Cost not directly tied to production like rent and depreciation', 'Cost of seeds', 'Cost of fertilizer', 'Cost of labor'],
        optionsTl: ['Gastos na hindi direktang nauugnay sa produksyon tulad ng upa at depreciation', 'Gastos ng binhi', 'Gastos ng pataba', 'Gastos ng lakas-paggawa'],
        correctAnswer: 0,
        explanation: 'Indirect costs are not directly tied to production and include rent, utilities, and depreciation.',
        explanationTl: 'Ang indirect costs ay hindi direktang nauugnay sa produksyon at kinabibilangan ng upa, utilities, at depreciation.',
        difficulty: 'easy'
      },
      {
        id: 79,
        question: 'What does gross profit mean?',
        questionTl: 'Ano ang ibig sabihin ng gross profit?',
        options: ['Total revenue minus cost of goods sold', 'Total revenue minus all expenses', 'Total sales only', 'Total expenses only'],
        optionsTl: ['Kabuuang kita na bawas ang halaga ng mga naibentang produkto', 'Kabuuang kita na bawas ang lahat ng gastos', 'Kabuuang benta lamang', 'Kabuuang gastos lamang'],
        correctAnswer: 0,
        explanation: 'Gross profit is total revenue minus the cost of goods sold (direct production costs).',
        explanationTl: 'Ang gross profit ay ang kabuuang kita na bawas ang halaga ng mga naibentang produkto (direct na gastos sa produksyon).',
        difficulty: 'easy'
      },
      {
        id: 80,
        question: 'What is the formula for Net Income?',
        questionTl: 'Ano ang formula ng Net Income?',
        options: ['Gross Income minus Total Costs', 'Revenue plus Expenses', 'Sales minus Labor only', 'Revenue divided by Units'],
        optionsTl: ['Gross Income na bawas ang Kabuuang Gastos', 'Revenue kasama ang Expenses', 'Benta na bawas ang Lakas-paggawa lamang', 'Revenue na hinati sa Mga Yunit'],
        correctAnswer: 0,
        explanation: 'Net Income = Gross Income − Total Costs (all fixed and variable costs).',
        explanationTl: 'Net Income = Gross Income − Kabuuang Gastos (lahat ng fixed at variable na gastos).',
        difficulty: 'easy'
      },
      // ── MEDIUM ──
      {
        id: 81,
        question: 'What is break-even analysis used for?',
        questionTl: 'Para saan ginagamit ang break-even analysis?',
        options: ['To find the point where total revenue equals total costs', 'To calculate total profits only', 'To determine tax obligations', 'To measure employee performance'],
        optionsTl: ['Upang mahanap ang punto kung saan ang kabuuang kita ay katumbas ng kabuuang gastos', 'Upang kalkulahin ang kabuuang kita lamang', 'Upang matukoy ang mga obligasyon sa buwis', 'Upang sukatin ang pagganap ng empleyado'],
        correctAnswer: 0,
        explanation: 'Break-even analysis identifies the point where total revenue equals total costs — no profit or loss.',
        explanationTl: 'Ang break-even analysis ay nagtatukoy ng punto kung saan ang kabuuang kita ay katumbas ng kabuuang gastos — walang tubo o pagkalugi.',
        difficulty: 'medium'
      },
      {
        id: 82,
        question: 'What is a cash flow statement?',
        questionTl: 'Ano ang cash flow statement?',
        options: ['A record of cash coming in and going out of a business', 'A list of farm assets', 'A government tax document', 'A marketing plan'],
        optionsTl: ['Isang talaan ng cash na pumapasok at lumalabas sa negosyo', 'Isang listahan ng mga asset ng bukid', 'Isang dokumento ng buwis ng gobyerno', 'Isang marketing plan'],
        correctAnswer: 0,
        explanation: 'A cash flow statement records all cash inflows and outflows in a business over a period.',
        explanationTl: 'Ang cash flow statement ay nagtatala ng lahat ng cash inflows at outflows sa isang negosyo sa isang panahon.',
        difficulty: 'medium'
      },
      {
        id: 83,
        question: 'What is depreciation in farm accounting?',
        questionTl: 'Ano ang depreciation sa accounting ng bukid?',
        options: ['Decrease in value of assets over time', 'Increase in crop yield', 'Rise in land value', 'Growth in revenue'],
        optionsTl: ['Pagbaba ng halaga ng mga asset sa paglipas ng panahon', 'Pagtaas ng ani', 'Pagtaas ng halaga ng lupa', 'Paglago ng kita'],
        correctAnswer: 0,
        explanation: 'Depreciation is the decrease in value of farm assets like equipment and machinery over time.',
        explanationTl: 'Ang depreciation ay ang pagbaba ng halaga ng mga asset ng bukid tulad ng kagamitan at makinarya sa paglipas ng panahon.',
        difficulty: 'medium'
      },
      {
        id: 84,
        question: 'What is the difference between fixed and variable costs?',
        questionTl: 'Ano ang pagkakaiba ng fixed at variable costs?',
        options: ['Fixed costs stay constant; variable costs change with production level', 'Fixed costs always increase; variable costs decrease', 'They are the same thing', 'Variable costs are always lower'],
        optionsTl: ['Ang fixed costs ay nananatiling pare-pareho; ang variable costs ay nagbabago sa antas ng produksyon', 'Ang fixed costs ay palaging tumataas; ang variable costs ay bumababa', 'Magkapareho sila', 'Ang variable costs ay palaging mas mababa'],
        correctAnswer: 0,
        explanation: 'Fixed costs (like rent) remain constant regardless of output; variable costs (like seeds) change with production level.',
        explanationTl: 'Ang fixed costs (tulad ng upa) ay nananatiling pare-pareho anuman ang output; ang variable costs (tulad ng binhi) ay nagbabago sa antas ng produksyon.',
        difficulty: 'medium'
      },
      {
        id: 85,
        question: 'What is profit margin?',
        questionTl: 'Ano ang profit margin?',
        options: ['Net profit divided by total revenue, expressed as a percentage', 'Total sales minus expenses', 'Total units sold', 'Cost of production only'],
        optionsTl: ['Net profit na hinati sa kabuuang kita, ipinahayag bilang porsyento', 'Kabuuang benta na bawas ang gastos', 'Kabuuang naibentang yunit', 'Gastos sa produksyon lamang'],
        correctAnswer: 0,
        explanation: 'Profit margin = (Net Profit ÷ Total Revenue) × 100. It shows what percentage of revenue is profit.',
        explanationTl: 'Profit margin = (Net Profit ÷ Kabuuang Kita) × 100. Ipinapakita nito kung anong porsyento ng kita ang tubo.',
        difficulty: 'medium'
      },
      // ── HARD ──
      {
        id: 86,
        question: 'What is a feasibility study in agroentrepreneurship?',
        questionTl: 'Ano ang feasibility study sa agroentrepreneurship?',
        options: ['An analysis to determine if a farm business idea is viable and profitable', 'A list of farm equipment', 'A daily work log', 'A government permit'],
        optionsTl: ['Isang pagsusuri upang matukoy kung ang ideya ng farm business ay posible at kapaki-pakinabang', 'Isang listahan ng kagamitan sa bukid', 'Isang pang-araw-araw na talaan ng trabaho', 'Isang permit ng gobyerno'],
        correctAnswer: 0,
        explanation: 'A feasibility study analyzes the viability, profitability, and risks of a proposed farm business.',
        explanationTl: 'Ang feasibility study ay nag-aanalisa ng viability, profitability, at mga panganib ng isang proposed na farm business.',
        difficulty: 'hard'
      },
      {
        id: 87,
        question: 'What is Return on Investment (ROI) in farm business?',
        questionTl: 'Ano ang Return on Investment (ROI) sa farm business?',
        options: ['Net profit divided by total investment, expressed as a percentage', 'Total sales only', 'Total expenses only', 'Number of crops harvested'],
        optionsTl: ['Net profit na hinati sa kabuuang investment, ipinahayag bilang porsyento', 'Kabuuang benta lamang', 'Kabuuang gastos lamang', 'Bilang ng mga naaning pananim'],
        correctAnswer: 0,
        explanation: 'ROI = (Net Profit ÷ Total Investment) × 100. It measures the efficiency of an investment.',
        explanationTl: 'ROI = (Net Profit ÷ Kabuuang Investment) × 100. Sinusukat nito ang kahusayan ng isang investment.',
        difficulty: 'hard'
      },
      {
        id: 88,
        question: 'What is a cooperative in the context of Philippine agriculture?',
        questionTl: 'Ano ang kooperatiba sa konteksto ng agrikultura sa Pilipinas?',
        options: ['An organization owned and operated by members for mutual benefit', 'A government agency', 'A private corporation', 'A type of farm equipment'],
        optionsTl: ['Isang organisasyon na pag-aari at pinapatakbo ng mga miyembro para sa mutual na benepisyo', 'Isang ahensya ng gobyerno', 'Isang pribadong korporasyon', 'Uri ng kagamitan sa bukid'],
        correctAnswer: 0,
        explanation: 'A cooperative is a member-owned organization that operates for the mutual benefit of all its members.',
        explanationTl: 'Ang kooperatiba ay isang organisasyong pag-aari ng mga miyembro na nagpapatakbo para sa mutual na benepisyo ng lahat ng miyembro nito.',
        difficulty: 'hard'
      },
      {
        id: 89,
        question: 'What is working capital in farm business management?',
        questionTl: 'Ano ang working capital sa pamamahala ng farm business?',
        options: ['Current assets minus current liabilities — funds for day-to-day operations', 'Total assets of the farm', 'Total loans of the business', 'Profit from last harvest'],
        optionsTl: ['Current assets na bawas ang current liabilities — pondo para sa pang-araw-araw na operasyon', 'Kabuuang assets ng bukid', 'Kabuuang utang ng negosyo', 'Kita mula sa nakaraang pag-aani'],
        correctAnswer: 0,
        explanation: 'Working capital = Current Assets − Current Liabilities. It represents funds available for daily operations.',
        explanationTl: 'Working capital = Current Assets − Current Liabilities. Kinakatawan nito ang mga pondong magagamit para sa pang-araw-araw na operasyon.',
        difficulty: 'hard'
      },
      {
        id: 90,
        question: 'What is the purpose of a balance sheet in farm accounting?',
        questionTl: 'Ano ang layunin ng balance sheet sa accounting ng bukid?',
        options: ['To show the financial position by listing assets, liabilities, and equity', 'To track daily weather', 'To record crop yield only', 'To list all employees'],
        optionsTl: ['Upang ipakita ang posisyong pinansyal sa pamamagitan ng paglilista ng assets, liabilities, at equity', 'Upang subaybayan ang pang-araw-araw na panahon', 'Upang i-record lamang ang ani', 'Upang ilista ang lahat ng empleyado'],
        correctAnswer: 0,
        explanation: 'A balance sheet shows a farm\'s financial position at a specific point in time: assets = liabilities + equity.',
        explanationTl: 'Ang balance sheet ay nagpapakita ng posisyong pinansyal ng bukid sa isang tiyak na sandali: assets = liabilities + equity.',
        difficulty: 'hard'
      }
    ]
  },
];
