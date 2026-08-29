export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  abstractColor: string;
}

export interface ProcessStage {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  beeAction: string;
  details: string[];
}

export interface ApproachStage {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  deliverables: string[];
}

export interface WhyUsPoint {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  expandedDesc: string;
  impactMetric: string;
}

export interface CaseStudy {
  id: string;
  number: string;
  title: string;
  client: string;
  category: string;
  year: string;
  shortDescription: string;
  servicesProvided: string[];
  heroGradient: string;
  challenge: string;
  strategy: string;
  creativeIdea: string;
  execution: string;
  results: { label: string; value: string }[];
  galleryPlaceholders: { title: string; subtitle: string; color: string }[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  category: string;
}

export const CLOUDBEE_BRAND = {
  name: "CloudBee",
  tagline: "Creating the Real Buzz",
  eyebrow: "CREATIVE AGENCY • MARKETING • EVENTS • PRODUCTION",
  positioning: "CloudBee is a creative, marketing, and experience agency helping brands rise above the noise and create meaningful impact. The agency combines strategy, creativity, and production to create campaigns, content, and experiences that connect with people.",
  email: "cloudbee15@gmail.com",
  copyright: "© 2026 CloudBee. All rights reserved.",
  concept: {
    cloud: {
      title: "CLOUD",
      keywords: ["Imagination", "Perspective", "Possibility"],
      description: "The cloud represents limitless imagination and evolving creativity—the elevated vantage point where raw ideas form without constraints."
    },
    bee: {
      title: "BEE",
      keywords: ["Action", "Collaboration", "Energy"],
      description: "The bee represents collective action, precise execution, and the spreading of ideas—turning imagination into dynamic, lasting buzz."
    }
  }
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "brand-strategy",
    number: "01",
    title: "Brand Strategy & Identity",
    tagline: "Defining core purpose and visual distinction",
    description: "Crafting foundational brand identities, visual systems, positioning frameworks, and voice guidelines that resonate across every customer touchpoint.",
    deliverables: ["Brand Positioning & Architecture", "Visual Identity & Design Systems", "Brand Tone & Messaging Frameworks", "Rebranding & Transformation"],
    abstractColor: "from-[#800020] to-[#4A0E17]"
  },
  {
    id: "creative-advertising",
    number: "02",
    title: "Creative & Advertising",
    tagline: "High-impact storytelling that captures attention",
    description: "Multi-channel advertising campaigns, high-concept creative direction, and memorable copy that disrupt market clutter and spark conversations.",
    deliverables: ["360° Integrated Campaigns", "Creative Direction & Art Direction", "Copywriting & Scriptwriting", "Digital & Out-of-Home (OOH) Ads"],
    abstractColor: "from-[#4A0E17] to-[#800020]"
  },
  {
    id: "digital-marketing",
    number: "03",
    title: "Digital Marketing",
    tagline: "Data-informed performance & community growth",
    description: "Targeted digital marketing strategies designed to amplify brand presence, drive high intent engagement, and accelerate sustainable revenue growth.",
    deliverables: ["Social Media Strategy & Management", "Performance & Paid Media Marketing", "Content Marketing & SEO", "Influencer & Creator Partnerships"],
    abstractColor: "from-[#1A0306] to-[#800020]"
  },
  {
    id: "production-content",
    number: "04",
    title: "Production & Content",
    tagline: "World-class visual assets and video production",
    description: "End-to-end studio content creation, commercial production, motion graphics, and editorial media built to captivate audiences on any screen.",
    deliverables: ["Commercial & Brand Film Production", "Photography & Editorial Shoots", "3D Animation & Motion Design", "Post-Production & Editing"],
    abstractColor: "from-[#800020] to-[#EBE3D5]"
  },
  {
    id: "events-experiences",
    number: "05",
    title: "Events & Brand Experiences",
    tagline: "Immersive physical & hybrid brand activations",
    description: "Designing sensory live activations, product launches, corporate summits, and experiential pop-ups that forge deep emotional connections.",
    deliverables: ["Experiential Design & Fabrication", "Product Launch Activations", "Corporate Summits & Galas", "Interactive Installations"],
    abstractColor: "from-[#4A0E17] to-[#1A0306]"
  },
  {
    id: "consulting-growth",
    number: "06",
    title: "Brand Consulting & Growth",
    tagline: "Strategic guidance for market leadership",
    description: "High-level strategic advisory helping visionary founders and enterprise leaders scale brand equity and capture emerging market opportunities.",
    deliverables: ["Go-to-Market (GTM) Strategy", "Market Entry & Expansion Planning", "Audit & Brand Equity Evaluation", "Growth Experimentation"],
    abstractColor: "from-[#800020] to-[#4A0E17]"

  }
];

export const CLOUDBEE_WAY_STAGES: ProcessStage[] = [
  {
    id: "stage-1",
    number: "01",
    title: "RISE ABOVE",
    subtitle: "Insight & Horizon Scan",
    description: "Understand the brand, audience, market landscape, and cultural currents to find the white space where your brand can stand out.",
    beeAction: "Scanning the landscape for untapped opportunity",
    details: [
      "Market Landscape Analysis",
      "Audience Perception & Behavior Mapping",
      "Cultural & Trend Radar",
      "Competitive White-space Identification"
    ]
  },
  {
    id: "stage-2",
    number: "02",
    title: "SHAPE THE IDEA",
    subtitle: "Conceptual Transformation",
    description: "Transform strategic insights into compelling creative concepts that capture attention, convey deep meaning, and inspire action.",
    beeAction: "Gathering nectar—distilling complexity into bold concepts",
    details: [
      "Creative Concepting & Narrative Arc",
      "Visual & Verbal Art Direction",
      "Multi-Channel Experience Architecture",
      "Prototyping & Pitching Ideas"
    ]
  },
  {
    id: "stage-3",
    number: "03",
    title: "IGNITE THE BUZZ",
    subtitle: "Precision Launch & Production",
    description: "Bring concepts to life through flawless production, high-craft design, dynamic digital marketing, and unforgettable brand activations.",
    beeAction: "Pollen distribution—building high-voltage campaign energy",
    details: [
      "Full-Scale Campaign Execution",
      "High-Fidelity Content & Media Production",
      "Live Experiential & Event Staging",
      "Paid & Organic Media Deployment"
    ]
  },
  {
    id: "stage-4",
    number: "04",
    title: "LET IT TRAVEL",
    subtitle: "Scale, Momentum & Growth",
    description: "Measure impact, analyze engagement metrics, refine execution in real-time, and scale so that ideas continue generating lasting momentum.",
    beeAction: "Hive amplification—multiplying reach and long-term value",
    details: [
      "Real-Time Performance Analytics",
      "Viral Amplification & Community Growth",
      "Iterative Content Optimization",
      "Long-term Equity Measurement"
    ]
  }
];

export const APPROACH_STAGES: ApproachStage[] = [
  {
    id: "understand",
    title: "UNDERSTAND",
    eyebrow: "01 / FOUNDATION",
    description: "We start by understanding the brand, its goals, audience nuances, and market landscape through collaborative discovery.",
    deliverables: ["Brand Audits", "Stakeholder Alignment", "Consumer Journey Mapping"]
  },
  {
    id: "imagine",
    title: "IMAGINE",
    eyebrow: "02 / CREATIVITY",
    description: "We develop bold, imaginative creative concepts and narratives designed to communicate the brand compellingly and distinctly.",
    deliverables: ["Creative Vision", "Campaign Themes", "Art & Design Systems"]
  },
  {
    id: "activate",
    title: "ACTIVATE",
    eyebrow: "03 / EXECUTION",
    description: "We bring ideas to life through precision design, multi-channel campaigns, digital strategies, and physical brand experiences.",
    deliverables: ["Content Production", "Live Activations", "Digital Campaigns"]
  },
  {
    id: "grow",
    title: "GROW",
    eyebrow: "04 / MOMENTUM",
    description: "We analyze results, refine strategy dynamically, and continuously scale campaign impact to help brands grow consistently.",
    deliverables: ["Performance Insights", "Iterative Optimization", "Scaled Reach"]
  }
];

export const WHY_US_POINTS: WhyUsPoint[] = [
  {
    id: "strategic-thinking",
    number: "01",
    title: "STRATEGIC THINKING",
    shortDesc: "Every idea begins with understanding.",
    expandedDesc: "We study the brand, audience psychology, and market dynamics to discover meaningful opportunities before laying down a single pixel or word.",
    impactMetric: "Built on rigorous insight, not guesswork"
  },
  {
    id: "creative-excellence",
    number: "02",
    title: "CREATIVE EXCELLENCE",
    shortDesc: "Bold thinking and imaginative concepts.",
    expandedDesc: "Crafting visually striking, emotionally resonant visual systems and stories designed to command attention and inspire immediate engagement.",
    impactMetric: "Award-winning artistic standards"
  },
  {
    id: "integrated-capabilities",
    number: "03",
    title: "INTEGRATED CAPABILITIES",
    shortDesc: "Branding, marketing, events, and production.",
    expandedDesc: "Eliminating agency silos by uniting brand strategy, media production, digital marketing, and live experiences under one cohesive creative direction.",
    impactMetric: "Seamless end-to-end execution"
  },
  {
    id: "ideas-that-travel",
    number: "04",
    title: "IDEAS THAT TRAVEL",
    shortDesc: "Work that doesn't just launch—it spreads.",
    expandedDesc: "Building cultural resonance and infectious campaign momentum so your brand's story travels organic distances and builds enduring community equity.",
    impactMetric: "Exponential reach & lasting buzz"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "project-nexus",
    number: "01",
    title: "PROJECT RESONANCE",
    client: "Future Tech & Mobility Co.",
    category: "Brand Strategy / Digital Experience / Video",
    year: "2025",
    shortDescription: "Reimagining the future of urban electric mobility through a cinematic brand identity and global launch campaign.",
    servicesProvided: ["Brand Strategy & Identity", "Creative & Advertising", "Production & Content"],
    heroGradient: "from-[#4A0E17] via-[#2C070B] to-[#800020]",

    challenge: "The brand needed to transition from a technical B2B manufacturing persona to a consumer-centric luxury mobility icon in a crowded European and Asian market.",
    strategy: "Positioned the brand around 'Silent Acceleration'—a conceptual campaign highlighting both environmental harmony and high-performance design.",
    creativeIdea: "A visual narrative contrasting raw natural weather elements with polished aerodynamic vehicle silhouettes, creating an otherworldly, modern aesthetic.",
    execution: "Produced a 90-second hero commercial, created a dynamic 3D web experience, designed physical pop-up showrooms in London and Tokyo, and managed global social media amplification.",
    results: [
      { label: "Global Launch Reach", value: "14.2M+" },
      { label: "Engagement Lift", value: "+280%" },
      { label: "Pre-Orders Generated", value: "8,500+" }
    ],
    galleryPlaceholders: [
      { title: "Brand Identity Guidelines", subtitle: "Visual Design System & Typography", color: "#073B3A" },
      { title: "Cinematic Film Stills", subtitle: "High-contrast 8K Commercial Frames", color: "#D96B32" },
      { title: "Physical Showroom Activation", subtitle: "Immersive Lighting & Spatial Experience", color: "#151817" }
    ]
  },
  {
    id: "project-solaris",
    number: "02",
    title: "AURA EXPERIENTIAL SUMMIT",
    client: "NextGen Global Summit",
    category: "Events & Experiential / Production",
    year: "2025",
    shortDescription: "A 3-day immersive experiential conference uniting 3,000+ tech leaders with dynamic light installations and live keynotes.",
    servicesProvided: ["Events & Brand Experiences", "Production & Content", "Brand Strategy"],
    heroGradient: "from-[#D96B32] via-[#073B3A] to-[#151817]",
    challenge: "Creating an engaging event format that eliminated corporate presentation fatigue and fostered genuine connection among high-net-worth delegates.",
    strategy: "Designed a multi-sensory environment featuring spatial audio corridors, responsive kinetic stage sets, and interactive networking hives.",
    creativeIdea: "'The Hive Effect'—every attendee's interactions triggered subtle shifts in ambient lighting and real-time generative art displays across the venue.",
    execution: "Fabricated custom 360-degree LED main stages, coordinated 40+ speakers, streamed global hybrid broadcasts, and crafted bespoke delegate gift experiences.",
    results: [
      { label: "Delegate Satisfaction Score", value: "98.4%" },
      { label: "Social Impressions", value: "22M+" },
      { label: "PR Media Value", value: "$3.8M" }
    ],
    galleryPlaceholders: [
      { title: "360 Stage Design", subtitle: "Custom Generative LED Visuals", color: "#073B3A" },
      { title: "Kinetic Light Tunnel", subtitle: "Interactive Entrance Architecture", color: "#D96B32" },
      { title: "Broadcast Graphics", subtitle: "Live Stream UI & Lower Thirds", color: "#151817" }
    ]
  },
  {
    id: "project-kairo",
    number: "03",
    title: "VELOCITY CAMPAIGN",
    client: "Pulse Lifestyle Audio",
    category: "Digital Marketing / Content Production",
    year: "2024",
    shortDescription: "An international multi-channel campaign launching noise-canceling headphones with creator-led soundscapes.",
    servicesProvided: ["Digital Marketing", "Production & Content", "Creative & Advertising"],
    heroGradient: "from-[#151817] via-[#D96B32] to-[#073B3A]",
    challenge: "Standing out against entrenched tech giants by connecting directly with Gen Z music creators and urban commuters.",
    strategy: "Shifted focus from technical audio specs to sensory immersion—focusing on how music transforms boring daily routines into art.",
    creativeIdea: "'Tune In, Rise Above'—micro-documentaries featuring 12 underground DJs and sound designers revealing their acoustic ritual.",
    execution: "Filmed high-energy vertical videos, launched a viral TikTok remix challenge, executed targeted paid social, and built custom Spotify interactive playlists.",
    results: [
      { label: "TikTok Challenge Views", value: "48M+" },
      { label: "ROAS (Paid Social)", value: "4.6x" },
      { label: "Product Sold Out In", value: "14 Days" }
    ],
    galleryPlaceholders: [
      { title: "Campaign Key Art", subtitle: "Editorial Studio Photography", color: "#D96B32" },
      { title: "Creator Series Stills", subtitle: "Behind-the-scenes Sound Production", color: "#073B3A" },
      { title: "Packaging Design", subtitle: "Sustainable Premium Box & Unboxing", color: "#151817" }
    ]
  },
  {
    id: "project-vortex",
    number: "04",
    title: "ELEMENTAL BRAND EVOLUTION",
    client: "Vortex Organic Spirits",
    category: "Brand Identity / Consulting / Packaging",
    year: "2024",
    shortDescription: "Complete identity overhaul and luxury bottle packaging for an award-winning sustainable spirit distillery.",
    servicesProvided: ["Brand Strategy & Identity", "Brand Consulting & Growth", "Production & Content"],
    heroGradient: "from-[#073B3A] via-[#E8E1D5] to-[#D96B32]",
    challenge: "Elevating brand equity for premium hotel and cocktail bar placement while emphasizing eco-conscious distillation processes.",
    strategy: "Embedded tactile storytelling into every physical detail—from embossed glass geometry to custom copper foil typography.",
    creativeIdea: "'Distilled by Nature, Defined by Craft'—visualizing organic elements like rain and botanicals as abstract art forms.",
    execution: "Developed bespoke bottle architecture, designed custom eco-packaging, directed luxury lifestyle bar photography, and formulated trade launch collateral.",
    results: [
      { label: "On-Premise Distribution Lift", value: "+340%" },
      { label: "Design Award Accolades", value: "3 Global" },
      { label: "Bar Account Penetration", value: "650+" }
    ],
    galleryPlaceholders: [
      { title: "Custom Glass Sculpture", subtitle: "Embossed Organic Patterns", color: "#073B3A" },
      { title: "Luxury Cocktail Photography", subtitle: "Editorial Mixology Imagery", color: "#D96B32" },
      { title: "Brand Guidelines Manual", subtitle: "120-Page Design System Book", color: "#151817" }
    ]
  }
];

export const CLIENT_LOGOS = [
  { name: "APEX HORIZON", category: "TECH" },
  { name: "VELOCITY LABS", category: "AUTOMOTIVE" },
  { name: "SOLARIS GLOBAL", category: "ENERGY" },
  { name: "AURA LIFESTYLE", category: "LUXURY" },
  { name: "PULSE AUDIO", category: "CONSUMER TECH" },
  { name: "VORTEX SPIRITS", category: "BEVERAGE" },
  { name: "NEXUS VENTURES", category: "FINTECH" },
  { name: "ELEVATE SPORTS", category: "MEDIA" }
];

export const STATS_DATA = [
  { id: "projects", label: "Projects Completed", placeholder: "[XX]+ Projects", realValue: "150+" },
  { id: "brands", label: "Brands Partnered", placeholder: "[XX]+ Brands", realValue: "45+" },
  { id: "campaigns", label: "Campaigns Launched", placeholder: "[XX]+ Campaigns", realValue: "300+" },
  { id: "experiences", label: "Live Experiences", placeholder: "[XX]+ Experiences", realValue: "85+" }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "test-1",
    quote: "CloudBee took our brand concept from a rough sketch in the clouds and turned it into an explosive campaign that dominated our industry for months.",
    author: "Elena Rostova",
    role: "Chief Marketing Officer",
    company: "Aura Global Mobility",
    category: "Brand Strategy & Campaign"
  },
  {
    id: "test-2",
    quote: "The energy and craft CloudBee brings is unmatched. Their ability to synthesize strategy with high-art production gave our launch total market supremacy.",
    author: "Marcus Vance",
    role: "Founder & CEO",
    company: "Pulse Technologies",
    category: "Experiential & Product Launch"
  },
  {
    id: "test-3",
    quote: "Working with CloudBee felt like having an elite creative skunkworks team. They didn't just build us a brand—they created a movement people talk about.",
    author: "Sophia Chen",
    role: "Head of Brand Experience",
    company: "Solaris Ventures",
    category: "Integrated Growth Strategy"
  }
];
