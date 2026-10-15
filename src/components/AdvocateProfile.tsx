import React, { useState } from 'react';
import { CHAMBER_CONTACTS } from '../data/legalData';

export const AdvocateProfile: React.FC = () => {
  const [showCharterModal, setShowCharterModal] = useState(false);

  return (
    <section className="w-full bg-[#f4efe6] paper-texture py-20 lg:py-28 border-b border-[#e6dfd1] relative overflow-hidden" id="advocate-profile">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Lead Monograph */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Bio and Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-[1px] bg-[#96722c]"></span>
                <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#96722c] font-bold">
                  Head of Practice • Chamber Profile
                </span>
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[#0c1d36] tracking-tight">
                Advocate Syed Shahbaz Ali Shah Masoomi
              </h2>
              <p className="font-sans text-xs uppercase tracking-wider text-[#96722c] font-semibold mt-2 flex items-center gap-2">
                <span>Advocate High Court</span>
                <span>•</span>
                <span>Member Sindh Bar Council</span>
                <span>•</span>
                <span>Karachi Bar Association</span>
              </p>
            </div>

            <div className="space-y-4 text-[#4a5568] font-sans text-base leading-relaxed">
              <p>
                <span className="font-serif text-2xl font-bold text-[#0c1d36] float-left mr-2 leading-none mt-1">A</span>
                dvocate Syed Shahbaz Ali Shah Masoomi presides over a dynamic litigation and consulting practice founded on unshakable courtroom tenacity and an acute understanding of Pakistan's evolving legal jurisprudence. Practicing with distinction before the High Court of Sindh, the Federal Anti-Corruption Courts, and the Karachi Judicial Complex, Advocate Masoomi has formulated defense strategies for individuals, executives, and organizations facing profound liberty and property jeopardies.
              </p>

              <p>
                His advocacy blends comprehensive statutory mastery with fearless courtroom composure. Every petition, plaint, or appellate brief that leaves the chambers is drafted with scrupulous fidelity to law and evidence, ensuring clients enter the judicial forum with an impregnable legal posture.
              </p>
            </div>

            {/* Chamber Credo & Four Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-[#ffffff] p-5 border border-[#e6dfd1] shadow-xs hover:border-[#96722c] hover:shadow-sm transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-xs bg-[#faf8f5] border border-[#e6dfd1] flex items-center justify-center text-[#96722c]">
                    <span className="material-symbols-outlined text-[18px]">lock</span>
                  </div>
                  <h4 className="font-serif text-base font-bold text-[#0c1d36]">
                    Strict Confidentiality
                  </h4>
                </div>
                <p className="font-sans text-xs text-[#6b778d] leading-relaxed">
                  Ironclad attorney-client privilege governing every communication and evidentiary brief under Article 9.
                </p>
              </div>

              <div className="bg-[#ffffff] p-5 border border-[#e6dfd1] shadow-xs hover:border-[#96722c] hover:shadow-sm transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-xs bg-[#faf8f5] border border-[#e6dfd1] flex items-center justify-center text-[#96722c]">
                    <span className="material-symbols-outlined text-[18px]">schedule</span>
                  </div>
                  <h4 className="font-serif text-base font-bold text-[#0c1d36]">
                    Rapid Mobilization
                  </h4>
                </div>
                <p className="font-sans text-xs text-[#6b778d] leading-relaxed">
                  Immediate response for urgent bail, custody interventions, and duty magistrate motions.
                </p>
              </div>

              <div className="bg-[#ffffff] p-5 border border-[#e6dfd1] shadow-xs hover:border-[#96722c] hover:shadow-sm transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-xs bg-[#faf8f5] border border-[#e6dfd1] flex items-center justify-center text-[#96722c]">
                    <span className="material-symbols-outlined text-[18px]">gavel</span>
                  </div>
                  <h4 className="font-serif text-base font-bold text-[#0c1d36]">
                    Courtroom Advocacy
                  </h4>
                </div>
                <p className="font-sans text-xs text-[#6b778d] leading-relaxed">
                  Disciplined oral argument anchored in binding Supreme Court and High Court legal precedents.
                </p>
              </div>

              <div className="bg-[#ffffff] p-5 border border-[#e6dfd1] shadow-xs hover:border-[#96722c] hover:shadow-sm transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-xs bg-[#faf8f5] border border-[#e6dfd1] flex items-center justify-center text-[#96722c]">
                    <span className="material-symbols-outlined text-[18px]">visibility</span>
                  </div>
                  <h4 className="font-serif text-base font-bold text-[#0c1d36]">
                    Transparent Counsel
                  </h4>
                </div>
                <p className="font-sans text-xs text-[#6b778d] leading-relaxed">
                  Candid case viability assessments without misleading promises or ambiguous legal timelines.
                </p>
              </div>
            </div>
          </div>

          {/* Chamber Verification Badge Panel with Royal Court Monument Art */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#ffffff] border border-[#e6dfd1] shadow-[0_8px_30px_rgba(12,29,54,0.06)] overflow-hidden">
              {/* Judicial Column Visual */}
              <div className="relative h-36 w-full overflow-hidden bg-[#0c1d36]">
                <img
                  src={CHAMBER_CONTACTS.images.courtColumns}
                  alt="Judicial Court Columns Architecture"
                  className="w-full h-full object-cover filter brightness-90 contrast-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1d36]/90 via-[#0c1d36]/40 to-transparent"></div>
                <div className="absolute bottom-3 left-6 right-6 flex items-center justify-between text-white">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#c9a45c] text-[18px]">
                      account_balance
                    </span>
                    <span className="font-serif text-sm font-semibold tracking-wide">
                      Judicial Forum Admittance
                    </span>
                  </div>
                  <span className="text-[10px] text-[#c9a45c] uppercase font-bold tracking-widest bg-[#0c1d36]/80 px-2 py-0.5 border border-[#c9a45c]/40">
                    High Court of Sindh
                  </span>
                </div>
              </div>

              <div className="p-7">
                {/* Sindh Bar Council Header */}
                <div className="flex items-center gap-4 pb-6 mb-6 border-b border-[#e6dfd1]">
                  <img
                    alt="Masoomi Law Associates Crest"
                    className="h-12 w-auto object-contain"
                    src={CHAMBER_CONTACTS.crestUrl}
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <span className="font-sans text-[10.5px] font-bold text-[#96722c] tracking-widest block uppercase">
                      Professional Standing
                    </span>
                    <span className="font-serif text-xl font-bold text-[#0c1d36]">
                      Sindh Bar Council
                    </span>
                  </div>
                </div>

                {/* Credentials Stack */}
                <div className="space-y-3 font-sans text-xs text-[#4a5568]">
                  <div className="flex justify-between py-2 border-b border-[#e6dfd1]/80">
                    <span className="text-[#6b778d]">Advocate Enrollment:</span>
                    <span className="text-[#0c1d36] font-semibold">High Court of Sindh</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[#e6dfd1]/80">
                    <span className="text-[#6b778d]">Principal Office:</span>
                    <span className="text-[#0c1d36] font-semibold">Tauheed Commercial, DHA Phase 5</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[#e6dfd1]/80">
                    <span className="text-[#6b778d]">Jurisdiction:</span>
                    <span className="text-[#0c1d36] font-semibold">Pan-Pakistan • Sindh Principal</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[#e6dfd1]/80">
                    <span className="text-[#6b778d]">Regulatory Framework:</span>
                    <span className="text-[#0c1d36] font-semibold">Bar Councils Act 1973</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-[#6b778d]">Emergency Access:</span>
                    <span className="text-[#96722c] font-bold">24-Hour Active Line</span>
                  </div>
                </div>

                {/* Quotation Box */}
                <div className="mt-6 p-5 bg-[#faf8f5] border-l-3 border-[#96722c] relative">
                  <span className="absolute -top-3 left-4 text-3xl font-serif text-[#96722c]/40 font-bold select-none">
                    “
                  </span>
                  <p className="font-serif text-sm italic text-[#0c1d36] leading-relaxed relative z-10 pt-1">
                    "The hallmark of justice is not merely statutory compliance, but the fearless preservation of individual dignity against arbitrary overreach."
                  </p>
                  <span className="font-sans text-[11px] text-[#96722c] font-bold uppercase mt-3 block tracking-wider">
                    — Syed Shahbaz Ali Shah Masoomi, ASC
                  </span>
                </div>

                {/* Verified Credentials Trigger */}
                <div className="mt-6 pt-4 border-t border-[#e6dfd1] flex justify-between items-center">
                  <button
                    onClick={() => setShowCharterModal(true)}
                    className="text-xs uppercase font-semibold text-[#96722c] hover:text-[#0c1d36] transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">verified_user</span>
                    <span>Inspect Chamber Enrollment Record</span>
                  </button>
                  <span className="text-[10px] text-[#6b778d]">Reg. KBA/SBC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chamber Enrollment Record Modal */}
      {showCharterModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0c1d36]/80 backdrop-blur-xs animate-fade-in"
          onClick={() => setShowCharterModal(false)}
        >
          <div
            className="bg-white border border-[#e6dfd1] max-w-lg w-full p-6 lg:p-8 text-[#0c1d36] shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between pb-4 border-b border-[#e6dfd1]">
              <div className="flex items-center gap-3">
                <img
                  alt="Masoomi Crest"
                  className="h-9 w-auto"
                  src={CHAMBER_CONTACTS.crestUrl}
                  referrerPolicy="no-referrer"
                />
                <div>
                  <span className="font-sans text-[10px] uppercase font-bold text-[#96722c] tracking-widest block">
                    Institutional Record
                  </span>
                  <h3 className="font-serif text-lg font-bold">Bar Council Enrollment Profile</h3>
                </div>
              </div>
              <button
                onClick={() => setShowCharterModal(false)}
                className="text-slate-400 hover:text-[#0c1d36] cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <div className="py-4 space-y-3 font-sans text-xs text-[#4a5568]">
              <div className="bg-[#f4efe6] p-3.5 border border-[#e6dfd1] space-y-1">
                <span className="font-bold text-[#0c1d36] block text-sm">
                  Advocate Syed Shahbaz Ali Shah Masoomi
                </span>
                <p className="leading-relaxed">
                  Enrolled as Advocate of High Court under Section 27 of the Legal Practitioners &amp; Bar Councils Act 1973. Authorized to plead before all District Courts, Special Tribunals, and the High Court of Sindh.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <div className="p-3 bg-[#faf8f5] border border-[#e6dfd1]">
                  <span className="text-[#6b778d] block text-[10px] uppercase font-semibold">Enrolment Body</span>
                  <span className="font-bold text-[#0c1d36] text-xs">Sindh Bar Council</span>
                </div>
                <div className="p-3 bg-[#faf8f5] border border-[#e6dfd1]">
                  <span className="text-[#6b778d] block text-[10px] uppercase font-semibold">Bar Association</span>
                  <span className="font-bold text-[#0c1d36] text-xs">Karachi Bar Association</span>
                </div>
                <div className="p-3 bg-[#faf8f5] border border-[#e6dfd1]">
                  <span className="text-[#6b778d] block text-[10px] uppercase font-semibold">Judicial Complex</span>
                  <span className="font-bold text-[#0c1d36] text-xs">High Court of Sindh</span>
                </div>
                <div className="p-3 bg-[#faf8f5] border border-[#e6dfd1]">
                  <span className="text-[#6b778d] block text-[10px] uppercase font-semibold">Chamber Principal</span>
                  <span className="font-bold text-[#0c1d36] text-xs">DHA Phase 5, Karachi</span>
                </div>
              </div>

              <p className="text-[11px] text-[#6b778d] leading-relaxed pt-2">
                Vakalatnama forms, certified cause list appearances, and legal representation agreements are governed in strict accordance with the Canons of Professional Conduct and Etiquette of the Pakistan Bar Council.
              </p>
            </div>

            <div className="pt-3 border-t border-[#e6dfd1] flex justify-end">
              <button
                onClick={() => setShowCharterModal(false)}
                className="px-5 py-2.5 bg-[#0c1d36] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#162f52] transition-colors cursor-pointer"
              >
                Dismiss Verification
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
