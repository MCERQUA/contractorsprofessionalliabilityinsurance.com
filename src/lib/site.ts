// Industrial Coating Insurance — protective coatings contractor coverage

export const SITE = {
  name: "Industrial Coating Insurance",
  legalName: "Industrial Coating Insurance (by Contractors Choice Agency)",
  domain: "industrialcoatinginsurance.com",
  url: "https://industrialcoatinginsurance.com",
  tagline: "Insurance for Industrial Coating Contractors",
  description:
    "Specialty insurance for industrial coating contractors — general liability, contractors pollution liability, professional liability, workers compensation, commercial auto, tools and equipment, umbrella, and builders risk. Coverage for epoxy floor contractors, protective coating applicators, anti-corrosion coating specialists, and industrial painting crews. Licensed all 50 states.",
  phone: "844-967-5247",
  phoneHref: "tel:+18449675247",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    street: "12220 E Riggs Road, Suite #105",
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
  brandShort: "Industrial Coating",
  brandSub: "Insurance",
  tagline: "Insurance for Industrial Coating Contractors",
  subTagline: "GL, pollution liability, professional liability, and workers comp for coating applicators",
  nicheShort: "industrial coating contractor",
  nicheShortCap: "Industrial Coating Contractor",
  nichePlural: "industrial coating contractors",
  nichePluralCap: "Industrial Coating Contractors",
  operator: "coating contractor",
  operatorCap: "Coating Contractor",
  industry: "industrial coatings",
  industryCap: "Industrial Coatings",
  audience: "coating contractors",
  audienceCap: "Coating Contractors",
  ownerTitle: "coating contractor",
  regionPill: "Texas · Ohio · National",
  ctaMain: "Get a Coating Contractor Quote",
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
    slug: "general-liability",
    title: "General Liability Insurance",
    description:
      "Core protection for industrial coating contractors — covering third-party bodily injury and property damage from your coating operations, job site presence, and completed work. Built for the specific risk profile of coating applicators.",
    icon: "ShieldCheck",
  },
  {
    slug: "contractors-pollution-liability",
    title: "Contractors Pollution Liability",
    description:
      "Essential for coating contractors working with solvents, epoxies, VOCs, and chemical coatings. Covers pollution conditions arising from your coating work — fume migration, spills, disposal, and third-party bodily injury from chemical exposure.",
    icon: "Droplets",
  },
  {
    slug: "professional-liability",
    title: "Professional Liability (E&O)",
    description:
      "Coverage for claims alleging coating system failures, specification errors, surface preparation negligence, or coating delamination. Protects against the financial consequences when a coating job doesn't perform as specified.",
    icon: "FileSignature",
  },
  {
    slug: "workers-compensation",
    title: "Workers' Compensation",
    description:
      "Coverage for the injury patterns unique to coating contractors — chemical burns and dermatitis, respiratory injuries from solvent and VOC exposure, falls from scaffolding and lifts, and repetitive strain from spray application work.",
    icon: "HardHat",
  },
  {
    slug: "commercial-auto",
    title: "Commercial Auto",
    description:
      "Coverage for your coating contractor fleet — service trucks, spray equipment vans, and vehicles hauling coating materials and equipment to job sites. Includes hired and non-owned auto for employees using personal vehicles on company business.",
    icon: "Truck",
  },
  {
    slug: "tools-equipment-floater",
    title: "Tools & Equipment Floater",
    description:
      "Protects your spray equipment, compressors, plural component systems, surface preparation equipment, and other coating contractor tools wherever they go — job site, shop, or in transit between projects.",
    icon: "Wrench",
  },
  {
    slug: "umbrella-excess",
    title: "Umbrella / Excess Liability",
    description:
      "Additional liability limits above your primary general liability and auto policies. Industrial coating contractors working on major projects increasingly need $5M–$10M in total liability capacity. Umbrella coverage provides that buffer affordably.",
    icon: "Umbrella",
  },
  {
    slug: "builders-risk",
    title: "Builders Risk / Installation Floater",
    description:
      "Covers coating materials, installed coatings, and work-in-progress on job sites until project completion. Essential when you have significant material inventory staged at a project and your coating work represents substantial completed value.",
    icon: "Building2",
  },
] as const;

export const LOCATIONS = [
  {
    slug: "texas",
    name: "Texas",
    state: "TX",
    region: "Houston · San Antonio · Dallas",
    metaTitle: "Industrial Coating Insurance Texas | TX Coating Contractor Coverage",
    metaDescription: "Industrial coating contractor insurance in Texas — GL, pollution liability, workers comp for TX coating applicators. Epoxy, protective, and anti-corrosion coverage.",
    h1: "Industrial Coating Insurance in Texas",
    intro: "Texas is one of the largest markets for industrial coating contractors — petrochemical facilities along the Gulf Coast, tank farms, pipelines, and industrial plants throughout the state demand extensive protective coating work. We write GL, CPL, and workers comp programs specifically for Texas coating contractors.",
  },
  {
    slug: "ohio",
    name: "Ohio",
    state: "OH",
    region: "Cleveland · Columbus · Cincinnati",
    metaTitle: "Industrial Coating Insurance Ohio | OH Coating Contractor Programs",
    metaDescription: "Ohio industrial coating insurance — GL, contractors pollution liability, and workers comp for OH coating contractors. Epoxy floor, protective coating, industrial painting.",
    h1: "Industrial Coating Insurance in Ohio",
    intro: "Ohio's heavy manufacturing base — automotive, steel, chemical, and food processing — generates consistent demand for industrial coating contractors. We write specialty insurance programs for Ohio coating applicators working in manufacturing facilities, warehouses, and industrial plants.",
  },
  {
    slug: "louisiana",
    name: "Louisiana",
    state: "LA",
    region: "Baton Rouge · New Orleans · Lake Charles",
    metaTitle: "Industrial Coating Insurance Louisiana | LA Protective Coating Coverage",
    metaDescription: "Louisiana industrial coating contractor insurance — petrochemical facility coating, anti-corrosion, and structural coating programs for LA contractors.",
    h1: "Industrial Coating Insurance in Louisiana",
    intro: "Louisiana's petrochemical corridor demands coating contractors who work in some of the most chemically intensive environments in the country. We write pollution liability, workers comp, and GL programs tailored for Louisiana coating contractors working on refineries, chemical plants, and marine structures.",
  },
  {
    slug: "pennsylvania",
    name: "Pennsylvania",
    state: "PA",
    region: "Philadelphia · Pittsburgh · Allentown",
    metaTitle: "Industrial Coating Insurance Pennsylvania | PA Coating Programs",
    metaDescription: "Pennsylvania industrial coating contractor insurance — GL, professional liability, and workers comp for PA coating applicators working on industrial and structural projects.",
    h1: "Industrial Coating Insurance in Pennsylvania",
    intro: "Pennsylvania's bridges, steel structures, and manufacturing facilities create sustained demand for protective coating contractors. We write comprehensive programs for PA coating contractors — from epoxy floor applicators to structural coating specialists working on bridges and industrial infrastructure.",
  },
  {
    slug: "michigan",
    name: "Michigan",
    state: "MI",
    region: "Detroit · Grand Rapids · Lansing",
    metaTitle: "Industrial Coating Insurance Michigan | MI Coating Contractor Coverage",
    metaDescription: "Michigan industrial coating insurance — auto manufacturing facility coatings, floor coatings, and industrial painting programs for MI contractors.",
    h1: "Industrial Coating Insurance in Michigan",
    intro: "Michigan's automotive manufacturing base requires extensive industrial coating work — floor coatings in assembly plants, protective coatings on equipment and structures, and specialty coatings in paint shops. We write programs for Michigan coating contractors working in one of the most demanding industrial environments in the country.",
  },
  {
    slug: "illinois",
    name: "Illinois",
    state: "IL",
    region: "Chicago · Rockford · Peoria",
    metaTitle: "Industrial Coating Insurance Illinois | IL Coating Contractor Programs",
    metaDescription: "Illinois industrial coating contractor insurance — Chicago-area industrial facility coverage, GL, pollution liability, and workers comp for IL coating applicators.",
    h1: "Industrial Coating Insurance in Illinois",
    intro: "Illinois industrial coating contractors serve Chicago's dense industrial base — manufacturing facilities, food processing plants, water treatment systems, and transportation infrastructure. We write specialty programs for IL coating contractors that include the pollution liability coverage that industrial chemical coatings require.",
  },
  {
    slug: "california",
    name: "California",
    state: "CA",
    region: "Los Angeles · San Francisco Bay · San Diego",
    metaTitle: "Industrial Coating Insurance California | CA Coating Contractor Coverage",
    metaDescription: "California industrial coating contractor insurance — Prop 65, EPA-compliant coatings programs, GL, and pollution liability for CA coating contractors.",
    h1: "Industrial Coating Insurance in California",
    intro: "California's regulatory environment — Prop 65, SCAQMD air quality requirements, strict VOC limits — makes coating work more complex than in most states. We understand California's coating regulations and write programs for CA coating contractors that address the specific pollution and professional liability exposures that California projects create.",
  },
  {
    slug: "new-york",
    name: "New York",
    state: "NY",
    region: "New York City · Buffalo · Albany",
    metaTitle: "Industrial Coating Insurance New York | NY Coating Contractor Programs",
    metaDescription: "New York industrial coating contractor insurance — bridge coating, infrastructure, and facility programs for NY coating applicators. GL, CPL, and professional liability.",
    h1: "Industrial Coating Insurance in New York",
    intro: "New York's bridges, tunnels, industrial facilities, and infrastructure represent some of the most extensive coating maintenance requirements in the country. We write programs for NY coating contractors — from epoxy floor applicators in Long Island facilities to anti-corrosion coating specialists working on Hudson River bridge structures.",
  },
] as const;

export const CREDENTIALS = [
  { label: "Licensed in all 50 states", icon: "MapPin" },
  { label: "Founded 2005 — 20+ years", icon: "CalendarCheck" },
  { label: "Coating contractor specialists", icon: "Wrench" },
  { label: "15-minute quote turnaround", icon: "Timer" },
  { label: "2-hour claims response", icon: "Zap" },
  { label: "A.M. Best A+ carrier partners", icon: "Award" },
] as const;

export const SOCIAL = { facebook: "", instagram: "", linkedin: "", twitter: "" } as const;

export const STATS = [
  { value: 600, suffix: "+", label: "Coating contractors insured nationwide", prefix: "" },
  { value: 20, suffix: "+", label: "Years insuring specialty contractors", prefix: "" },
  { value: 15, suffix: " min", label: "Average quote turnaround", prefix: "" },
  { value: 50, suffix: "", label: "States licensed & writing", prefix: "" },
] as const;

export const TESTIMONIALS = [
  {
    quote: "We apply epoxy coatings in food processing plants and wastewater facilities. The chemical exposure and slip-and-fall risk are real. Our old GL carrier kept questioning whether coating fumes were a pollution condition. Industrial Coating Insurance put us with a carrier that knows the difference — CPL is separate, GL is clean, no more coverage debates.",
    name: "Marcus T.",
    role: "Owner, Industrial Coating Co.",
    location: "Texas",
  },
  {
    quote: "We had a professional liability claim when a floor coating delaminated in a manufacturing plant six months after application. The client claimed $200,000 in lost production and re-coating costs. Our E&O policy through CCA defended the claim and settled without threatening our business. That's what professional liability is for.",
    name: "Rachel B.",
    role: "President, Protective Coatings Inc.",
    location: "Ohio",
  },
  {
    quote: "Workers comp for coating crews is a specialty risk. Chemical exposure, respiratory claims, scaffold falls — generic carriers either decline or overcharge. CCA placed us with a carrier that actually understands coating operations. Our experience modification went down year two because the carrier knew our safety program was real.",
    name: "James D.",
    role: "Safety Director",
    location: "Louisiana",
  },
] as const;
