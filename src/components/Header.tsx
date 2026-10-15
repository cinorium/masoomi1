import React, { useState, useEffect } from 'react';
import { CHAMBER_CONTACTS } from '../data/legalData';

interface HeaderProps {
  onOpenEvaluation: (category?: string) => void;
  onOpenUrgentBail?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEvaluation, onOpenUrgentBail }) => {
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Determine if nav bar should be pinned
      setIsSticky(window.scrollY > 110);

      // Track active section for indicator
      const sections = ['practice-areas', 'advocate-profile', 'urgent-bail', 'case-evaluation', 'office-contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyToClipboard = (number: string, label: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(number);
    setCopiedNumber(label);
    setTimeout(() => setCopiedNumber(null), 2000);
  };

  const scrollTo = (id: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* ============================================================== */}
      {/* DESKTOP HEADER (Hidden on mobile < 1024px)                     */}
      {/* ============================================================== */}
      <div className="hidden lg:block w-full bg-[#faf8f5]">
        {/* Tier 1: Top Judicial Dispatch Ribbon */}
        <div className="bg-[#0c1d36] text-slate-200 py-2.5 px-6 lg:px-12 text-xs border-b border-[#162f52] relative z-40">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 font-sans">
            <div className="flex items-center gap-3">
              <span className="inline-block w-1.5 h-1.5 bg-[#c9a45c] rotate-45"></span>
              <span className="tracking-widest uppercase font-semibold text-[#f8f3ea] text-[10.5px]">
                High Court of Sindh Enrolled Chambers
              </span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-300 tracking-wide text-[11px]">
                Karachi Judicial Complex &amp; DHA Principal Chambers
              </span>
            </div>

            <div className="flex items-center gap-5">
              <span className="tracking-wider uppercase text-[10.5px] text-slate-300 font-medium">
                24/7 Urgent Legal Helplines:
              </span>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#c9a45c] text-[14px]">call</span>
                  <a
                    className="text-[#e2c487] hover:text-white transition-colors font-semibold tracking-wider text-xs"
                    href={CHAMBER_CONTACTS.primaryPhoneTel}
                  >
                    {CHAMBER_CONTACTS.primaryPhone}
                  </a>
                  <button
                    onClick={(e) => copyToClipboard(CHAMBER_CONTACTS.primaryPhone, 'primary', e)}
                    className="text-slate-400 hover:text-[#e2c487] transition-colors p-0.5"
                    title="Copy Primary Helpline"
                  >
                    <span className="material-symbols-outlined text-[13px]">content_copy</span>
                  </button>
                </div>

                <span className="text-slate-600">/</span>

                <div className="flex items-center gap-1.5">
                  <a
                    className="text-[#e2c487] hover:text-white transition-colors font-semibold tracking-wider text-xs"
                    href={CHAMBER_CONTACTS.secondaryPhoneTel}
                  >
                    {CHAMBER_CONTACTS.secondaryPhone}
                  </a>
                  <button
                    onClick={(e) => copyToClipboard(CHAMBER_CONTACTS.secondaryPhone, 'secondary', e)}
                    className="text-slate-400 hover:text-[#e2c487] transition-colors p-0.5"
                    title="Copy Secondary Helpline"
                  >
                    <span className="material-symbols-outlined text-[13px]">content_copy</span>
                  </button>
                </div>

                {copiedNumber && (
                  <span className="text-[10px] text-emerald-300 bg-emerald-950 px-2 py-0.5 border border-emerald-500/30 animate-fade-in font-medium">
                    Copied
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Tier 2: Dedicated Grand Masthead Brand Container */}
        <div className="bg-[#ffffff] border-b border-[#e6dfd1] py-5 px-6 lg:px-12 relative z-30">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
            {/* Left: Crest & Stately Brand Typography */}
            <div className="flex items-center gap-5">
              <a href="#" className="p-1.5 bg-[#faf8f5] border border-[#e6dfd1] shadow-xs shrink-0 hover:border-[#96722c] transition-colors">
                <img
                  alt="Masoomi Law Associates Crest"
                  className="h-14 w-auto object-contain"
                  src={CHAMBER_CONTACTS.crestUrl}
                  referrerPolicy="no-referrer"
                />
              </a>

              <div className="flex flex-col">
                <div className="flex items-center gap-3">
                  <span className="font-serif text-2xl lg:text-3xl font-bold tracking-tight text-[#0c1d36] leading-none">
                    MASOOMI LAW ASSOCIATES
                  </span>
                  <span className="px-2 py-0.5 bg-[#f4efe6] border border-[#e6dfd1] text-[#96722c] text-[10px] font-bold uppercase tracking-widest">
                    Chambers
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#96722c] font-semibold">
                    Chambers of Advocate Syed Shahbaz Ali Shah Masoomi
                  </span>
                  <span className="text-stone-300">·</span>
                  <span className="font-sans text-[11px] text-[#6b778d] uppercase tracking-wider font-medium">
                    Advocate High Court of Sindh
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Quick Telephonic & Consultation Action Hub */}
            <div className="flex items-center gap-4">
              <div className="text-right hidden xl:block">
                <span className="font-sans text-[10px] uppercase tracking-widest text-[#6b778d] block font-semibold">
                  Chamber Registry
                </span>
                <span className="font-serif text-sm font-bold text-[#0c1d36]">
                  DHA Phase 5, Karachi
                </span>
              </div>

              <div className="h-9 w-[1px] bg-[#e6dfd1] hidden xl:block"></div>

              <div className="flex items-center gap-3">
                <a
                  href={CHAMBER_CONTACTS.primaryPhoneTel}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#faf8f5] hover:bg-[#f4efe6] text-[#0c1d36] border border-[#e6dfd1] hover:border-[#96722c] text-xs font-semibold uppercase tracking-wider transition-all"
                >
                  <span className="material-symbols-outlined text-[16px] text-[#8c1d1d]">
                    emergency
                  </span>
                  <span>Bail Desk: 0321 3103004</span>
                </a>

                <button
                  onClick={() => scrollTo('case-evaluation')}
                  className="inline-flex items-center gap-2 bg-[#0c1d36] hover:bg-[#162f52] text-white px-5 py-2.5 text-xs font-semibold uppercase tracking-widest transition-all shadow-sm active:scale-95 cursor-pointer"
                >
                  <span>Book Consultation</span>
                  <span className="material-symbols-outlined text-[15px] text-[#c9a45c]">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tier 3: Dedicated Sticky Navigation Ribbon */}
        <div
          className={`w-full transition-all duration-300 z-50 ${
            isSticky
              ? 'fixed top-0 left-0 bg-[#ffffff]/98 backdrop-blur-md border-b border-[#e6dfd1] shadow-[0_4px_25px_rgba(12,29,54,0.08)]'
              : 'relative bg-[#fbf9f5] border-b border-[#e6dfd1]'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12 h-13 flex items-center justify-between">
            {/* Sticky Compact Brand Mark (only visible when scrolled) */}
            <div
              className={`flex items-center gap-3 transition-opacity duration-300 ${
                isSticky ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <img
                alt="Crest"
                className="h-7 w-auto object-contain"
                src={CHAMBER_CONTACTS.crestUrl}
                referrerPolicy="no-referrer"
              />
              <span className="font-serif text-sm font-bold tracking-wider text-[#0c1d36] uppercase">
                Masoomi Law
              </span>
            </div>

            {/* Concise, Single-Line Navigation Items */}
            <nav className="flex items-center gap-8 text-[12.5px] font-semibold tracking-widest uppercase font-sans">
              <button
                onClick={(e) => scrollTo('practice-areas', e)}
                className={`transition-colors py-2 relative cursor-pointer ${
                  activeSection === 'practice-areas'
                    ? 'text-[#0c1d36] font-bold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#96722c]'
                    : 'text-[#4a5568] hover:text-[#0c1d36]'
                }`}
              >
                Practice Areas
              </button>

              <button
                onClick={(e) => scrollTo('advocate-profile', e)}
                className={`transition-colors py-2 relative cursor-pointer ${
                  activeSection === 'advocate-profile'
                    ? 'text-[#0c1d36] font-bold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#96722c]'
                    : 'text-[#4a5568] hover:text-[#0c1d36]'
                }`}
              >
                Advocate Profile
              </button>

              <button
                onClick={(e) => scrollTo('urgent-bail', e)}
                className={`transition-colors py-2 relative cursor-pointer flex items-center gap-1.5 ${
                  activeSection === 'urgent-bail'
                    ? 'text-[#8c1d1d] font-bold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#8c1d1d]'
                    : 'text-[#8c1d1d] hover:text-red-900 font-semibold'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#8c1d1d] animate-pulse"></span>
                <span>Urgent Bail (24/7)</span>
              </button>

              <button
                onClick={(e) => scrollTo('case-evaluation', e)}
                className={`transition-colors py-2 relative cursor-pointer ${
                  activeSection === 'case-evaluation'
                    ? 'text-[#0c1d36] font-bold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#96722c]'
                    : 'text-[#4a5568] hover:text-[#0c1d36]'
                }`}
              >
                Case Evaluation
              </button>

              <button
                onClick={(e) => scrollTo('office-contact', e)}
                className={`transition-colors py-2 relative cursor-pointer ${
                  activeSection === 'office-contact'
                    ? 'text-[#0c1d36] font-bold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#96722c]'
                    : 'text-[#4a5568] hover:text-[#0c1d36]'
                }`}
              >
                Chambers &amp; Registry
              </button>
            </nav>

            {/* Right Action on Nav Bar */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => scrollTo('case-evaluation')}
                className="text-xs font-semibold uppercase tracking-wider text-[#96722c] hover:text-[#0c1d36] flex items-center gap-1 cursor-pointer transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">edit_note</span>
                <span>Confidential Brief</span>
              </button>
            </div>
          </div>
          <div className="gold-hairline"></div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* MOBILE TOP BAR (Minimal, clean, un-cramped)                    */}
      {/* ============================================================== */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-[#ffffff]/98 backdrop-blur-md border-b border-[#e6dfd1] shadow-xs">
        {/* Top Emergency Ribbon */}
        <div className="bg-[#0c1d36] text-white py-1 px-4 text-[10px] flex items-center justify-between font-sans">
          <span className="text-[#f8f3ea] font-medium tracking-wider uppercase">
            High Court Enrolled Chambers
          </span>
          <a
            href={CHAMBER_CONTACTS.primaryPhoneTel}
            className="text-[#e2c487] font-bold tracking-wider"
          >
            24/7 Helpline: {CHAMBER_CONTACTS.primaryPhone}
          </a>
        </div>

        {/* Minimal Mobile Header Bar */}
        <div className="h-16 px-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img
              alt="Masoomi Law Associates Crest"
              className="h-9 w-auto object-contain"
              src={CHAMBER_CONTACTS.crestUrl}
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="font-serif text-sm font-bold tracking-wider text-[#0c1d36] leading-tight">
                MASOOMI LAW ASSOCIATES
              </span>
              <span className="font-sans text-[9px] uppercase tracking-wider text-[#96722c] font-semibold">
                Chambers of Advocate High Court
              </span>
            </div>
          </a>

          {/* Quick Direct Call Button */}
          <a
            href={CHAMBER_CONTACTS.primaryPhoneTel}
            className="p-2 bg-[#8c1d1d] text-white flex items-center justify-center shadow-xs"
            aria-label="Call 24/7 Helpline"
          >
            <span className="material-symbols-outlined text-[18px]">call</span>
          </a>
        </div>
      </div>

      {/* ============================================================== */}
      {/* MOBILE BOTTOM NAVIGATION DOCK (Thumb-Friendly, Fixed Bottom)   */}
      {/* ============================================================== */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#ffffff]/98 backdrop-blur-md border-t border-[#e6dfd1] shadow-[0_-4px_20px_rgba(12,29,54,0.08)]">
        <div className="grid grid-cols-5 h-16 max-w-md mx-auto items-center text-center font-sans">
          {/* 1. Practices */}
          <button
            onClick={() => scrollTo('practice-areas')}
            className={`flex flex-col items-center justify-center py-1 transition-colors ${
              activeSection === 'practice-areas' ? 'text-[#0c1d36] font-bold' : 'text-[#6b778d]'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">gavel</span>
            <span className="text-[9.5px] uppercase tracking-wider mt-0.5">Practices</span>
          </button>

          {/* 2. Counsel Profile */}
          <button
            onClick={() => scrollTo('advocate-profile')}
            className={`flex flex-col items-center justify-center py-1 transition-colors ${
              activeSection === 'advocate-profile' ? 'text-[#0c1d36] font-bold' : 'text-[#6b778d]'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">badge</span>
            <span className="text-[9.5px] uppercase tracking-wider mt-0.5">Counsel</span>
          </button>

          {/* 3. Urgent Bail (Center Highlighted Button) */}
          <button
            onClick={() => scrollTo('urgent-bail')}
            className="flex flex-col items-center justify-center py-1 relative -top-2"
          >
            <div className="w-11 h-11 rounded-full bg-[#8c1d1d] text-white flex items-center justify-center shadow-md border-2 border-white">
              <span className="material-symbols-outlined text-[22px]">emergency</span>
            </div>
            <span className="text-[9.5px] uppercase tracking-wider font-bold text-[#8c1d1d] mt-0.5">
              Urgent Bail
            </span>
          </button>

          {/* 4. Case Evaluation */}
          <button
            onClick={() => scrollTo('case-evaluation')}
            className={`flex flex-col items-center justify-center py-1 transition-colors ${
              activeSection === 'case-evaluation' ? 'text-[#0c1d36] font-bold' : 'text-[#6b778d]'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">fact_check</span>
            <span className="text-[9.5px] uppercase tracking-wider mt-0.5">Evaluate</span>
          </button>

          {/* 5. Chambers Registry */}
          <button
            onClick={() => scrollTo('office-contact')}
            className={`flex flex-col items-center justify-center py-1 transition-colors ${
              activeSection === 'office-contact' ? 'text-[#0c1d36] font-bold' : 'text-[#6b778d]'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">location_on</span>
            <span className="text-[9.5px] uppercase tracking-wider mt-0.5">Registry</span>
          </button>
        </div>
      </div>
    </>
  );
};
