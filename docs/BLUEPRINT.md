# PerfAI × Senatria — Website Blueprint (perfai.in)

Version 1.0 · 22 Nov 2026 · Source of truth for the build. Put this file in the repo at `docs/BLUEPRINT.md`.

---

## 0. Decisions locked

| Item | Decision |
|---|---|
| Company brand | **PerfAI** |
| Relationship | **Authorised reseller / channel partner of Senatria** (senatria.ai) |
| Target market | **Both**, interpreted as **India + International** (enterprise building owners, operators, developers, REITs, FM firms). B2C is not a fit for this product. |
| Website scope | **Corporate** marketing site + lead engine |
| Domain | **perfai.in** |
| Extra requirements | Premium enterprise look, lead management, admin dashboard |

**Assumption to confirm:** "both" = India and international. If you meant something else (for example B2B and B2G), only Section 3.3 and the lead form's region field change.

---

## 1. What Senatria sells (reseller product map)

Read from senatria.ai on 22 Nov 2026. PerfAI sells these. PerfAI must not claim them as its own technology.

| Product | What it is | Status on Senatria's site |
|---|---|---|
| **ATRIA** | Physical AI platform: building truth, living digital twin, world model, AI agents, edge computing, reinforcement learning, governed autonomy. Works with existing BMS, HVAC, meters. | Core platform |
| **BuildingShield** | Building optimisation on ATRIA. Claims 15–25% energy and demand cost reduction, 10–15% operating efficiency, 4–15% potential NOI uplift. | **Live** |
| **GridShield** | Turns released building capacity into grid flexibility and demand response. | **Pilot** |
| **ComputeShield** | Uses freed power and infrastructure capacity for distributed compute with a partner. | **Next phase / coming soon** |
| **VERITAS** | Live value ledger: baseline, measurement and verification, attribution. | Part of the platform |
| **APEX** | Master AI orchestrator inside BuildingShield. | Part of BuildingShield |
| Outcome frame | **Triple Net Value:** Net Profit, Net Zero, Net Positive | Brand framework |
| Evidence labels | **Measured, Modelled, Projected, Indicative** | Senatria publishes every result with one of these |

Senatria's evidence today: a 7-hotel Australian portfolio (2,148 rooms) with one hotel live and about 15% observed reduction over three months; GridShield references from California (PG&E-related trial) and State Grid Fujian. **None are in India.** The PerfAI site must say so plainly.

---

## 2. Positioning and trust rules

**Positioning statement:** PerfAI brings Senatria's Physical AI to Indian and international building portfolios: local assessment, deployment support and ongoing performance partnership.

**What PerfAI can truthfully own:** local presence, sales and assessment, integration support, onboarding, regional relationships, service and support. Confirm the real scope with your Senatria agreement.

**Non-negotiable content rules (also go into the Cursor prompt):**
1. Show "Authorised Senatria partner" in the header strip, the About page and the footer. Use the Senatria name and logo only as permitted by the reseller agreement.
2. Every number carries an evidence badge: Measured, Modelled, Projected or Indicative.
3. Senatria's case studies are labelled "Senatria reference" with country, scope and period. Never imply they are PerfAI or Indian deployments.
4. GridShield is "pilot" and ComputeShield is "coming soon". Never sell them as live.
5. No copy-pasted Senatria text or images. Write original copy, use original visuals.
6. No invented testimonials, client logos or team members.

---

## 3. Sitemap and page inventory

### 3.1 Public site

```
/                         Home
/platform                 ATRIA Physical AI platform
/solutions                Solutions overview (Building → Grid → Compute)
/solutions/buildingshield BuildingShield (Live)
/solutions/gridshield     GridShield (Pilot)
/solutions/computeshield  ComputeShield (Coming soon, waitlist form)
/industries               Industries overview
/industries/[slug]        commercial-offices, hospitality, healthcare, retail-malls,
                          data-centres, education-campuses, industrial
/case-studies             Senatria reference evidence (hospitality portfolio, grid references)
/value-calculator         Indicative NOI / savings estimator (lead magnet)
/resources                Insights, guides, downloads
/resources/[slug]         Article / guide
/partner                  PerfAI + Senatria: how the partnership works, who does what
/about                    About PerfAI
/contact                  Book an assessment (main lead form)
/privacy  /terms  /cookies
/thank-you                Conversion page (analytics goal)
/sitemap.xml  /robots.txt  /404
```

### 3.2 Admin (noindex, auth required)

```
/admin/login
/admin                    Overview dashboard
/admin/leads              Table + filters + saved views
/admin/leads/pipeline     Kanban
/admin/leads/[id]         Lead detail (timeline, notes, tasks, email)
/admin/tasks              My tasks / follow-ups
/admin/content/case-studies
/admin/content/resources
/admin/content/faqs
/admin/subscribers        Newsletter list
/admin/analytics          Funnel and source performance
/admin/users              Users and roles
/admin/settings           Site settings, notification emails, webhooks
/admin/audit-log
```

### 3.3 Market handling (India + International)

- Region switch in the footer (India / International). It changes: phone and address block, default currency (₹ / US$), and the region field default in forms.
- Lead form captures `region` and `country`. Leads route to different assignees via a settings rule.
- Senatria's USD figures stay in USD with an "Indicative" badge. The calculator shows ₹ for India and US$ for international.

---

## 4. Content strategy

### 4.1 Message pillars

1. **Your building already generates the data. Physical AI acts on it.** Problem: fragmented systems, reactive maintenance, wasted energy.
2. **Works with what you own.** No rip-and-replace. Integrates with existing BMS, HVAC, meters.
3. **Governed, not black-box.** Autonomy levels: Observe, Recommend, Human-approved, Controlled autonomy, Continuous learning.
4. **Proof, labelled honestly.** Measured vs Modelled vs Projected vs Indicative.
5. **Local partner, global platform.** PerfAI handles assessment, deployment and support.

### 4.2 Voice

Confident, technical, calm. Short sentences. Operator language (kW, demand charge, chiller, AHU), not hype. No "revolutionary", "game-changing". Say what it does and what evidence exists.

### 4.3 Homepage copy skeleton (original, edit freely)

| Section | Headline | Content |
|---|---|---|
| Hero | **Make every building perform like your best building.** | Sub: PerfAI is the authorised Senatria partner bringing Physical AI to building portfolios in India and worldwide. CTAs: *Book a building assessment*, *See how it works*. Stat strip with badges. |
| Problem | **Design promises. Operations decide.** | Fragmented systems, reactive maintenance, hidden demand charges, unseen capacity. |
| How it works | **Perceive. Analyse. Optimise. Control. Verify. Learn.** | Six-step loop with animated diagram. |
| Platform | **ATRIA: intelligence for the infrastructure you already run** | Digital twin, world model, agents, edge box. Link to /platform. |
| Solutions | **Three shields, one system** | BuildingShield (Live), GridShield (Pilot), ComputeShield (Soon). |
| Outcomes | **Net Profit · Net Zero · Net Positive** | Three cards with evidence badges. |
| Evidence | **Proof, labelled honestly** | Senatria reference cards with country, scope, period, badge. |
| Governance | **You decide how far autonomy goes** | Five-level autonomy ladder. |
| Industries | **Built for large, complex assets** | Icon grid linking to industry pages. |
| Partner | **Why PerfAI** | Local assessment, integration, support. Senatria partnership explained. |
| Calculator teaser | **Estimate your opportunity** | CTA to /value-calculator. |
| FAQ | 6 questions | Replaces BMS? How much control? How long to deploy? Data security? Which buildings qualify? Are Grid/Compute live? |
| Final CTA | **Start with one building.** | Assessment form. |

### 4.4 Lead magnets

1. **Value calculator:** inputs (asset type, floor area or annual energy spend, current rating), output = indicative savings range, with an email gate for the PDF summary.
2. **Building Readiness Checklist (PDF):** BMS interfaces, meter coverage, data quality, control scope.
3. **Guide:** "From BMS to Physical AI: what changes and what doesn't".

### 4.5 SEO plan

Primary clusters: AI building optimisation India, building energy management system India, HVAC optimisation AI, demand response India, BMS integration AI, green building rating improvement (IGBC, GRIHA, LEED, BEE), data centre power capacity, digital twin for buildings.
Per page: unique title (≤60 chars), meta description (≤155), one H1, JSON-LD (`Organization`, `WebSite`, `FAQPage`, `Article`, `BreadcrumbList`), canonical, OG image, `hreflang` en-IN and en.
Launch resources (6): the three lead magnets above plus "What is Physical AI for buildings?", "Measured vs modelled savings: how to read vendor claims", "Reducing demand charges without hurting comfort".

### 4.6 Conversion paths

Primary: **Book a building assessment** (contact form). Secondary: calculator, checklist download, newsletter. Sticky header CTA on every page. Thank-you page fires the analytics conversion.

---

## 5. Technical architecture

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 15 (App Router), TypeScript strict** | SEO, server actions, one codebase for site and admin |
| Styling | **Tailwind CSS v4 + shadcn/ui + CSS variable tokens** | Fast, themeable design system |
| Motion | **Framer Motion**; optional **react-three-fiber** for the isometric building hero | Premium feel; 3D lazy-loaded with a static fallback |
| Charts | **Recharts** | Admin analytics, calculator |
| Forms | **React Hook Form + Zod** (shared schemas client and server) | One validation source |
| DB | **PostgreSQL** (Neon or Supabase, Mumbai region for India latency) | Relational lead data |
| ORM | **Prisma** | Typed schema, migrations |
| Auth | **Auth.js (credentials) + Argon2**, optional TOTP 2FA later | Admin only |
| Email | **Resend** (or SMTP) with React Email templates | Notifications and auto-replies |
| Spam | **Cloudflare Turnstile + honeypot + rate limit (Upstash)** | Public forms |
| Files | Cloudflare R2 or S3 (PDF downloads, case-study images) | Cheap object storage |
| Hosting | **Vercel** (fast start) or AWS Mumbai (data residency) | Decide before launch |
| Analytics | **GA4 + Microsoft Clarity** behind a consent banner; server-side event for lead conversion | Funnel measurement |
| Monitoring | Sentry + uptime check | Production readiness |
| CI | GitHub Actions: lint, typecheck, test, Playwright smoke | Quality gate |

### Request flow for a lead

```
Browser form → Turnstile verify → Server Action (Zod) → rate limit
→ dedupe by email+org (30 days) → Lead + FormSubmission + Activity("CREATED")
→ auto-assign rule → email: sales alert + prospect auto-reply
→ optional webhook (CRM/Slack) → redirect /thank-you
```

### Folder structure

```
src/
  app/
    (site)/                 public pages
    (admin)/admin/          admin pages (layout with auth guard)
    api/                    webhooks, export, health
  components/
    ui/                     shadcn primitives
    site/                   Header, Footer, Hero, EvidenceBadge, AutonomyLadder...
    admin/                  DataTable, Kanban, StatCard, ActivityTimeline...
  lib/                      db.ts, auth.ts, email.ts, scoring.ts, rbac.ts, utm.ts, seo.ts
  server/                   actions (leads, content, users), queries
  content/                  static copy as typed TS/MDX
  styles/tokens.css
prisma/ schema.prisma, seed.ts
tests/ e2e + unit
```

---

## 6. Lead management system

### 6.1 Forms

**Main assessment form** (mirrors the fields Senatria asks for, plus region):
Full name · Business email · Phone (optional) · Role (Owner, Asset/Portfolio manager, Facilities/Operations, Sustainability/ESG, Energy, Developer, Consultant, Other) · Organisation · Asset type · Approximate scale (floor area or number of buildings) · Primary challenge · Interested in (multi-select: ATRIA, BuildingShield, GridShield, ComputeShield) · Region and country · Message · **Consent checkbox** (DPDP Act 2023 wording, with privacy link) · Hidden: UTM, referrer, landing page.

**Other forms:** calculator email gate, resource download, newsletter, ComputeShield waitlist, partner enquiry (for consultants and system integrators).

### 6.2 Pipeline

`NEW → CONTACTED → QUALIFIED → ASSESSMENT_SCHEDULED → PROPOSAL → NEGOTIATION → WON | LOST | NURTURE`
Moving to `LOST` requires a lost reason. Moving to `WON` records the date and value.

### 6.3 Scoring (0–100, rules in `lib/scoring.ts`, editable later)

| Signal | Points |
|---|---|
| Business email (not gmail, yahoo, etc.) | +15 |
| Role is Owner, Asset/Portfolio manager, Operations, Energy | +15 |
| Asset type is office, hospitality, healthcare, mall, data centre | +10 |
| Scale: 1 building 5 · 2–5 buildings 15 · 6+ buildings 25 | +5 to +25 |
| Primary challenge selected | +5 |
| Phone provided | +5 |
| Interested in BuildingShield or ATRIA | +10 |
| Came from calculator or assessment form | +10 |
| Message longer than 100 characters | +5 |

Bands: Hot ≥ 70, Warm 40–69, Cold < 40. Hot leads trigger an immediate email and Slack webhook.

### 6.4 Automation

- Auto-reply email to the prospect within a minute.
- Sales alert to the assignee (round-robin by region).
- Stale-lead reminder: no activity for 3 days on `NEW`/`CONTACTED` creates a task.
- Duplicate handling: same email within 30 days adds an activity to the existing lead instead of creating a new one.
- Weekly digest email to admins: new leads, conversions, overdue tasks.

### 6.5 Data protection

Store consent timestamp and consent text version. IP is stored hashed. Admin-triggered erasure (soft-delete then hard-delete after 30 days). Export a single lead's data as JSON. Retention default 24 months, set in settings.

---

## 7. Database schema (Prisma)

```prisma
generator client { provider = "prisma-client-js" }
datasource db { provider = "postgresql"; url = env("DATABASE_URL") }

enum Role { SUPER_ADMIN SALES EDITOR VIEWER }

enum LeadStatus {
  NEW CONTACTED QUALIFIED ASSESSMENT_SCHEDULED PROPOSAL NEGOTIATION WON LOST NURTURE
}
enum LeadPriority { HOT WARM COLD }
enum LeadSource {
  ASSESSMENT_FORM CONTACT_FORM CALCULATOR RESOURCE_DOWNLOAD NEWSLETTER
  COMPUTESHIELD_WAITLIST PARTNER_FORM MANUAL IMPORT
}
enum Region { INDIA INTERNATIONAL }
enum RoleType {
  OWNER ASSET_MANAGER FACILITIES ESG_SUSTAINABILITY ENERGY DEVELOPER CONSULTANT OTHER
}
enum AssetType {
  OFFICE HOSPITALITY HEALTHCARE RETAIL_MALL DATA_CENTRE EDUCATION_CAMPUS
  INDUSTRIAL MIXED_USE RESIDENTIAL_PORTFOLIO OTHER
}
enum Challenge {
  ENERGY_COST DEMAND_CHARGES GREEN_RATING MAINTENANCE GRID_FLEXIBILITY
  COMPUTE_CAPACITY RELIABILITY OTHER
}
enum Solution { ATRIA BUILDINGSHIELD GRIDSHIELD COMPUTESHIELD }
enum ActivityType {
  CREATED STATUS_CHANGED ASSIGNED NOTE_ADDED EMAIL_SENT EMAIL_RECEIVED
  CALL_LOGGED MEETING_LOGGED TASK_CREATED TASK_COMPLETED SCORE_CHANGED EDITED
}
enum ContentStatus { DRAFT PUBLISHED ARCHIVED }
enum EvidenceLevel { MEASURED MODELLED PROJECTED INDICATIVE }

model User {
  id            String   @id @default(cuid())
  email         String   @unique
  name          String
  passwordHash  String
  role          Role     @default(SALES)
  isActive      Boolean  @default(true)
  regions       Region[]            // regions this user is assigned leads for
  lastLoginAt   DateTime?
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
  leads         Lead[]       @relation("LeadAssignee")
  activities    LeadActivity[]
  notes         LeadNote[]
  tasks         Task[]       @relation("TaskAssignee")
  auditLogs     AuditLog[]
}

model Lead {
  id               String        @id @default(cuid())
  fullName         String
  email            String
  phone            String?
  roleType         RoleType?
  jobTitle         String?
  organisation     String?
  assetType        AssetType?
  scaleDescription String?       // free text: "3 buildings, ~120,000 m²"
  buildingCount    Int?
  floorAreaSqm     Int?
  challenge        Challenge?
  solutions        Solution[]
  region           Region        @default(INDIA)
  country          String?
  city             String?
  message          String?
  status           LeadStatus    @default(NEW)
  priority         LeadPriority  @default(COLD)
  score            Int           @default(0)
  source           LeadSource
  estimatedValue   Decimal?      @db.Decimal(14, 2)
  currency         String        @default("INR")
  lostReason       String?
  wonAt            DateTime?
  closedAt         DateTime?
  firstContactedAt DateTime?
  // attribution
  utmSource        String?
  utmMedium        String?
  utmCampaign      String?
  utmTerm          String?
  utmContent       String?
  referrer         String?
  landingPage      String?
  // compliance
  consentAt        DateTime
  consentVersion   String
  ipHash           String?
  userAgent        String?
  // relations
  assigneeId       String?
  assignee         User?         @relation("LeadAssignee", fields: [assigneeId], references: [id])
  activities       LeadActivity[]
  notes            LeadNote[]
  tasks            Task[]
  tags             LeadTag[]
  submissions      FormSubmission[]
  createdAt        DateTime      @default(now())
  updatedAt        DateTime      @updatedAt
  deletedAt        DateTime?

  @@index([email])
  @@index([status, priority])
  @@index([assigneeId, status])
  @@index([region, createdAt])
  @@index([source, createdAt])
}

model FormSubmission {
  id        String     @id @default(cuid())
  leadId    String?
  lead      Lead?      @relation(fields: [leadId], references: [id], onDelete: SetNull)
  formType  LeadSource
  payload   Json
  createdAt DateTime   @default(now())
  @@index([formType, createdAt])
}

model LeadActivity {
  id        String       @id @default(cuid())
  leadId    String
  lead      Lead         @relation(fields: [leadId], references: [id], onDelete: Cascade)
  type      ActivityType
  actorId   String?
  actor     User?        @relation(fields: [actorId], references: [id])
  data      Json?        // e.g. { from: "NEW", to: "CONTACTED" }
  createdAt DateTime     @default(now())
  @@index([leadId, createdAt])
}

model LeadNote {
  id        String   @id @default(cuid())
  leadId    String
  lead      Lead     @relation(fields: [leadId], references: [id], onDelete: Cascade)
  authorId  String
  author    User     @relation(fields: [authorId], references: [id])
  body      String
  createdAt DateTime @default(now())
}

model Task {
  id          String    @id @default(cuid())
  leadId      String?
  lead        Lead?     @relation(fields: [leadId], references: [id], onDelete: Cascade)
  assigneeId  String
  assignee    User      @relation("TaskAssignee", fields: [assigneeId], references: [id])
  title       String
  dueAt       DateTime?
  completedAt DateTime?
  createdAt   DateTime  @default(now())
  @@index([assigneeId, completedAt, dueAt])
}

model Tag {
  id    String    @id @default(cuid())
  name  String    @unique
  color String    @default("#64748B")
  leads LeadTag[]
}
model LeadTag {
  leadId String
  tagId  String
  lead   Lead @relation(fields: [leadId], references: [id], onDelete: Cascade)
  tag    Tag  @relation(fields: [tagId], references: [id], onDelete: Cascade)
  @@id([leadId, tagId])
}

model NewsletterSubscriber {
  id             String    @id @default(cuid())
  email          String    @unique
  region         Region?
  consentAt      DateTime
  unsubscribedAt DateTime?
  createdAt      DateTime  @default(now())
}

model CaseStudy {
  id            String        @id @default(cuid())
  slug          String        @unique
  title         String
  summary       String
  body          String        // markdown
  assetType     AssetType?
  country       String
  scope         String        // "7 hotels, 2,148 rooms; 1 live"
  period        String?
  baseline      String?
  evidence      EvidenceLevel
  metrics       Json          // [{label, value, evidence}]
  isSenatriaRef Boolean       @default(true)  // reference, not a PerfAI deployment
  sourceUrl     String?
  heroImage     String?
  status        ContentStatus @default(DRAFT)
  publishedAt   DateTime?
  createdAt     DateTime      @default(now())
  updatedAt     DateTime      @updatedAt
}

model Resource {
  id          String        @id @default(cuid())
  slug        String        @unique
  title       String
  excerpt     String
  body        String        // markdown/MDX
  type        String        // ARTICLE | GUIDE | DOWNLOAD
  fileUrl     String?       // gated PDF
  isGated     Boolean       @default(false)
  seoTitle    String?
  seoDesc     String?
  ogImage     String?
  status      ContentStatus @default(DRAFT)
  publishedAt DateTime?
  createdAt   DateTime      @default(now())
  updatedAt   DateTime      @updatedAt
}

model Faq {
  id       String        @id @default(cuid())
  question String
  answer   String
  page     String        @default("home")
  position Int           @default(0)
  status   ContentStatus @default(PUBLISHED)
}

model SiteSetting {
  key       String   @id
  value     Json
  updatedAt DateTime @updatedAt
}

model Webhook {
  id        String   @id @default(cuid())
  url       String
  secret    String
  events    String[] // lead.created, lead.hot, lead.status_changed
  isActive  Boolean  @default(true)
  createdAt DateTime @default(now())
}

model EmailLog {
  id        String   @id @default(cuid())
  to        String
  template  String
  leadId    String?
  status    String   // SENT | FAILED
  error     String?
  createdAt DateTime @default(now())
}

model AuditLog {
  id        String   @id @default(cuid())
  actorId   String?
  actor     User?    @relation(fields: [actorId], references: [id])
  action    String   // e.g. "lead.export", "user.role_changed"
  entity    String?
  entityId  String?
  meta      Json?
  ip        String?
  createdAt DateTime @default(now())
  @@index([createdAt])
}
```

Seed: one SUPER_ADMIN (from env), default tags (Hot account, Portfolio, Pilot candidate, Partner), starter FAQs, three Senatria reference case studies (from Section 1, with evidence levels), default `SiteSetting` rows.

---

## 8. Admin dashboard specification

**Roles:** SUPER_ADMIN (everything) · SALES (own and unassigned leads, tasks) · EDITOR (content only) · VIEWER (read-only analytics and leads).

| Screen | Must have |
|---|---|
| **Overview** | KPI cards (new leads 7/30 days, hot leads, conversion rate, open tasks), leads-over-time chart, funnel by stage, leads by source/region/asset type, "needs attention" list (hot and untouched, overdue tasks) |
| **Leads table** | Server-side pagination, search (name, email, org), filters (status, priority, source, region, assignee, date range, tag), saved views, bulk assign / tag / status, CSV export (audit-logged) |
| **Pipeline** | Drag-and-drop Kanban by status, card shows name, org, score badge, assignee, age |
| **Lead detail** | Header with status control and assignee, profile and attribution panel, activity timeline, notes, tasks, send-email (template or custom), score breakdown, edit, soft-delete |
| **Tasks** | My tasks, due today / overdue, complete inline |
| **Content** | CRUD for case studies, resources, FAQs with markdown editor, preview, draft/publish, evidence-level picker (enforces badge) |
| **Subscribers** | List, export, unsubscribe |
| **Analytics** | Source/UTM performance, form conversion rates, time-to-first-contact, win rate |
| **Users** | Invite, set role and regions, deactivate |
| **Settings** | Notification emails, auto-assign rules, scoring weights (read-only in v1), webhooks, consent text version, retention |
| **Audit log** | Filterable, read-only |

Admin UX: keyboard search (`⌘K`), skeleton loading, empty states, toasts, responsive down to tablet, light/dark toggle.

---

## 9. API and server surface

Server Actions: `submitAssessment`, `submitContact`, `submitCalculator`, `downloadResource`, `subscribeNewsletter`, `joinComputeShieldWaitlist`; admin actions for lead update, assign, note, task, bulk ops, content CRUD, user management.
Route handlers: `GET /api/health`, `GET /api/admin/leads/export` (auth + RBAC + audit), `POST /api/webhooks/test`, `GET /sitemap.xml`, `GET /robots.txt`.
All inputs validated by shared Zod schemas. All admin handlers check the session and role (`lib/rbac.ts`) and write an audit entry for exports, role changes and deletions.

---

## 10. Design system

> **Note on the reference:** Dribbble blocks automated reading of the shot "Building Management System UI" (#25877529). From its public tags I know it is a SaaS admin dashboard with 3D animation, analytics charts, layer/legend controls and building-system navigation. I could not see the actual colours or layout. The tokens below are my interpretation of that style. **Send me a screenshot and I will align the tokens exactly.** The Cursor prompt keeps all colours as CSS variables so they can change in one file.

### 10.1 Look and feel

"Control-room, but calm." A dark, deep-navy canvas with luminous teal and electric-blue accents, translucent glass cards with hairline borders, a 3D isometric building as the hero visual with layer toggles (HVAC, Energy, Lighting, Occupancy), live-style sparklines and status chips. Corporate pages alternate dark hero bands with light, airy content sections for readability. The admin dashboard reuses the same tokens in dense, data-first layouts.

### 10.2 Tokens (`styles/tokens.css`)

| Token | Dark | Light |
|---|---|---|
| `--bg` | `#070B14` | `#F6F8FB` |
| `--surface` | `#0E1626` | `#FFFFFF` |
| `--surface-2` | `#141F35` | `#EEF2F7` |
| `--border` | `rgba(148,163,184,.16)` | `#E2E8F0` |
| `--text` | `#E6EDF7` | `#0B1220` |
| `--text-muted` | `#8EA0BA` | `#475569` |
| `--primary` | `#2DD4BF` (teal) | `#0D9488` |
| `--accent` | `#3B82F6` (electric blue) | `#2563EB` |
| `--violet` | `#8B5CF6` | `#7C3AED` |
| `--success` `--warning` `--danger` | `#34D399` `#FBBF24` `#F87171` | darker equivalents |

Evidence badge colours: Measured = green, Modelled = blue, Projected = violet, Indicative = amber.
Status colours for leads: New blue, Contacted cyan, Qualified teal, Assessment violet, Proposal amber, Negotiation orange, Won green, Lost red, Nurture slate.

### 10.3 Type, shape, motion

- **Fonts:** Inter Tight or Plus Jakarta Sans for headings and UI, Inter for body, JetBrains Mono for figures and labels (load via `next/font`).
- **Scale:** 12 / 14 / 16 / 18 / 24 / 32 / 48 / 64. Hero H1 clamp 40–72px. Tracking −0.02em on large headings.
- **Radius:** 8 (inputs), 12 (cards), 20 (feature panels), pill for chips. **Spacing:** 4px base grid. **Max width:** 1200px content, 1440px for hero visuals.
- **Elevation:** no heavy shadows; use border + subtle glow (`0 0 0 1px border, 0 20px 60px -20px rgba(45,212,191,.25)`).
- **Motion:** 150–250ms ease-out for UI, 600–900ms scroll reveals (once), count-up for stats, looping subtle pulse on "live" dots. Respect `prefers-reduced-motion`.

### 10.4 Signature components

`EvidenceBadge` · `StatTile` (value, label, badge, sparkline) · `AutonomyLadder` (5 levels) · `ValueLoopDiagram` (six steps) · `IsometricBuilding` (layer toggles, R3F with static SVG fallback) · `ShieldCard` (status chip: Live, Pilot, Soon) · `CaseStudyCard` (country, scope, period, badge) · `RegionSwitch` · `LeadForm` (multi-step, progress) · admin `DataTable`, `KanbanBoard`, `ActivityTimeline`, `ScoreBadge`, `StatusPill`.

### 10.5 Accessibility and performance targets

WCAG 2.2 AA contrast, full keyboard navigation, visible focus rings, labelled forms with inline errors. Lighthouse ≥ 95 on Performance, Accessibility, Best Practices, SEO (mobile). LCP < 2.5s, CLS < 0.05. Hero video or 3D is lazy and has a poster/static fallback.

---

## 11. Compliance and security

- **DPDP Act 2023 (India):** explicit consent checkbox, purpose-specific wording, privacy policy with data-fiduciary contact, erasure and correction workflow. If serving EU or UK visitors, treat consent banners as opt-in for non-essential cookies.
- **Security:** HTTPS only, HSTS, strict CSP, secure cookies, CSRF-safe server actions, rate limits on forms and login, Argon2id hashing, admin session timeout, role checks on every admin action, no PII in logs.
- **Reseller legal:** Senatria name/logo licence, approved claims, case-study usage rights, disclaimers ("Results shown are Senatria reference deployments and may not be representative of outcomes at your site").

---

## 12. Delivery plan

| Phase | Scope | Exit criteria |
|---|---|---|
| 1. Foundation | Repo, CI, tokens, layout, Prisma, auth skeleton | Builds, deploys preview |
| 2. Public site | All pages in Section 3.1 with original copy | Lighthouse targets met |
| 3. Lead engine | Forms, scoring, emails, dedupe, webhooks | End-to-end test passes |
| 4. Admin | Leads, pipeline, tasks, content, users, settings | Role-based tests pass |
| 5. Polish | 3D hero, calculator, motion, SEO, a11y | Audit clean |
| 6. Launch | Domain perfai.in, DNS, email domain (SPF, DKIM, DMARC), analytics, legal pages | Go-live checklist signed |

**Go-live checklist:** reseller agreement and brand permissions confirmed · all claims reviewed against Senatria's published evidence · legal pages reviewed by counsel · company address, GST and contact details filled · test lead flows to a real inbox · admin accounts created and default password removed · backups on · Sentry and uptime monitors on · `noindex` removed.

---

## 13. Open items I need from you

1. Confirm "both" = India + International.
2. Senatria reseller agreement: what are you allowed to say and show (logo, case studies, pricing)?
3. PerfAI logo, brand colours (if any), company address, phone, registered entity name.
4. Screenshot of the Dribbble shot, so the design tokens match exactly.
5. Hosting preference: Vercel or AWS Mumbai.
6. Who receives leads, and should India and international leads go to different people?

