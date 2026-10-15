import React from 'react';

export const StatutoryNotice: React.FC = () => {
  return (
    <section className="w-full bg-[#ffffff] py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="bg-[#f3efea] p-6 border-l-4 border-[#96722c] border-y border-r border-[#e8e2d8]">
          <div className="flex items-center gap-2 text-[#0c1d36] mb-2">
            <span className="material-symbols-outlined text-[20px] text-[#96722c]">
              gavel
            </span>
            <span className="font-sans text-xs uppercase tracking-wider font-bold">
              Statutory Compliance &amp; Legal Notice
            </span>
          </div>
          <p className="font-sans text-xs text-[#475569] leading-relaxed">
            Disclaimer: Masoomi Law Associates is an independent legal practice headed by Advocate High Court Syed Shahbaz Ali Shah Masoomi, enrolled with the Sindh Bar Council. Legal services are provided directly to clients in accordance with the Legal Practitioners and Bar Councils Act and professional conduct rules. Past results or case descriptions do not constitute a guarantee of legal outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};
