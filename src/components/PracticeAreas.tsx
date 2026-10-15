import React, { useState } from 'react';
import { PRACTICE_AREAS, PracticeArea } from '../data/legalData';
import { PracticeDetailModal } from './PracticeDetailModal';

interface PracticeAreasProps {
  onSelectPractice: (practiceId: string) => void;
}

export const PracticeAreas: React.FC<PracticeAreasProps> = ({ onSelectPractice }) => {
  const [selectedArea, setSelectedArea] = useState<PracticeArea | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredAreas = PRACTICE_AREAS.filter((area) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'criminal') return area.category === 'criminal';
    if (activeFilter === 'regulatory') return area.category === 'regulatory';
    if (activeFilter === 'civil-prop') return area.category === 'civil' || area.category === 'property';
    if (activeFilter === 'family-serv') return area.category === 'family' || area.category === 'service';
    return true;
  });

  return (
    <section className="w-full bg-[#ffffff] py-20 lg:py-28 border-b border-[#e6dfd1] relative" id="practice-areas">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#e6dfd1]">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[1px] bg-[#96722c]"></span>
              <span className="font-sans text-xs uppercase text-[#96722c] tracking-[0.25em] font-bold">
                Disciplined Legal Practice
              </span>
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[#0c1d36] tracking-tight">
              Core Judicial &amp; Statutory Jurisdictions
            </h2>
            <p className="font-sans text-sm text-[#4a5568] mt-3 leading-relaxed">
              Representing clients across Karachi and broader Pakistan with procedural mastery under the Code of Criminal Procedure, Civil Procedure Code, Special Laws, and Constitutional Articles.
            </p>
          </div>
          <div className="hidden md:flex flex-col items-end">
            <span className="font-serif text-5xl text-[#96722c]/90 font-bold tracking-tight">09</span>
            <span className="font-sans text-[10.5px] uppercase tracking-[0.2em] text-[#6b778d] font-semibold mt-1">
              Institutional Practice Verticals
            </span>
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 border cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-[#0c1d36] text-white border-[#0c1d36] shadow-xs'
                : 'bg-[#faf8f5] text-[#4a5568] border-[#e6dfd1] hover:border-[#96722c]'
            }`}
          >
            All Verticals (9)
          </button>
          <button
            onClick={() => setActiveFilter('criminal')}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 border cursor-pointer ${
              activeFilter === 'criminal'
                ? 'bg-[#0c1d36] text-white border-[#0c1d36] shadow-xs'
                : 'bg-[#faf8f5] text-[#4a5568] border-[#e6dfd1] hover:border-[#96722c]'
            }`}
          >
            Criminal &amp; Urgent Bail
          </button>
          <button
            onClick={() => setActiveFilter('regulatory')}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 border cursor-pointer ${
              activeFilter === 'regulatory'
                ? 'bg-[#0c1d36] text-white border-[#0c1d36] shadow-xs'
                : 'bg-[#faf8f5] text-[#4a5568] border-[#e6dfd1] hover:border-[#96722c]'
            }`}
          >
            FIA, NAB &amp; White-Collar
          </button>
          <button
            onClick={() => setActiveFilter('civil-prop')}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 border cursor-pointer ${
              activeFilter === 'civil-prop'
                ? 'bg-[#0c1d36] text-white border-[#0c1d36] shadow-xs'
                : 'bg-[#faf8f5] text-[#4a5568] border-[#e6dfd1] hover:border-[#96722c]'
            }`}
          >
            Civil, Property &amp; Rent
          </button>
          <button
            onClick={() => setActiveFilter('family-serv')}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 border cursor-pointer ${
              activeFilter === 'family-serv'
                ? 'bg-[#0c1d36] text-white border-[#0c1d36] shadow-xs'
                : 'bg-[#faf8f5] text-[#4a5568] border-[#e6dfd1] hover:border-[#96722c]'
            }`}
          >
            Family Law &amp; Service Tribunal
          </button>
        </div>

        {/* 9 Refined Practice Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredAreas.map((area, index) => {
            const isSpecial = area.isUrgent;
            const formattedIndex = String(index + 1).padStart(2, '0');

            return (
              <div
                key={area.id}
                onClick={() => setSelectedArea(area)}
                className={`group cursor-pointer p-8 flex flex-col justify-between relative transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_14px_35px_rgba(12,29,54,0.08)] ${
                  isSpecial
                    ? 'bg-[#f4efe6]/70 border-2 border-[#96722c]/80 hover:border-[#96722c]'
                    : 'bg-[#ffffff] border border-[#e6dfd1] hover:border-[#96722c]/70'
                }`}
              >
                {/* Expandable gold bottom hairline */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#96722c] transition-colors duration-300"></div>

                <div className="space-y-4">
                  {/* Card Header: Icon, Roman Badge & Numbering */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#e6dfd1]/60">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xs bg-[#faf8f5] border border-[#e6dfd1] flex items-center justify-center text-[#96722c] group-hover:bg-[#0c1d36] group-hover:text-white group-hover:border-[#0c1d36] transition-all duration-300">
                        <span className="material-symbols-outlined text-[22px]">
                          {area.iconName}
                        </span>
                      </div>
                      <span
                        className={`font-sans text-[11px] uppercase tracking-widest font-semibold ${
                          isSpecial ? 'text-[#96722c] font-bold' : 'text-[#6b778d]'
                        }`}
                      >
                        {area.badge}
                      </span>
                    </div>

                    <span className="font-serif text-lg font-bold text-stone-300 group-hover:text-[#96722c]/60 transition-colors">
                      {formattedIndex}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#0c1d36] group-hover:text-[#96722c] transition-colors duration-200 leading-snug">
                    {area.title}
                  </h3>

                  <p className="font-sans text-sm text-[#4a5568] leading-relaxed">
                    {area.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 flex items-center justify-between text-xs text-[#6b778d] border-t border-[#e6dfd1] font-medium">
                  <span className={isSpecial ? 'text-[#96722c] font-semibold flex items-center gap-1.5' : ''}>
                    {isSpecial && <span className="w-1.5 h-1.5 rounded-full bg-[#96722c] animate-pulse"></span>}
                    {area.court}
                  </span>
                  <div className="flex items-center gap-1 text-[#96722c] group-hover:translate-x-1 transition-transform">
                    <span className="text-[11px] uppercase tracking-wider font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      Dossier
                    </span>
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Practice Dossier Modal */}
      {selectedArea && (
        <PracticeDetailModal
          area={selectedArea}
          onClose={() => setSelectedArea(null)}
          onConsult={(id) => {
            onSelectPractice(id);
            const el = document.getElementById('case-evaluation');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      )}
    </section>
  );
};
