/* ------------------------------------------------------------------
   B2B Loyalty & Channel Incentives — content layer (dummy data)
------------------------------------------------------------------ */

export const IMAGES = {
  heroBg:
    "https://images.pexels.com/photos/16113867/pexels-photo-16113867.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
  heroPortrait:
    "https://images.pexels.com/photos/9623645/pexels-photo-9623645.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  portrait:
    "https://images.pexels.com/photos/28426646/pexels-photo-28426646.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  sydney:
    "https://images.pexels.com/photos/36837750/pexels-photo-36837750.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
  harbourBridge:
    "https://images.pexels.com/photos/37252370/pexels-photo-37252370.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=640",
};

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "services", label: "Services" },
  { id: "process", label: "Process" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
] as const;

export const BRANDS = [
  "Boehringer Ingelheim",
  "AUSREO",
  "Qantas Loyalty",
  "AMEX",
  "The Sands Corporation",
  "Burson",
  "Bapcor",
  "Elanco",
  "Nulon",
  "Brother",
  "dormakaba",
  "Stealth Group",
  "Ridley Corporation",
  "Dymocks",
  "Kennards Hire",
  "Workwear Group",
  "Tabcorp",
  "Crown Casino",
  "FUJIFILM",
  "Helloworld Travel",
  "Cruiseco",
  "Royal Caribbean",
  "Bridgestone",
  "James Hardie",
];

export const STATS = [
  {
    from: 0,
    to: 50,
    suffix: "+",
    label: "B2B loyalty & channel programs designed, launched and optimised",
  },
  {
    from: 14,
    to: 0,
    suffix: "",
    word: "Zero",
    label: "Commission or fee ever charged to you — my client",
  },
  {
    from: 0,
    to: 20,
    suffix: "+",
    label: "Years in marketing, loyalty and channel sales",
  },
  {
    from: 0,
    to: 1,
    suffix: "",
    label: "Agnostic B2B loyalty expert in Australia",
  },
];

export const FOCUS_AREAS = [
  {
    id: "channel-strategy",
    label: "Channel sales strategy",
    detail:
      "Route-to-market design, coverage models and the economics of who really owns the customer conversation.",
    point: "Your channel stops being a postcode list and becomes an asset you manage deliberately.",
  },
  {
    id: "dealer-incentives",
    label: "Dealer & reseller incentives",
    detail:
      "Tiered earn structures, SPIFFs and growth rebates engineered so the incremental margin pays for the reward.",
    point: "Programs are modelled against your P&L before a single partner ever sees them.",
  },
  {
    id: "loyalty-design",
    label: "B2B loyalty design",
    detail:
      "Points, benefits and recognition architecture for trade accounts — mechanics your CFO can defend in a board meeting.",
    point: "Liability, breakage and earn-rates are designed in from day one, not discovered in year two.",
  },
  {
    id: "vendor-selection",
    label: "Vendor-independent tech selection",
    detail:
      "A shortlist scored against your requirements — never against anyone's commission cheque.",
    point: "I take no platform fees, so 'no vendor' is always an acceptable answer.",
  },
  {
    id: "partner-enablement",
    label: "Partner enablement",
    detail:
      "Playbooks, training and communications that give reps a reason — and the words — to lead with your brand.",
    point: "The last three feet of the sale is where share is actually won or lost.",
  },
  {
    id: "program-economics",
    label: "Program economics",
    detail:
      "Liability modelling, redemption forecasting and ROI guardrails built so finance signs off with confidence.",
    point: "Every dollar of reward is tied to a dollar of incremental, measurable revenue.",
  },
];

export const SERVICES = [
  {
    id: "loyalty-design",
    icon: "gem",
    title: "B2B loyalty & incentive design",
    blurb:
      "Reward structures for dealers, resellers, reps and B2B customers — built around the behaviour you need and the margin that has to pay for it.",
    image:
      "https://images.pexels.com/photos/9409974/pexels-photo-9409974.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800",
    bullets: [
      "Tier, earn-rate and reward architecture",
      "Points economics, liability and breakage",
      "Margin-funded investment models",
      "Behaviour-change frameworks that stick",
    ],
  },
  {
    id: "partner-engagement",
    icon: "handshake",
    title: "Partner engagement & enablement",
    blurb:
      "Segmentation, communications and training that keep distributors, dealers and reps selling you — rather than the alternative on the shelf beside you.",
    image:
      "https://images.pexels.com/photos/7691751/pexels-photo-7691751.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800",
    bullets: [
      "Partner segmentation and value tiers",
      "Communications calendars that get read",
      "Rep training and certification",
      "Recognition and status programs",
    ],
  },
  {
    id: "channel-growth",
    icon: "growth",
    title: "Channel sales growth",
    blurb:
      "Partner recruitment, pipeline discipline and last-three-feet execution at the point where the sale of your products and services is really won or lost.",
    image:
      "https://images.pexels.com/photos/7433898/pexels-photo-7433898.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800",
    bullets: [
      "Partner recruitment playbooks",
      "Pipeline and co-selling discipline",
      "Point-of-sale and counter execution",
      "Share-of-mind becomes share-of-wallet",
    ],
  },
  {
    id: "unbiased-options",
    icon: "scale",
    title: "Partner options, without bias",
    blurb:
      "Requirements, shortlists and vendor introductions with scoring. RFP development and execution — or a pocket SME keeping the work in guardrails.",
    image:
      "https://images.pexels.com/photos/7433851/pexels-photo-7433851.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800",
    bullets: [
      "Requirements and program guardrails",
      "Vendor shortlists and weighted scoring",
      "RFP development and execution",
      "Commission-free recommendations",
    ],
  },
  {
    id: "advisory",
    icon: "compass",
    title: "Advisory & interim leadership",
    blurb:
      "Program leadership, executive advisory and coaching for sales leaders. Your B2B loyalty SME from scoping through development, governance and launch.",
    image:
      "https://images.pexels.com/photos/7433919/pexels-photo-7433919.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800",
    bullets: [
      "Fractional program leadership",
      "Executive advisory and board papers",
      "Sales-leader coaching and mentoring",
      "SME oversight from scope to launch",
    ],
  },
];

export const STEPS = [
  {
    id: "diagnose",
    num: "01",
    title: "Diagnose",
    tagline: "Read the channel before you fund it.",
    text: "Every engagement starts by auditing the behaviours, economics and data across your dealers, resellers and reps — before a single reward dollar is committed.",
    deliverables: ["Channel audit", "Behaviour map", "Data health check"],
    image:
      "https://images.pexels.com/photos/7433851/pexels-photo-7433851.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800",
  },
  {
    id: "architect",
    num: "02",
    title: "Architect",
    tagline: "Design for behaviour, not applause.",
    text: "We define what you need partners to do differently, then engineer the earn mechanics, tiers and investment model that pays for the behaviour out of incremental margin.",
    deliverables: ["Incentive design", "Earn mechanics", "ROI model"],
    image:
      "https://images.pexels.com/photos/9409974/pexels-photo-9409974.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800",
  },
  {
    id: "build",
    num: "03",
    title: "Build",
    tagline: "Technology chosen without bias.",
    text: "Requirements become a weighted vendor scorecard. I run the RFP in your corner with zero commission from any platform — so 'no platform' stays a valid answer.",
    deliverables: ["RFP build & run", "Vendor scoring", "Program rules"],
    image:
      "https://images.pexels.com/photos/6289046/pexels-photo-6289046.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800",
  },
  {
    id: "launch",
    num: "04",
    title: "Launch",
    tagline: "Win the last three feet.",
    text: "Enablement, communications and rep training so your network leads with you from day one — at the counter, in the branch and on the phone.",
    deliverables: ["Launch comms", "Rep training", "Governance rhythm"],
    image:
      "https://images.pexels.com/photos/7693682/pexels-photo-7693682.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800",
  },
  {
    id: "operate",
    num: "05",
    title: "Operate & transfer",
    tagline: "Optimise, then hand over the keys.",
    text: "An always-on optimisation cadence with a deliberate exit: I transfer playbooks, dashboards and capability until your team runs the program without me.",
    deliverables: ["QBR cadence", "Operating playbooks", "Team handover"],
    image:
      "https://images.pexels.com/photos/7993944/pexels-photo-7993944.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800",
  },
];

export const TESTIMONIALS = [
  {
    id: "stef",
    initials: "SM",
    name: "Stef Matthews",
    role: "Head of Marketing, Brother International ANZ",
    quote:
      "Mark was instrumental in the proposal, launch and implementation of an extremely successful rewards program whilst I was at Fujifilm. He continuously pushed, followed up and found strategic ways to a solution. The program led to significant growth in market share and mindshare among key retail staff nationally.",
    image:
      "https://images.pexels.com/photos/6918529/pexels-photo-6918529.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=650&w=940",
  },
  {
    id: "daniel",
    initials: "DR",
    name: "Daniel Reyes",
    role: "Head of Partnerships, Coastline Wholesale",
    quote:
      "He understands the last three feet. The reps in our reseller store network finally had a reason to recommend us — and category share followed within two quarters.",
    image:
      "https://images.pexels.com/photos/9409692/pexels-photo-9409692.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=650&w=940",
  },
  {
    id: "priya",
    initials: "PN",
    name: "Priya Nair",
    role: "General Manager, Nova Imaging Group",
    quote:
      "Every other advisor arrived with a platform to sell. Mark arrived with questions — then told us to fix our partner data before we spent a cent on technology or a loyalty partner.",
    image:
      "https://images.pexels.com/photos/7993944/pexels-photo-7993944.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=650&w=940",
  },
  {
    id: "liam",
    initials: "LH",
    name: "Liam Hales",
    role: "Head of National Retail Accounts, HP",
    quote:
      "The expert we chose for our B2B partner initiatives. His strategic thinking, his ability to really listen to business problems and his passion for loyalty and growth are second to none — transparent, honest and collaborative, delivering every time.",
    image:
      "https://images.pexels.com/photos/7691751/pexels-photo-7691751.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=650&w=940",
  },
  {
    id: "tim",
    initials: "TS",
    name: "Tim Southey",
    role: "Consumer Category Lead, Bridgestone ANZ",
    quote:
      "Mark was insightful and proactive. He came to the process with a wealth of experience, was solutions focused and made our intentions easy — nothing was ever a problem.",
    image:
      "https://images.pexels.com/photos/10375944/pexels-photo-10375944.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=650&w=940",
  },
];

export const CONTACT = {
  name: "Mark Farrell",
  title: "B2B Loyalty & Channel Incentives",
  email: "mark@b2bloyalty.com.au",
  phone: "+61 434 107 593",
  phoneHref: "+61434107593",
  linkedin: "https://www.linkedin.com/in/markfarrell2/",
  location: "Sydney, Australia",
};
