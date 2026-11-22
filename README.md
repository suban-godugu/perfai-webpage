# PERFAI — Premium Enterprise Physical AI Website

> **Physical AI. Intelligent Infrastructure. Measurable Impact.**  
> Official Commercial Website: [https://perfai.in](https://perfai.in)  
> Technology Partner: **SENATRIA** ([https://senatria.ai](https://senatria.ai))  
> Business Model: Enterprise Reseller & Commercial Sales Partner

---

## 1. Executive Summary & Brand Relationship

**PERFAI** is an independent corporate brand and commercial sales partner for **SENATRIA**, a pioneer in Physical AI technology for built environments and autonomous infrastructure.

### Commercial Framework
- **PERFAI**: Customer-facing commercial entity managing enterprise sales, feasibility audits, commercial contracting, and client success across India and global markets.
- **SENATRIA**: Underlying technology provider engineering the ATRIA Physical AI platform, BuildingShield, GridShield, ComputeShield, and the VERITAS verification layer.
- **Enterprise Scope**: Commercial Real Estate (Grade-A Office Towers), Hospitality (Luxury Hotels & Resorts), Hyperscale & Edge Data Centres, Industrial Manufacturing & Cleanrooms, and Utility Portfolios.

---

## 2. Technology Architecture & Stack

- **Frontend**: Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS, Lucide React, Framer Motion
- **Backend**: Next.js Route Handlers, Zod Validation, Server-Side Role-Based Access Control (RBAC)
- **Database & ORM**: PostgreSQL (Supabase ready), Prisma ORM
- **Authentication**: Session Token / Supabase Auth with HTTP-only cookies
- **Email Infrastructure**: Resend API / SMTP with automatic retry and `email_logs` auditing
- **SEO & Search Infrastructure**: Dynamic XML Sitemap (`/sitemap.xml`), `robots.txt`, OpenGraph metadata, JSON-LD Schema.org structured data

---

## 3. Implemented Routes & Sitemap

### Public Marketing Pages
| Route | Description |
|---|---|
| `/` | Homepage (Hero, Challenges, About, Partner, 5 Solutions, 6 Industries, 6-Step Loop, Business Value, Verified Evidence, Assessment CTA) |
| `/about` | Corporate overview, commercial reseller model, engagement lifecycle |
| `/solutions` | Full Senatria Physical AI portfolio overview |
| `/solutions/atria` | ATRIA Physical AI Platform architecture & control loops |
| `/solutions/building-shield` | BuildingShield continuous HVAC and BMS optimization |
| `/solutions/grid-shield` | GridShield energy flexibility & peak tariff shaving (Pilot Pathway) |
| `/solutions/compute-shield` | ComputeShield distributed compute on released capacity |
| `/solutions/veritas` | VERITAS value intelligence & IPMVP Option C verification |
| `/industries` | Overview of target enterprise sectors |
| `/industries/commercial-real-estate` | Grade-A office buildings & tenant comfort |
| `/industries/hospitality` | Luxury hotels, banquets, and 24/7 guest comfort |
| `/industries/data-centres` | Thermal plumes, PUE optimization & critical fail-safes |
| `/industries/industrial` | Cleanroom environments, process cooling & peak clipping |
| `/industries/energy-utilities` | Demand response & grid-interactive portfolios |
| `/industries/property-portfolios` | Institutional REITs & portfolio standardisation |
| `/technology` | 6-Stage closed loop (*Perceive → Analyse → Optimise → Control → Verify → Learn*) & safety guardrails |
| `/case-studies` | Directory of verified empirical case studies |
| `/case-studies/[slug]` | Detailed asset scope, baseline methodology & measured results |
| `/resources` | Technical whitepapers and engineering specifications |
| `/resources/[slug]` | Gated technical dossier download requests |
| `/contact` | Commercial headquarters, phone, and inquiry routing |
| `/request-assessment` | Dedicated infrastructure feasibility assessment form |
| `/request-demo` | Live product walkthrough request form |
| `/thank-you` | Submission confirmation with unique Reference ID |
| `/privacy-policy` | Corporate data protection policy |
| `/terms` | Commercial notice & partner terms of engagement |
| `/cookie-policy` | Essential cookie notice |

### Private Administration Dashboard (`/admin/*`)
| Route | Purpose | Role Authorization |
|---|---|---|
| `/admin/login` | Secure staff authentication portal | All Staff |
| `/admin/dashboard` | Executive KPI cards, pipeline stages, geography and product distribution | All Roles |
| `/admin/leads` | Lead pipeline with search, status filter, priority filter, CSV export | `leads:read` |
| `/admin/leads/[id]` | Lead profile, status update, priority toggle, staff assignment, activity timeline | `leads:write` |
| `/admin/contacts` | Enterprise customer contacts directory | All Roles |
| `/admin/products` | Senatria product availability flags (*Available*, *Pilot*, *Coming Soon*, *Under Development*) | `products:write` |
| `/admin/industries` | Sector messaging and value outcomes | `content:write` |
| `/admin/case-studies` | Case studies manager with deployment status classification | `content:write` |
| `/admin/resources` | Technical whitepaper library manager | `content:write` |
| `/admin/content` | CMS for landing page headlines and corporate positioning | `content:write` |
| `/admin/users` | Staff directory and role-based permissions | `SUPER_ADMIN` |
| `/admin/settings` | Notification email routing, database status, API settings | `ADMIN` / `SUPER_ADMIN` |
| `/admin/audit-logs` | Immutable audit trails of administrative actions | `audit:read` |

---

## 4. Role-Based Access Control (RBAC) Matrix

| Permission | SUPER_ADMIN | ADMIN | SALES_MANAGER | SALES_EXECUTIVE | CONTENT_MANAGER |
|---|:---:|:---:|:---:|:---:|:---:|
| `leads:read` | ✓ | ✓ | ✓ | ✓ (assigned) | ✗ |
| `leads:write` | ✓ | ✓ | ✓ | ✓ (assigned) | ✗ |
| `leads:assign` | ✓ | ✓ | ✓ | ✗ | ✗ |
| `leads:export` | ✓ | ✓ | ✓ | ✗ | ✗ |
| `products:write` | ✓ | ✓ | ✗ | ✗ | ✓ |
| `content:write` | ✓ | ✓ | ✗ | ✗ | ✓ |
| `settings:write` | ✓ | ✓ | ✗ | ✗ | ✗ |
| `audit:read` | ✓ | ✓ | ✗ | ✗ | ✗ |

---

## 5. Development & Local Setup

### Prerequisites
- Node.js 18+ (tested on Node.js `v24.18.0`)
- npm 10+ (tested on npm `11.16.0`)

### Step 1: Clone & Install Dependencies
```bash
git clone https://github.com/suban-godugu/perfai-webpage.git
cd perfai-webpage
npm install
```

### Step 2: Environment Variables
Create `.env` from `.env.example`:
```bash
cp .env.example .env
```
Configure your keys:
```env
NEXT_PUBLIC_SITE_URL=https://perfai.in
DATABASE_URL="postgresql://postgres:[PASSWORD]@db.[PROJECT].supabase.co:5432/postgres?schema=public"
AUTH_SECRET="your-production-secret-key"
RESEND_API_KEY="re_your_api_key"
NOTIFICATION_EMAIL="leads@perfai.in"
```

### Step 3: Run Database Migrations & Prisma Generation
```bash
npx prisma generate
npx prisma db push
node prisma/seed.js
```

### Step 4: Run Automated Unit Tests
```bash
node --test tests/unit/*.test.js
```

### Step 5: Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the public website.  
Open [http://localhost:3000/admin/login](http://localhost:3000/admin/login) for the private administration dashboard.

#### Default Demo Staff Credentials:
- **Email**: `admin@perfai.in` (Super Admin) or `sales@perfai.in` (Sales Manager)
- **Password**: `perfai@2026`

---

## 6. Production Deployment Guide (Vercel + Supabase)

### 1. Database Provisioning on Supabase
1. Create a new Supabase project at [supabase.com](https://supabase.com).
2. Retrieve the PostgreSQL connection string from **Project Settings → Database**.
3. Set `DATABASE_URL` (Connection pooling port 6543 / 5432) and `DIRECT_URL` (Port 5432).
4. Run `npx prisma db push` to initialize all 16 tables.

### 2. Deployment on Vercel
1. Import repository `suban-godugu/perfai-webpage` into Vercel.
2. Add environment variables in Vercel Project Settings:
   - `NEXT_PUBLIC_SITE_URL`: `https://perfai.in`
   - `DATABASE_URL`: Your Supabase connection string
   - `AUTH_SECRET`: Random 32+ character string
   - `RESEND_API_KEY`: Your Resend production token
   - `NOTIFICATION_EMAIL`: `leads@perfai.in`
3. Deploy! Vercel automatically runs `npm run build` and optimizes static pages and edge routing.

### 3. DNS Configuration for `perfai.in`
In your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.):
- **A Record**: `@` → `76.76.21.21` (Vercel IP)
- **CNAME Record**: `www` → `cname.vercel-dns.com`
- Verify SSL certification automatically provisions via Let's Encrypt in Vercel.

---

## 7. Compliance & Commercial Disclaimer

- **PERFAI** is an independent commercial brand and authorized reseller for Senatria solutions.
- All product descriptions, availability statuses, and technical methodologies reflect official Senatria specifications.
- Modeled savings represent engineering simulations and do not constitute a guarantee of financial return until formal baseline calibration under IPMVP Option C is executed.
- No unverified customer credentials or fabricated partnership claims are published on the website.
