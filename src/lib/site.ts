/**
 * Central site configuration for Naresh Kumar & Associates.
 * Content marked awaitingConfirmation must not be treated as published until client + legal review.
 */

export type PublicationFlags = {
  /** Contact numbers/addresses confirmed for public launch */
  contactsConfirmed: boolean;
  /** Associate names/photos confirmed + BCI-compliant to display */
  associatesConfirmed: boolean;
  /** Application portals legally/professionally approved */
  applicationsLegallyApproved: boolean;
  /** Social profile URLs confirmed */
  socialUrlsConfirmed: boolean;
  /** Domain / production URL finalized */
  domainFinalized: boolean;
};

export const publicationFlags: PublicationFlags = {
  contactsConfirmed: false,
  associatesConfirmed: false,
  applicationsLegallyApproved: false,
  socialUrlsConfirmed: false,
  domainFinalized: false,
};

export const siteConfig = {
  title: "Naresh Kumar & Associates — Advocates & Solicitors",
  description:
    "Informational portal for Naresh Kumar & Associates, Advocates & Solicitors. Published subject to Bar Council of India Rule 36. Educational content only; no solicitation.",
  /** Do not invent a domain — configure via NEXT_PUBLIC_SITE_URL when finalized */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "",
  /** Proposed practice name — not verified as LLP/partnership/company */
  practiceName: "Naresh Kumar & Associates",
  professionalDescriptor: "Advocates & Solicitors",
  logoInitials: "NKA",
  /** Principal advocate */
  advocateName: "Naresh Kumar",
  principalTitle: "Principal Advocate",
  /** Bar enrolment not supplied — keep placeholder */
  barEnrolment: "[PLACEHOLDER: Bar Council Enrolment Number — pending confirmation]",
  jurisdiction: "Supreme Court of India and other forums as listed (pending confirmation)",
  chamberAddress:
    "Chamber No. 772, Lawyers Chamber Block, Saket Court Complex, Saket, New Delhi - 110017, India.",
  registeredOfficeAddress:
    "37, Amrit Nagar, South Extension Part-I, New Delhi - 110049, India.",
  /** Primary mobile */
  mobile: "9312838384",
  mobileTel: "tel:+919312838384",
  /** Additional advocate contact */
  additionalMobile: "7827448384",
  additionalMobileTel: "tel:+917827448384",
  /** Office telephone — note: digit count to confirm with client (011-400045298) */
  officePhone: "011-400045298",
  officePhoneTel: "tel:+9111400045298",
  officePhoneNote:
    "[CONFIRM: Office telephone digit sequence as written — 011-400045298]",
  /** Main professional email — not supplied */
  email:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ??
    "[PLACEHOLDER: Professional contact email — pending]",
  /** Separate applications inbox — info@… domain TBD */
  applicationsEmail:
    process.env.NEXT_PUBLIC_APPLICATIONS_EMAIL ??
    "[PLACEHOLDER: Applications email — info@ domain pending]",
  officeHours: "[PLACEHOLDER: Office hours — pending confirmation]",
  copyrightYear: "2026",
  structureDisclaimer:
    "Proposed branding as “Naresh Kumar & Associates, Advocates & Solicitors”. Not represented as a registered LLP, partnership firm, or company unless and until verified.",
} as const;

/** Configurable social URLs — leave empty until client confirms */
export const socialLinks = {
  instagram: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM ?? "",
  facebook: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK ?? "",
  twitter: process.env.NEXT_PUBLIC_SOCIAL_TWITTER ?? "",
  linkedin: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN ?? "",
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
  /** Hide from public nav until flag true */
  requiresFlag?: keyof PublicationFlags;
};

export const mainNav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Profile", href: "/profile" },
  { label: "Associates", href: "/associates", requiresFlag: "associatesConfirmed" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Forums", href: "/practice-information" },
  {
    label: "Resources",
    href: "/resources/articles",
    children: [
      { label: "Articles", href: "/resources/articles" },
      { label: "Updates", href: "/resources/updates" },
      { label: "News", href: "/resources/news" },
      { label: "Guides", href: "/resources/guides" },
      { label: "Legal FAQ", href: "/resources/legal-faq" },
    ],
  },
  {
    label: "Applications",
    href: "/applications",
    requiresFlag: "applicationsLegallyApproved",
  },
  { label: "Contact", href: "/contact" },
  { label: "Disclaimer", href: "/disclaimer" },
];

/** Nav items shown even when draft (with draft badge) for internal preview */
export const previewNavExtras: NavItem[] = [
  { label: "Associates (draft)", href: "/associates" },
  { label: "Applications (draft)", href: "/applications" },
];

export const footerNav: NavItem[] = [
  { label: "Bar Council Disclaimer", href: "/disclaimer" },
  { label: "Practice Focus", href: "/practice-areas" },
  { label: "Legal Resources", href: "/resources/articles" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Sitemap", href: "/sitemap" },
  { label: "Office Registry", href: "/contact" },
];

export function isNavVisible(item: NavItem): boolean {
  if (!item.requiresFlag) return true;
  return publicationFlags[item.requiresFlag];
}

export type PracticeArea = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  statutes: string;
  /** Client listed this as a practice/forum focus */
  clientSupplied: boolean;
  verified: boolean;
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "constitutional-law",
    title: "Supreme Court Practice — Constitutional & Appellate",
    category: "APEX COURT",
    summary:
      "Client-supplied forum listing: Supreme Court of India. Informational only; not a claim of exclusive practice or guaranteed outcomes.",
    statutes: "Constitution of India",
    clientSupplied: true,
    verified: false,
  },
  {
    slug: "consumer-law",
    title: "Consumer Disputes (NCDRC)",
    category: "CONSUMER PROTECTION",
    summary:
      "Client-supplied forum listing: National Consumer Disputes Redressal Commission (NCDRC). Educational overview of consumer dispute forums.",
    statutes: "Consumer Protection Act, 2019",
    clientSupplied: true,
    verified: false,
  },
  {
    slug: "banking-financial-disputes",
    title: "Debt Recovery (DRT)",
    category: "DEBT RECOVERY",
    summary:
      "Client-supplied forum listing: Debt Recovery Tribunal (DRT). Informational overview of debt recovery frameworks.",
    statutes: "RDDBFI Act; related recovery statutes",
    clientSupplied: true,
    verified: false,
  },
  {
    slug: "corporate-commercial-law",
    title: "Corporate / NCLT & Commercial Disputes",
    category: "CORPORATE & COMMERCIAL",
    summary:
      "Client-supplied listings: National Company Law Tribunal (NCLT) and Commercial Disputes. Informational only.",
    statutes: "Companies Act 2013; Commercial Courts Act 2015",
    clientSupplied: true,
    verified: false,
  },
  {
    slug: "arbitration-dispute-resolution",
    title: "Arbitration Matters",
    category: "ARBITRATION & ADR",
    summary:
      "Client-supplied listing: Arbitration Matters. Overview of arbitration procedure under applicable law.",
    statutes: "Arbitration and Conciliation Act, 1996",
    clientSupplied: true,
    verified: false,
  },
  {
    slug: "intellectual-property-law",
    title: "Trademark / Intellectual Property Rights (IPR)",
    category: "INTELLECTUAL PROPERTY",
    summary:
      "Client-supplied listing: Trademark / IPR. Educational content on trademarks and related intellectual property frameworks.",
    statutes: "Trade Marks Act; Copyright Act; Patents Act",
    clientSupplied: true,
    verified: false,
  },
  {
    slug: "contract-law",
    title: "Corporate Contracts / Litigation",
    category: "CONTRACTS & LITIGATION",
    summary:
      "Client-supplied listing: Corporate Contracts / Litigation. Informational material on contractual disputes and related litigation.",
    statutes: "Indian Contract Act, 1872",
    clientSupplied: true,
    verified: false,
  },
  // Remaining inventory areas — informational, not client-asserted for this practice
  {
    slug: "civil-law",
    title: "Civil Law",
    category: "CIVIL & PROCEDURE",
    summary:
      "General informational page on civil remedies. Not asserted as a confirmed practice focus for this chamber unless verified.",
    statutes: "CPC 1908, Specific Relief Act 1963",
    clientSupplied: false,
    verified: false,
  },
  {
    slug: "criminal-law",
    title: "Criminal Law",
    category: "CRIMINAL JURISPRUDENCE",
    summary:
      "General informational page. Not asserted as a confirmed practice focus unless verified.",
    statutes: "BNSS 2023 / CrPC, BNS 2023 / IPC",
    clientSupplied: false,
    verified: false,
  },
  {
    slug: "property-real-estate-law",
    title: "Property & Real Estate Law",
    category: "PROPERTY & EQUITY",
    summary:
      "General informational page. Not asserted as a confirmed practice focus unless verified.",
    statutes: "Transfer of Property Act, Registration Act 1908",
    clientSupplied: false,
    verified: false,
  },
  {
    slug: "family-law",
    title: "Family Law",
    category: "FAMILY & GUARDIANSHIP",
    summary:
      "General informational page. Not asserted as a confirmed practice focus unless verified.",
    statutes: "Guardian and Wards Act, applicable personal laws",
    clientSupplied: false,
    verified: false,
  },
  {
    slug: "matrimonial-law",
    title: "Matrimonial Law",
    category: "MATRIMONIAL",
    summary:
      "General informational page. Not asserted as a confirmed practice focus unless verified.",
    statutes: "Special Marriage Act, applicable matrimonial statutes",
    clientSupplied: false,
    verified: false,
  },
  {
    slug: "labour-employment-law",
    title: "Labour & Employment Law",
    category: "LABOUR & EMPLOYMENT",
    summary:
      "General informational page. Not asserted as a confirmed practice focus unless verified.",
    statutes: "Industrial Disputes Act, applicable labour codes",
    clientSupplied: false,
    verified: false,
  },
  {
    slug: "cyber-law",
    title: "Cyber Law",
    category: "CYBER & IT",
    summary:
      "General informational page. Not asserted as a confirmed practice focus unless verified.",
    statutes: "IT Act, 2000; Digital Personal Data Protection Act",
    clientSupplied: false,
    verified: false,
  },
];

export function getPracticeArea(slug: string): PracticeArea | undefined {
  return practiceAreas.find((a) => a.slug === slug);
}

export const clientSuppliedPracticeAreas = practiceAreas.filter(
  (a) => a.clientSupplied,
);

/** Courts & forums from handwritten notes — Delhi High Court excluded (crossed out) */
export const forumCards = [
  {
    icon: "account_balance",
    title: "Supreme Court of India",
    description:
      "Client-supplied forum listing. Informational reference only — pending confirmation for public publication.",
    label: "Apex Court · Awaiting confirmation",
  },
  {
    icon: "gavel",
    title: "National Consumer Disputes Redressal Commission (NCDRC)",
    description:
      "Client-supplied forum listing for consumer dispute matters. Not a claim of exclusive practice.",
    label: "Consumer Forum · Awaiting confirmation",
  },
  {
    icon: "account_balance_wallet",
    title: "Debt Recovery Tribunal (DRT)",
    description:
      "Client-supplied forum listing for debt recovery proceedings. Informational only.",
    label: "Debt Recovery · Awaiting confirmation",
  },
  {
    icon: "corporate_fare",
    title: "National Company Law Tribunal (NCLT)",
    description:
      "Client-supplied forum listing for company-law and related tribunal matters.",
    label: "Company Law · Awaiting confirmation",
  },
  {
    icon: "handshake",
    title: "Arbitration Matters",
    description:
      "Client-supplied listing for arbitration-related work. Educational overview of ADR frameworks.",
    label: "Arbitration · Awaiting confirmation",
  },
  {
    icon: "balance",
    title: "Commercial Disputes",
    description:
      "Client-supplied listing for commercial dispute matters. Informational only.",
    label: "Commercial · Awaiting confirmation",
  },
  {
    icon: "copyright",
    title: "Trademark / Intellectual Property Rights (IPR)",
    description:
      "Client-supplied listing for trademark and IPR-related matters.",
    label: "IPR · Awaiting confirmation",
  },
  {
    icon: "contract",
    title: "Corporate Contracts / Litigation",
    description:
      "Client-supplied listing for corporate contracts and related litigation.",
    label: "Contracts · Awaiting confirmation",
  },
] as const;

export type Associate = {
  id: string;
  name: string;
  designation: string;
  /** Path under /public for replaceable photo */
  imageSrc: string;
  imageAlt: string;
  spellingNote?: string;
};

export const associates: Associate[] = [
  {
    id: "brij-pal",
    name: "Brij Pal",
    designation: "Advocate",
    imageSrc: "/images/associates/brij-pal.jpg",
    imageAlt: "Photograph placeholder for Brij Pal, Advocate",
  },
  {
    id: "sunil-kr-chawhan",
    name: "Sunil Kr. Chawhan",
    designation: "Advocate",
    imageSrc: "/images/associates/sunil-kr-chawhan.jpg",
    imageAlt: "Photograph placeholder for Sunil Kr. Chawhan, Advocate",
    spellingNote: "Confirm spelling: Chawhan / Chauhan",
  },
  {
    id: "kaveri-sharma",
    name: "Ms. Kaveri Sharma",
    designation: "Advocate",
    imageSrc: "/images/associates/kaveri-sharma.jpg",
    imageAlt: "Photograph placeholder for Ms. Kaveri Sharma, Advocate",
  },
  {
    id: "luv-kumar",
    name: "Luv Kumar",
    designation: "Advocate",
    imageSrc: "/images/associates/luv-kumar.jpg",
    imageAlt: "Photograph placeholder for Luv Kumar, Advocate",
    spellingNote: "Confirm spelling: Luv / Love",
  },
  {
    id: "jatin-phogat",
    name: "Jatin Phogat",
    designation: "Advocate",
    imageSrc: "/images/associates/jatin-phogat.jpg",
    imageAlt: "Photograph placeholder for Jatin Phogat, Advocate",
  },
];

export type ApplicationCategory = {
  slug: "junior-advocate" | "internship" | "empanelment";
  title: string;
  purpose: string;
  href: string;
};

export const applicationCategories: ApplicationCategory[] = [
  {
    slug: "junior-advocate",
    title: "Junior Advocate Appointment",
    purpose:
      "Applications from advocates interested in appointment as Junior Advocates. Subject to professional and legal approval before public use.",
    href: "/applications/junior-advocate",
  },
  {
    slug: "internship",
    title: "Student Internship",
    purpose:
      "Applications from students interested in internships. Subject to professional and legal approval before public use.",
    href: "/applications/internship",
  },
  {
    slug: "empanelment",
    title: "Advocate Empanelment",
    purpose:
      "Applications from advocates interested in empanelment for delegation or assignment of briefs across courts. Subject to professional and legal approval before public use.",
    href: "/applications/empanelment",
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const siteFaq: FaqItem[] = [
  {
    question: "Does this website solicit legal work?",
    answer:
      "No. This portal is intended to conform with Bar Council of India Rule 36. It provides information only and does not constitute solicitation, advertising, or an invitation to engage legal services.",
  },
  {
    question: "Does contacting the advocate create a client relationship?",
    answer:
      "No advocate-client relationship is formed by viewing this site or transmitting an administrative enquiry. Formal engagement requires separate agreement and compliance with applicable professional rules.",
  },
  {
    question: "Is “Naresh Kumar & Associates” a registered firm or LLP?",
    answer:
      "The name is proposed branding for this informational portal. The practice is not represented as a registered LLP, partnership, or company unless and until that structure is verified and confirmed for publication.",
  },
  {
    question: "Are associate profiles and application portals public?",
    answer:
      "Associate listings and application workflows are prepared for the project but remain unpublished pending client confirmation and professional/legal approval under applicable BCI rules.",
  },
  {
    question: "How is personal data handled?",
    answer:
      "See the Privacy Policy. Enquiry and application data, if enabled, are used only to respond to the relevant administrative communication where permitted.",
  },
];

export const legalFaq: FaqItem[] = [
  {
    question: "What is arbitration?",
    answer:
      "Arbitration is a form of alternative dispute resolution where parties agree to resolve disputes before an arbitral tribunal under applicable law. This is general information only.",
  },
  {
    question: "What is the NCLT?",
    answer:
      "The National Company Law Tribunal adjudicates certain company-law and insolvency-related matters under applicable statutes. This is educational information only.",
  },
  {
    question: "What is the NCDRC?",
    answer:
      "The National Consumer Disputes Redressal Commission is a consumer dispute forum under the Consumer Protection Act. This is general information only.",
  },
];

export type Article = {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "proportionality-article-226",
    title: "Doctrine of Proportionality in Administrative Review — Educational Note",
    category: "CONSTITUTIONAL JURISPRUDENCE",
    date: "[PLACEHOLDER: Month, Year]",
    excerpt:
      "A generic educational note on structured proportionality in judicial review. Not attributable to live proceedings.",
    body: [
      "This article is a placeholder digest for educational reference only. It does not relate to any specific case or client matter.",
      "Readers should consult primary sources and qualified counsel for application to particular facts.",
    ],
  },
  {
    slug: "section-11-arbitration",
    title: "Scope of Referral under Section 11(6) — Educational Overview",
    category: "ARBITRATION PRACTICE",
    date: "[PLACEHOLDER: Month, Year]",
    excerpt:
      "Informational summary of arbitrator appointment under the Arbitration and Conciliation Act.",
    body: [
      "Section 11 of the Arbitration and Conciliation Act, 1996 deals with appointment of arbitrators. This placeholder text is for site structure demonstration.",
    ],
  },
  {
    slug: "ibc-limitation",
    title: "Limitation Considerations in Insolvency Petitions — Generic Note",
    category: "INSOLVENCY & RESTRUCTURING",
    date: "[PLACEHOLDER: Month, Year]",
    excerpt:
      "Educational note on limitation in insolvency forums. Pending advocate verification.",
    body: [
      "Limitation in insolvency matters involves interplay between the Limitation Act and the Insolvency and Bankruptcy Code. This content is illustrative only.",
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export const missingInformation = [
  "Bar Council enrolment number",
  "Professional contact email (non-application)",
  "Complete applications email (info@… domain)",
  "Final website domain",
  "Final logo artwork (NKA initials placeholder in use)",
  "Office hours",
  "Confirmation of office telephone digit sequence (011-400045298)",
  "Confirmation of contact numbers and both addresses before public launch",
  "Associate photographs",
  "Confirmation of associate name spellings (esp. Chawhan/Chauhan; Luv/Love)",
  "Associate qualifications / enrolment details (if any to be shown)",
  "Exact fields for Own Requirement Form and Candidate Form",
  "Whether form fields are mandatory",
  "Social profile URLs (Instagram, Facebook, Twitter/X, LinkedIn)",
  "Whether Delhi High Court should be listed (crossed out in notes — excluded)",
  "Legal entity structure confirmation (sole practice vs firm/LLP)",
] as const;

export const pendingLegalApproval = [
  "Public display of associate profiles with photographs",
  "Junior Advocate appointment application portal",
  "Student internship application portal",
  "Advocate empanelment application portal",
  "Public publication of contact numbers and addresses",
  "Any solicitation-sensitive wording review under BCI Rule 36",
] as const;

export const allRoutes = [
  "/",
  "/about",
  "/profile",
  "/associates",
  "/qualifications",
  "/experience",
  "/practice-areas",
  ...practiceAreas.map((a) => `/practice-areas/${a.slug}`),
  "/practice-information",
  "/applications",
  "/applications/junior-advocate",
  "/applications/internship",
  "/applications/empanelment",
  "/applications/success",
  "/contact",
  "/contact/success",
  "/faq",
  "/disclaimer",
  "/privacy",
  "/terms",
  "/sitemap",
  "/resources/articles",
  ...articles.map((a) => `/resources/articles/${a.slug}`),
  "/resources/updates",
  "/resources/news",
  "/resources/guides",
  "/resources/legal-faq",
] as const;
