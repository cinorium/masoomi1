import React, { useState } from 'react';
import { CHAMBER_CONTACTS } from '../data/legalData';

interface HeroProps {
  onOpenUrgentBail: () => void;
  onOpenEvaluation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenUrgentBail, onOpenEvaluation }) => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2200);
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#faf8f5] paper-texture border-b border-[#e6dfd1] pt-10 pb-20 lg:pt-14 lg:pb-24">
      {/* Subtle architectural ambient gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#f4efe6]/60 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Prestigious Credential Ribbon */}
        <div className="flex flex-wrap items-center gap-3 mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#ffffff] border border-[#e6dfd1] text-[#96722c] text-[11px] uppercase tracking-widest font-semibold shadow-xs">
            <span className="material-symbols-outlined text-[15px] text-[#96722c]">verified</span>
            <span>Enrolled With Sindh Bar Council</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#f4efe6] border border-[#e6dfd1] text-[#4a5568] text-[11px] uppercase tracking-wider">
            <span className="material-symbols-outlined text-[14px] text-[#96722c]">location_on</span>
            <span>Tauheed Commercial, DHA Phase 5, Karachi</span>
          </div>
        </div>

        {/* Chamber Hero Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Monograph & Editorial Typography */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#96722c]"></span>
              <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#96722c] font-bold">
                Chambers of Advocate High Court
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0c1d36] font-bold tracking-tight leading-[1.16]">
              Chambers of Advocate<br />
              <span className="italic font-normal text-[#96722c]">Syed Shahbaz Ali Shah</span> Masoomi
            </h1>

            <p className="font-sans text-base lg:text-lg text-[#4a5568] max-w-2xl leading-relaxed font-normal">
              Advocate Of High Court — Uncompromising legal defense, constitutional writs, white-collar accountability, and high-stakes courtroom representation before the District &amp; Sessions Courts, Special Tribunals, and the High Court of Sindh.
            </p>

            {/* Actions with Refined Micro-Animations */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                className="relative group overflow-hidden inline-flex items-center justify-center gap-2.5 bg-[#0c1d36] text-white px-7 py-3.5 text-xs font-semibold uppercase tracking-widest transition-all shadow-md active:scale-95"
                href="#urgent-bail"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenUrgentBail();
                  const el = document.getElementById('urgent-bail');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="material-symbols-outlined text-[18px] text-[#c9a45c] group-hover:scale-110 transition-transform">
                  emergency
                </span>
                <span>Emergency Legal Help &amp; Bail</span>
              </a>

              <a
                className="inline-flex items-center justify-center gap-2.5 bg-[#ffffff] hover:bg-[#f4efe6] text-[#0c1d36] border border-[#e6dfd1] hover:border-[#96722c] px-7 py-3.5 text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-xs active:scale-95"
                href="#case-evaluation"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenEvaluation();
                  const el = document.getElementById('case-evaluation');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="material-symbols-outlined text-[18px] text-[#96722c]">
                  fact_check
                </span>
                <span>Request Case Evaluation</span>
              </a>
            </div>

            {/* Stately Micro Citation */}
            <div className="pt-3 border-t border-[#e6dfd1]/80 flex flex-wrap items-center gap-6 text-xs text-[#6b778d] font-sans">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#96722c]">balance</span>
                <span>Trial &amp; Appellate Practice</span>
              </span>
              <span className="text-stone-300">·</span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#96722c]">shield</span>
                <span>Qanun-e-Shahadat Privilege</span>
              </span>
              <span className="text-stone-300">·</span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#96722c]">timer</span>
                <span>2-Hour Protective Filings</span>
              </span>
            </div>
          </div>

          {/* Right Column: High-Prestige Chamber Card with Law Library Visual */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#ffffff] border border-[#e6dfd1] shadow-[0_8px_30px_rgba(12,29,54,0.06)] overflow-hidden transition-all duration-300 hover:shadow-[0_16px_40px_rgba(12,29,54,0.1)]">
              {/* Visual Header using the generated chamber law library */}
              <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-[#0c1d36]">
                <img
                  src={CHAMBER_CONTACTS.images.chamberLibrary}
                  alt="Chambers Law Library and Desk"
                  className="w-full h-full object-cover object-center filter brightness-90 contrast-105 hover:scale-103 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1d36] via-[#0c1d36]/50 to-transparent"></div>
                
                {/* Floating Crest Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-[#ffffff]/95 backdrop-blur-xs px-2.5 py-1 border border-[#e6dfd1] shadow-xs">
                  <img
                    alt="Crest"
                    className="h-5 w-auto"
                    src={CHAMBER_CONTACTS.crestUrl}
                    referrerPolicy="no-referrer"
                  />
                  <span className="text-[10px] font-bold text-[#0c1d36] uppercase tracking-wider font-serif">
                    Masoomi Law
                  </span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-3 left-6 right-6 flex justify-between items-end text-white">
                  <div>
                    <span className="font-sans text-[10px] font-bold text-[#c9a45c] uppercase tracking-[0.2em] block mb-0.5">
                      Direct Judicial Dispatch
                    </span>
                    <h3 className="font-serif text-lg font-bold text-white tracking-wide">
                      Chamber Urgent Registry
                    </h3>
                  </div>
                  <span className="text-[10px] bg-[#96722c] px-2 py-0.5 uppercase tracking-widest font-semibold">
                    Live Desk
                  </span>
                </div>
              </div>

              {/* Helplines and Urgent Dispatch Detail */}
              <div className="p-6 sm:p-7 space-y-4">
                <div className="space-y-3 font-sans">
                  {/* Primary Helpline */}
                  <div className="p-3 bg-[#faf8f5] border border-[#e6dfd1] hover:border-[#96722c] transition-colors group">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] text-[#6b778d] uppercase tracking-wider font-semibold">
                        Primary High Court Helpline
                      </span>
                      <button
                        onClick={() => handleCopy(CHAMBER_CONTACTS.primaryPhone, 'primary')}
                        className="text-[10px] text-[#96722c] hover:underline uppercase tracking-wider font-semibold flex items-center gap-1"
                        title="Copy phone number"
                      >
                        <span className="material-symbols-outlined text-[13px]">content_copy</span>
                        <span>{copied === 'primary' ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>
                    <a
                      className="font-serif text-2xl font-bold text-[#0c1d36] hover:text-[#96722c] transition-colors block tracking-wide"
                      href={CHAMBER_CONTACTS.primaryPhoneTel}
                    >
                      {CHAMBER_CONTACTS.primaryPhone}
                    </a>
                  </div>

                  {/* Secondary Helpline */}
                  <div className="p-3 bg-[#faf8f5] border border-[#e6dfd1] hover:border-[#96722c] transition-colors group">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] text-[#6b778d] uppercase tracking-wider font-semibold">
                        Secondary Chamber Line
                      </span>
                      <button
                        onClick={() => handleCopy(CHAMBER_CONTACTS.secondaryPhone, 'secondary')}
                        className="text-[10px] text-[#96722c] hover:underline uppercase tracking-wider font-semibold flex items-center gap-1"
                        title="Copy phone number"
                      >
                        <span className="material-symbols-outlined text-[13px]">content_copy</span>
                        <span>{copied === 'secondary' ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>
                    <a
                      className="font-serif text-xl font-bold text-[#4a5568] hover:text-[#0c1d36] transition-colors block tracking-wide"
                      href={CHAMBER_CONTACTS.secondaryPhoneTel}
                    >
                      {CHAMBER_CONTACTS.secondaryPhone}
                    </a>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#e6dfd1] text-xs text-[#6b778d] leading-relaxed flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#96722c] text-[16px] shrink-0">
                    verified_user
                  </span>
                  <span>Pre-arrest protection • Physical remand proceedings • Urgent habeas corpus writs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
