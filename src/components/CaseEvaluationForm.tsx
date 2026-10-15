import React, { useState, useEffect } from 'react';
import { CHAMBER_CONTACTS } from '../data/legalData';

interface CaseEvaluationFormProps {
  initialMatter?: string;
  initialUrgency?: string;
}

export const CaseEvaluationForm: React.FC<CaseEvaluationFormProps> = ({
  initialMatter = '',
  initialUrgency = 'regular',
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [matterType, setMatterType] = useState(initialMatter);
  const [urgencyLevel, setUrgencyLevel] = useState(initialUrgency);
  const [summary, setSummary] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedBrief, setSubmittedBrief] = useState<{
    referenceId: string;
    timestamp: string;
    name: string;
    matter: string;
    urgency: string;
    phone: string;
  } | null>(null);

  useEffect(() => {
    if (initialMatter) {
      setMatterType(initialMatter);
    }
  }, [initialMatter]);

  useEffect(() => {
    if (initialUrgency) {
      setUrgencyLevel(initialUrgency);
    }
  }, [initialUrgency]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const randomSuffix = Math.floor(1000 + Math.random() * 9000);
      const refId = `MLA-CR-2026/${randomSuffix}`;
      const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      setSubmittedBrief({
        referenceId: refId,
        timestamp: now,
        name: fullName,
        matter: matterType,
        urgency: urgencyLevel,
        phone: phone,
      });
      setIsSubmitting(false);
    }, 600);
  };

  const handleReset = () => {
    setSubmittedBrief(null);
    setFullName('');
    setPhone('');
    setSummary('');
    setUrgencyLevel('regular');
  };

  const getWhatsAppMessage = () => {
    if (!submittedBrief) return '';
    return encodeURIComponent(
      `*CHAMBER CASE BRIEF [${submittedBrief.referenceId}]*\n` +
      `Client: ${fullName}\n` +
      `Phone: ${phone}\n` +
      `Matter: ${matterType}\n` +
      `Urgency: ${urgencyLevel.toUpperCase()}\n` +
      `Summary: ${summary}`
    );
  };

  return (
    <section className="w-full bg-[#ffffff] py-20 lg:py-28 border-b border-[#e6dfd1] relative" id="case-evaluation">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-6 h-[1px] bg-[#96722c]"></span>
            <span className="font-sans text-xs uppercase text-[#96722c] tracking-[0.25em] font-bold">
              Client Privilege Protocol
            </span>
            <span className="w-6 h-[1px] bg-[#96722c]"></span>
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[#0c1d36] tracking-tight">
            Confidential Case Evaluation
          </h2>
          <p className="font-sans text-sm text-[#4a5568] mt-3 leading-relaxed">
            Submit your legal inquiry directly to the chambers. All details received are strictly confidential and governed by immediate legal professional privilege.
          </p>
        </div>

        {/* Form Container with Folio Visual Strip */}
        <div className="bg-[#faf8f5] border border-[#e6dfd1] shadow-[0_8px_30px_rgba(12,29,54,0.06)] overflow-hidden">
          {/* Top Folio Ribbon Banner */}
          <div className="bg-[#f4efe6] px-6 py-4 border-b border-[#e6dfd1] flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2.5 text-[#0c1d36] font-semibold">
              <span className="material-symbols-outlined text-[#96722c] text-[18px]">verified</span>
              <span>Chamber Registry Docket Transmission</span>
            </div>
            <div className="flex items-center gap-4 text-[#6b778d]">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[15px] text-[#96722c]">lock</span>
                256-bit Encrypted
              </span>
              <span>•</span>
              <span className="text-[#96722c] font-medium">Qanun-e-Shahadat Protected</span>
            </div>
          </div>

          <div className="p-8 lg:p-12">
            {!submittedBrief ? (
              <form className="space-y-6" id="evaluation-form" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label
                      className="block font-sans text-xs font-semibold uppercase tracking-wider text-[#0c1d36]"
                      htmlFor="client-name"
                    >
                      Full Legal Name <span className="text-[#8c1d1d]">*</span>
                    </label>
                    <input
                      className="w-full bg-[#ffffff] border border-[#e6dfd1] px-4 py-3.5 text-[#0c1d36] font-sans text-sm focus:outline-none focus:border-[#96722c] focus:ring-1 focus:ring-[#96722c]/20 transition-all placeholder:text-stone-400"
                      id="client-name"
                      placeholder="e.g., Tariq Mehmood"
                      required
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>

                  {/* Phone / WhatsApp */}
                  <div className="space-y-2">
                    <label
                      className="block font-sans text-xs font-semibold uppercase tracking-wider text-[#0c1d36]"
                      htmlFor="client-phone"
                    >
                      Phone / WhatsApp Number <span className="text-[#8c1d1d]">*</span>
                    </label>
                    <input
                      className="w-full bg-[#ffffff] border border-[#e6dfd1] px-4 py-3.5 text-[#0c1d36] font-sans text-sm focus:outline-none focus:border-[#96722c] focus:ring-1 focus:ring-[#96722c]/20 transition-all placeholder:text-stone-400"
                      id="client-phone"
                      placeholder="03XX-XXXXXXX"
                      required
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  {/* Matter Type Dropdown */}
                  <div className="space-y-2">
                    <label
                      className="block font-sans text-xs font-semibold uppercase tracking-wider text-[#0c1d36]"
                      htmlFor="matter-type"
                    >
                      Primary Matter Category <span className="text-[#8c1d1d]">*</span>
                    </label>
                    <select
                      className="w-full bg-[#ffffff] border border-[#e6dfd1] px-4 py-3.5 text-[#0c1d36] font-sans text-sm focus:outline-none focus:border-[#96722c] focus:ring-1 focus:ring-[#96722c]/20 transition-all cursor-pointer"
                      id="matter-type"
                      required
                      value={matterType}
                      onChange={(e) => setMatterType(e.target.value)}
                    >
                      <option value="" disabled>Select Matter Jurisdiction</option>
                      <option value="criminal-bail">Bail Application (Pre-arrest / Post-arrest)</option>
                      <option value="criminal-trial">Criminal Defense &amp; Trial Advocacy</option>
                      <option value="white-collar">NAB, FIA &amp; Cyber Crime Investigation</option>
                      <option value="cnsa-narcotics">Anti-Narcotics (CNSA Special Court)</option>
                      <option value="civil-litigation">Civil Suit, Stay &amp; Injunction Matter</option>
                      <option value="family-custody">Family Law, Khula &amp; Child Custody</option>
                      <option value="property-dispute">Property Dispute &amp; Title Verification</option>
                      <option value="rent-eviction">Rent Dispute &amp; Eviction Proceeding</option>
                      <option value="service-tribunal">Service Tribunal &amp; Departmental Appeal</option>
                      <option value="other">Other Legal Advisory / High Court Matter</option>
                    </select>
                  </div>

                  {/* Urgency Level */}
                  <div className="space-y-2">
                    <label
                      className="block font-sans text-xs font-semibold uppercase tracking-wider text-[#0c1d36]"
                      htmlFor="urgency-level"
                    >
                      Urgency Status <span className="text-[#8c1d1d]">*</span>
                    </label>
                    <select
                      className={`w-full bg-[#ffffff] border px-4 py-3.5 font-sans text-sm focus:outline-none focus:border-[#96722c] focus:ring-1 focus:ring-[#96722c]/20 transition-all cursor-pointer ${
                        urgencyLevel === 'critical'
                          ? 'border-[#8c1d1d] text-[#8c1d1d] font-semibold'
                          : 'border-[#e6dfd1] text-[#0c1d36]'
                      }`}
                      id="urgency-level"
                      required
                      value={urgencyLevel}
                      onChange={(e) => setUrgencyLevel(e.target.value)}
                    >
                      <option className="text-[#8c1d1d] font-bold" value="critical">
                        CRITICAL: Active Police Custody / Immediate Arrest Threat (2-4 hrs)
                      </option>
                      <option value="urgent">
                        URGENT: Upcoming Court Hearing within 48 Hours
                      </option>
                      <option value="regular">
                        STANDARD: Consultation &amp; Scheduled Filing Assessment
                      </option>
                    </select>
                  </div>
                </div>

                {/* Critical Urgency Warning Banner when selected */}
                {urgencyLevel === 'critical' && (
                  <div className="p-3.5 bg-[#fdf5f5] border border-[#eedcdc] flex items-center gap-3 text-xs text-[#8c1d1d] animate-fade-in">
                    <span className="material-symbols-outlined text-[20px] shrink-0">error</span>
                    <span>
                      <strong>High Urgency Notice:</strong> For active police raids, physical remand, or immediate custody interventions, call the Senior Advocate directly on <strong>0321 3103004</strong> immediately after submitting this form.
                    </span>
                  </div>
                )}

                {/* Case Summary Brief */}
                <div className="space-y-2">
                  <label
                    className="block font-sans text-xs font-semibold uppercase tracking-wider text-[#0c1d36]"
                    htmlFor="case-summary"
                  >
                    Summary of Facts, FIR Number, or Injunction Details <span className="text-[#8c1d1d]">*</span>
                  </label>
                  <textarea
                    className="w-full bg-[#ffffff] border border-[#e6dfd1] p-4 text-[#0c1d36] font-sans text-sm focus:outline-none focus:border-[#96722c] focus:ring-1 focus:ring-[#96722c]/20 transition-all resize-y placeholder:text-stone-400"
                    id="case-summary"
                    placeholder="Provide brief relevant facts: Police station name, FIR number & sections (if applicable), court where suit is pending, or nature of grievance..."
                    required
                    rows={4}
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                  />
                </div>

                {/* Privacy Privilege Guarantee */}
                <div className="p-4 bg-[#ffffff] border border-[#e6dfd1] flex items-start gap-3 text-xs text-[#4a5568]">
                  <span className="material-symbols-outlined text-[#96722c] text-[20px] shrink-0 mt-0.5">
                    shield
                  </span>
                  <span className="leading-relaxed">
                    <strong className="text-[#0c1d36]">Privilege Acknowledgment:</strong> Transmitting this brief does not automatically establish an advocate-client retainer until formal consultation is conducted and Vakalatnama executed. All disclosures remain privileged under Article 9 of the Qanun-e-Shahadat Order 1984.
                  </span>
                </div>

                {/* Submission Action Row */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <span className="text-xs text-[#6b778d] font-sans flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[15px] text-[#96722c]">lock</span>
                    Strictly confidential advocate inquiry registry
                  </span>
                  <button
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0c1d36] hover:bg-[#162f52] text-white px-8 py-3.5 text-xs font-semibold uppercase tracking-widest transition-all shadow-md disabled:opacity-50 cursor-pointer active:scale-95 group"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    <span className="material-symbols-outlined text-[17px] text-[#c9a45c] group-hover:translate-x-0.5 transition-transform">
                      {isSubmitting ? 'hourglass_top' : 'send'}
                    </span>
                    <span>{isSubmitting ? 'Transmitting Brief...' : 'Submit Confidential Brief'}</span>
                  </button>
                </div>
              </form>
            ) : (
              /* Chamber Confirmation Receipt State with Wax Seal Elegance */
              <div className="space-y-6 animate-fade-in" id="form-success">
                <div className="p-7 bg-white border border-[#e6dfd1] shadow-xs relative">
                  <div className="flex items-center justify-between pb-4 border-b border-[#e6dfd1]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#faf8f5] border border-[#96722c]/40 flex items-center justify-center text-[#96722c]">
                        <span className="material-symbols-outlined text-[24px]">verified</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-[#96722c] font-bold block">
                          Registry Receipt
                        </span>
                        <h3 className="font-serif text-xl font-bold text-[#0c1d36]">
                          Brief Received by Senior Chambers
                        </h3>
                      </div>
                    </div>
                    <span className="font-mono text-xs font-bold text-[#96722c] bg-[#f4efe6] px-3 py-1.5 border border-[#e6dfd1]">
                      {submittedBrief.referenceId}
                    </span>
                  </div>

                  <div className="py-5 space-y-3 text-xs font-sans text-[#4a5568]">
                    <p className="leading-relaxed text-sm">
                      Counsel acknowledges receipt of your matter brief. Transmissions are reviewed under the supervision of <strong>Advocate Syed Shahbaz Ali Shah Masoomi</strong> in order of procedural urgency.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
                      <div className="p-3.5 bg-[#faf8f5] border border-[#e6dfd1]">
                        <span className="text-[#6b778d] uppercase text-[10px] block font-semibold">Client Name</span>
                        <strong className="text-[#0c1d36] text-sm">{submittedBrief.name}</strong>
                      </div>
                      <div className="p-3.5 bg-[#faf8f5] border border-[#e6dfd1]">
                        <span className="text-[#6b778d] uppercase text-[10px] block font-semibold">Contact Line</span>
                        <strong className="text-[#0c1d36] text-sm">{submittedBrief.phone}</strong>
                      </div>
                      <div className="p-3.5 bg-[#faf8f5] border border-[#e6dfd1]">
                        <span className="text-[#6b778d] uppercase text-[10px] block font-semibold">Urgency Status</span>
                        <strong className={`text-sm ${submittedBrief.urgency === 'critical' ? 'text-[#8c1d1d]' : 'text-[#0c1d36]'}`}>
                          {submittedBrief.urgency.toUpperCase()}
                        </strong>
                      </div>
                    </div>

                    {submittedBrief.urgency === 'critical' && (
                      <div className="mt-3 p-3.5 bg-[#fdf5f5] border border-[#eedcdc] text-[#8c1d1d] text-xs leading-relaxed">
                        <strong>CRITICAL CUSTODY NOTICE:</strong> For pre-arrest protection or active custody proceedings, please telephone our Senior Advocate directly on <strong>0321 3103004</strong> right away.
                      </div>
                    )}
                  </div>

                  <div className="pt-5 border-t border-[#e6dfd1] flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-2.5">
                      <a
                        href={`https://wa.me/${CHAMBER_CONTACTS.whatsappNumber}?text=${getWhatsAppMessage()}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold uppercase tracking-wider shadow-xs transition-colors"
                      >
                        <span className="material-symbols-outlined text-[16px]">chat</span>
                        <span>Dispatch via Chamber WhatsApp</span>
                      </a>

                      <a
                        href={CHAMBER_CONTACTS.primaryPhoneTel}
                        className="inline-flex items-center gap-2 px-5 py-3 bg-[#0c1d36] hover:bg-[#162f52] text-white text-xs font-semibold uppercase tracking-wider shadow-xs transition-colors"
                      >
                        <span className="material-symbols-outlined text-[16px]">call</span>
                        <span>Call Senior Advocate</span>
                      </a>
                    </div>

                    <button
                      onClick={handleReset}
                      className="text-xs uppercase font-semibold text-[#6b778d] hover:text-[#0c1d36] underline cursor-pointer"
                    >
                      Submit Another Brief
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
