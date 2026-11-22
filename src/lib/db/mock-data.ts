import { ProductItem, IndustryItem, CaseStudyItem } from '@/types';

export const OFFICIAL_PRODUCTS: ProductItem[] = [
  {
    id: 'prod-atria',
    name: 'ATRIA',
    slug: 'atria',
    category: 'Core Physical AI Platform',
    headline: 'Autonomous Physical AI Infrastructure Platform',
    tagline: 'The intelligence operating system that connects physical infrastructure, models, and real-time control loops.',
    description:
      'ATRIA is the underlying Physical AI platform developed by Senatria. It ingests high-frequency telemetry from existing BMS, sensors, meters, and industrial PLCs, constructs dynamic digital twins, and executes closed-loop autonomous setpoint adjustments within verified engineering guardrails.',
    availability: 'AVAILABLE',
    isFeatured: true,
    isPublished: true,
    specs: [
      { label: 'Integration Architecture', value: 'Non-invasive, cloud & edge agent gateway' },
      { label: 'Control Loop Latency', value: 'Sub-minute autonomous modulation' },
      { label: 'Safety Boundaries', value: 'Hard engineering bounds & manual override fail-safes' },
      { label: 'Protocol Compatibility', value: 'BACnet, Modbus, MQTT, OPC-UA, REST' }
    ],
    features: [
      'Universal telemetry ingestion across legacy BMS & meters',
      'Physics-informed thermodynamic & load models',
      'Dynamic setpoint optimization without hardware replacement',
      'Comprehensive audit trails of every autonomous actuation',
      'Real-time anomaly & asset degradation diagnostics'
    ],
    metaTitle: 'ATRIA — Autonomous Physical AI Platform | PERFAI',
    metaDesc: 'Explore the ATRIA Physical AI platform for real-time autonomous building and infrastructure optimization with non-invasive integration.'
  },
  {
    id: 'prod-building-shield',
    name: 'BuildingShield',
    slug: 'building-shield',
    category: 'Commercial & Facility Solution',
    headline: 'Continuous HVAC & Building Asset Optimization',
    tagline: 'Deliver verified energy reduction and peak demand management without compromising occupant comfort.',
    description:
      'BuildingShield is the live flagship solution for commercial real estate, corporate headquarters, hospitality, and mixed-use campuses. Working with your existing building management systems, it continuously modulates chiller plants, air handlers, and thermal distribution in response to occupancy, thermal inertia, and dynamic weather patterns.',
    availability: 'AVAILABLE',
    isFeatured: true,
    isPublished: true,
    specs: [
      { label: 'Primary Target', value: 'Chiller plants, AHUs, cooling towers, ventilation' },
      { label: 'Commercial Readiness', value: 'Commercially Available for Global Deployments' },
      { label: 'Baseline Methodology', value: 'IPMVP-aligned measurement & verification' },
      { label: 'Typical Deployment Time', value: '4 to 8 weeks with zero downtime' }
    ],
    features: [
      'Chiller plant COP dynamic optimization',
      'Dynamic static pressure & fan speed modulation',
      'Occupancy-anticipatory pre-cooling & thermal storage utilisation',
      'Continuous thermal comfort validation within ISO / ASHRAE standards',
      'Automated peak demand threshold clipping'
    ],
    metaTitle: 'BuildingShield — Autonomous HVAC & Building AI Optimization | PERFAI',
    metaDesc: 'Discover BuildingShield by Senatria: Commercially available Physical AI for commercial real estate, hotels, and enterprise facilities.'
  },
  {
    id: 'prod-grid-shield',
    name: 'GridShield',
    slug: 'grid-shield',
    category: 'Energy & Flexibility Solution',
    headline: 'Grid Flexibility, Peak Shaving & Pilot Pathway',
    tagline: 'Transform static energy consumers into dynamic, dispatchable flexibility assets for the evolving power grid.',
    description:
      'GridShield coordinates distributed building loads, battery storage, and on-site generation into responsive capacity. Currently progressing through structured pilot deployments, GridShield enables facilities to monetize demand flexibility and shield operations against volatile peak grid tariffs.',
    availability: 'PILOT',
    isFeatured: true,
    isPublished: true,
    specs: [
      { label: 'Deployment Status', value: 'Pilot Pathway & Select Partner Engagements' },
      { label: 'Dispatch Response', value: 'Automated demand response (OpenADR 2.0b ready)' },
      { label: 'Flexibility Window', value: '15-minute to 4-hour dynamic load shifting' }
    ],
    features: [
      'Predictive peak tariff arbitrage and demand limiting',
      'Non-disruptive thermal battery pre-cooling load shift',
      'BESS (Battery Energy Storage System) lifecycle optimization',
      'Automated participation in utility demand response programs'
    ],
    metaTitle: 'GridShield — AI Energy Flexibility & Grid Response | PERFAI',
    metaDesc: 'Learn about GridShield: Senatria pilot pathway solution enabling commercial infrastructure flexibility and automated peak clipping.'
  },
  {
    id: 'prod-compute-shield',
    name: 'ComputeShield',
    slug: 'compute-shield',
    category: 'Next-Generation Compute Infrastructure',
    headline: 'Distributed Compute on Released Infrastructure Capacity',
    tagline: 'Capitalize on optimized electrical and thermal margins to deploy distributed edge and AI compute workloads.',
    description:
      'ComputeShield represents the forward-looking opportunity in Physical AI. When BuildingShield unlocks 15% to 30% of electrical and cooling capacity in commercial properties, ComputeShield maps this newly liberated infrastructure headroom for modular, high-density edge computing and AI inference.',
    availability: 'UNDER_DEVELOPMENT',
    isFeatured: false,
    isPublished: true,
    specs: [
      { label: 'Status', value: 'Research & Next-Phase Roadmap Opportunity' },
      { label: 'Target Synergy', value: 'Co-located power & cooling margin reclamation' }
    ],
    features: [
      'Real-time thermal margin harvesting for computing racks',
      'Co-optimized cooling loops for mixed IT and comfort infrastructure',
      'Edge inference load scheduling matched to building renewable supply',
      'Unlocks new commercial revenue streams for property owners'
    ],
    metaTitle: 'ComputeShield — Distributed Compute Infrastructure | PERFAI',
    metaDesc: 'Explore ComputeShield: Next-phase physical AI architecture turning liberated building power and cooling capacity into distributed compute nodes.'
  },
  {
    id: 'prod-veritas',
    name: 'VERITAS',
    slug: 'veritas',
    category: 'Measurement & Value Intelligence',
    headline: 'Financial Attribution & Transparent Value Verification',
    tagline: 'Independent, mathematically rigorous measurement and verification of every kilowatt-hour and rupee saved.',
    description:
      'VERITAS is the financial intelligence and verification engine across the Senatria portfolio. It decouples weather variations, operational occupancy changes, and utility rate shifts to isolate the exact performance contribution of Physical AI control.',
    availability: 'AVAILABLE',
    isFeatured: true,
    isPublished: true,
    specs: [
      { label: 'Methodology Standard', value: 'IPMVP Option C & ASHRAE Guideline 14' },
      { label: 'Financial Reporting', value: 'Real-time billing reconciliation & ESG audit exports' },
      { label: 'Data Integrity', value: 'Immutable, tamper-evident telemetry logs' }
    ],
    features: [
      'Multi-variable regression models isolating operational AI impact',
      'Automatic weather normalization via hyper-local meteorological feeds',
      'Real-time currency & tariff-indexed financial reporting',
      'Auditor-grade ESG and carbon abatement certificates'
    ],
    metaTitle: 'VERITAS — Infrastructure Value Measurement & Intelligence | PERFAI',
    metaDesc: 'VERITAS provides transparent, IPMVP-aligned financial and energy verification for Physical AI deployments.'
  }
];

export const OFFICIAL_INDUSTRIES: IndustryItem[] = [
  {
    id: 'ind-commercial-real-estate',
    name: 'Commercial Real Estate',
    slug: 'commercial-real-estate',
    heroHeadline: 'Premium Grade-A Asset Performance & Tenant Comfort',
    description:
      'Commercial office towers and corporate business parks face high utility tariffs and demanding ESG mandates. PERFAI delivers autonomous HVAC setpoint control that cuts energy costs while maintaining strict indoor environmental quality.',
    challenges: [
      'High baseline chiller and ventilation electricity costs',
      'Unpredictable hybrid occupancy fluctuations post-pandemic',
      'Siloed BMS systems that require constant manual technician tuning',
      'Strict corporate tenant comfort SLAs and carbon reporting mandates'
    ],
    solutions: [
      'Continuous chiller plant and AHU optimization with BuildingShield',
      'Occupancy-predictive airflow and temperature setpoint control',
      'VERITAS financial attribution for tenant billing transparency'
    ],
    outcomes: [
      '12% to 22% verified HVAC energy reduction without comfort drift',
      'Streamlined operations with autonomous proactive control',
      'Audit-grade Scope 2 emissions documentation for institutional investors'
    ]
  },
  {
    id: 'ind-hospitality',
    name: 'Hospitality & Luxury Hotels',
    slug: 'hospitality',
    heroHeadline: 'Uncompromising Guest Experience with Optimized Operating Costs',
    description:
      'In luxury hotels, guest comfort is non-negotiable. PERFAI deploys Physical AI to dynamically tune central cooling plants, banquet cooling, and public spaces to match booking schedules and outdoor weather.',
    challenges: [
      '24/7 continuous operations with zero tolerance for guest discomfort',
      'Extreme load swings from banquet halls, conferences, and dining areas',
      'High chiller energy consumption accounting for 40%+ of total hotel power'
    ],
    solutions: [
      'Pre-cooling banquet and event spaces using thermal mass before peak rates',
      'Precision chilled water delta-T management across public and guest wings',
      'Immediate automated reversion if temperatures approach customer thresholds'
    ],
    outcomes: [
      'Proven 14%+ energy savings in verified 5-star hotel deployments',
      'Enhanced chiller asset lifespan through reduced cycling stress',
      'Immediate operational savings directly flowing to EBITDA'
    ]
  },
  {
    id: 'ind-data-centres',
    name: 'Data Centres & Mission-Critical',
    slug: 'data-centres',
    heroHeadline: 'Thermal Precision & PUE Optimization for Critical Facilities',
    description:
      'Data centres require absolute thermal reliability. Physical AI integrates with precision cooling units, chillers, and CRAH systems to lower Power Usage Effectiveness (PUE) while preserving redundant thermal safety envelopes.',
    challenges: [
      'Intense cooling power consumption driving high operational expenditure',
      'Hotspot emergence from dynamic rack compute loads',
      'Strict ASHRAE TC 9.9 thermal envelopes requiring fail-safe control'
    ],
    solutions: [
      'Dynamic supply air temperature and fan speed balancing across CRAH units',
      'Predictive thermal plume modeling based on IT workload forecasts',
      'Hard-coded engineering guardrails that automatically defer to safety protocols'
    ],
    outcomes: [
      'Measurable PUE reduction of 0.05 - 0.12 points',
      'Elimination of thermal hotspots through balanced air delivery',
      'Released electrical infrastructure headroom for high-density AI clusters'
    ]
  },
  {
    id: 'ind-industrial',
    name: 'Industrial Facilities & Manufacturing',
    slug: 'industrial',
    heroHeadline: 'Energy Optimization for Cleanrooms, Process & Plant Infrastructure',
    description:
      'Manufacturing facilities and pharmaceutical cleanrooms demand stringent environmental control. Physical AI optimizes heavy refrigeration, process cooling, and ventilation without disrupting production.',
    challenges: [
      'Extremely high connected electrical loads and harsh peak demand tariffs',
      'Regulatory compliance requirements for cleanroom temperature and humidity',
      'Complex legacy refrigeration and compressed air infrastructure'
    ],
    solutions: [
      'Chilled water loop and industrial refrigeration sequencing',
      'Dynamic ventilation optimization tied to production shifts',
      'Continuous sensor telemetry monitoring to detect asset anomalies early'
    ],
    outcomes: [
      'Substantial peak kilowatt demand clipping during high-tariff periods',
      'Guaranteed regulatory compliance for cleanroom manufacturing zones',
      'Reduced maintenance costs through predictive degradation detection'
    ]
  },
  {
    id: 'ind-energy-utilities',
    name: 'Energy & Utilities',
    slug: 'energy-utilities',
    heroHeadline: 'Demand Flexibility & Grid-Interactive Building Portfolios',
    description:
      'Utilities and microgrid operators need flexible capacity to balance renewable intermittency. PERFAI enables large commercial facilities to act as virtual power plants via GridShield.',
    challenges: [
      'Grid strain during evening peak hours and extreme heatwaves',
      'Costly peaker plant dispatch and localized distribution bottlenecks',
      'Difficulty aggregating fragmented commercial building loads'
    ],
    solutions: [
      'Coordinated building thermal inertia dispatch via GridShield',
      'Automated demand response signaling and load shedding',
      'Granular baseline validation through VERITAS'
    ],
    outcomes: [
      'Fast, reliable demand response dispatch during grid stress events',
      'Revenue generation for property owners via capacity markets',
      'Enhanced grid resilience and accelerated renewable integration'
    ]
  },
  {
    id: 'ind-property-portfolios',
    name: 'Property Portfolios & REITs',
    slug: 'property-portfolios',
    heroHeadline: 'Portfolio-Wide Visibility, Standardisation & ESG Alpha',
    description:
      'Institutional asset managers and REITs manage diverse properties with inconsistent BMS vendors. PERFAI unifies portfolio telemetry into a single Physical AI intelligence and verification layer.',
    challenges: [
      'Disparate BMS vendors (Schneider, Siemens, Honeywell, Johnson Controls)',
      'Lack of unified cross-asset benchmarking and performance tracking',
      'Mounting institutional investor pressure for verified GRESB / ESG scores'
    ],
    solutions: [
      'Universal ATRIA agent deployment across all existing BMS architectures',
      'Centralized portfolio dashboard with standardized KPI reporting',
      'Automated continuous optimization deployed across multi-city assets'
    ],
    outcomes: [
      'Standardized operational intelligence across all assets',
      '15%+ average energy savings across managed portfolio square footage',
      'Direct increase in asset Net Operating Income (NOI) and asset valuation'
    ]
  }
];

export const OFFICIAL_CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 'cs-luxury-hotel-1',
    title: 'Flagship 5-Star Luxury Hotel: Continuous HVAC Energy Reduction',
    slug: 'luxury-hotel-hvac-optimization',
    industry: 'Hospitality',
    location: 'Major Metropolitan Center',
    assetScope: '450-Key Luxury Hotel with 3 Water-Cooled Chillers & 28 AHUs',
    deploymentStatus: 'Live Deployment',
    measurementPeriod: 'Continuous 90-Day Verified Operating Period',
    baseline: 'IPMVP Option C weather-normalized historical baseline over previous 12 months',
    actualResults: [
      { metric: '14.2%', value: 'Verified Total Chiller Plant Energy Reduction', notes: 'Measured over continuous 90-day live deployment' },
      { metric: '0', value: 'Guest Comfort Breaches', notes: 'Zero temperature drift beyond strict brand guidelines' },
      { metric: '18 kW', value: 'Average Peak Demand Reduction', notes: 'Clipping during daily utility peak tariff windows' }
    ],
    modelledSavings: [
      { metric: '18.5%', value: 'Full Annualized Energy Optimization Potential', notes: 'Modelled across complete four-season thermal cycle' }
    ],
    methodologyNotes:
      'Performance measured using IPMVP Option C methodology. Baseline calibrated against 8,760 hours of historical utility interval data and normalized against outdoor wet-bulb temperature, outdoor dry-bulb temperature, and banquet hall occupancy logs. Live telemetry verified by independent facility engineering consultants.'
  },
  {
    id: 'cs-corporate-campus-pipeline',
    title: 'Grade-A Commercial IT Park: Contracted Portfolio Pathway',
    slug: 'grade-a-it-park-portfolio',
    industry: 'Commercial Real Estate',
    location: 'Technology Corridor Campus',
    assetScope: '1.2 Million Sq. Ft. Across 3 Interconnected Commercial Towers',
    deploymentStatus: 'Contracted Portfolio',
    measurementPeriod: 'Pilot Baseline Phase in Progress',
    baseline: 'Sub-metered baseline calibration across 4 centrifugal chillers and primary pumps',
    actualResults: [
      { metric: 'In Progress', value: 'Baseline Calibration Underway', notes: 'Telemetry agent installed on BACnet IP backbone' }
    ],
    modelledSavings: [
      { metric: '16.0% - 21.0%', value: 'Projected HVAC Power Reduction', notes: 'Thermodynamic digital twin model based on 12-month asset logs' },
      { metric: '480,000 kWh', value: 'Projected Annual Electricity Conservation', notes: 'Estimated annual Scope 2 carbon abatement of ~390 tCO2e' }
    ],
    methodologyNotes:
      'Current stage reflects contracted portfolio agreement with active telemetry capture. Projected numbers represent engineering thermodynamic simulations and should not be confused with historical live measured savings until initial 60-day baseline period concludes.'
  }
];

export const OFFICIAL_RESOURCES = [
  {
    id: 'res-atria-whitepaper',
    title: 'Autonomous Physical AI in Built Environments: Architectural Whitepaper',
    slug: 'autonomous-physical-ai-whitepaper',
    type: 'Whitepaper',
    description: 'A deep-dive technical overview of ATRIA closed-loop control algorithms, sensor telemetry ingestion, and engineering safety boundaries.',
    fileUrl: '/documents/PERFAI_ATRIA_Whitepaper_Overview.pdf',
    fileSize: '2.4 MB'
  },
  {
    id: 'res-buildingshield-brochure',
    title: 'BuildingShield Commercial Product Overview & Technical Specs',
    slug: 'buildingshield-product-overview',
    type: 'Product Brochure',
    description: 'Comprehensive guide to BuildingShield deployment for commercial real estate, corporate headquarters, and hospitality facilities.',
    fileUrl: '/documents/PERFAI_BuildingShield_Overview.pdf',
    fileSize: '1.8 MB'
  },
  {
    id: 'res-veritas-methodology',
    title: 'VERITAS: IPMVP-Aligned Energy Measurement & Financial Attribution Guide',
    slug: 'veritas-measurement-guide',
    type: 'Methodology Brief',
    description: 'Detailed explanation of how PERFAI and Senatria mathematically isolate operational AI impact from weather and occupancy variations.',
    fileUrl: '/documents/PERFAI_VERITAS_Methodology.pdf',
    fileSize: '1.1 MB'
  }
];
