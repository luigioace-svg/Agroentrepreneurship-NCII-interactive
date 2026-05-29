export interface ModuleSection {
  title: string;
  titleTl: string;
  content: string[];
  contentTl: string[];
  examTips?: string[];
  examTipsTl?: string[];
}

export interface Module {
  id: string;
  icon: string;
  title: string;
  titleTl: string;
  description: string;
  descriptionTl: string;
  sectionCount: number;
  sections: ModuleSection[];
}

export const modules: Module[] = [
  {
    id: 'intro',
    icon: 'Sprout',
    title: 'Introduction to Agroentrepreneurship',
    titleTl: 'Pagpapakilala sa Agroentrepreneurship',
    description: 'Basic concepts, definitions, and the role of agroentrepreneurship in the agricultural sector.',
    descriptionTl: 'Mga pangunahing konsepto, kahulugan, at papel ng agroentrepreneurship sa sektor ng agrikultura.',
    sectionCount: 3,
    sections: [
      {
        title: 'What is Agroentrepreneurship?',
        titleTl: 'Ano ang Agroentrepreneurship?',
        content: [
          'Agroentrepreneurship is the combination of agriculture and entrepreneurship. It focuses on the production, processing, marketing, and management of agricultural products while applying sound business principles.',
          'The TESDA Agroentrepreneurship NC II Course is a 239-hour, 30-day program that covers Basic, Common, and Core competencies. It consists of competencies that a person must achieve to assess market opportunities, establish farm production plan, handle finances, and market produce.',
          'Core Goals: Generate profit while sustaining agricultural productivity; Meet consumer needs through quality products; Improve rural livelihood and food security; Encourage innovation and sustainability in farming.',
          'Importance: Creates employment opportunities; Strengthens food supply chains; Encourages value-adding activities; Develops self-reliant farmers and agribusiness owners.'
        ],
        contentTl: [
          'Ang Agroentrepreneurship ay ang pagsasama ng agrikultura at entrepreneurship. Ito ay nakatuon sa produksyon, pagproseso, pagmemerkado, at pamamahala ng mga produktong agrikultural habang inilalapat ang wastong mga prinsipyo ng negosyo.',
          'Ang Kursong TESDA Agroentrepreneurship NC II ay isang 239-oras, 30-araw na programa na sumasaklaw sa Basic, Common, at Core competencies. Ito ay binubuo ng mga kasanayan na dapat makamit ng isang tao upang masuri ang mga oportunidad sa merkado, magtatag ng farm production plan, mamahala ng pananalapi, at magbenta ng produkto.',
          'Mga Pangunahing Layunin: Kumita ng tubo habang pinapanatili ang produktibidad sa agrikultura; Matugunan ang mga pangangailangan ng mamimili sa pamamagitan ng de-kalidad na produkto; Pagbutihin ang kabuhayan sa kanayunan at food security; Himukin ang inobasyon at sustainability sa pagsasaka.',
          'Kahalagahan: Lumikha ng mga oportunidad sa trabaho; Palakasin ang food supply chains; Himukin ang mga value-adding na aktibidad; Paunlarin ang mga self-reliant na magsasaka at agribusiness owners.'
        ],
        examTips: [
          'Remember: Agroentrepreneurship combines agriculture AND entrepreneurship — not just farming.',
          'The NC II qualification has 239 hours of training covering Basic, Common, and Core competencies.'
        ],
        examTipsTl: [
          'Tandaan: Ang Agroentrepreneurship ay pagsasama ng agrikultura AT entrepreneurship — hindi lang pagsasaka.',
          'Ang kwalipikasyon ng NC II ay may 239 oras ng pagsasanay na sumasaklaw sa Basic, Common, at Core competencies.'
        ]
      },
      {
        title: 'Role in Philippine Agriculture',
        titleTl: 'Papel sa Agrikultura ng Pilipinas',
        content: [
          'Agroentrepreneurship plays a vital role in the Philippine agricultural sector. The Philippines is an agricultural country, and farming is the backbone of the economy for many rural communities.',
          'It is a tool for nation-building, food security, and farmer empowerment. By teaching farmers to think like entrepreneurs, they can increase their income, improve their quality of life, and contribute to the national economy.',
          'The course helps farmers understand the business side of agriculture — from production planning to marketing. It transforms subsistence farming into profitable agribusiness enterprises.',
          'Through agroentrepreneurship, farmers learn to: Identify market opportunities; Plan production efficiently; Manage finances properly; Market their produce effectively.'
        ],
        contentTl: [
          'Ang Agroentrepreneurship ay gumaganap ng mahalagang papel sa sektor ng agrikultura sa Pilipinas. Ang Pilipinas ay isang bansang agrikultural, at ang pagsasaka ay ang backbone ng ekonomiya para sa maraming rural na komunidad.',
          'Ito ay isang kasangkapan para sa nation-building, food security, at pagpapalakas ng kakayahan ng magsasaka. Sa pagtuturo sa mga magsasaka na mag-isip tulad ng mga entrepreneur, maaari nilang taasan ang kanilang kita, pagbutihin ang kalidad ng kanilang buhay, at makatulong sa pambansang ekonomiya.',
          'Ang kurso ay tumutulong sa mga magsasaka na maunawaan ang negosyo sa agrikultura — mula sa production planning hanggang sa pagmemerkado. Ito ay nagbabago ng subsistence farming sa kumikitang agribusiness enterprises.',
          'Sa pamamagitan ng agroentrepreneurship, natututo ang mga magsasaka na: Kilalanin ang mga oportunidad sa merkado; Planuhin ang produksyon nang mahusay; Pamahalaan ang pananalapi nang maayos; Ibenta ang kanilang produkto nang epektibo.'
        ]
      },
      {
        title: 'Entrepreneurial Traits and Work Ethics',
        titleTl: 'Mga Katangian ng Entrepreneur at Work Ethics',
        content: [
          'Successful agroentrepreneurs usually possess: Discipline, Hard work, Creativity, Leadership, Risk-taking ability, Communication skills, and Decision-making skills.',
          'Work Ethics include: Honesty, Professionalism, Responsibility, Teamwork, and Safety consciousness.',
          'Stephen Covey\'s 7 Habits of Highly Effective People applied to agroentrepreneurship: Be proactive; Begin with the end in mind; First things first; Think win-win; Seek first to understand, then to be understood; Synergize; Sharpen your saw (continuous improvement).',
          'Occupational Safety: Use PPE properly, Handle tools safely, Maintain sanitation, Follow farm safety protocols.'
        ],
        contentTl: [
          'Ang mga matagumpay na agroentrepreneur ay karaniwang mayroong: Disciplina, Kasipagan, Pagkamalikhain, Pamumuno, Kakayahang mag-risk, Kakayahang makipagkomunikasyon, at Kakayahang magdesisyon.',
          'Ang Work Ethics ay kinabibilangan ng: Katapatan, Propesyonalismo, Responsibilidad, Teamwork, at Safety consciousness.',
          'Ang 7 Habits ni Stephen Covey para sa Highly Effective People na inilapat sa agroentrepreneurship: Maging proaktibo; Simulan sa dulo sa isip; Ang unang bagay ay una; Mag-isip ng win-win; Unawain muna, bago maunawaan; Mag-synergize; Patalasin ang iyong lagari (patuloy na pag-unlad).',
          'Occupational Safety: Tamang paggamit ng PPE, Ligtas na paghawak ng mga kasangkapan, Pagpapanatili ng kalinisan, Pagsunod sa mga farm safety protocol.'
        ],
        examTips: [
          'Memorize the 7 Habits of Highly Effective People — they appear frequently in exams.',
          'Remember the key entrepreneurial traits: discipline, hard work, creativity, leadership, risk-taking, communication, and decision-making.'
        ],
        examTipsTl: [
          'Alamin ang 7 Habits ng Highly Effective People — madalas itong lumitaw sa mga pagsusulit.',
          'Tandaan ang mga pangunahing katangian ng entrepreneur: disiplina, kasipagan, pagkamalikhain, pamumuno, pagkuha ng panganib, komunikasyon, at pagpapadesisyon.'
        ]
      }
    ]
  },
  {
    id: 'market',
    icon: 'BarChart3',
    title: 'Assess Market Opportunities (UC1)',
    titleTl: 'Suriin ang mga Oportunidad sa Merkado (UC1)',
    description: 'Market research, buyer identification, supply chain, value-adding activities, and marketing plan preparation.',
    descriptionTl: 'Pananaliksik sa merkado, pagkilala sa mamimili, supply chain, value-adding na aktibidad, at paghahanda ng marketing plan.',
    sectionCount: 7,
    sections: [
      {
        title: 'Market Research and Market Mapping',
        titleTl: 'Pananaliksik sa Merkado at Market Mapping',
        content: [
          'Market assessment helps determine whether a product has enough demand and profitability potential. Market Research is gathering information about customers and competitors.',
          'Market Mapping is a visual representation of market players and product flow. It helps gain insights into the structure of a market and the positioning of various competitors within it. By visually representing this information, businesses can identify gaps, opportunities, and threats in the market.',
          'Market Visit Objectives: Identify buyer preferences; Study pricing and competition; Analyze demand trends; Observe product quality standards.',
          'Kinds of Buyers: Tightwads (miserly), Spendthrifts (extravagant), Average Spenders. Types of Buyers: Traders, Trade Agents, Institutional Buyers (Consolidators, Processors), Wholesalers, Retailers, Local/Public Market, Consumers.'
        ],
        contentTl: [
          'Ang pagtatasa ng merkado ay tumutulong na matukoy kung ang isang produkto ay may sapat na demand at potensyal na kakayahang kumita. Ang Market Research ay ang pagkalap ng impormasyon tungkol sa mga customer at kakompetensya.',
          'Ang Market Mapping ay isang visual na representasyon ng mga manlalaro sa merkado at daloy ng produkto. Ito ay tumutulong na makakuha ng mga insight sa istruktura ng merkado at posisyon ng iba\'t ang kakompetensya sa loob nito. Sa pamamagitan ng visual na paglalarawan ng impormasyong ito, maaaring matukoy ng mga negosyo ang mga gaps, oportunidad, at banta sa merkado.',
          'Mga Layunin ng Market Visit: Kilalanin ang mga preference ng mamimili; Pag-aralan ang presyo at kompetisyon; Suriin ang mga demand trend; Obserbahan ang mga pamantayan sa kalidad ng produkto.',
          'Mga Uri ng Mamimili: Tightwads (kuripot), Spendthrights (maluho), Average Spenders. Mga Uri ng Mamimili: Traders, Trade Agents, Institutional Buyers (Consolidators, Processors), Wholesalers, Retailers, Local/Public Market, Consumers.'
        ],
        examTips: [
          'Market mapping is visual — it shows market players and product flow graphically.',
          'Remember the 3 kinds of buyers: Tightwads, Spendthrifts, Average Spenders.'
        ],
        examTipsTl: [
          'Ang market mapping ay visual — ito ay nagpapakita ng mga manlalaro sa merkado at daloy ng produkto sa graphic.',
          'Tandaan ang 3 uri ng mamimili: Tightwads, Spendthrifts, Average Spenders.'
        ]
      },
      {
        title: 'Supply and Demand',
        titleTl: 'Supply at Demand',
        content: [
          'Supply refers to the quantity producers are willing to sell at a certain price. Demand refers to the quantity consumers are willing to buy.',
          'Law of Supply: Higher price = higher supply. Lower price = lower supply.',
          'Law of Demand: Higher price = lower demand. Lower price = higher demand.',
          'Factors Affecting Supply: Production cost, Weather conditions, Technology, Availability of inputs.',
          'Factors Affecting Demand: Consumer income, Preferences, Population, Seasonal trends.'
        ],
        contentTl: [
          'Ang Supply ay tumutukoy sa dami na nais ibenta ng mga producer sa isang tiyak na presyo. Ang Demand ay tumutukoy sa dami na nais bilhin ng mga consumer.',
          'Batas ng Supply: Mas mataas na presyo = mas mataas na supply. Mas mababang presyo = mas mababang supply.',
          'Batas ng Demand: Mas mataas na presyo = mas mababang demand. Mas mababang presyo = mas mataas na demand.',
          'Mga Salik na Nakakaapekto sa Supply: Gastos sa produksyon, Kondisyon ng panahon, Teknolohiya, Availability ng mga input.',
          'Mga Salik na Nakakaapekto sa Demand: Kita ng consumer, Mga kagustuhan, Populasyon, Seasonal trends.'
        ],
        examTips: [
          'Supply and Demand have an INVERSE relationship for demand but DIRECT relationship for supply.',
          'Remember: Price UP = Supply UP, Demand DOWN. Price DOWN = Supply DOWN, Demand UP.'
        ],
        examTipsTl: [
          'Ang Supply at Demand ay may INVERSE na relasyon para sa demand ngunit DIRECT na relasyon para sa supply.',
          'Tandaan: Presyo UP = Supply UP, Demand DOWN. Presyo DOWN = Supply DOWN, Demand UP.'
        ]
      },
      {
        title: 'Buyer Segmentation',
        titleTl: 'Pag-segment ng Mamimili',
        content: [
          'Buyer Segmentation divides the market into distinct groups: Demographic (age, income, gender, education, family size, ethnicity), Geographic (location, language, climate), Psychographic (values, beliefs, opinions, interests), Behavioral (purchase occasion, usage rate, benefits sought, loyalty).',
          'Basis for choosing buyers: Meet financial exit goals; Consider transaction structure; Understand buyer assumptions; Weigh if buyer can close the transaction; Assess readiness to move on.',
          'Common questions during buyer interview: Business name, Owner, Marketing strategies, Production plan, How they handle their business.'
        ],
        contentTl: [
          'Ang Pag-segment ng Mamimili ay naghahati sa merkado sa mga natatanging grupo: Demographic (edad, kita, kasarian, edukasyon, laki ng pamilya, etnisidad), Geographic (lokasyon, wika, klima), Psychographic (mga halaga, paniniwala, opinyon, interes), Behavioral (okasyon ng pagbili, rate ng paggamit, hinahanap na benepisyo, loyalty).',
          'Mga Batayan sa pagpili ng mamimili: Matugunan ang mga layunin sa financial exit; Isaalang-alang ang istruktura ng transaksyon; Unawain ang mga palagay ng mamimili; Timbangin kung ang mamimili ay makakapagsara ng transaksyon; Suriin ang kahandaan na magpatuloy.',
          'Mga karaniwang tanong sa panayam sa mamimili: Pangalan ng negosyo, May-ari, Mga estratehiya sa pagmemerkado, Plano ng produksyon, Paano nila pinamamahalaan ang kanilang negosyo.'
        ]
      },
      {
        title: 'Value Chain and Value-Adding Activities',
        titleTl: 'Value Chain at Value-Adding na Aktibidad',
        content: [
          'Value Chain: Activities that add value to products. A value-added activity is any action taken that increases the benefit of a good or service to a customer.',
          'Value-Adding Activities include: Cleaning — removing unwanted substances; Sorting — arranging items systematically; Packaging — enclosing or protecting products; Processing — series of activities to produce a result; Transporting — movement of goods from one location to another; Product Consolidation — reducing overall number of parts.',
          'Why add value to your product? Increases revenue; Creates a loyal market by focusing on customer needs; Enhances branding.',
          'Product Flow of Rice Enterprise: Land Preparation → Seed Germination → Planting → Transplanting → Applying Fertilizer → Applying Pesticides → Weeding → Harvesting → Threshing → Hauling/Trucking → Drying → Milling → Wholesale → Retail → Cooked Rice.'
        ],
        contentTl: [
          'Value Chain: Mga aktibidad na nagdadagdag ng halaga sa mga produkto. Ang isang value-added na aktibidad ay anumang aksyon na nagpapataas ng benepisyo ng isang kalakal o serbisyo sa isang customer.',
          'Ang mga Value-Adding Aktibidad ay kinabibilangan ng: Paglilinis — pagtatanggal ng hindi kanais-nais na mga substance; Pag-uuri — sistematikong pag-aayos ng mga item; Pagbabalot — paglalagay o pagprotekta sa mga produkto; Pagproseso — serye ng mga aktibidad para makabuo ng resulta; Pagtransporte — paglipat ng mga kalakal mula sa isang lokasyon patungo sa isa; Product Consolidation — pagbabawas sa kabuuang bilang ng mga parte.',
          'Bakit magdagdag ng halaga sa iyong produkto? Nagdudulot ng mas mataas na kita; Lumilikha ng loyal na merkado sa pamamagitan ng pagtuon sa mga pangangailangan ng customer; Pinapahusay ang branding.',
          'Daloy ng Produkto ng Rice Enterprise: Paghahanda ng Lupa → Pagusbong ng Binhi → Pagtatanim → Paglilipat-tanim → Paglalagay ng Pataba → Paglalagay ng Pestisidyo → Pagdadamo → Pag-aani → Pagbabasbas → Pagpapakarga → Pagpapatuyo → Paggiling → Wholesale → Retail → Luto na Bigas.'
        ],
        examTips: [
          'Memorize the rice production flow from Land Preparation to Cooked Rice — this is frequently tested.',
          'Value-adding activities: Cleaning, Sorting, Packaging, Processing, Transporting, Product Consolidation.'
        ],
        examTipsTl: [
          'Alamin ang daloy ng produksyon ng palay mula sa Paghahanda ng Lupa hanggang Luto na Bigas — ito ay madalas na sinusubok.',
          'Mga value-adding na aktibidad: Paglilinis, Pag-uuri, Pagbabalot, Pagproseso, Pagtransporte, Product Consolidation.'
        ]
      },
      {
        title: '4Ps and 4Cs of Marketing',
        titleTl: '4Ps at 4Cs ng Marketing',
        content: [
          '4Ps of Marketing: Product — what you sell; Price — how much you charge; Place — where you sell; Promotion — how you advertise.',
          '4Cs of Marketing: Customer Value — what the customer needs; Cost — what the customer pays; Convenience — how easy to purchase; Communication — how you interact with customers.',
          'Promotion Methods: Social media marketing, Flyers and posters, Product sampling, Word of mouth, Online selling.',
          'Marketing Objectives: Increase sales, Build customer loyalty, Expand market reach, Improve product awareness.'
        ],
        contentTl: [
          '4Ps ng Marketing: Produkto — ang iyong ibinebenta; Presyo — kung magkano ang singil; Lugar — kung saan ka nagbebenta; Promosyon — kung paano ka mag-advertise.',
          '4Cs ng Marketing: Customer Value — kung ano ang kailangan ng customer; Cost — kung magkano ang babayaran ng customer; Convenience — gaano kadaling bumili; Communication — kung paano ka nakikipag-ugnayan sa mga customer.',
          'Mga Paraan ng Promosyon: Social media marketing, Mga flyer at poster, Product sampling, Word of mouth, Online selling.',
          'Mga Layunin sa Pagmemerkado: Taasan ang benta, Magtayo ng loyalty ng customer, Palawakin ang abot ng merkado, Pahusayin ang kamalayan sa produkto.'
        ],
        examTips: [
          'Memorize the 4Ps: Product, Price, Place, Promotion.',
          'Also know the 4Cs: Customer Value, Cost, Convenience, Communication.'
        ],
        examTipsTl: [
          'Alamin ang 4Ps: Produkto, Presyo, Lugar, Promosyon.',
          'Alamin din ang 4Cs: Customer Value, Cost, Convenience, Communication.'
        ]
      },
      {
        title: 'Supply Chain',
        titleTl: 'Supply Chain',
        content: [
          'Supply Chain is the movement of products from producers to consumers. It includes all the steps a product takes from the farm to the final consumer.',
          'Components of the Supply Chain: Producers/Farmers → Traders/Collectors → Processors → Wholesalers → Retailers → Consumers.',
          'Supply Chain Management involves planning and controlling the flow of goods, services, and information from raw materials to final delivery.',
          'Understanding the supply chain helps: Identify opportunities, Understand consumer behavior, Market products to target buyers effectively.'
        ],
        contentTl: [
          'Ang Supply Chain ay ang paggalaw ng mga produkto mula sa mga producer patungo sa mga consumer. Ito ay kinabibilangan ng lahat ng hakbang na tinatahak ng isang produkto mula sa bukid hanggang sa huling consumer.',
          'Mga Bahagi ng Supply Chain: Mga Producer/Magsasaka → Mga Trader/Tagakolekta → Mga Processor → Mga Wholesaler → Mga Retailer → Mga Consumer.',
          'Ang Supply Chain Management ay nagsasangkot ng pagpaplano at pagkontrol ng daloy ng mga kalakal, serbisyo, at impormasyon mula sa raw materials hanggang sa huling paghahatid.',
          'Ang pag-unawa sa supply chain ay tumutulong sa: Pagkilala ng mga oportunidad, Pag-unawa sa ugali ng consumer, Epektibong pagmemerkado ng mga produkto sa target na mamimili.'
        ]
      },
      {
        title: 'Marketing Plan and Market Risks',
        titleTl: 'Marketing Plan at mga Panganib sa Merkado',
        content: [
          'Marketing objectives are measurable goals that outline what the end results of your marketing strategy should be. They should be SMART: Specific, Measurable, Achievable, Relevant, Time-bound.',
          'Marketing Plan includes: Product description, Target buyer, Target volume to sell, Price per unit, Estimated sales, Target cost, Target income.',
          'Delivery strategies: Self-delivery, Third-party delivery, Distributors.',
          'Marketing Risks include: Exchange rate fluctuations, Share price changes, Interest rate changes, Commodity price changes.',
          'How to prevent market risks: Create a contingency plan. A contingency plan is a plan prepared to address unexpected events, crises, or problems that may affect the business.'
        ],
        contentTl: [
          'Ang mga layunin sa pagmemerkado ay mga masusukat na layunin na naglalarawan kung ano ang dapat na end result ng iyong marketing strategy. Dapat itong SMART: Specific, Measurable, Achievable, Relevant, Time-bound.',
          'Ang Marketing Plan ay kinabibilangan ng: Paglalarawan ng produkto, Target na mamimili, Target na dami na ibebenta, Presyo bawat yunit, Tinatayang benta, Target na gastos, Target na kita.',
          'Mga estratehiya sa paghahatid: Self-delivery, Third-party delivery, Distributors.',
          'Ang mga Panganib sa Merkado ay kinabibilangan ng: Paggalaw ng exchange rate, Pagbabago sa share price, Pagbabago sa interest rate, Pagbabago sa presyo ng commodity.',
          'Paano maiiwasan ang mga panganib sa merkado: Lumikha ng contingency plan. Ang contingency plan ay isang planong inihanda upang tugunan ang mga hindi inaasahang pangyayari, krisis, o problema na maaaring makaapekto sa negosyo.'
        ],
        examTips: [
          'SMART objectives: Specific, Measurable, Achievable, Relevant, Time-bound.',
          'Always have a contingency plan as backup when primary plans fail.'
        ],
        examTipsTl: [
          'SMART na layunin: Specific, Measurable, Achievable, Relevant, Time-bound.',
          'Palaging magkaroon ng contingency plan bilang backup kapag ang mga pangunahing plano ay nabigo.'
        ]
      }
    ]
  },
  {
    id: 'production',
    icon: 'Wheat',
    title: 'Establish Farm Production Plan (UC2)',
    titleTl: 'Magtatag ng Farm Production Plan (UC2)',
    description: 'Farm assessment, production planning, supplier selection, record keeping, and risk management.',
    descriptionTl: 'Pagtatasa ng bukid, pagpaplano ng produksyon, pagpili ng supplier, pag-iingat ng rekord, at pamamahala ng panganib.',
    sectionCount: 6,
    sections: [
      {
        title: 'Basic Farm Assessment',
        titleTl: 'Pangunahing Pagtatasa ng Bukid',
        content: [
          'Basic Farm Assessment Guide (data to gather/consider): Farm & Owner Details; Land Suitability & Climate; Soils; Water Irrigation; Road Access; Equipment Usage; Infrastructure (Housing & Storage); Power Supply; Neighbor Relations; Phone Reception; Restricted Areas; Records.',
          'Gathering data about the farm: Site Visit; Soil Survey; Water Classification; Land Measurement.',
          'Types of Records: Soil survey; Water classification; Records of previous production; Marketing plans; Farm production plans; Production records (yield); Records of livestock or crops; Tracking of herbicide/pesticide/chemicals; Food safety qualifications.'
        ],
        contentTl: [
          'Gabay sa Pangunahing Pagtatasa ng Bukid (data na kailangang kalapin/isipin): Mga Detalye ng Bukid at May-ari; Angkop na Lupa at Klima; Lupa; Patubig; Akses sa Kalsada; Paggamit ng Kagamitan; Infrastruktura (Pabahay at Imbakan); Supply ng Kuryente; Relasyon sa Kapitbahay; Resepsyon ng Telepono; Mga Restricted Area; Mga Rekord.',
          'Pagkalap ng data tungkol sa bukid: Pagbisita sa Site; Soil Survey; Water Classification; Land Measurement.',
          'Mga Uri ng Rekord: Soil survey; Water classification; Mga rekord ng nakaraang produksyon; Marketing plans; Farm production plans; Production records (yield); Mga rekord ng livestock o pananim; Pagsubaybay ng herbicide/pesticide/chemicals; Food safety qualifications.'
        ]
      },
      {
        title: 'Record Keeping',
        titleTl: 'Pag-iingat ng Rekord',
        content: [
          'Importance of Record Keeping: Record keeping is a fundamental aspect of farm management that contributes to better decision-making, compliance with regulations, resource optimization, risk management, and overall farm performance.',
          'Use of Records: Records provide a comprehensive view of the overall performance of the farm. They provide a basis for evaluating production, income, and effective management of the business.',
          'Tips in record keeping: Keep It Simple; Record Immediately; Record Accurately; Organize.',
          'Why record? Easy recall of what happened to the crop even after the season; Easy to compute and determine farm income; Aids in analyzing what went wrong and what went perfectly; Recording assists in making decisions for actions to be taken in the future.'
        ],
        contentTl: [
          'Kahalagahan ng Pag-iingat ng Rekord: Ang pag-iingat ng rekord ay isang pundamental na aspeto ng pamamahala ng bukid na nag-aambag sa mas mahusay na pagpapadesisyon, pagsunod sa mga regulasyon, optimization ng mapagkukunan, pamamahala ng panganib, at pangkalahatang pagganap ng bukid.',
          'Paggamit ng mga Rekord: Ang mga rekord ay nagbibigay ng komprehensibong pagtingin sa pangkalahatang pagganap ng bukid. Nagbibigay ito ng batayan para sa pagsusuri ng produksyon, kita, at epektibong pamamahala ng negosyo.',
          'Mga tip sa pag-iingat ng rekord: Panatilihing Simple; Irekord Agad; Tumpak na Magrekord; Mag-organisa.',
          'Bakit magrekord? Madaling pag-alala sa nangyari sa pananim kahit matapos ang panahon; Madaling kalkulahin at matukoy ang kita sa bukid; Tumutulong sa pagsusuri kung ano ang mali at ano ang perpekto; Ang pagrerekord ay tumutulong sa paggawa ng desisyon para sa mga aksyon na gagawin sa hinaharap.'
        ],
        examTips: [
          'Record keeping is fundamental — it aids decision-making, compliance, and farm performance analysis.',
          'Key tips: Keep it Simple, Record Immediately, Record Accurately, Organize.'
        ],
        examTipsTl: [
          'Ang pag-iingat ng rekord ay pundamental — ito ay tumutulong sa pagpapadesisyon, pagsunod, at pagsusuri ng pagganap ng bukid.',
          'Mga pangunahing tip: Panatilihing Simple, Irekord Agad, Tumpak na Magrekord, Mag-organisa.'
        ]
      },
      {
        title: 'Components of Farm Production Plan',
        titleTl: 'Mga Bahagi ng Farm Production Plan',
        content: [
          'Components of Farm Production Plan: Values, Vision, Mission, and Goals for the Farm (SMART goals); Production Risk (possible factors that would affect production quantity and quality).',
          'Production Risk factors: Pest & Diseases; Typhoons; Equipment & Machineries Break Down.',
          'How to handle Risk: Diversification; Excess Capacity; Lease Arrangement; Information (Records); New Technologies; Insurance (major tool, for encounter lawsuits).',
          'Farm Planning Procedure: Step 1 — Review Goals and Specify Objectives; Step 2 — Inventory of Available Resources; Step 3 — Identify Possible Alternatives; Step 4 — Estimate Gross Margin/Revenue; Step 5 — Prepare the Farm Budget.'
        ],
        contentTl: [
          'Mga Bahagi ng Farm Production Plan: Mga Halaga, Bisyon, Misyon, at Layunin para sa Bukid (SMART goals); Production Risk (mga posibleng salik na makakaapekto sa dami at kalidad ng produksyon).',
          'Mga salik ng Production Risk: Pest at Sakit; Bagyo; Pagkasira ng Kagamitan at Makinarya.',
          'Paano harapin ang Panganib: Diversification; Labis na Kapasidad; Lease Arrangement; Impormasyon (Mga Rekord); Bagong Teknolohiya; Insurance (pangunahing kasangkapan, para sa mga demanda).',
          'Pamamaraan sa Pagpaplano ng Bukid: Hakbang 1 — Suriin ang mga Layunin at Tukuyin ang mga Partikular na Layunin; Hakbang 2 — Inventory ng Mga Available na Mapagkukunan; Hakbang 3 — Kilalanin ang mga Posibleng Alternatibo; Hakbang 4 — Tantiyahang Gross Margin/Revenue; Hakbang 5 — Ihanda ang Farm Budget.'
        ]
      },
      {
        title: 'Types of Budget',
        titleTl: 'Mga Uri ng Budget',
        content: [
          'Complete Budget — summarizes all expenses and returns such that the net return figure reflects the performance of the entire farm.',
          'Partial Budget — considers only the items in the farm\'s total expenses and returns that will be affected with the adoption of some changes in the farm plans. "Partial budgeting helps us determine which alternative is better."',
          'Components of a Budget: Estimated revenue; Fixed cost; Variable costs; One-time expenses; Cash flow; Profit.',
          'Master Budget — an aggregation of lower-level budgets. Operating Budget — projected revenue and expenses. Cash Budget — estimate of money coming in or going out. Financial Budget — capital needs understanding. Labor Budget — workforce planning.'
        ],
        contentTl: [
          'Kumpletong Budget — nagbubuod ng lahat ng gastos at return kaya ang net return figure ay sumasalamin sa pagganap ng buong bukid.',
          'Partial Budget — isinasaalang-alang lamang ang mga item sa kabuuang gastos at return ng bukid na makaaapekto sa pagpapatupad ng ilang pagbabago sa mga plano sa bukid. "Ang partial budgeting ay tumutulong sa atin na matukoy kung aling alternatibo ang mas mabuti."',
          'Mga Bahagi ng Budget: Tinatayang kita; Fixed cost; Variable costs; One-time expenses; Cash flow; Profit.',
          'Master Budget — pagpupulong ng mga lower-level na budget. Operating Budget — inaasahang kita at gastos. Cash Budget — pagtatantiya ng perang pumapasok o lumalabas. Financial Budget — pag-unawa sa pangangailangan sa capital. Labor Budget — pagpaplano ng workforce.'
        ]
      },
      {
        title: 'Supplier Selection',
        titleTl: 'Pagpili ng Supplier',
        content: [
          'Criteria for Selecting Suppliers: Price; Payment Terms; Delivery; Good long-term relationship; Reputation; Products/Service quality.',
          'How to improve the farm production plan: Assess the crop yield, input usage, labor, finances and current performance using SWOT (Strengths, Weaknesses, Opportunities, Threats) Analysis; Set SMART goals; Conduct Research and Market Analysis; Optimize Crop Selection and rotation; Implement Sustainable Practices.'
        ],
        contentTl: [
          'Mga Pamantayan sa Pagpili ng Supplier: Presyo; Mga Termino ng Pagbabayad; Paghahatid; Magandang long-term na relasyon; Reputasyon; Kalidad ng Produkto/Serbisyo.',
          'Paano mapabuti ang farm production plan: Suriin ang ani ng pananim, paggamit ng input, paggawa, pananalapi at kasalukuyang pagganap gamit ang SWOT (Strengths, Weaknesses, Opportunities, Threats) Analysis; Magtakda ng SMART goals; Magsagawa ng Pananaliksik at Market Analysis; Optimization ng Pagpili at Rotasyon ng Pananim; Pagpapatupad ng Sustainable Practices.'
        ]
      },
      {
        title: 'Production Activities and Scheduling',
        titleTl: 'Mga Aktibidad sa Produksyon at Pag-iskedyul',
        content: [
          'Production activities include: Planting, Fertilizer application, Pesticides application, Implementation of bio-security measures, Irrigation/watering, Weeding, Harvesting, Post-harvesting.',
          'Rice Production Flow (in order): Land Preparation → Seed Germination → Planting/Transplanting → Applying Fertilizer → Applying Pesticides → Weeding → Harvesting → Threshing → Hauling/Trucking → Drying → Milling → Wholesale → Retail → Cooked Rice.',
          'Growth rate describes the rate of change in the value of a specific metric across a given time period, expressed as a percentage. Survival rate is a statistical measure that summarizes the likelihood of different outcomes for plants at a particular point in time.'
        ],
        contentTl: [
          'Ang mga aktibidad sa produksyon ay kinabibilangan ng: Pagtatanim, Paglalagay ng pataba, Paglalagay ng pestisidyo, Pagpapatupad ng mga bio-security measure, Patubig/pagdidilig, Pagdadamo, Pag-aani, Post-harvesting.',
          'Daloy ng Produksyon ng Palay (sa ayos): Paghahanda ng Lupa → Pagusbong ng Binhi → Pagtatanim/Paglilipat-tanim → Paglalagay ng Pataba → Paglalagay ng Pestisidyo → Pagdadamo → Pag-aani → Pagbabasbas → Pagpapakarga → Pagpapatuyo → Paggiling → Wholesale → Retail → Luto na Bigas.',
          'Ang growth rate ay naglalarawan ng rate ng pagbabago sa halaga ng isang tiyak na metric sa isang tiyak na panahon, na ipinahayag bilang porsyento. Ang survival rate ay isang statistical measure na nagbubuod ng posibilidad ng iba\'t ibang resulta para sa mga pananim sa isang tiyak na punto sa oras.'
        ]
      }
    ]
  },
  {
    id: 'finance',
    icon: 'Coins',
    title: 'Handle Finances (UC3)',
    titleTl: 'Pamahalaan ang Pananalapi (UC3)',
    description: 'Budget planning, financial services, loans, investments, and record keeping for farm finances.',
    descriptionTl: 'Pagpaplano ng budget, mga serbisyong pinansyal, mga loan, pamumuhunan, at pag-iingat ng rekord para sa pananalapi ng bukid.',
    sectionCount: 6,
    sections: [
      {
        title: 'Principles of Finance',
        titleTl: 'Mga Prinsipyo ng Pananalapi',
        content: [
          'Principles of Finance: Time Value of Money — money today is worth more than money in the future; The Risk-Return Trade-Off — higher risk investments offer higher potential returns; Cash Flows are the Source of Value — cash inflows and outflows determine business value; Market Prices Reflect Information — prices incorporate all available information.',
          'Budgeting is the process of creating a plan to spend your money. This spending plan is called a budget. Following a budget keeps you out of debt or helps you work your way out of debt.',
          'Financial Literacy is the ability to understand and apply different financial skills effectively, including personal financial management, budgeting, and saving.',
          'The 50/30/20 Rule: 50% to Needs (rent, groceries, utilities), 30% to Wants (hobbies, vacations), 20% to Financial Goals (savings, debt payments).'
        ],
        contentTl: [
          'Mga Prinsipyo ng Pananalapi: Time Value of Money — ang pera ngayon ay mas mahalaga kaysa sa pera sa hinaharap; Ang Risk-Return Trade-Off — ang mga pamumuhunang may mas mataas na panganib ay nag-aalok ng mas mataas na potensyal na return; Ang Cash Flows ay Pinagmulan ng Halaga — ang cash inflows at outflows ay tumutukoy sa halaga ng negosyo; Ang mga Presyo sa Merkado ay Sumasalamin sa Impormasyon — ang mga presyo ay isinasama ang lahat ng available na impormasyon.',
          'Ang pagbubudget ay ang proseso ng paglikha ng plano para gastusin ang iyong pera. Ang planong ito sa paggasta ay tinatawag na budget. Ang pagsunod sa budget ay pinapanatili kang walang utang o tumutulong sa iyo na makalabas sa utang.',
          'Ang Financial Literacy ay ang kakayahang maunawaan at ilapat nang epektibo ang iba\'t ibang kasanayan sa pananalapi, kabilang ang personal na pamamahala ng pananalapi, pagbubudget, at pagtitipid.',
          'Ang Tuntuning 50/30/20: 50% sa Mga Pangangailangan (upa, grocery, utilities), 30% sa Mga Kagustuhan (hobbies, bakasyon), 20% sa Mga Layuning Pinansyal (ipon, pagbabayad ng utang).'
        ],
        examTips: [
          'Time Value of Money: money today > money tomorrow due to earning potential.',
          '50/30/20 rule: 50% Needs, 30% Wants, 20% Financial Goals.'
        ],
        examTipsTl: [
          'Time Value of Money: ang pera ngayon > pera bukas dahil sa potensyal na kita.',
          'Tuntuning 50/30/20: 50% Pangangailangan, 30% Kagustuhan, 20% Layuning Pinansyal.'
        ]
      },
      {
        title: 'Financial Service Providers',
        titleTl: 'Mga Tagapagbigay ng Serbisyong Pinansyal',
        content: [
          'Different Financial Service Providers: Retailers (Rural Banks, Cooperative, NGO, Micro Finance, Government); BDSP (Business Development Service Providers) — Warehousing, trucking; Informal (Suppliers, Individual lenders).',
          '9 Major Types of Financial Institutions: Central Banks; Retail and Commercial Banks; Internet Banks; Credit Unions; Savings and Loan Associations; Investment Banks and Companies; Brokerage Firms; Insurance Companies; Mortgage Companies.',
          'Banking Services: The banking industry is the foundation of the financial services group. Banks earn revenue primarily on the difference in interest rates charged for credit accounts and the rates paid to depositors.',
          'Criteria in selecting financial service providers: Farm Plan Schedule, Terms & Conditions, Requirements, Regulations.'
        ],
        contentTl: [
          'Mga Ibang Tagapagbigay ng Serbisyong Pinansyal: Retailers (Rural Banks, Cooperative, NGO, Micro Finance, Gobyerno); BDSP (Business Development Service Providers) — Warehousing, trucking; Informal (Mga Supplier, Individual lenders).',
          '9 Pangunahing Uri ng Financial Institution: Central Banks; Retail at Commercial Banks; Internet Banks; Credit Unions; Savings and Loan Associations; Investment Banks at Companies; Brokerage Firms; Insurance Companies; Mortgage Companies.',
          'Mga Serbisyong Pang-bangko: Ang industriya ng pagbabangko ay ang pundasyon ng financial services group. Ang mga bangko ay kumikita pangunahin sa pagkakaiba ng interest rates na sinisingil para sa credit accounts at ang rates na ibinabayad sa mga depositor.',
          'Mga pamantayan sa pagpili ng tagapagbigay ng serbisyong pinansyal: Farm Plan Schedule, Mga Termino at Kundisyon, Mga Kinakailangan, Mga Regulasyon.'
        ]
      },
      {
        title: 'Loan Application Process',
        titleTl: 'Proseso ng Pag-apply ng Loan',
        content: [
          'Basic Loan Requirements: Business Plan; Supply Plan; Barangay Clearance or Certification; Proof of Land Ownership (Title or Tax Declaration).',
          'Loan Terms and Conditions: Interest Rate; Bank Charges; Loan Repayment Period; Grace Period.',
          'Payment (Loan Amortization): Monthly, Quarterly, Annually, or Lump-sum Payments.',
          '4 Things to Consider When Applying For a Loan: How much do you need? What is the interest rate? What is the repayment schedule? What collateral is required?',
          'Six Questions a Lender Will Ask You: How much do you want to borrow? What will you use the money for? How will you repay the loan? What collateral do you have? What is your credit history? What is your business plan?'
        ],
        contentTl: [
          'Mga Pangunahing Kinakailangan sa Loan: Business Plan; Supply Plan; Barangay Clearance o Certification; Proof of Land Ownership (Title o Tax Declaration).',
          'Mga Termino at Kundisyon ng Loan: Interest Rate; Mga Singil ng Bangko; Panahon ng Pagbabayad ng Loan; Grace Period.',
          'Pagbabayad (Loan Amortization): Buwanan, Quarterly, Taunan, o Lump-sum na Pagbabayad.',
          '4 na Bagay na Dapat Isaalang-alang sa Pag-apply ng Loan: Magkano ang kailangan mo? Ano ang interest rate? Ano ang iskedyul ng pagbabayad? Ano ang collateral na kailangan?',
          'Anim na Tanong na Itatanong ng Lender sa Iyo: Magkano ang nais mong hiramin? Para saan mo gagamitin ang pera? Paano mo babayaran ang loan? Ano ang collateral na mayroon ka? Ano ang iyong credit history? Ano ang iyong business plan?'
        ]
      },
      {
        title: 'Cooperatives and Membership',
        titleTl: 'Mga Kooperatiba at Pagiging Miyembro',
        content: [
          'Membership Requirements in an Organization/Cooperative: Must have an approved application for membership; Must have completed the cooperative\'s prescribed pre-membership education training; Must have subscribed and paid the required share for capital build-up and the prescribed membership fee; Must have a cultivating land either owned or leased.',
          'Responsibilities of a Member: Attend meetings regularly; Participate in decision-making; Contribute capital as required; Support cooperative programs and activities.',
          'Cooperatives are member-owned, member-controlled enterprises that operate for the mutual benefit of their members. They pool resources to achieve economies of scale and better bargaining power.'
        ],
        contentTl: [
          'Mga Kinakailangan sa Pagiging Miyembro sa isang Organisasyon/Kooperatiba: Dapat mayroong aprubadong aplikasyon para sa pagiging miyembro; Dapat nakumpleto ang itinakdang pre-membership education training ng kooperatiba; Dapat nagsubscribe at nagbayad ng kinakailangang share para sa capital build-up at ang itinakdang membership fee; Dapat mayroong cultivating land na pag-aari o leased.',
          'Mga Responsibilidad ng isang Miyembro: Regular na dumalo sa mga pagpupulong; Makilahok sa pagpapadesisyon; Mag-ambag ng capital kung kinakailangan; Suportahan ang mga program at aktibidad ng kooperatiba.',
          'Ang mga Kooperatiba ay mga member-owned, member-controlled na enterprise na nag-ooperate para sa mutual na benepisyo ng kanilang mga miyembro. Pinagsasama nila ang mga mapagkukunan upang makamit ang economies of scale at mas mahusay na bargaining power.'
        ]
      },
      {
        title: 'Investment Options',
        titleTl: 'Mga Opsyon sa Pamumuhunan',
        content: [
          'Investment Options: Acquiring Assets (Land, Machinery, Building); Expanding and Diversifying the Farm (polyculture, variety selection, diversify operation); Saving (to bank or cooperative to earn interest).',
          'Where to invest PHP 50,000 income: Acquire land/expand farm; Buy additional materials; Draft animal etc. for production; Buy farm equipment; Save to bank or cooperative to earn interest; Spend for alternative source of income (buy and sell).',
          'Sources of additional (external) fund: Cooperative; Banks; Traders; Microfinancing organizations; Relatives, private individual.',
          'Investment real estate can provide opportunities for investors to build wealth, increase income, and diversify an investment portfolio. Different types of investment: Bank products, Bonds, Mutual Funds, UITF, Real Estate, Stocks, Insurance with Investment (VUL).'
        ],
        contentTl: [
          'Mga Opsyon sa Pamumuhunan: Pagbili ng Mga Aset (Lupa, Makinarya, Gusali); Pagpapalawak at Pagdiversify ng Bukid (polyculture, pagpili ng variety, diversify operation); Pagtitipid (sa bangko o kooperatiba para kumita ng interes).',
          'Saan mag-invest ng PHP 50,000 na kita: Bumili ng lupa/palawakin ang bukid; Bumili ng karagdagang materyales; Hayop pang-trabaho atbp. para sa produksyon; Bumili ng kagamitan sa bukid; Magtabi sa bangko o kooperatiba para kumita ng interes; Gumastos para sa alternatibong pinagkukunan ng kita (buy and sell).',
          'Mga pinagkukunan ng karagdagang (external) na pondo: Kooperatiba; Mga Bangko; Mga Trader; Microfinancing organizations; Mga Kamag-anak, pribadong indibidwal.',
          'Ang investment real estate ay maaaring magbigay ng mga oportunidad para sa mga investor na magtayo ng kayamanan, taasan ang kita, at mag-diversify ng investment portfolio. Iba\'t ibang uri ng pamumuhunan: Bank products, Bonds, Mutual Funds, UITF, Real Estate, Stocks, Insurance with Investment (VUL).'
        ]
      },
      {
        title: 'Financial Records and Budget Planning',
        titleTl: 'Mga Pinansyal na Rekord at Pagpaplano ng Budget',
        content: [
          'Farm Budgeting — like creating a financial plan for your farm. Types: Complete Budget (entire farm), Partial Budget (specific changes), Operating Budget (projected revenue/expenses), Cash Budget (money in/out), Financial Budget (capital needs), Labor Budget (workforce planning), Static Budget (fixed amounts).',
          'Six Steps to Creating a Budget: Step 1 — Note your net income; Step 2 — Track your spending; Step 3 — Set your goals; Step 4 — Make a plan; Step 5 — Adjust your habits if necessary; Step 6 — Keep checking in.',
          'Budgeting Tips: Overestimate your expenses; Underestimate your income; Consider a separate bank account for fixed costs; Make money management a routine; Review your spending patterns each week.',
          'Nine Do\'s and Don\'ts in Managing Your Funds: Don\'t mix personal finances with business funds; Don\'t pay long-term requirements with short-term sources; Keep watch on source documents; Be prompt in recording; Deposit cash daily; Maintain a petty cash; Reconcile bank accounts monthly; Be careful about extending credit; Collect efficiently.'
        ],
        contentTl: [
          'Farm Budgeting — tulad ng paglikha ng financial plan para sa iyong bukid. Mga Uri: Kumpletong Budget (buong bukid), Partial Budget (tiyak na pagbabago), Operating Budget (inaasahang kita/gastos), Cash Budget (perang pumapasok/lumalabas), Financial Budget (pangangailangan sa capital), Labor Budget (pagpaplano ng workforce), Static Budget (fixed na halaga).',
          'Anim na Hakbang sa Paglikha ng Budget: Hakbang 1 — Tandaan ang iyong net income; Hakbang 2 — Subaybayan ang iyong paggasta; Hakbang 3 — Itakda ang iyong mga layunin; Hakbang 4 — Gumawa ng plano; Hakbang 5 — Ayusin ang iyong mga gawi kung kinakailangan; Hakbang 6 — Patuloy na mag-check in.',
          'Mga Tip sa Pagbubudget: Mag-overestimate ng iyong mga gastos; Mag-underestimate ng iyong kita; Isaalang-alang ang hiwalay na bank account para sa fixed costs; Gawing routine ang money management; Suriin ang iyong mga pattern sa paggasta bawat linggo.',
          'Siyam na Do\'s and Don\'ts sa Pamamahala ng Iyong mga Pondong: Huwag paghaluin ang personal na pananalapi sa pondo ng negosyo; Huwag bayaran ang long-term na pangangailangan gamit ang short-term na mapagkukunan; Bantayan ang mga source document; Maging mabilis sa pagrerekord; Magdeposito ng cash araw-araw; Magpanatili ng petty cash; I-reconcile ang mga bank account buwan-buwan; Mag-ingat sa pagpapaabot ng credit; Maging epektibo sa pagkolekta.'
        ],
        examTips: [
          'Memorize the 9 Do\'s and Don\'ts — they are frequently tested.',
          '6 Steps to Budget: Note income → Track spending → Set goals → Make plan → Adjust habits → Keep checking.'
        ],
        examTipsTl: [
          'Alamin ang 9 Do\'s and Don\'ts — madalas itong sinusubok.',
          '6 na Hakbang sa Budget: Tandaan ang kita → Subaybayan ang gastos → Itakda ang layunin → Gumawa ng plano → Ayusin ang gawi → Patuloy na mag-check.'
        ]
      }
    ]
  },
  {
    id: 'marketing',
    icon: 'Megaphone',
    title: 'Market Produce (UC4)',
    titleTl: 'Ibenta ang Produktong Agrikultural (UC4)',
    description: 'Price monitoring, marketing strategies, selling produce, and recording transactions.',
    descriptionTl: 'Pagmamanman ng presyo, mga estratehiya sa pagmemerkado, pagbebenta ng produkto, at pagrerekord ng mga transaksyon.',
    sectionCount: 4,
    sections: [
      {
        title: 'Types of Buyers and Trading Centers',
        titleTl: 'Mga Uri ng Mamimili at Sentro ng Pagtitinda',
        content: [
          'Types of Buyers: Retailers — sell directly to consumers; Wholesalers — buy in bulk, sell to retailers; Brokers and Handlers — intermediate between buyers and sellers; Cooperatives — member-owned buying groups; Manufacturers — process raw agricultural products.',
          'Trading Centers: Public Market; Grocery/Supermarket; Restaurant; Institutional Buyers (schools, hospitals, prisons).',
          'Price Monitoring gives you an overview of how a product is performing in the market. Sources of Price Information: Farm gate Prices/producers; Trading Centers; Local Market/Retail.',
          'Business Development Service Providers (BDSPs): Trucking; Warehousing; Training; Pre and post-harvest facilities; Cold Storage Provider; Packaging Service Providers.'
        ],
        contentTl: [
          'Mga Uri ng Mamimili: Retailers — direktang nagbebenta sa mga consumer; Wholesalers — bumibili nang maramihan, nagbebenta sa retailers; Brokers at Handlers — tagapamagitan sa pagitan ng mga buyer at seller; Cooperatives — member-owned na buying groups; Manufacturers — nagproproseso ng raw agricultural products.',
          'Mga Sentro ng Pagtitinda: Public Market; Grocery/Supermarket; Restaurant; Institutional Buyers (mga paaralan, ospital, bilangguan).',
          'Ang Price Monitoring ay nagbibigay sa iyo ng overview kung paano nagpe-perform ang isang produkto sa merkado. Mga Pinagkukunan ng Impormasyon sa Presyo: Farm gate Prices/producer; Trading Centers; Local Market/Retail.',
          'Ang mga Business Development Service Provider (BDSPs): Trucking; Warehousing; Training; Pre at post-harvest facilities; Cold Storage Provider; Packaging Service Providers.'
        ]
      },
      {
        title: 'Marketing Arrangements',
        titleTl: 'Mga Kasunduan sa Pagmemerkado',
        content: [
          'Marketing Arrangements provide clear negotiation and help businesses manage their time and resources.',
          'Contract Farming — a forward agreement for production and supply between a farmer and a buyer. The buyer provides specifications, and the farmer agrees to produce and deliver.',
          'Individual Marketing — one-on-one customer relationships, selling through personal networks, Facebook, or online marketplaces.',
          'Group Marketing (COOP) — farmers organize into cooperatives to consolidate products, negotiate better prices, and access larger markets.'
        ],
        contentTl: [
          'Ang mga Kasunduan sa Pagmemerkado ay nagbibigay ng malinaw na negosasyon at tumutulong sa mga negosyo na pamahalaan ang kanilang oras at mapagkukunan.',
          'Ang Contract Farming ay isang forward agreement para sa produksyon at supply sa pagitan ng isang magsasaka at isang mamimili. Ang mamimili ay nagbibigay ng mga specification, at ang magsasaka ay sumasang-ayon na magprodyus at maghatid.',
          'Ang Individual Marketing ay one-on-one na relasyon sa customer, pagbebenta sa pamamagitan ng personal na network, Facebook, o online marketplaces.',
          'Ang Group Marketing (COOP) ay ang mga magsasaka na nag-oorganisa sa mga kooperatiba upang pagsamahin ang mga produkto, makipag-negosyo ng mas mahusay na presyo, at ma-access ang mas malalaking merkado.'
        ]
      },
      {
        title: 'Preparing Produce for Selling',
        titleTl: 'Paghahanda ng Produkto para Ibenta',
        content: [
          'Quality Control: Check produce for defects, ensure freshness, grade according to size/quality standards.',
          'Handling: Proper handling prevents damage — use appropriate containers, avoid overstacking, maintain proper temperature.',
          'Packaging and Labelling: Use clean, appropriate packaging materials; Label with product name, weight, date, producer information.',
          'Value-Adding Activities: Processing — transform raw products (e.g., fruits to jams); Packaging — attractive, protective wrapping; Sorting — grade by size, quality; Cleaning — wash, remove dirt; Peeling — remove skins/covers.'
        ],
        contentTl: [
          'Quality Control: Suriin ang produkto para sa mga depekto, tiyakin ang freshness, i-grade ayon sa laki/pamantayan sa kalidad.',
          'Handling: Ang tamang paghahawak ay nag-iiwas sa pinsala — gumamit ng angkop na lalagyan, iwasan ang sobrang pag-stack, panatilihin ang tamang temperatura.',
          'Packaging at Labelling: Gumamit ng malinis, angkop na packaging materials; Lagyan ng label na may pangalan ng produkto, timbang, petsa, impormasyon ng producer.',
          'Mga Value-Adding na Aktibidad: Pagproseso — baguhin ang raw products (hal. prutas sa jams); Pagbabalot — kaaya-aya, protective na balot; Pag-uuri — i-grade ayon sa laki, kalidad; Paglilinis — hugasan, alisin ang dumi; Pagbabalat — alisin ang balat/takip.'
        ]
      },
      {
        title: 'Pricing, Selling, and Recording Transactions',
        titleTl: 'Pagtakda ng Presyo, Pagbebenta, at Pagrerekord ng Transaksyon',
        content: [
          'Determining the Product Price: Consider production cost, market price, competitor pricing, and desired profit margin.',
          'Negotiating with Buyers: Discuss price, product quality, volume, packaging, schedule of delivery, mode of delivery, frequency of delivery, payment terms, persons to transact with, contact information.',
          'Recording Transactions: Keep records of transactions (in notebook, logbook, etc.); Keep receipts; Review and compare records with targets.',
          'If wholesaler changes mind — contingency plan: Look for alternative buyer who will pay in cash or credit.',
          'Net Income Computation: Net Income = Sales - Cost of Goods Sold - Marketing Cost. Example: Dried Palay: Selling Price PHP 22/kg - Cost PHP 17/kg - Marketing Cost PHP 2 = Net PHP 3/kg.'
        ],
        contentTl: [
          'Pagtakda ng Presyo ng Produkto: Isaalang-alang ang gastos sa produksyon, presyo sa merkado, pagpepresyo ng kakompetensya, at ninanais na profit margin.',
          'Pakikipagnegosasyon sa Mamimili: Talakayin ang presyo, kalidad ng produkto, dami, packaging, iskedyul ng paghahatid, paraan ng paghahatid, dalas ng paghahatid, mga termino ng pagbabayad, mga taong makikipagtransaksyon, impormasyon sa pakikipag-ugnayan.',
          'Pagrerekord ng mga Transaksyon: Panatilihin ang mga rekord ng transaksyon (sa notebook, logbook, atbp.); Panatilihin ang mga resibo; Suriin at ikumpara ang mga rekord sa mga target.',
          'Kung ang wholesaler ay magbabago ng isip — contingency plan: Humanap ng alternatibong mamimili na magbabayad ng cash o credit.',
          'Pagkalkula ng Net Income: Net Income = Benta - Cost of Goods Sold - Gastos sa Marketing. Halimbawa: Dried Palay: Presyo ng Pagbebenta PHP 22/kg - Gastos PHP 17/kg - Gastos sa Marketing PHP 2 = Net PHP 3/kg.'
        ]
      }
    ]
  },
  {
    id: 'safety',
    icon: 'Shield',
    title: 'Safety & Common Competencies',
    titleTl: 'Kaligtasan at Mga Karaniwang Kasanayan',
    description: 'Farm safety measures, estimation, customer service, quality standards, and workplace professionalism.',
    descriptionTl: 'Mga hakbang sa kaligtasan sa bukid, pagtatantya, serbisyo sa customer, mga pamantayan sa kalidad, at propesyonalismo sa lugar ng trabaho.',
    sectionCount: 4,
    sections: [
      {
        title: 'Apply Safety Measures in Farm Operations',
        titleTl: 'Ilapat ang mga Hakbang sa Kaligtasan sa mga Operasyon sa Bukid',
        content: [
          'Areas of Concern for Safety: Work tasks in farm operations; Place and time for implementation of safety measures; Different hazards in the workplace; Types of tools, materials and outfits.',
          'PPE (Personal Protective Equipment): Mask, Gloves, Goggles, Hair Net/cap/bonnet, Face mask/shield, Ear muffs, Apron/Gown/coverall/jumpsuit, Anti-static suits.',
          'Hazards/Risks: Physical hazards (impact, illumination, pressure, noise, vibration, temperature, radiation); Biological hazards (bacteria, viruses, plants, parasites, mites, molds, fungi, insects); Chemical hazards (dusts, fibers, mists, fumes, smoke, gasses, vapors); Ergonomics (psychological and physiological factors).',
          'Why is it important to check farm tools and equipment for defects before use? When tools are in proper condition, they can get the job done faster. When you properly care for your farm tools and equipment, you reduce the risk of injury to the operator. Regular maintenance reduces the cost of maintenance down the road.',
          'Safe Chemical Storage: Store in locked, labeled cabinets away from food; Never mix with animal feed; Keep in original containers; Follow expiration dates.'
        ],
        contentTl: [
          'Mga Lugar na Dapat Pagtuunan ng Kaligtasan: Mga gawain sa operasyon sa bukid; Lugar at oras para sa pagpapatupad ng mga hakbang sa kaligtasan; Iba\'t ibang panganib sa lugar ng trabaho; Mga uri ng kasangkapan, materyales at kasuotan.',
          'PPE (Personal Protective Equipment): Mask, Gloves, Goggles, Hair Net/cap/bonnet, Face mask/shield, Ear muffs, Apron/Gown/coverall/jumpsuit, Anti-static suits.',
          'Mga Panganib/Risiko: Physical hazards (impact, iluminasyon, presyon, ingay, vibrasyon, temperatura, radiation); Biological hazards (bacteria, viruses, halaman, parasites, mites, molds, fungi, insekto); Chemical hazards (alikabok, fibers, mist, usok, usok, gas, vapor); Ergonomics (sikolohikal at physiological na salik).',
          'Bakit mahalaga na suriin ang mga kasangkapan sa bukid para sa mga depekto bago gamitin? Kapag ang mga kasangkapan ay nasa maayos na kondisyon, mas mabilis nilang nagagawa ang trabaho. Kapag inalagaan mo nang maayos ang iyong mga kasangkapan at kagamitan sa bukid, binabawasan mo ang panganib ng injury sa operator. Ang regular na pagpapanatili ay bumabawas sa gastos ng pagpapanatili sa hinaharap.',
          'Ligtas na Pag-iimbak ng Kemikal: Imbakin sa naka-lock, may label na cabinet na malayo sa pagkain; Huwag kailanman paghaluin sa pagkain ng hayop; Panatilihin sa orihinal na lalagyan; Sundin ang expiration dates.'
        ],
        examTips: [
          'PPE stands for Personal Protective Equipment — memorize the types.',
          'Chemical storage: locked, labeled, away from food, original containers.'
        ],
        examTipsTl: [
          'Ang PPE ay nangangahulugang Personal Protective Equipment — alamin ang mga uri.',
          'Pag-iimbak ng kemikal: naka-lock, may label, malayo sa pagkain, orihinal na lalagyan.'
        ]
      },
      {
        title: 'Perform Estimation and Basic Calculation',
        titleTl: 'Magsagawa ng Pagtatantya at Pangunahing Pagkalkula',
        content: [
          'Basic Math Skills for Agroentrepreneurs: Adding; Subtracting; Multiplying; Dividing; Calculating percentages; Calculating fractions and decimals; Calculating averages; Calculating area and volume.',
          'Estimating Labor and Material Requirements: Calculate based on farm size, crop type, and production targets. Consider seasonal variations in labor availability.',
          'Costing References: Production cost includes Labor, Inputs, Tools/equipment depreciation, Administrative cost, Miscellaneous expenses.',
          'Area and Volume Calculations: Essential for determining seed requirements, fertilizer amounts, irrigation needs, and storage capacity.'
        ],
        contentTl: [
          'Mga Pangunahing Kasanayan sa Matematika para sa mga Agroentrepreneur: Pagdaragdag; Pagbabawas; Pagpaparami; Paghahati; Pagkalkula ng porsyento; Pagkalkula ng mga fraction at decimal; Pagkalkula ng average; Pagkalkula ng area at volume.',
          'Pagtatantya ng mga Pangangailangan sa Paggawa at Materyales: Kalkulahin batay sa laki ng bukid, uri ng pananim, at mga target sa produksyon. Isaalang-alang ang mga seasonal na pagbabago sa availability ng paggawa.',
          'Mga Reference sa Pagkalkula ng Gastos: Ang gastos sa produksyon ay kinabibilangan ng Paggawa, Inputs, Depresasyon ng kasangkapan/kagamitan, Administrative cost, Sari-saring gastos.',
          'Mga Pagkalkula ng Area at Volume: Mahalaga para sa pagtukoy ng mga pangangailangan sa binhi, dami ng pataba, pangangailangan sa patubig, at kapasidad ng imbakan.'
        ]
      },
      {
        title: 'Provide Quality Customer Service',
        titleTl: 'Magbigay ng de-kalidad na Serbisyo sa Customer',
        content: [
          'Customer Service Excellence: Needs, Wants and Demands of the Customer — understand what customers truly need versus what they want; Product Knowledge — know your products thoroughly to answer questions and make recommendations; Delighting the Customers — exceed expectations through quality, service, and personal attention.',
          'Client Satisfaction Surveys: Regular feedback collection to improve products and services; Use surveys to identify areas for improvement.',
          'Quality Standards: Ensure products meet or exceed customer expectations; Consistent quality builds trust and repeat business.',
          'Key principles: Be honest about product capabilities; Deliver on promises; Handle complaints professionally and promptly; Maintain consistent communication with buyers.'
        ],
        contentTl: [
          'Kahusayan sa Serbisyo sa Customer: Mga Pangangailangan, Kagustuhan at Demand ng Customer — unawain kung ano ang talagang kailangan ng mga customer kumpara sa kung ano ang gusto nila; Kaalaman sa Produkto — alamin nang lubos ang iyong mga produkto upang masagot ang mga tanong at makagawa ng mga rekomendasyon; Pagpapasaya ng mga Customer — lampasan ang mga inaasahan sa pamamagitan ng kalidad, serbisyo, at personal na pansin.',
          'Mga Client Satisfaction Survey: Regular na pagkolekta ng feedback upang mapabuti ang mga produkto at serbisyo; Gumamit ng mga survey upang matukoy ang mga lugar para sa pagpapabuti.',
          'Mga Pamantayan sa Kalidad: Tiyakin na ang mga produkto ay nakakatugon o lumalampas sa mga inaasahan ng customer; Ang pare-parehong kalidad ay nagtatayo ng tiwala at umuulit na negosyo.',
          'Mga pangunahing prinsipyo: Maging tapat tungkol sa kakayahan ng produkto; Tumupad sa mga pangako; Professional at mabilis na harapin ang mga reklamo; Panatilihin ang pare-parehong komunikasyon sa mga mamimili.'
        ]
      },
      {
        title: 'Comply with Quality and Ethical Standards',
        titleTl: 'Sumunod sa mga Pamantayan sa Kalidad at Etika',
        content: [
          'Quality Management: Establish quality standards for products and processes; Monitor and evaluate quality regularly; Implement continuous improvement practices.',
          'Ethical Standards: Honesty in all business dealings; Fair treatment of workers and suppliers; Environmental responsibility; Compliance with laws and regulations.',
          'Counterproductive Work Behaviors (CWB): Behaviors that negatively affect productivity and morale — ranging from personal phone calls during work to violence in the workplace. Examples: Lateness, bullying, absenteeism, sexual harassment, theft, fraud, taking extended breaks.',
          '7 Habits applied to workplace ethics: Be proactive in maintaining standards; Begin with the end in mind (quality goals); First things first (prioritize safety and quality); Think win-win (fair dealings); Seek first to understand (listen to feedback); Synergize (teamwork for quality); Sharpen the saw (continuous learning).'
        ],
        contentTl: [
          'Quality Management: Magtatag ng mga pamantayan sa kalidad para sa mga produkto at proseso; Regular na subaybayan at suriin ang kalidad; Magpatupad ng mga kasanayan sa patuloy na pagpapabuti.',
          'Mga Pamantayan sa Etika: Katapatan sa lahat ng pakikipagnegosyo; Patas na pagtrato sa mga manggagawa at supplier; Responsibilidad sa kapaligiran; Pagsunod sa mga batas at regulasyon.',
          'Counterproductive Work Behaviors (CWB): Mga pag-uugali na negatibong nakakaapekto sa produktibidad at morale — mula sa personal na tawag sa trabaho hanggang sa karahasan sa lugar ng trabaho. Mga halimbawa: Pagkakaantala, pangbu-bully, absenteeism, sexual harassment, pagnanakaw, panloloko, pagkuha ng pinalawig na pahinga.',
          'Ang 7 Habits na inilapat sa etika sa lugar ng trabaho: Maging proaktibo sa pagpapanatili ng mga pamantayan; Simulan sa dulo sa isip (mga layunin sa kalidad); Ang unang bagay ay una (unahin ang kaligtasan at kalidad); Mag-isip ng win-win (pat na pakikitungo); Unawain muna (makinig sa feedback); Mag-synergize (teamwork para sa kalidad); Patalasin ang lagari (patuloy na pag-aaral).'
        ]
      }
    ]
  }
];
