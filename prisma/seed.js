/**
 * Prisma Database Seed Script for PERFAI Website
 * Populates initial products, industries, case studies, and administrative roles.
 */
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding PERFAI Enterprise Database...');

  // 1. Seed Initial Products
  const products = [
    {
      name: 'ATRIA',
      slug: 'atria',
      category: 'Core Physical AI Platform',
      headline: 'Autonomous Physical AI Infrastructure Platform',
      tagline: 'The intelligence operating system that connects physical infrastructure, models, and real-time control loops.',
      description: 'ATRIA is the underlying Physical AI platform developed by Senatria. It ingests high-frequency telemetry, constructs dynamic digital twins, and executes closed-loop autonomous setpoint adjustments within verified engineering guardrails.',
      availability: 'AVAILABLE',
      isFeatured: true,
      isPublished: true,
    },
    {
      name: 'BuildingShield',
      slug: 'building-shield',
      category: 'Commercial & Facility Solution',
      headline: 'Continuous HVAC & Building Asset Optimization',
      tagline: 'Deliver verified energy reduction and peak demand management without compromising occupant comfort.',
      description: 'BuildingShield is the live flagship solution for commercial real estate, corporate headquarters, hospitality, and mixed-use campuses.',
      availability: 'AVAILABLE',
      isFeatured: true,
      isPublished: true,
    },
    {
      name: 'GridShield',
      slug: 'grid-shield',
      category: 'Energy & Flexibility Solution',
      headline: 'Grid Flexibility, Peak Shaving & Pilot Pathway',
      tagline: 'Transform static energy consumers into dynamic, dispatchable flexibility assets for the evolving power grid.',
      description: 'GridShield coordinates distributed building loads, battery storage, and on-site generation into responsive capacity.',
      availability: 'PILOT',
      isFeatured: true,
      isPublished: true,
    },
    {
      name: 'ComputeShield',
      slug: 'compute-shield',
      category: 'Next-Generation Compute Infrastructure',
      headline: 'Distributed Compute on Released Infrastructure Capacity',
      tagline: 'Capitalize on optimized electrical and thermal margins to deploy distributed edge and AI compute workloads.',
      description: 'ComputeShield maps newly liberated infrastructure headroom for modular, high-density edge computing and AI inference.',
      availability: 'UNDER_DEVELOPMENT',
      isFeatured: false,
      isPublished: true,
    },
    {
      name: 'VERITAS',
      slug: 'veritas',
      category: 'Measurement & Value Intelligence',
      headline: 'Financial Attribution & Transparent Value Verification',
      tagline: 'Independent, mathematically rigorous measurement and verification of every kilowatt-hour and rupee saved.',
      description: 'VERITAS is the financial intelligence and verification engine across the Senatria portfolio, strictly aligned with IPMVP Option C.',
      availability: 'AVAILABLE',
      isFeatured: true,
      isPublished: true,
    },
  ];

  for (const prod of products) {
    await prisma.product.upsert({
      where: { slug: prod.slug },
      update: prod,
      create: prod,
    });
  }

  console.log(`Seeded ${products.length} products successfully.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
