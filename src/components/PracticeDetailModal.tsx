import React from 'react';
import { PracticeArea } from '../data/legalData';

interface PracticeDetailModalProps {
  area: PracticeArea | null;
  onClose: () => void;
  onConsult: (areaId: string) => void;
}

export const PracticeDetailModal: React.FC<PracticeDetailModalProps> = ({
  area,
  onClose,
  onConsult,
}) => {
  if (!area) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0c1d36]/75 backdrop-blur-xs animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white border border-[#e8e2d8] shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 lg:p-8 text-[#0c1d36] relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="flex items-start justify-between pb-4 border-b border-[#e8e2d8]">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#96722c] text-[24px]">
                {area.iconName}
              </span>
              <span className="font-sans text-xs uppercase tracking-widest text-[#96722c] font-bold">
                {area.badge}
              </span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#0c1d36]">
              {area.title}
            </h3>
            <span className="font-sans text-xs text-[#64748b]">
              Primary Judicial Forum: <strong className="text-[#0c1d36]">{area.court}</strong>
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-[#0c1d36] transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>

        {/* Overview */}
        <div className="py-4 border-b border-[#e8e2d8]">
          <p className="font-sans text-sm text-[#475569] leading-relaxed">
            {area.description}
          </p>
        </div>

        {/* Statutory Grounding */}
        <div className="py-4 border-b border-[#e8e2d8] space-y-2">
          <span className="font-sans text-xs uppercase tracking-wider text-[#96722c] font-bold block">
            Statutory Framework &amp; Enabling Laws
          </span>
          <ul className="space-y-1.5 text-xs text-[#475569]">
            {area.statutoryBasis.map((statute, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#96722c] text-[16px] shrink-0 mt-0.5">
                  check
                </span>
                <span>{statute}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Procedures & Strategic Advocacy */}
        <div className="py-4 border-b border-[#e8e2d8] space-y-2">
          <span className="font-sans text-xs uppercase tracking-wider text-[#96722c] font-bold block">
            Chamber Procedural Focus
          </span>
          <ul className="space-y-1.5 text-xs text-[#475569]">
            {area.keyProcedures.map((proc, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#0c1d36] text-[16px] shrink-0 mt-0.5">
                  arrow_right
                </span>
                <span>{proc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Document Checklist */}
        <div className="py-4 space-y-2 bg-[#f3efea]/50 p-4 border border-[#e8e2d8] my-4">
          <span className="font-sans text-xs uppercase tracking-wider text-[#0c1d36] font-bold block flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[#96722c] text-[18px]">
              folder_open
            </span>
            Required Consultation Documents Checklist
          </span>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#475569] pt-1">
            {area.documentsRequired.map((doc, idx) => (
              <li key={idx} className="flex items-start gap-1.5 bg-white p-2 border border-[#e8e2d8]">
                <span className="text-[#96722c] font-bold">·</span>
                <span>{doc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Modal Actions */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 border border-[#e8e2d8] text-xs font-semibold uppercase tracking-wider text-[#475569] hover:bg-[#f3efea] transition-all"
          >
            Close Dossier
          </button>

          <button
            onClick={() => {
              onConsult(area.id);
              onClose();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0c1d36] hover:bg-[#1e3a61] text-white px-6 py-2.5 text-xs font-semibold uppercase tracking-widest transition-all"
          >
            <span>Retain / Consult on this Matter</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};
