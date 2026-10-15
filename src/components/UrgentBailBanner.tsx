import React from 'react';
import { CHAMBER_CONTACTS } from '../data/legalData';

interface UrgentBailBannerProps {
  onSelectUrgentMatter: () => void;
}

export const UrgentBailBanner: React.FC<UrgentBailBannerProps> = ({ onSelectUrgentMatter }) => {
  return (
    <section className="w-full bg-[#fdf8f8] py-12 border-b border-[#f0d8d8] relative overflow-hidden" id="urgent-bail">
      {/* Subtle background emergency watermark/tint */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8c1d1d]/[0.02] rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="bg-[#ffffff] p-8 lg:p-10 border border-[#eedcdc] shadow-[0_4px_25px_rgba(140,29,29,0.05)] relative flex flex-col lg:flex-row items-center justify-between gap-8 transition-all duration-300 hover:shadow-[0_8px_35px_rgba(140,29,29,0.08)]">
          {/* Subtle top crimson hairline accent */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#8c1d1d] to-transparent"></div>

          <div className="flex flex-col gap-3 max-w-2xl">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8c1d1d] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#8c1d1d]"></span>
              </span>
              <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#8c1d1d] font-bold">
                Priority Chamber Dispatch • 24/7 Availability
              </span>
            </div>

            <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-[#0c1d36] leading-snug">
              Need Urgent Bail, Remand Legal Assistance, or Immediate Case Assessment?
            </h2>

            <p className="font-sans text-sm text-[#4a5568] leading-relaxed">
              Time is essential during unexpected police custody, FIR registration, or physical remand proceedings. Our chambers prepare, file, and move urgent protective, pre-arrest, and post-arrest bail petitions before District &amp; Sessions Courts and the High Court of Sindh within hours.
            </p>

            {/* Expedited Timeline Chips */}
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-[#6b778d] font-medium">
              <span className="inline-flex items-center gap-1.5 bg-[#fdf5f5] text-[#8c1d1d] px-2.5 py-1 border border-[#eedcdc]">
                <span className="material-symbols-outlined text-[14px]">bolt</span>
                Pre-Arrest Motions (Within 2 Hours)
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#fdf5f5] text-[#8c1d1d] px-2.5 py-1 border border-[#eedcdc]">
                <span className="material-symbols-outlined text-[14px]">gavel</span>
                Duty Magistrate Interventions
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#fdf5f5] text-[#8c1d1d] px-2.5 py-1 border border-[#eedcdc]">
                <span className="material-symbols-outlined text-[14px]">shield</span>
                Sindh High Court Single Bench
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0">
            <a
              className="inline-flex items-center justify-center gap-2.5 bg-[#8c1d1d] hover:bg-[#701515] text-white px-7 py-3.5 text-xs font-semibold uppercase tracking-widest transition-all text-center shadow-md active:scale-95 group"
              href={CHAMBER_CONTACTS.primaryPhoneTel}
            >
              <span className="material-symbols-outlined text-[18px] group-hover:rotate-12 transition-transform">
                call
              </span>
              <span>Call Advocate: {CHAMBER_CONTACTS.primaryPhone}</span>
            </a>

            <button
              onClick={() => {
                onSelectUrgentMatter();
                const el = document.getElementById('case-evaluation');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 bg-[#ffffff] hover:bg-[#faf8f5] text-[#0c1d36] border border-[#e6dfd1] hover:border-[#8c1d1d] px-7 py-3 text-xs font-semibold uppercase tracking-widest transition-all text-center active:scale-95 cursor-pointer shadow-xs"
            >
              <span className="material-symbols-outlined text-[17px] text-[#96722c]">description</span>
              <span>Submit Police Case / FIR Details</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
