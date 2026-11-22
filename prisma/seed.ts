import { PrismaClient, Role, Region, EvidenceLevel, ContentStatus } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding PERFAI Enterprise Database from BLUEPRINT.md specifications...');

  // 1. Super Admin User
  const adminEmail = process.env.ADMIN_SEED_EMAIL || 'admin@perfai.in';
  // Password hash for demo (in production Argon2id is used)
  const passwordHash = '$argon2id$v=19$m=65536,t=3,p=4$perfai-salt$hashed-perfai-2026';

  const superAdmin = await prisma.user.upsert({
    where: { email: adminEmail },
    update: {
      name: 'System Administrator',
      role: Role.SUPER_ADMIN,
      regions: [Region.INDIA, Region.INTERNATIONAL],
      isActive: true,
    },
    create: {
      email: adminEmail,
      name: 'System Administrator',
      passwordHash,
      role: Role.SUPER_ADMIN,
      regions: [Region.INDIA, Region.INTERNATIONAL],
      isActive: true,
    },
  });

  console.log(`✓ Super Admin seeded: ${superAdmin.email}`);

  // 2. Default Tags
  const defaultTags = [
    { name: 'Hot account', color: '#EF4444' },
    { name: 'Portfolio', color: '#3B82F6' },
    { name: 'Pilot candidate', color: '#F59E0B' },
    { name: 'Partner', color: '#10B981' },
  ];

  for (const tag of defaultTags) {
    await prisma.tag.upsert({
      where: { name: tag.name },
      update: tag,
      create: tag,
    });
  }
  console.log(`✓ Seeded ${defaultTags.length} default tags.`);

  // 3. Starter FAQs (The 6 Blueprint FAQs)
  const starterFaqs = [
    {
      question: 'Does PerfAI replace our existing BMS?',
      answer: 'No. ATRIA is non-invasive software that connects directly to your existing BMS (Schneider, Siemens, Honeywell, Johnson Controls) via BACnet or Modbus. It acts as an intelligent supervisor over your installed controllers without hardware replacement.',
      page: 'home',
      position: 1,
      status: ContentStatus.PUBLISHED,
    },
    {
      question: 'How much control does the AI have over our equipment?',
      answer: 'You decide how far autonomy goes via our 5-level ladder. You can begin at Level 1 (Read-only observation) or Level 3 (Human-approved recommendations) before graduating to Level 4 (Controlled closed-loop autonomy). All actions strictly respect hard engineering limits.',
      page: 'home',
      position: 2,
      status: ContentStatus.PUBLISHED,
    },
    {
      question: 'How long does a typical deployment take?',
      answer: 'Typically 4 to 8 weeks with zero downtime. We conduct an initial telemetry feasibility check, connect our lightweight edge gateway, calibrate the digital twin over 30 days, and initiate controlled optimization.',
      page: 'home',
      position: 3,
      status: ContentStatus.PUBLISHED,
    },
    {
      question: 'What about data security and telemetry safety?',
      answer: 'Telemetry streams are encrypted in transit via TLS 1.3. An automatic 90-second heartbeat failsafe immediately returns physical equipment to native BMS setpoints if network connectivity to the cloud model drops.',
      page: 'home',
      position: 4,
      status: ContentStatus.PUBLISHED,
    },
    {
      question: 'Which buildings qualify for a feasibility assessment?',
      answer: 'Commercial office towers, luxury hotels, data centres, and industrial facilities with centralized chiller plants of 500 TR or greater and existing digital BMS connectivity.',
      page: 'home',
      position: 5,
      status: ContentStatus.PUBLISHED,
    },
    {
      question: 'Are GridShield and ComputeShield commercially available today?',
      answer: 'BuildingShield is commercially available (Live). GridShield is in active pilot deployment trials, and ComputeShield is under development for our next-phase roadmap. We do not sell pilot or planned features as live products.',
      page: 'home',
      position: 6,
      status: ContentStatus.PUBLISHED,
    },
  ];

  for (const faq of starterFaqs) {
    const existing = await prisma.faq.findFirst({
      where: { question: faq.question },
    });
    if (!existing) {
      await prisma.faq.create({ data: faq });
    }
  }
  console.log(`✓ Seeded ${starterFaqs.length} starter FAQs.`);

  // 4. Three Senatria Reference Case Studies (Blueprint §1)
  const referenceCaseStudies = [
    {
      slug: 'australian-hospitality-portfolio',
      title: 'Australian Luxury Hotel Portfolio: Flagship Chiller Optimization',
      summary: 'Continuous chiller plant optimization across luxury hotel operations, verified under IPMVP Option C standards.',
      body: 'Senatria reference deployment across a 7-hotel Australian portfolio (2,148 rooms total). Baseline established with 12-month weather-normalized utility interval data. Live observed reduction achieved across central chiller plant with zero guest comfort breaches.',
      country: 'Australia',
      scope: '7 hotels, 2,148 rooms; 1 live',
      period: 'Continuous 90-Day Verified Window',
      baseline: 'IPMVP Option C weather-normalized historical baseline',
      evidence: EvidenceLevel.MEASURED,
      isSenatriaRef: true,
      metrics: [
        { label: 'Chiller Energy Reduction', value: '~15%', evidence: 'MEASURED' },
        { label: 'Guest Comfort Breaches', value: '0', evidence: 'MEASURED' },
        { label: 'Peak Demand Clipping', value: '18 kW', evidence: 'INDICATIVE' },
      ],
      status: ContentStatus.PUBLISHED,
      publishedAt: new Date(),
    },
    {
      slug: 'california-grid-demand-response',
      title: 'California Grid Flexibility & Demand Response Trial',
      summary: 'Automated thermal pre-cooling and dynamic load shifting in partnership with California utility trial programs.',
      body: 'Senatria GridShield reference trial testing OpenADR 2.0b integration. Validated automated pre-cooling load dispatch to shift 25% of commercial chiller power ahead of extreme grid peak pricing events.',
      country: 'United States (California)',
      scope: 'Multi-facility commercial trial (PG&E grid corridor)',
      period: 'Summer Peak Season Trial',
      baseline: 'Utility capacity market baseline',
      evidence: EvidenceLevel.MEASURED,
      isSenatriaRef: true,
      metrics: [
        { label: 'Peak Load Shifting', value: '25%', evidence: 'MEASURED' },
        { label: 'Response Latency', value: '< 60 sec', evidence: 'MEASURED' },
        { label: 'Comfort SLA Maintenance', value: '100%', evidence: 'MEASURED' },
      ],
      status: ContentStatus.PUBLISHED,
      publishedAt: new Date(),
    },
    {
      slug: 'state-grid-fujian-flexibility',
      title: 'State Grid Fujian: Industrial Peak Load Coordination',
      summary: 'Coordinated thermal inertia dispatch across large-scale facility cooling and pumping infrastructure.',
      body: 'Senatria GridShield pilot reference demonstrating large-scale thermal flexibility dispatch for regional grid stabilization. Evaluated dynamic capacity clipping across heavy cooling loads.',
      country: 'China (Fujian Province)',
      scope: 'Industrial & heavy commercial cooling loops',
      period: 'Pilot Evaluation Period',
      baseline: 'Contracted substation capacity limits',
      evidence: EvidenceLevel.MODELLED,
      isSenatriaRef: true,
      metrics: [
        { label: 'Modelled Peak Curtailment', value: '18% - 24%', evidence: 'MODELLED' },
        { label: 'Substation Headroom Created', value: '1.2 MW', evidence: 'MODELLED' },
      ],
      status: ContentStatus.PUBLISHED,
      publishedAt: new Date(),
    },
  ];

  for (const cs of referenceCaseStudies) {
    await prisma.caseStudy.upsert({
      where: { slug: cs.slug },
      update: cs,
      create: cs,
    });
  }
  console.log(`✓ Seeded ${referenceCaseStudies.length} Senatria reference case studies.`);

  // 5. Default Site Settings
  const defaultSettings = [
    { key: 'notification_email', value: { email: 'leads@perfai.in' } },
    { key: 'company_brand', value: { name: 'PerfAI', partner: 'Senatria' } },
    { key: 'retention_months', value: { months: 24 } },
  ];

  for (const s of defaultSettings) {
    await prisma.siteSetting.upsert({
      where: { key: s.key },
      update: s,
      create: s,
    });
  }
  console.log(`✓ Seeded default site settings.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
