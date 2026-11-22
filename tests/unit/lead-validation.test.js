const test = require('node:test');
const assert = require('node:assert');
const { z } = require('zod');

const leadFormSchema = z.object({
  fullName: z.string().trim().min(2).max(100),
  email: z.string().trim().email(),
  phone: z.string().trim().max(30).optional().or(z.literal('')),
  companyName: z.string().trim().min(2).max(150),
  country: z.string().trim().min(2).max(100),
  jobTitle: z.string().trim().max(100).optional().or(z.literal('')),
  industry: z.string().min(1),
  productInterest: z.string().min(1),
  message: z.string().trim().max(3000).optional().or(z.literal('')),
  consent: z.literal(true),
  websiteHp: z.string().max(0).optional().or(z.literal('')),
});

test('leadFormSchema validates correct enterprise input', () => {
  const validInput = {
    fullName: 'Aditya Birla',
    email: 'aditya@birla-corp.in',
    phone: '+91 98200 54321',
    companyName: 'Birla Infrastructure Group',
    country: 'India',
    jobTitle: 'Chief Sustainability Officer',
    industry: 'Commercial Real Estate',
    productInterest: 'BuildingShield',
    message: 'Interested in evaluating 3 commercial office towers in BKC Mumbai.',
    consent: true,
  };

  const result = leadFormSchema.safeParse(validInput);
  assert.strictEqual(result.success, true);
});

test('leadFormSchema rejects invalid email', () => {
  const invalidInput = {
    fullName: 'Rahul Sharma',
    email: 'not-an-email',
    companyName: 'Tech Park',
    country: 'India',
    industry: 'Data Centres',
    productInterest: 'ATRIA',
    consent: true,
  };

  const result = leadFormSchema.safeParse(invalidInput);
  assert.strictEqual(result.success, false);
});

test('leadFormSchema fails when consent is false', () => {
  const noConsentInput = {
    fullName: 'Rahul Sharma',
    email: 'rahul@techpark.in',
    companyName: 'Tech Park',
    country: 'India',
    industry: 'Data Centres',
    productInterest: 'ATRIA',
    consent: false,
  };

  const result = leadFormSchema.safeParse(noConsentInput);
  assert.strictEqual(result.success, false);
});

test('leadFormSchema detects bot honeypot submission', () => {
  const botInput = {
    fullName: 'Bot User',
    email: 'bot@spam.com',
    companyName: 'Spam Corp',
    country: 'India',
    industry: 'Industrial Facilities',
    productInterest: 'BuildingShield',
    consent: true,
    websiteHp: 'http://spam-link.com', // Filled by bot
  };

  const result = leadFormSchema.safeParse(botInput);
  assert.strictEqual(result.success, false);
});
