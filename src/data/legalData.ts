export interface PracticeArea {
  id: string;
  romanId: string;
  category: 'criminal' | 'regulatory' | 'civil' | 'family' | 'property' | 'service';
  title: string;
  badge: string;
  court: string;
  description: string;
  iconName: string;
  isUrgent?: boolean;
  statutoryBasis: string[];
  keyProcedures: string[];
  documentsRequired: string[];
}

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'criminal-defense',
    romanId: 'I. Litigation',
    category: 'criminal',
    title: 'Criminal Defense & Trial Advocacy',
    badge: 'I. Litigation',
    court: 'Trial & High Court',
    description: 'Formidable defense strategy for Sessions trials, FIR quashment under Section 561-A CrPC, cross-examinations, state appeals, and constitutional writs against unlawful police excess.',
    iconName: 'gavel',
    statutoryBasis: [
      'Code of Criminal Procedure 1898 (CrPC)',
      'Pakistan Penal Code 1860 (PPC)',
      'Constitution of Pakistan (Article 199 - Writ of Habeas Corpus & Mandamus)',
      'Qanun-e-Shahadat Order 1984'
    ],
    keyProcedures: [
      'Quashment of Malafide FIRs under Section 561-A CrPC before High Court of Sindh',
      'Defense in Sessions & Additional Sessions Court Murder / Robbery / Heinous Crime Trials',
      'Evidentiary scrutiny, rigorous cross-examination of prosecution witnesses',
      'Appeals against conviction and criminal revisions'
    ],
    documentsRequired: [
      'Copy of First Information Report (FIR)',
      'Police Challan / Charge Sheet under Section 173 CrPC (if submitted)',
      'Order sheets of the trial court',
      'Identity documents of the accused and sureties'
    ]
  },
  {
    id: 'bail-matters',
    romanId: 'II. Special Relief',
    category: 'criminal',
    title: 'Bail Matters & Personal Liberty',
    badge: 'II. Special Relief',
    court: '24/7 Urgent Filings',
    description: 'Expedited motions for Pre-Arrest Bail, Post-Arrest Bail, Protective Bail to restrain arbitrary detention, and Transit Bail across provincial jurisdictions with immediate bench filings.',
    iconName: 'lock_open',
    isUrgent: true,
    statutoryBasis: [
      'Section 498 CrPC (Anticipatory / Pre-Arrest Bail)',
      'Section 497 CrPC (Post-Arrest Bail in non-bailable offences)',
      'Constitutional Protective Bail (High Court of Sindh inherent jurisdiction)',
      'Transit Bail under CrPC'
    ],
    keyProcedures: [
      'Immediate drafted petition moved before the Duty Judge / Sessions Court within 2 hours',
      'Urgent motion before Sindh High Court Single Bench for Protective Bail',
      'Furnishing solvent sureties and PR Bonds to avoid custodial transfer',
      'Habeas Corpus petitions under Section 491 CrPC for illegal police confinement'
    ],
    documentsRequired: [
      'FIR Number, Police Station name & District',
      'Arrest memo or remand order (for post-arrest bail)',
      'CNIC copy of the accused and primary family contact',
      'Documentary evidence showing prima facie malafide motive'
    ]
  },
  {
    id: 'white-collar',
    romanId: 'III. Regulatory Defense',
    category: 'regulatory',
    title: 'FIA & NAB White Collar Defense',
    badge: 'III. Regulatory Defense',
    court: 'Special Accountability Courts',
    description: 'Comprehensive defense in National Accountability Bureau (NAB) references, Federal Investigation Agency (FIA) cybercrime, money laundering, bank fraud, and anti-corruption inquiries.',
    iconName: 'account_balance',
    statutoryBasis: [
      'National Accountability Ordinance 1999 (NAO)',
      'Prevention of Electronic Crimes Act 2016 (PECA)',
      'Anti-Money Laundering Act 2010 (AMLA)',
      'Federal Investigation Agency Act 1974'
    ],
    keyProcedures: [
      'Legal representation during Call-Up Notices and Inquiry Stage before FIA & NAB',
      'Bail Petitions before the Division Bench of the High Court of Sindh',
      'Challenging jurisdiction and arbitrary freeze of corporate bank accounts',
      'Defense in Special Courts for Banking, Cyber Crimes & Anti-Corruption'
    ],
    documentsRequired: [
      'Copy of FIA / NAB Call-Up Notice or Inquiry letter',
      'Bank statements and relevant business transaction ledgers',
      'Board resolutions and contractual agreements in dispute',
      'Forensic audit reports (if any)'
    ]
  },
  {
    id: 'anti-narcotics',
    romanId: 'IV. Special Statute',
    category: 'criminal',
    title: 'Anti-Narcotics (CNSA Court Matters)',
    badge: 'IV. Special Statute',
    court: 'Special CNSA Courts',
    description: 'Rigorous evidentiary defense under the Control of Narcotic Substances Act (CNSA). Scrutinizing chain of custody, chemical examiner reports, and procedural search irregularities.',
    iconName: 'balance',
    statutoryBasis: [
      'Control of Narcotic Substances Act 1997 (CNSA)',
      'Anti-Narcotics Force Act 1997',
      'Sindh Forensic Science Laboratory Protocols'
    ],
    keyProcedures: [
      'Scrutiny of mandatory search & seizure procedural compliance under Section 21 CNSA',
      'Challenging chain of custody and chemical analyst dispatch delays',
      'Bail petitions under Section 9(a), 9(b), and 9(c) CNSA before Special Courts and High Court',
      'Trial defense based on independent public witnesses requirements'
    ],
    documentsRequired: [
      'FIR registered by ANF or Excise / Local Police',
      'Recovery memo / Seizure list (Fard-e-Maqboozi)',
      'Chemical Examiner / Laboratory report',
      'Remand papers and previous bail orders'
    ]
  },
  {
    id: 'civil-litigation',
    romanId: 'V. Civil Equity',
    category: 'civil',
    title: 'Civil Litigation & Injunctions',
    badge: 'V. Civil Equity',
    court: 'District & High Court',
    description: 'Suits for declaration, specific performance of contracts, permanent and temporary restraining orders (stay applications), partition, recovery of damages, and appellate revisions.',
    iconName: 'contract',
    statutoryBasis: [
      'Code of Civil Procedure 1908 (CPC)',
      'Specific Relief Act 1877 (Sections 42, 52, 54)',
      'Limitation Act 1908',
      'Sindh Chief Court Rules (Original Side)'
    ],
    keyProcedures: [
      'Ex-parte stay orders and temporary injunctions under Order XXXIX Rules 1 & 2 CPC',
      'Plaint drafting for Declaration of Title, Specific Performance, and Partition',
      'First Appeals (RFA) and Civil Revisions before the High Court of Sindh',
      'Execution of decrees and contempt of court proceedings for injunction breaches'
    ],
    documentsRequired: [
      'Agreement to Sell, Sale Deed, or Lease Contract',
      'Revenue records, mutation entries, and registry extracts',
      'Written correspondence and legal notice exchanged',
      'Site photographs and utility connection bills'
    ]
  },
  {
    id: 'family-law',
    romanId: 'VI. Matrimonial Law',
    category: 'family',
    title: 'Family Law, Khula & Custody',
    badge: 'VI. Matrimonial Law',
    court: 'Family Courts & Appeals',
    description: 'Compassionate, legally rigorous handling of Child Custody (Hizanat), Visitation Rights, Guardianship Certificates, Khula, Dower recovery, and spousal maintenance litigation.',
    iconName: 'diversity_1',
    statutoryBasis: [
      'Family Courts Act 1964',
      'Guardians and Wards Act 1890',
      'Muslim Family Laws Ordinance 1961 (MFLO)',
      'Dissolution of Muslim Marriages Act 1939'
    ],
    keyProcedures: [
      'Petition for Child Custody & interim visitation schedule preservation',
      'Guardianship certificate applications for minor property and overseas relocation',
      'Khula decrees with judicial determination of Haq Mehr / deferred dower',
      'Enforcement of maintenance decrees against defaulting spouses'
    ],
    documentsRequired: [
      'Nikahnama (original or certified NADRA marriage registration certificate)',
      'Birth certificates / B-Form of minors issued by NADRA',
      'Proof of father/mother monthly income and school fee receipts',
      'Previous notices or reconciliatory arbitration committee records'
    ]
  },
  {
    id: 'property-disputes',
    romanId: 'VII. Real Property',
    category: 'property',
    title: 'Property Disputes & Title Verification',
    badge: 'VII. Real Property',
    court: 'Revenue & Civil Courts',
    description: 'Complex land title due diligence, demarcation disputes, fraudulent transfer challenges, succession certificates, and property rights enforcement across DHA, Clifton, and all Karachi districts.',
    iconName: 'domain',
    statutoryBasis: [
      'Transfer of Property Act 1882',
      'Registration Act 1908',
      'Succession Act 1925',
      'Sindh Land Revenue Act 1967'
    ],
    keyProcedures: [
      'Exhaustive 30-year title verification and non-encumbrance search across sub-registries',
      'Cancellation of forged and fabricated registered sale deeds / gift deeds',
      'Succession Certificate & Letter of Administration before Karachi District Courts',
      'Protection of possession against land grabbers (qabza mafia) under Illegal Dispossession Act'
    ],
    documentsRequired: [
      'Title Deeds, Sub-Lease, or Allotment Order (DHA / KDA / PECHS)',
      'Search certificate from Sub-Registrar Office',
      'Mutation in Revenue Records (Form VII / PRAL / Board of Revenue)',
      'Death Certificate and Family Registration Certificate (FRC) for inheritance'
    ]
  },
  {
    id: 'rent-cases',
    romanId: 'VIII. Tenancy',
    category: 'property',
    title: 'Rent Cases & Eviction Proceedings',
    badge: 'VIII. Tenancy',
    court: 'Rent Controller Courts',
    description: 'Representation before the Rent Controller under the Sindh Rented Premises Ordinance. Bona fide personal need evictions, default in rent recovery, and tenancy drafting.',
    iconName: 'real_estate_agent',
    statutoryBasis: [
      'Sindh Rented Premises Ordinance 1979 (SRPO)',
      'Sindh Tenancy Act',
      'Civil Procedure Code (relevant evidentiary provisions)'
    ],
    keyProcedures: [
      'Eviction application under Section 15 SRPO for default in payment of rent',
      'Eviction applications on grounds of bona fide personal use of landlord/family',
      'Defense of legitimate commercial and residential tenants against wrongful eviction',
      'Rent Appeal before Additional District Judge (Appellate Rent Tribunal)'
    ],
    documentsRequired: [
      'Original Tenancy Agreement with stamp duty payment proof',
      'Bank statement showing rent receipts or default notice receipts',
      'Legal notice served upon the tenant through registered post / courier',
      'Proof of ownership of the rented premises'
    ]
  },
  {
    id: 'service-tribunal',
    romanId: 'IX. Administrative',
    category: 'service',
    title: 'Service Tribunal Matters',
    badge: 'IX. Administrative',
    court: 'Provincial & Federal Tribunals',
    description: 'Protecting civil servants, judicial staff, and public officers in departmental inquiries, wrongful terminations, seniority disputes, promotion denials, and Sindh Service Tribunal appeals.',
    iconName: 'badge',
    statutoryBasis: [
      'Sindh Service Tribunals Act 1973',
      'Federal Service Tribunals Act 1973',
      'Sindh Civil Servants Act 1973 & Efficiency and Discipline (E&D) Rules',
      'Constitution of Pakistan (Article 212 - Administrative Courts and Tribunals)'
    ],
    keyProcedures: [
      'Appeals against major penalties (dismissal, removal from service, compulsory retirement)',
      'Challenging denial of promotion and incorrect seniority list placement',
      'Departmental appeals and representation before competent appellate authorities',
      'Enforcement of tribunal judgments through contempt proceedings'
    ],
    documentsRequired: [
      'Show Cause Notice and Charge Sheet issued by department',
      'Inquiry Officer report and Findings',
      'Final penalty notification / termination order',
      'Copy of departmental appeal filed within statutory timeline'
    ]
  }
];

export const CHAMBER_CONTACTS = {
  primaryPhone: '0321 3103004',
  primaryPhoneTel: 'tel:03213103004',
  secondaryPhone: '+92 371 3898818',
  secondaryPhoneTel: 'tel:+923713898818',
  whatsappNumber: '923213103004',
  address: 'Tauheed Commercial, Phase 5, Defence Housing Authority (DHA), Karachi, Sindh 75500, Pakistan.',
  highCourtLocation: 'Opposite Court Registry, Court Road, Karachi.',
  crestUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiWmrUDpVRSRYn3D-TpferMORXxySPObmu_rVbJCQb-IW7x9bJUaR6ZM8LVBAYEjt2JhkXvRGUpPt7GYm8na0qWxgShNTJLzIH2tOsGaKu-eACEICkZsel_G56XQc7LztE2caxSdBsctah8_RDH3FAR8b1ielgyYPw9M_7lr7vQP7BkUu9UJf-aqpKXT5O3olwUac-xgFgjvMe-y_H7THrrhB68Ejgwg0uy5tI2xxYEVSOvOp6mDpMUA',
  images: {
    chamberLibrary: '/src/assets/images/chamber_law_library_1792061621984.jpg',
    courtColumns: '/src/assets/images/court_columns_monument_1792061622295.jpg',
    leatherFolio: '/src/assets/images/advocate_leather_folio_1792061622270.jpg',
  },
  hours: {
    weekdays: '5:00 PM – 9:30 PM',
    saturday: '3:00 PM – 8:00 PM',
    urgentBail: '24 Hours / 7 Days Active',
    courtHours: '8:30 AM – 1:30 PM (Daily Cause List Sessions)'
  }
};
