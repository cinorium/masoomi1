import React, { useState } from 'react';
import { CHAMBER_CONTACTS } from '../data/legalData';

export const OfficeContact: React.FC = () => {
  const [activeVenue, setActiveVenue] = useState<'dha' | 'highcourt'>('dha');

  return (
    <section className="w-full bg-[#f4efe6] paper-texture py-20 lg:py-28 border-b border-[#e6dfd1]" id="office-contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-[1px] bg-[#96722c]"></span>
            <span className="font-sans text-xs uppercase text-[#96722c] tracking-[0.25em] font-bold">
              Office &amp; Chambers
            </span>
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[#0c1d36] tracking-tight">
            Registry &amp; Consultation Venues
          </h2>
          <p className="font-sans text-sm text-[#4a5568] mt-2 leading-relaxed">
            Consultations strictly by prior appointment at our DHA Phase 5 chambers, or directly at the High Court of Sindh registry corridors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact & Location Dossier */}
          <div className="lg:col-span-5 space-y-5">
            {/* Address Card */}
            <div className="bg-[#ffffff] p-7 border border-[#e6dfd1] shadow-xs hover:border-[#96722c] hover:shadow-sm transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#faf8f5] border border-[#e6dfd1] flex items-center justify-center text-[#96722c] shrink-0">
                  <span className="material-symbols-outlined text-[22px]">location_on</span>
                </div>
                <div>
                  <span className="font-sans text-xs uppercase tracking-wider text-[#96722c] font-bold block">
                    Chambers Address
                  </span>
                  <h4 className="font-serif text-lg font-bold text-[#0c1d36] mt-1">
                    Tauheed Commercial
                  </h4>
                  <p className="font-sans text-xs text-[#4a5568] leading-relaxed mt-1">
                    {CHAMBER_CONTACTS.address}
                  </p>
                  <div className="mt-3 text-xs text-[#6b778d] font-sans flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[14px] text-[#96722c]">near_me</span>
                    <span>Proximity to Clifton &amp; DHA Sea View</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Lines Card */}
            <div className="bg-[#ffffff] p-7 border border-[#e6dfd1] shadow-xs hover:border-[#96722c] hover:shadow-sm transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#faf8f5] border border-[#e6dfd1] flex items-center justify-center text-[#96722c] shrink-0">
                  <span className="material-symbols-outlined text-[22px]">phone_in_talk</span>
                </div>
                <div className="space-y-3 w-full">
                  <span className="font-sans text-xs uppercase tracking-wider text-[#96722c] font-bold block">
                    Direct Chamber Lines
                  </span>
                  <div className="flex items-center justify-between py-1 border-b border-[#e6dfd1]/80">
                    <span className="font-sans text-xs text-[#6b778d]">Primary Helpline:</span>
                    <a
                      className="font-serif text-base font-bold text-[#0c1d36] hover:text-[#96722c] transition-colors"
                      href={CHAMBER_CONTACTS.primaryPhoneTel}
                    >
                      {CHAMBER_CONTACTS.primaryPhone}
                    </a>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="font-sans text-xs text-[#6b778d]">Secondary Helpline:</span>
                    <a
                      className="font-serif text-base font-bold text-[#0c1d36] hover:text-[#96722c] transition-colors"
                      href={CHAMBER_CONTACTS.secondaryPhoneTel}
                    >
                      {CHAMBER_CONTACTS.secondaryPhone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-[#ffffff] p-7 border border-[#e6dfd1] shadow-xs hover:border-[#96722c] hover:shadow-sm transition-all duration-300">
              <div className="flex items-center gap-2 text-[#96722c] mb-3">
                <span className="material-symbols-outlined text-[20px]">schedule</span>
                <span className="font-sans text-xs uppercase font-bold tracking-wider">
                  Chamber Consultation Hours
                </span>
              </div>
              <div className="space-y-2 text-xs font-sans text-[#4a5568]">
                <div className="flex justify-between py-1 border-b border-[#e6dfd1]/80">
                  <span>Monday – Friday (Chamber Meetings):</span>
                  <span className="text-[#0c1d36] font-semibold">{CHAMBER_CONTACTS.hours.weekdays}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#e6dfd1]/80">
                  <span>Saturday (Briefing &amp; Reviews):</span>
                  <span className="text-[#0c1d36] font-semibold">{CHAMBER_CONTACTS.hours.saturday}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Urgent Bail / Custody Applications:</span>
                  <span className="text-[#8c1d1d] font-bold">{CHAMBER_CONTACTS.hours.urgentBail}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Chamber Notes Panel */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-[#ffffff] border border-[#e6dfd1] shadow-xs overflow-hidden">
            <div className="p-8 lg:p-10 border-b border-[#e6dfd1] space-y-6">
              {/* Venue Selector Tab */}
              <div className="flex items-center gap-4 border-b border-[#e6dfd1] pb-3">
                <button
                  onClick={() => setActiveVenue('dha')}
                  className={`text-xs uppercase font-semibold tracking-wider pb-2 border-b-2 transition-all cursor-pointer ${
                    activeVenue === 'dha'
                      ? 'border-[#96722c] text-[#0c1d36]'
                      : 'border-transparent text-[#6b778d] hover:text-[#0c1d36]'
                  }`}
                >
                  Principal Chambers (DHA Phase 5)
                </button>
                <span className="text-stone-300">|</span>
                <button
                  onClick={() => setActiveVenue('highcourt')}
                  className={`text-xs uppercase font-semibold tracking-wider pb-2 border-b-2 transition-all cursor-pointer ${
                    activeVenue === 'highcourt'
                      ? 'border-[#96722c] text-[#0c1d36]'
                      : 'border-transparent text-[#6b778d] hover:text-[#0c1d36]'
                  }`}
                >
                  High Court of Sindh Annex
                </button>
              </div>

              {activeVenue === 'dha' ? (
                <div className="space-y-2 animate-fade-in">
                  <span className="font-sans text-xs uppercase tracking-widest text-[#96722c] font-bold block mb-1">
                    Chamber Registry Venue
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#0c1d36]">
                    Tauheed Commercial, DHA Phase 5, Karachi
                  </h3>
                  <p className="font-sans text-sm text-[#4a5568] leading-relaxed">
                    The chambers are centrally positioned within DHA Phase 5 with swift access to Clifton, the Supreme Court Karachi Registry, and the Sindh High Court. Designed for high-discretion client conferences, document verification, and case strategy reviews.
                  </p>
                </div>
              ) : (
                <div className="space-y-2 animate-fade-in">
                  <span className="font-sans text-xs uppercase tracking-widest text-[#96722c] font-bold block mb-1">
                    Court Complex Chamber Annex
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#0c1d36]">
                    High Court of Sindh Chamber Complex
                  </h3>
                  <p className="font-sans text-sm text-[#4a5568] leading-relaxed">
                    Consultation rooms situated adjacent to the High Court of Sindh registry corridors on Court Road, accessible during active morning cause list hearings for urgent filings, caveats, and stay motions.
                  </p>
                </div>
              )}

              <div className="pt-4 flex flex-wrap gap-3">
                <a
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#0c1d36] text-white hover:bg-[#162f52] text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-xs"
                  href="https://maps.google.com/?q=Tauheed+Commercial+DHA+Phase+5+Karachi"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>Open Google Maps</span>
                  <span className="material-symbols-outlined text-[15px]">open_in_new</span>
                </a>

                <a
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#ffffff] border border-[#e6dfd1] text-[#0c1d36] hover:bg-[#faf8f5] text-xs font-semibold uppercase tracking-wider transition-all duration-200"
                  href={CHAMBER_CONTACTS.primaryPhoneTel}
                >
                  <span className="material-symbols-outlined text-[15px] text-[#96722c]">call</span>
                  <span>Confirm Appointment Before Arrival</span>
                </a>
              </div>
            </div>

            <div className="p-8 bg-[#faf8f5] grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <span className="font-sans text-xs uppercase tracking-wider text-[#96722c] font-bold block mb-1">
                  Morning High Court Hours
                </span>
                <p className="font-sans text-xs text-[#4a5568] leading-relaxed">
                  Advocate Syed Shahbaz Ali Shah Masoomi appears daily during cause list morning sessions (8:30 AM – 1:30 PM) at the High Court of Sindh and Karachi City Courts.
                </p>
              </div>

              <div>
                <span className="font-sans text-xs uppercase tracking-wider text-[#96722c] font-bold block mb-1">
                  Appointment Advisory
                </span>
                <p className="font-sans text-xs text-[#4a5568] leading-relaxed">
                  To guarantee undisturbed case conferences and document scrutiny, please confirm appointment time through chamber telephone prior to arrival.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
