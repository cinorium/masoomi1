import React, { useState } from 'react';
import { CHAMBER_CONTACTS } from '../data/legalData';

interface FooterProps {
  onSelectPractice?: (practiceId: string) => void;
  onOpenEvaluation?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectPractice, onOpenEvaluation }) => {
  const [modalContent, setModalContent] = useState<{ title: string; content: string } | null>(null);

  const openLegalModal = (type: 'compliance' | 'privilege' | 'clerk', e: React.MouseEvent) => {
    e.preventDefault();
    if (type === 'compliance') {
      setModalContent({
        title: 'Sindh Bar Council Regulatory Compliance',
        content:
          'In compliance with Rule 134-138 of the Pakistan Legal Practitioners and Bar Councils Rules 1969, this website serves solely to provide accurate professional background, chamber location, and educational legal information to existing clients and individuals seeking counsel. It does not constitute commercial solicitation or advertisement of professional services.',
      });
    } else if (type === 'privilege') {
      setModalContent({
        title: 'Privilege, Evidentiary Secrecy & Discretion',
        content:
          'Under Article 9 & 12 of the Qanun-e-Shahadat Order 1984, no advocate shall at any time be permitted, unless with his client’s express consent, to disclose any communication made to him in the course of and for the purpose of his employment as such advocate. All case notes, briefs, and witness depositions submitted to Masoomi Law Associates remain under perpetual attorney-client privilege.',
      });
    } else if (type === 'clerk') {
      setModalContent({
        title: 'Chamber Clerk & Registry Protocols',
        content:
          'Chamber Cause Lists and court diary schedules are maintained under the registry supervision of the Senior Court Clerk. For filing stamped Vakalatnamas, certified copy requisitions, or submitting lower court paper-books for appellate drafting, please telephone the registry desk on 0321 3103004 between 9:00 AM and 8:00 PM.',
      });
    }
  };

  return (
    <footer className="w-full bg-[#0c1d36] text-slate-300 font-sans">
      {/* Top 4-Column Directory */}
      <div className="py-16 border-b border-[#1e3a61]/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1: Crest & Identity */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                alt="Masoomi Law Associates Crest"
                className="h-8 w-auto object-contain brightness-0 invert"
                src={CHAMBER_CONTACTS.crestUrl}
                referrerPolicy="no-referrer"
              />
              <span className="font-serif text-lg tracking-wider uppercase text-white font-bold">
                Masoomi Law
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Chambers of Advocate Syed Shahbaz Ali Shah Masoomi, Advocate of High Court. Dedicated to high-stakes litigation, constitutional defense, white-collar advocacy, and corporate advisory across Pakistan.
            </p>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#1e3a61]/60 border border-[#1e3a61] text-[#f7f1e6] text-[11px] uppercase tracking-widest w-fit">
              <span className="material-symbols-outlined text-[13px] text-[#96722c]">
                verified
              </span>
              <span>Sindh Bar Council Verified</span>
            </div>
          </div>

          {/* Col 2: Chamber Practice */}
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-widest text-[#dfba73] font-bold">
              Chamber Practice
            </span>
            <ul className="flex flex-col gap-2 text-xs text-slate-300">
              <li>
                <a
                  className="hover:text-white transition-colors"
                  href="#practice-areas"
                  onClick={() => onSelectPractice?.('criminal-defense')}
                >
                  High Court Criminal Bail &amp; Trial
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors"
                  href="#practice-areas"
                  onClick={() => onSelectPractice?.('bail-matters')}
                >
                  Constitutional Writs &amp; Remedies
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors"
                  href="#practice-areas"
                  onClick={() => onSelectPractice?.('white-collar')}
                >
                  NAB, FIA &amp; Anti-Corruption Defense
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors"
                  href="#practice-areas"
                  onClick={() => onSelectPractice?.('civil-litigation')}
                >
                  Corporate Governance &amp; Advisory
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors"
                  href="#practice-areas"
                  onClick={() => onSelectPractice?.('civil-litigation')}
                >
                  Civil &amp; Commercial Disputes
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors"
                  href="#practice-areas"
                  onClick={() => onSelectPractice?.('property-disputes')}
                >
                  Banking &amp; Financial Recovery
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Judicial Registry */}
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-widest text-[#dfba73] font-bold">
              Judicial Registry
            </span>
            <div className="flex flex-col gap-2 text-xs text-slate-300">
              <p className="text-white font-serif text-sm font-semibold">
                Tauheed Commercial Chambers
              </p>
              <p className="leading-relaxed">
                Tauheed Commercial, Phase 5, Defence Housing Authority (DHA), Karachi, Sindh 75500, Pakistan.
              </p>
              <p className="mt-2 text-white font-serif text-sm font-semibold">
                High Court of Sindh Chamber Complex
              </p>
              <p className="leading-relaxed">
                Opposite Court Registry, Court Road, Karachi.
              </p>
            </div>
          </div>

          {/* Col 4: Emergency Retainer */}
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-widest text-[#dfba73] font-bold">
              Emergency Retainer
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">
              Direct telephonic access to the senior advocate for immediate pre-arrest bail, judicial remand intervention, or urgent injunctions.
            </p>
            <div className="flex flex-col gap-1 my-1">
              <a
                className="font-serif text-base text-white hover:text-[#f7f1e6] transition-colors tracking-wide font-bold"
                href={CHAMBER_CONTACTS.primaryPhoneTel}
              >
                {CHAMBER_CONTACTS.primaryPhone}
              </a>
              <a
                className="font-serif text-sm text-slate-300 hover:text-white transition-colors tracking-wide"
                href={CHAMBER_CONTACTS.secondaryPhoneTel}
              >
                {CHAMBER_CONTACTS.secondaryPhone}
              </a>
            </div>
            <a
              className="inline-flex items-center justify-center px-4 py-2 bg-[#96722c] hover:bg-[#806024] text-white text-xs font-semibold uppercase tracking-widest transition-all w-fit mt-1 cursor-pointer"
              href="#case-evaluation"
              onClick={(e) => {
                e.preventDefault();
                onOpenEvaluation?.();
                const el = document.getElementById('case-evaluation');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Submit Urgent Brief
            </a>
          </div>
        </div>
      </div>

      {/* Regulatory Bar */}
      <div className="py-8 bg-[#081324] text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-6">
          <div className="p-4 bg-[#0c1d36]/70 border border-[#1e3a61]/40">
            <p className="text-[11px] text-slate-300 leading-relaxed">
              <strong className="text-[#f7f1e6] tracking-wider uppercase block mb-1">
                Sindh Bar Council Regulatory Disclaimer:
              </strong>{' '}
              As per the Legal Practitioners and Bar Councils Act 1973 and the rules formulated by the Sindh Bar Council and Pakistan Bar Council, this digital publication is solely for informative institutional purposes and does not constitute formal legal solicitation, advertisement, or guaranteed representation. Retainer commences strictly upon execution of a formal Vakalatnama and Chamber Engagement Memorandum.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
            <div>
              © 2025 Masoomi Law Associates. All Rights Reserved. Chambers of Syed Shahbaz Ali Shah Masoomi, ASC.
            </div>
            <div className="flex items-center gap-6 uppercase tracking-wider">
              <a
                className="hover:text-white transition-colors cursor-pointer"
                href="#disclaimer"
                onClick={(e) => openLegalModal('compliance', e)}
              >
                Bar Compliance
              </a>
              <a
                className="hover:text-white transition-colors cursor-pointer"
                href="#confidentiality"
                onClick={(e) => openLegalModal('privilege', e)}
              >
                Privilege &amp; Discretion
              </a>
              <a
                className="hover:text-white transition-colors cursor-pointer"
                href="#office-contact"
                onClick={(e) => openLegalModal('clerk', e)}
              >
                Clerk Registry
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Info Modal */}
      {modalContent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0c1d36]/75 backdrop-blur-xs animate-fade-in"
          onClick={() => setModalContent(null)}
        >
          <div
            className="bg-white border border-[#e8e2d8] max-w-lg w-full p-6 lg:p-8 text-[#0c1d36] shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#e8e2d8]">
              <h3 className="font-serif text-lg font-bold text-[#0c1d36]">
                {modalContent.title}
              </h3>
              <button
                onClick={() => setModalContent(null)}
                className="text-slate-400 hover:text-[#0c1d36]"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
            <p className="py-4 text-xs font-sans text-[#475569] leading-relaxed">
              {modalContent.content}
            </p>
            <div className="pt-3 border-t border-[#e8e2d8] flex justify-end">
              <button
                onClick={() => setModalContent(null)}
                className="px-4 py-2 bg-[#0c1d36] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1e3a61]"
              >
                Acknowledge &amp; Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
