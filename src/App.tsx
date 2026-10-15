/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { UrgentBailBanner } from './components/UrgentBailBanner';
import { PracticeAreas } from './components/PracticeAreas';
import { AdvocateProfile } from './components/AdvocateProfile';
import { CaseEvaluationForm } from './components/CaseEvaluationForm';
import { OfficeContact } from './components/OfficeContact';
import { StatutoryNotice } from './components/StatutoryNotice';
import { Footer } from './components/Footer';
import { EmergencySpeedDial } from './components/EmergencySpeedDial';

export default function App() {
  const [targetMatter, setTargetMatter] = useState<string>('');
  const [targetUrgency, setTargetUrgency] = useState<string>('regular');

  const handleSelectPractice = (practiceId: string) => {
    // Map practice ID to evaluation form dropdown values
    const mapping: Record<string, string> = {
      'criminal-defense': 'criminal-trial',
      'bail-matters': 'criminal-bail',
      'white-collar': 'white-collar',
      'anti-narcotics': 'cnsa-narcotics',
      'civil-litigation': 'civil-litigation',
      'family-law': 'family-custody',
      'property-disputes': 'property-dispute',
      'rent-cases': 'rent-eviction',
      'service-tribunal': 'service-tribunal',
    };

    setTargetMatter(mapping[practiceId] || 'other');
    if (practiceId === 'bail-matters') {
      setTargetUrgency('critical');
    } else {
      setTargetUrgency('regular');
    }
  };

  const handleOpenUrgentBail = () => {
    setTargetMatter('criminal-bail');
    setTargetUrgency('critical');
  };

  const handleOpenEvaluation = (category?: string) => {
    if (category) {
      setTargetMatter(category);
    }
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] font-sans text-[#475569] antialiased selection:bg-[#f7f1e6] selection:text-[#96722c]">
      {/* Sticky Fixed Header */}
      <Header onOpenEvaluation={handleOpenEvaluation} />

      {/* Main Content Sections */}
      <main className="w-full pt-20 lg:pt-0 pb-20 lg:pb-0 bg-[#faf8f5]">
        <div className="flex flex-col w-full text-[#0c1d36]">
          {/* Hero Section */}
          <Hero
            onOpenUrgentBail={handleOpenUrgentBail}
            onOpenEvaluation={() => handleOpenEvaluation()}
          />

          {/* Urgent Bail & Remand Action Banner */}
          <UrgentBailBanner onSelectUrgentMatter={handleOpenUrgentBail} />

          {/* 9 Core Statutory & Judicial Practice Verticals */}
          <PracticeAreas onSelectPractice={handleSelectPractice} />

          {/* Lead Advocate Profile & Chamber Doctrine */}
          <AdvocateProfile />

          {/* Confidential Case Evaluation & Appointment Form */}
          <CaseEvaluationForm
            initialMatter={targetMatter}
            initialUrgency={targetUrgency}
          />

          {/* Location, Chamber Hours & Registry Details */}
          <OfficeContact />

          {/* Statutory Compliance & Legal Disclaimer Notice */}
          <StatutoryNotice />
        </div>
      </main>

      {/* Stately Deep Navy Footer */}
      <Footer
        onSelectPractice={handleSelectPractice}
        onOpenEvaluation={() => handleOpenEvaluation()}
      />

      {/* 24/7 Urgent Legal Helpline Floating Dial */}
      <EmergencySpeedDial onQuickBail={handleOpenUrgentBail} />
    </div>
  );
}
