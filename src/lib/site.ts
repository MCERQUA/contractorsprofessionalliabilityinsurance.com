// Contractors Professional Liability Insurance — E&O for contractors and construction firms

export const SITE = {
  name: "Contractors Professional Liability Insurance",
  legalName: "Contractors Professional Liability Insurance (by Contractors Choice Agency)",
  domain: "contractorsprofessionalliabilityinsurance.com",
  url: "https://contractorsprofessionalliabilityinsurance.com",
  tagline: "E&O and Professional Liability Insurance for Contractors",
  description:
    "Specialty professional liability and E&O insurance for general contractors, specialty contractors, and construction firms. Coverage for design errors, specification mistakes, professional negligence, and completed operations professional claims. Licensed all 50 states.",
  phone: "844-967-5247",
  phoneHref: "tel:+18449675247",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    street: "12220 E Riggs Road Suite #104",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8am–5pm (MST)",
  claimsSla: "2-hour claims response",
  quoteSla: "15-minute quote turnaround",
  statesLicensed: "All 50 states",
} as const;

export const BRAND = {
  brandShort: "Contractors PL",
  brandSub: "Insurance",
  tagline: "E&O and Professional Liability Insurance for Contractors",
  subTagline: "Professional liability, E&O, and general liability for contractors and construction firms",
  nicheShort: "contractors professional liability",
  nicheShortCap: "Contractors Professional Liability",
  nichePlural: "contractors and construction firms",
  nichePluralCap: "Contractors and Construction Firms",
  operator: "general contractor",
  operatorCap: "General Contractor",
  industry: "construction",
  industryCap: "Construction",
  audience: "general contractors",
  audienceCap: "General Contractors",
  ownerTitle: "contractor",
  regionPill: "Texas · California · National",
  ctaMain: "Get an E&O Quote",
  ctaSecondary: "Talk to an Agent",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Coverage", href: "/coverage" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "e-and-o-coverage",
    title: "E&O / Professional Liability",
    description:
      "Core errors and omissions coverage for contractors — protecting against claims alleging design errors, specification mistakes, professional negligence, and failure to perform professional services to the required standard. The foundational coverage for contractors with professional service exposure.",
    icon: "FileSignature",
    featured: true,
  },
  {
    slug: "professional-liability",
    title: "Contractors Professional Liability",
    description:
      "Broad professional liability coverage for general contractors, construction managers, and specialty contractors whose scope includes professional services — design-assist, value engineering, constructability review, and construction management responsibilities.",
    icon: "ShieldCheck",
  },
  {
    slug: "general-liability",
    title: "General Liability",
    description:
      "Core commercial general liability protecting contractors from third-party bodily injury and property damage claims arising from operations, job site presence, and completed work. Coordinates with professional liability to provide comprehensive contractor protection.",
    icon: "Building2",
  },
  {
    slug: "workers-compensation",
    title: "Workers' Compensation",
    description:
      "Workers compensation coverage for contractor employees — covering injuries on job sites, in transit, and during project operations. Specialty programs for construction operations with experienced carriers who understand contractor workforce risk.",
    icon: "HardHat",
  },
  {
    slug: "umbrella-excess",
    title: "Umbrella / Excess Liability",
    description:
      "Additional liability limits above primary general liability and auto policies. Contractors working on major projects increasingly need $5M to $25M in total liability capacity. Umbrella and excess coverage delivers that capacity cost-effectively.",
    icon: "Umbrella",
  },
  {
    slug: "surety-bonds",
    title: "Surety Bonds",
    description:
      "Performance bonds, payment bonds, and bid bonds for contractors — required on public works projects, government contracts, and increasingly on large private commercial projects. We place surety bonds that meet project-specific bonding requirements.",
    icon: "Wrench",
  },
  {
    slug: "design-build-coverage",
    title: "Design-Build E&O Coverage",
    description:
      "Specialized professional liability for contractors operating in design-build project delivery — covering the integrated design and construction liability that arises when a single entity holds both professional design responsibility and construction execution.",
    icon: "Truck",
  },
] as const;

export const LOCATIONS = [
  {
    slug: "texas",
    name: "Texas",
    state: "TX",
    region: "Houston · Dallas · Austin",
    metaTitle: "Contractors Professional Liability Insurance Texas | TX E&O Coverage",
    metaDescription: "Contractors professional liability and E&O insurance in Texas — design errors, specification mistakes, and professional negligence coverage for TX general contractors.",
    h1: "Contractors Professional Liability Insurance in Texas",
    intro: "Texas's construction market — energy infrastructure, commercial development, and public works — creates substantial professional liability exposure for general contractors and specialty firms. Design-build delivery, construction management contracts, and expanded professional service scopes have made E&O coverage essential for Texas contractors. We write professional liability programs specifically for Texas construction firms operating across the state's diverse project landscape.",
  },
  {
    slug: "california",
    name: "California",
    state: "CA",
    region: "Los Angeles · San Francisco · San Diego",
    metaTitle: "Contractors Professional Liability Insurance California | CA E&O Programs",
    metaDescription: "California contractors professional liability insurance — E&O, design-build coverage, and professional negligence programs for CA general contractors and construction firms.",
    h1: "Contractors Professional Liability Insurance in California",
    intro: "California's construction industry operates under some of the most complex regulatory, environmental, and contractual requirements in the country. General contractors and construction managers in California face elevated professional liability exposure — design-build delivery is widespread, project owners assign expanded professional responsibilities to GCs, and California's litigation environment makes E&O coverage essential. We write professional liability programs for California contractors that address the state's specific risk environment.",
  },
  {
    slug: "new-york",
    name: "New York",
    state: "NY",
    region: "New York City · Buffalo · Albany",
    metaTitle: "Contractors Professional Liability Insurance New York | NY E&O Coverage",
    metaDescription: "New York contractors professional liability and E&O insurance — coverage for general contractors, construction managers, and design-build firms across NY.",
    h1: "Contractors Professional Liability Insurance in New York",
    intro: "New York's construction sector — particularly New York City's dense commercial and infrastructure market — exposes general contractors and construction managers to significant professional liability claims. Construction management contracts, owner's representative roles, and design-build delivery create professional service obligations that demand E&O coverage. We write programs for New York contractors navigating one of the country's most demanding construction legal environments.",
  },
  {
    slug: "florida",
    name: "Florida",
    state: "FL",
    region: "Miami · Orlando · Tampa",
    metaTitle: "Contractors Professional Liability Insurance Florida | FL E&O Programs",
    metaDescription: "Florida contractors professional liability insurance — E&O and professional negligence coverage for FL general contractors and specialty construction firms.",
    h1: "Contractors Professional Liability Insurance in Florida",
    intro: "Florida's booming construction market — residential, commercial, hospitality, and infrastructure — has driven increased adoption of design-build delivery and construction management contracts that carry professional liability exposure. Florida contractors facing professional negligence claims benefit from E&O coverage that defends against allegations of design errors, specification mistakes, and professional service failures. We write contractors professional liability programs for Florida's diverse construction market.",
  },
  {
    slug: "illinois",
    name: "Illinois",
    state: "IL",
    region: "Chicago · Rockford · Springfield",
    metaTitle: "Contractors Professional Liability Insurance Illinois | IL E&O Coverage",
    metaDescription: "Illinois contractors professional liability and E&O insurance — professional negligence and design error coverage for IL general contractors and construction managers.",
    h1: "Contractors Professional Liability Insurance in Illinois",
    intro: "Illinois general contractors and construction managers — particularly those operating in the Chicago metropolitan market — face professional liability exposure from construction management contracts, design-assist responsibilities, and design-build project delivery. Professional liability insurance fills the coverage gap between general liability and the professional service obligations that modern contractor roles create. We write E&O programs for Illinois contractors across commercial, industrial, and public works markets.",
  },
  {
    slug: "ohio",
    name: "Ohio",
    state: "OH",
    region: "Columbus · Cleveland · Cincinnati",
    metaTitle: "Contractors Professional Liability Insurance Ohio | OH E&O Programs",
    metaDescription: "Ohio contractors professional liability insurance — E&O and professional negligence coverage for OH general contractors and construction firms.",
    h1: "Contractors Professional Liability Insurance in Ohio",
    intro: "Ohio's construction industry spans commercial development, industrial facility construction, public infrastructure, and institutional projects — each sector creating distinct professional liability exposures for general contractors and specialty firms. Construction management at-risk, design-build delivery, and expanded contractor responsibilities under GC contracts have made professional liability coverage a standard requirement for Ohio contractors. We write specialty programs for Ohio construction firms of all sizes.",
  },
  {
    slug: "pennsylvania",
    name: "Pennsylvania",
    state: "PA",
    region: "Philadelphia · Pittsburgh · Allentown",
    metaTitle: "Contractors Professional Liability Insurance Pennsylvania | PA E&O Coverage",
    metaDescription: "Pennsylvania contractors professional liability and E&O insurance — design error and professional negligence coverage for PA general contractors and construction managers.",
    h1: "Contractors Professional Liability Insurance in Pennsylvania",
    intro: "Pennsylvania contractors working in Philadelphia, Pittsburgh, and across the state face professional liability exposure from construction management contracts, design-build delivery, and the growing trend of project owners assigning professional coordination responsibilities to GCs. Our professional liability programs for Pennsylvania contractors address the specific E&O exposures that arise in the state's commercial, healthcare, institutional, and infrastructure construction markets.",
  },
  {
    slug: "washington",
    name: "Washington",
    state: "WA",
    region: "Seattle · Spokane · Tacoma",
    metaTitle: "Contractors Professional Liability Insurance Washington | WA E&O Programs",
    metaDescription: "Washington state contractors professional liability insurance — E&O and professional negligence coverage for WA general contractors and design-build firms.",
    h1: "Contractors Professional Liability Insurance in Washington",
    intro: "Washington state's construction market — driven by technology sector commercial development, infrastructure investment, and residential growth in the Seattle metro — has seen widespread adoption of design-build and construction management delivery methods that create professional liability exposure for contractors. We write E&O and professional liability programs for Washington contractors across all project types, including the complex public works and infrastructure projects common throughout the state.",
  },
] as const;

export const CREDENTIALS = [
  { label: "Licensed in all 50 states", icon: "MapPin" },
  { label: "Founded 2005 — 20+ years", icon: "CalendarCheck" },
  { label: "Contractor E&O specialists", icon: "FileSignature" },
  { label: "15-minute quote turnaround", icon: "Timer" },
  { label: "2-hour claims response", icon: "Zap" },
  { label: "A.M. Best A+ carrier partners", icon: "Award" },
] as const;

export const SOCIAL = { facebook: "", instagram: "", linkedin: "", twitter: "" } as const;

export const STATS = [
  { value: 600, suffix: "+", label: "Contractors insured nationwide", prefix: "" },
  { value: 20, suffix: "+", label: "Years insuring specialty contractors", prefix: "" },
  { value: 15, suffix: " min", label: "Average quote turnaround", prefix: "" },
  { value: 50, suffix: "", label: "States licensed & writing", prefix: "" },
] as const;
