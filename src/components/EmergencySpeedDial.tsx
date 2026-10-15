import React, { useState } from 'react';
import { CHAMBER_CONTACTS } from '../data/legalData';

interface EmergencySpeedDialProps {
  onQuickBail: () => void;
}

export const EmergencySpeedDial: React.FC<EmergencySpeedDialProps> = ({ onQuickBail }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-20 right-4 lg:bottom-6 lg:right-6 z-40 flex flex-col items-end font-sans">
      {isOpen && (
        <div className="mb-3 bg-white border border-[#e8e2d8] shadow-2xl p-4 w-72 space-y-3 animate-fade-in text-[#0c1d36]">
          <div className="flex items-center justify-between pb-2 border-b border-[#e8e2d8]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#8f1d1d] animate-pulse"></span>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#8f1d1d]">
                Immediate Legal Interventions
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-[#0c1d36]"
            >
              <span className="material-symbols-outlined text-[16px]">close</span>
            </button>
          </div>

          <div className="space-y-2 text-xs">
            <a
              href={CHAMBER_CONTACTS.primaryPhoneTel}
              className="flex items-center justify-between p-2.5 bg-[#8f1d1d] text-white font-semibold hover:bg-red-800 transition-colors"
            >
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px]">call</span>
                <span>Call Advocate High Court</span>
              </span>
              <span className="font-bold text-[11px]">0321 3103004</span>
            </a>

            <a
              href={`https://wa.me/${CHAMBER_CONTACTS.whatsappNumber}?text=Urgent%20legal%20assistance%20required%20regarding%20bail%20/%20custody.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 bg-emerald-700 text-white font-semibold hover:bg-emerald-800 transition-colors"
            >
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px]">chat</span>
                <span>WhatsApp Chambers</span>
              </span>
              <span className="text-[10px] uppercase tracking-wider">Fast Response</span>
            </a>

            <button
              onClick={() => {
                setIsOpen(false);
                onQuickBail();
                const el = document.getElementById('urgent-bail');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full flex items-center justify-between p-2 bg-[#f3efea] hover:bg-[#e8e2d8] text-[#0c1d36] font-semibold transition-colors"
            >
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-[#96722c]">
                  emergency
                </span>
                <span>Urgent Bail Filing Procedures</span>
              </span>
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </button>
          </div>
        </div>
      )}

      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-[#8f1d1d] hover:bg-red-800 text-white px-4 py-3 shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 cursor-pointer border border-red-700/50"
        aria-label="24/7 Urgent Legal Helpline"
      >
        <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
        <span className="material-symbols-outlined text-[20px]">support_agent</span>
        <span className="text-xs uppercase font-bold tracking-wider hidden sm:inline">
          24/7 Urgent Bail Help
        </span>
      </button>
    </div>
  );
};
