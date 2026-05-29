import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Sprout, BarChart3, Wheat, Coins, Megaphone, Shield } from 'lucide-react';

const modules = [
  {
    icon: Sprout,
    title: 'Introduction to Agroentrepreneurship',
    titleTl: 'Pagpapakilala sa Agroentrepreneurship',
    desc: 'Basic concepts, definitions, and the role of agroentrepreneurship in the agricultural sector.',
    descTl: 'Mga pangunahing konsepto, kahulugan, at papel ng agroentrepreneurship sa sektor ng agrikultura.',
    sections: 3,
  },
  {
    icon: BarChart3,
    title: 'Assess Market Opportunities (UC1)',
    titleTl: 'Suriin ang mga Oportunidad sa Merkado (UC1)',
    desc: 'Market research, buyer identification, supply chain, value-adding activities, and marketing plan preparation.',
    descTl: 'Pananaliksik sa merkado, pagkilala sa mamimili, supply chain, value-adding na aktibidad, at paghahanda ng marketing plan.',
    sections: 7,
  },
  {
    icon: Wheat,
    title: 'Establish Farm Production Plan (UC2)',
    titleTl: 'Magtatag ng Farm Production Plan (UC2)',
    desc: 'Farm assessment, production planning, supplier selection, record keeping, and risk management.',
    descTl: 'Pagtatasa ng bukid, pagpaplano ng produksyon, pagpili ng supplier, pag-iingat ng rekord, at pamamahala ng panganib.',
    sections: 6,
  },
  {
    icon: Coins,
    title: 'Handle Finances (UC3)',
    titleTl: 'Pamahalaan ang Pananalapi (UC3)',
    desc: 'Budget planning, financial services, loans, investments, and record keeping for farm finances.',
    descTl: 'Pagpaplano ng budget, mga serbisyong pinansyal, mga loan, pamumuhunan, at pag-iingat ng rekord para sa pananalapi ng bukid.',
    sections: 6,
  },
  {
    icon: Megaphone,
    title: 'Market Produce (UC4)',
    titleTl: 'Ibenta ang Produktong Agrikultural (UC4)',
    desc: 'Price monitoring, marketing strategies, selling produce, and recording transactions.',
    descTl: 'Pagmamanman ng presyo, mga estratehiya sa pagmemerkado, pagbebenta ng produkto, at pagrerekord ng mga transaksyon.',
    sections: 4,
  },
  {
    icon: Shield,
    title: 'Safety & Common Competencies',
    titleTl: 'Kaligtasan at mga Karaniwang Kasanayan',
    desc: 'Farm safety measures, estimation, customer service, quality standards, and workplace professionalism.',
    descTl: 'Mga hakbang sa kaligtasan sa bukid, pagtatantya, serbisyo sa customer, mga pamantayan sa kalidad, at propesyonalismo sa lugar ng trabaho.',
    sections: 4,
  },
];

export function ModuleCategoriesSection() {
  const { language, t } = useLanguage();
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="bg-cream py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-forest mb-3">
            {t('modules.title')}
          </h2>
          <p className="text-earth/70 text-base max-w-xl mx-auto">
            {t('modules.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod) => {
            const Icon = mod.icon;
            return (
              <Link
                key={mod.title}
                to="/modules"
                className="bg-white rounded-xl shadow-sm p-8 card-hover group"
              >
                <div className="w-12 h-12 rounded-full bg-mist flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-sage" />
                </div>
                <h3 className="text-forest font-semibold text-lg mb-2 group-hover:text-sage transition-colors">
                  {language === 'tl' ? mod.titleTl : mod.title}
                </h3>
                <p className="text-earth/80 text-sm leading-relaxed mb-4">
                  {language === 'tl' ? mod.descTl : mod.desc}
                </p>
                <span className="inline-block bg-mist text-sage text-xs font-medium px-3 py-1 rounded-full">
                  {mod.sections} {t('common.sections')}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
