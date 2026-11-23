/**
 * Central site configuration — Naresh Kumar & Associates (Individual Practice).
 * Domain: youradvocates.in
 * Do not invent emails, social URLs, additional courts, or associate photos.
 */

export type PublicationFlags = {
  /** Contact numbers/addresses confirmed for public launch */
  contactsConfirmed: boolean;
  /** Associate names/photos confirmed + BCI-compliant to display */
  associatesConfirmed: boolean;
  /** Social profile URLs confirmed */
  socialUrlsConfirmed: boolean;
  /** Domain connected to production hosting */
  domainConnected: boolean;
  /** Client personal final review before publication */
  clientFinalReviewComplete: boolean;
};

export const publicationFlags: PublicationFlags = {
  contactsConfirmed: false,
  associatesConfirmed: false,
  socialUrlsConfirmed: false,
  domainConnected: false,
  clientFinalReviewComplete: false,
};

const defaultSiteUrl = "https://youradvocates.in";

export const siteConfig = {
  title: "Naresh Kumar & Associates — Advocate",
  description:
    "Informational portal for Advocate Naresh Kumar (Individual Practice), presented under the branding Naresh Kumar & Associates. Subject to Bar Council of India Rule 36. Educational content only; no solicitation.",
  url: process.env.NEXT_PUBLIC_SITE_URL || defaultSiteUrl,
  domain: "youradvocates.in",
  practiceName: "Naresh Kumar & Associates",
  professionalDescriptor: "Advocate",
  practiceStructure: "Individual Practice",
  logoInitials: "NKA",
  advocateName: "Naresh Kumar",
  principalTitle: "Advocate",
  barEnrolment: "D/327/96",
  barCouncil: "Bar Council of Delhi",
  barAssociations: [
    "Saket Bar Association",
    "Delhi High Court Bar Association",
  ] as const,
  qualifications: ["M.Com.", "LL.B."] as const,
  yearsOfPracticeLabel: "More than 30 years of practice",
  jurisdiction:
    "Supreme Court of India and other forums as listed (informational — pending confirmation of exclusive practice claims)",
  chamberAddress:
    "Chamber No. 772, Lawyers Chamber Block, Saket Court Complex, Saket, New Delhi - 110017, India.",
  registeredOfficeAddress:
    "37, Amrit Nagar, South Extension Part-I, New Delhi - 110049, India.",
  mobile: "9312838384",
  mobileTel: "tel:+919312838384",
  additionalMobile: "7827448384",
  additionalMobileTel: "tel:+917827448384",
  /** Primary WhatsApp — approved by client; uses Personal Contact Number 1 */
  whatsappNumber: "9312838384",
  whatsappUrl: "https://wa.me/919312838384",
  whatsappEnabled: true,
  officePhone: "011-400045298",
  officePhoneTel: "tel:+9111400045298",
  officePhoneNote:
    "[CONFIRM: Office telephone digit sequence as written — 011-400045298]",
  /**
   * Primary email: client indicated “youradvocate…@gmail.com” — exact spelling unconfirmed.
   * Set NEXT_PUBLIC_CONTACT_EMAIL when confirmed. Do not invent.
   */
  email:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ??
    "[CONFIRM: youradvocate…@gmail.com — exact spelling pending]",
  emailConfirmed: Boolean(process.env.NEXT_PUBLIC_CONTACT_EMAIL),
  /**
   * Secondary / info@ email — domain to be confirmed (intended: info@youradvocates.in).
   * Set NEXT_PUBLIC_INFO_EMAIL when confirmed.
   */
  infoEmail:
    process.env.NEXT_PUBLIC_INFO_EMAIL ??
    "[PLACEHOLDER: info@ email — domain pending confirmation]",
  infoEmailConfirmed: Boolean(process.env.NEXT_PUBLIC_INFO_EMAIL),
  officeHours: "[PLACEHOLDER: Office hours — pending confirmation]",
  copyrightYear: "2026",
  structureDisclaimer:
    "Individual Practice of Advocate Naresh Kumar. Public-facing branding “Naresh Kumar & Associates” does not represent a registered LLP, partnership firm, or company. Permissibility of the proposed public-facing name should be confirmed before publication.",
} as const;

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
    href: "/resources/updates",
    children: [
      { label: "Law Updates", href: "/resources/updates" },
      { label: "Articles", href: "/resources/articles" },
      { label: "News", href: "/resources/news" },
      { label: "Guides", href: "/resources/guides" },
      { label: "Legal FAQ", href: "/resources/legal-faq" },
    ],
  },
  { label: "Contact", href: "/contact" },
  { label: "Disclaimer", href: "/disclaimer" },
];

export const previewNavExtras: NavItem[] = [
  { label: "Associates (draft)", href: "/associates" },
];

export const footerNav: NavItem[] = [
  { label: "Bar Council Disclaimer", href: "/disclaimer" },
  { label: "Practice Focus", href: "/practice-areas" },
  { label: "Law Updates", href: "/resources/updates" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Sitemap", href: "/sitemap" },
  { label: "Contact", href: "/contact" },
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
  {
    slug: "civil-law",
    title: "Civil Law",
    category: "CIVIL & PROCEDURE",
    summary:
      "General informational page on civil remedies. Not asserted as a confirmed exclusive practice focus unless verified.",
    statutes: "CPC 1908, Specific Relief Act 1963",
    clientSupplied: false,
    verified: false,
  },
  {
    slug: "criminal-law",
    title: "Criminal Law",
    category: "CRIMINAL JURISPRUDENCE",
    summary:
      "General informational page. Not asserted as a confirmed exclusive practice focus unless verified.",
    statutes: "BNSS 2023 / CrPC, BNS 2023 / IPC",
    clientSupplied: false,
    verified: false,
  },
  {
    slug: "property-real-estate-law",
    title: "Property & Real Estate Law",
    category: "PROPERTY & EQUITY",
    summary:
      "General informational page. Not asserted as a confirmed exclusive practice focus unless verified.",
    statutes: "Transfer of Property Act, Registration Act 1908",
    clientSupplied: false,
    verified: false,
  },
  {
    slug: "family-law",
    title: "Family Law",
    category: "FAMILY & GUARDIANSHIP",
    summary:
      "General informational page. Not asserted as a confirmed exclusive practice focus unless verified.",
    statutes: "Guardian and Wards Act, applicable personal laws",
    clientSupplied: false,
    verified: false,
  },
  {
    slug: "matrimonial-law",
    title: "Matrimonial Law",
    category: "MATRIMONIAL",
    summary:
      "General informational page. Not asserted as a confirmed exclusive practice focus unless verified.",
    statutes: "Special Marriage Act, applicable matrimonial statutes",
    clientSupplied: false,
    verified: false,
  },
  {
    slug: "labour-employment-law",
    title: "Labour & Employment Law",
    category: "LABOUR & EMPLOYMENT",
    summary:
      "General informational page. Not asserted as a confirmed exclusive practice focus unless verified.",
    statutes: "Industrial Disputes Act, applicable labour codes",
    clientSupplied: false,
    verified: false,
  },
  {
    slug: "cyber-law",
    title: "Cyber Law",
    category: "CYBER & IT",
    summary:
      "General informational page. Not asserted as a confirmed exclusive practice focus unless verified.",
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

/** Courts & forums — Delhi High Court excluded per client. Additional forums pending names. */
export const forumCards = [
  {
    icon: "account_balance",
    title: "Supreme Court of India",
    description:
      "Client-supplied forum listing. Informational reference only — not a claim of exclusive practice.",
    label: "Apex Court · Client-supplied",
  },
  {
    icon: "gavel",
    title: "National Consumer Disputes Redressal Commission (NCDRC)",
    description:
      "Client-supplied forum listing for consumer dispute matters. Not a claim of exclusive practice.",
    label: "Consumer Forum · Client-supplied",
  },
  {
    icon: "account_balance_wallet",
    title: "Debt Recovery Tribunal (DRT)",
    description:
      "Client-supplied forum listing for debt recovery proceedings. Informational only.",
    label: "Debt Recovery · Client-supplied",
  },
  {
    icon: "corporate_fare",
    title: "National Company Law Tribunal (NCLT)",
    description:
      "Client-supplied forum listing for company-law and related tribunal matters.",
    label: "Company Law · Client-supplied",
  },
  {
    icon: "handshake",
    title: "Arbitration Matters",
    description:
      "Client-supplied listing for arbitration-related work. Educational overview of ADR frameworks.",
    label: "Arbitration · Client-supplied",
  },
  {
    icon: "balance",
    title: "Commercial Disputes",
    description:
      "Client-supplied listing for commercial dispute matters. Informational only.",
    label: "Commercial · Client-supplied",
  },
  {
    icon: "copyright",
    title: "Trademark / Intellectual Property Rights (IPR)",
    description:
      "Client-supplied listing for trademark and IPR-related matters.",
    label: "IPR · Client-supplied",
  },
  {
    icon: "contract",
    title: "Corporate Contracts / Litigation",
    description:
      "Client-supplied listing for corporate contracts and related litigation.",
    label: "Contracts · Client-supplied",
  },
] as const;

export type Associate = {
  id: string;
  name: string;
  /** Path under /public for replaceable photo */
  imageSrc: string;
  imageAlt: string;
  spellingNote?: string;
};

/** Associates — names and photographs only (per latest client instruction). */
export const associates: Associate[] = [
  {
    id: "brij-pal",
    name: "Brij Pal",
    imageSrc: "/images/associates/brij-pal.jpg",
    imageAlt: "Photograph of Brij Pal",
  },
  {
    id: "sunil-kr-chawhan",
    name: "Sunil Kr. Chawhan",
    imageSrc: "/images/associates/sunil-kr-chawhan.jpg",
    imageAlt: "Photograph of Sunil Kr. Chawhan",
    spellingNote: "Confirm spelling: Chawhan / Chauhan",
  },
  {
    id: "kaveri-sharma",
    name: "Ms. Kaveri Sharma",
    imageSrc: "/images/associates/kaveri-sharma.jpg",
    imageAlt: "Photograph of Ms. Kaveri Sharma",
  },
  {
    id: "luv-kumar",
    name: "Luv Kumar",
    imageSrc: "/images/associates/luv-kumar.jpg",
    imageAlt: "Photograph of Luv Kumar",
    spellingNote: "Confirm spelling: Luv / Love",
  },
  {
    id: "jatin-phogat",
    name: "Jatin Phogat",
    imageSrc: "/images/associates/jatin-phogat.jpg",
    imageAlt: "Photograph of Jatin Phogat",
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
      "No. This is Individual Practice of Advocate Naresh Kumar. The name is proposed public-facing branding only and does not represent a registered LLP, partnership, or company.",
  },
  {
    question: "How is personal data handled?",
    answer:
      "See the Privacy Policy. Enquiry data, if submitted, is used only to respond to the relevant administrative communication where permitted.",
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

/** Law Updates — structure ready; do not invent fabricated updates. */
export type LawUpdate = {
  slug: string;
  title: string;
  date: string;
  source: string;
  summary: string;
  published: boolean;
};

export const lawUpdates: LawUpdate[] = [
  // Intentionally empty of fabricated content. Add client-approved updates only.
];

export const missingInformation = [
  "Exact primary Gmail spelling (youradvocate…@gmail.com)",
  "Confirmed info@ email (intended domain youradvocates.in)",
  "Final logo artwork file (NKA initials placeholder in use)",
  "Favicon from final logo (when supplied)",
  "Office hours",
  "Confirmation of office telephone digit sequence (011-400045298)",
  "Confirmation to publish contact numbers and addresses",
  "Associate photographs (client-supplied files at /public/images/associates/)",
  "Associate name spellings (esp. Chawhan/Chauhan; Luv/Love)",
  "Associates’ permission for public name/photo display",
  "Additional courts/forums names (client indicated YES — names not supplied)",
  "Social profile URLs (Instagram, Facebook, Twitter/X, LinkedIn)",
  "Client-approved Law Update entries (titles, dates, sources)",
  "Confirmation that public-facing name “Naresh Kumar & Associates” is permissible for Individual Practice",
  "Domain DNS / Hostinger connection status for youradvocates.in",
  "Client personal final review before publication",
] as const;

export const pendingLegalApproval = [
  "Public display of associate names and photographs",
  "Public publication of contact numbers, WhatsApp, and addresses",
  "Publication of Bar Council enrolment and association particulars (BCI Schedule / Rule 36)",
  "Any solicitation-sensitive wording review under BCI Rule 36",
  "Permissibility of proposed branding “Naresh Kumar & Associates” for Individual Practice",
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
