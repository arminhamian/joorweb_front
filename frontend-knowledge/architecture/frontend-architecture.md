# Frontend Architecture

`frontend-rules.md` does not name a 24-section outline for this file. That document has 25 numbered sections plus a final enforcement rule. Those sections stay in `frontend-rules.md` and are not copied here.

This file uses the outline that section 25.2 actually requires for an architecture decision:

1. Problem
2. Proposed solution
3. Reasoning
4. Alternatives considered
5. Affected applications
6. Dependencies
7. Compatibility implications
8. Migration requirements
9. Testing requirements

Every decision below is labeled **Established**, **Proposed**, or **Open**.

- **Established** means already agreed: the stack and structure named by the user, or a requirement already written in `frontend-rules.md` that this document keeps.
- **Proposed** means a recommendation in this file. It is not approved and it is not built.
- **Open** means a decision is still required.

Nothing in this file is installed, generated, or treated as an existing application.

---

## 1. Problem

Joorweb needs a new frontend for an AaaS platform. The storefront builder is one piece of that platform, not the product.

The frontend has to cover the company site, the management surface, the visual builder, and public stores as one ecosystem. It must not take its structure from the legacy shop-panel or from the current Vite application.

---

## 2. Proposed solution

### 2.1 Product boundary

**Established.** Joorweb is an AaaS platform. The acronym is not expanded. CRM and ERP are inside it, together with the capabilities already described for the product:

- Finance: full accounting aligned with IFRS, with live profit-and-loss reports.
- Warehouse: professional inventory, live stock, and valuation by FIFO and weighted average.
- Storefront: a shop site, plus marketplace connections such as Digikala, Torob, and Basalam.
- Social: management of networks such as Instagram, Telegram, and Bale.
- Orders: automatic tracking from order placement through delivery.
- Assistant: the user says what they want by voice or chat, and the system carries out the panel operation.
- Goods flow: a product is defined once, for example from an Instagram post. It enters the system and the warehouse, is published to the other networks and markets with copy suited to each one, stock is updated everywhere on each sale, and a financial document is recorded.
- Scale: from a small shop to a large store and a production center, under accounting and warehouse standards. Representatives can sell the whole system under their own brand.

**Established.** One shared data model and one assistant run the platform. The builder does not define the business.

### 2.2 Applications

**Established.** The frontend is four applications. They are separate applications, not one rewritten copy of the current Vite app.

| Application | Role | Runtime |
|---|---|---|
| Company site | Corporate site, marketing, documentation, and other public content | Next.js |
| Admin | Unified management surface for the platform | React on Vite |
| Builder | Visual editor for website and storefront pages | React and Puck on Vite |
| Storefront | Public online stores | Next.js |

**Established.** Admin is the management surface for the whole platform, including CRM, ERP, finance, warehouse, orders, marketing, integrations, settings, and the assistant. The builder edits storefront and website presentation. It is not the system of record for products, stock, prices, customers, or accounting.

**Established.** `frontend-rules.md` also names these admin areas: Dashboard, Products, Inventory, Sales, Orders, Customers, Accounting, Reports, Marketing, Integrations, Settings, and AI Assistant. This file does not add further modules.

**Open.** How a representative brand is applied across the four applications. The product allows representatives to sell the system under their own brand. No branding mechanism is chosen here.

### 2.3 Repository

**Established.** One Turborepo repository, managed with pnpm. Node.js 16 is forbidden. No Node version above that ban is chosen.

**Established.** `frontend-rules.md` requires pnpm workspaces together with Turborepo. The approved workspace layout is defined in `architecture/project-structure.md`.

**Established.** The approved repository layout is one pnpm workspace with four applications and four initial shared packages:

- `apps/website` — Company Website, Next.js.
- `apps/admin` — Admin, React + Vite.
- `apps/builder` — Builder, React + Vite + Puck.
- `apps/storefront` — Storefront, Next.js.
- `packages/ui` — shared UI components.
- `packages/design-tokens` — shared design tokens and their styling-system integration.
- `packages/page-schema` — the structured, versioned, Puck-independent page document contract.
- `packages/page-blocks` — reusable page-block implementations and framework-neutral block definitions that can be used by the relevant editor and public renderers.

The exact directory tree and package responsibilities are specified in `architecture/project-structure.md`.

**Established.** The workspace uses pnpm Workspaces and Turborepo. Node.js 16 is forbidden. The required Node.js version and exact dependency versions remain **Open**.

### 2.4 Shared packages and dependency boundaries

**Established.** The four initial shared packages are `ui`, `design-tokens`, `page-schema`, and `page-blocks`, as defined above. No additional shared package is approved by this decision.

**Established.** Shared packages do not depend on applications. Applications do not depend on one another. Circular dependencies are forbidden. Micro frontends are not introduced. Shared packages contain reusable capabilities, not application-specific business workflows.

**Established.** Puck-specific editor integration belongs inside `apps/builder`; the public renderers must not depend on Puck. `page-blocks` must not turn into a Puck-only package. The Builder may adapt approved blocks to Puck, while Company Website and Storefront render the published page model through their own rendering entry points.

**Deferred.** Separate packages for `page-renderer`, `api-client`, `auth`, `permissions`, `i18n`, and general `types` are not part of the initial structure. Their future need can be reconsidered when concrete shared requirements exist. This is not permission to create them pre-emptively.

### 2.5 UI composition

**Established.** TypeScript and React are the language and UI library.

**Established.** Each component owns its style and lives in its own folder. A page only composes components. A module holds data and behavior and has no appearance.

**Established.** Tailwind and shadcn are the styling system. `frontend-rules.md` allows CSS Modules or an approved styling system. Tailwind and shadcn are that approved system. CSS Modules are not the choice.

**Established.** Shared UI components, including the approved shadcn-based components, are owned by `packages/ui`, with one component per folder. Applications consume this shared package rather than maintaining separate copies.

**Established.** The same purpose uses the same appearance, behavior, states, spacing, typography, accessibility, and responsive behavior. Interactive components cover the relevant states named in `frontend-rules.md` section 4.3: default, hover, focus, active, disabled, loading, error, success, and empty.

**Established.** The panel login uses the shop-panel login palette: page `#F5F6FA`, card `#FFFFFF`, text `#1E293B`, and the colored panel gradient `#6366F1` → `#4F46E5` → `#7C3AED`. That palette does not define the architecture and does not set the brand for the rest of the platform. The sample colors in `frontend-rules.md` section 4.1 are illustrative only.

**Open.** Brand colors, spacing, radius, shadow, and breakpoints for the platform beyond the panel login. They need an approved design system. This file does not invent them.

**Established.** The approved typography system is recorded in `design-system/typography.md`. Families, the type scale, weights, line heights, and the related rules are delegated there. This file does not restate them. Decisions that file marks Open stay Open.

### 2.6 Language and layout

**Established.** Persian and English are both first-class. Persian is RTL. English is LTR. Direction is an architectural requirement. Logical CSS properties are preferred over hardcoded left and right.

**Open.** The internationalization library. None is approved.

### 2.7 State, forms, and API

**Established.** Server state uses TanStack Query. Client state uses Zustand. Forms use React Hook Form with Zod.

**Established.** API calls go through one centralized client. Components do not scatter their own HTTP calls. The client is responsible for base URL, authentication headers, errors, request configuration, response normalization, timeout, and interceptors where they are needed.

**Established.** The interface handles loading, success, empty data, validation errors, authentication errors, permission errors, network errors, and server errors. A successful result is shown only after confirmation. Mock data is allowed for development and tests, is kept out of production behavior, and is never shown as real business data.

**Open.** The API contracts, base URL, authentication scheme, and error body. No contract is approved in this file. Frontend permissions affect only what the user sees. They are not the security boundary.

### 2.8 Builder and storefront

**Established.** The builder is React and Puck, on Vite. Puck may be the visual editing engine. It is not the source of truth for business logic or for the page schema.

**Established.** Page configuration is structured, versioned data. It is not stored as executable JavaScript, JSX, or arbitrary HTML. The renderer uses a controlled registry of approved components. Shared Puck blocks are that approved set. Product, inventory, price, and other business data come from APIs, not from the page schema.

**Established.** Draft, preview, and published versions stay separate. Each storefront resolves its tenant from the approved domain or host configuration. Tenant data and cache do not leak between stores.

**Established.** `packages/page-schema` owns the versioned page contract, and `packages/page-blocks` owns reusable block capabilities that do not depend on Puck. Puck adapters and editor-only configuration remain in `apps/builder`. Company Website and Storefront render published content through their own application rendering entry points; neither imports Builder or Puck.

**Open.** Whether corporate pages and customer storefronts use one schema or compatible variants; the block inventory and registry strategy; schema compatibility rules; the publish and rollback workflow; and the host-to-tenant rule. None of these are specified here.

### 2.9 Assistant

**Established.** The assistant is an operational assistant, not only a chat window. `frontend-rules.md` section 15 requires the interface to show request, understanding, missing information, confirmation when required, execution, completion or failure, and the result. Sensitive or destructive operations require confirmation. The interface does not invent its own memory or identity mechanism.

**Open.** The transport between the assistant interface and the backend.

### 2.10 Knowledge files

**Established.** Frontend knowledge files are Markdown. The approved repository tree and package ownership are documented in `architecture/project-structure.md`.

### 2.11 What this document does not build

**Established.** No application, package, route, or library from this document exists because it is written here. Recommended tools stay recommendations until they are approved and added in a later change.

---

## 3. Reasoning

The platform is one business system. Four applications keep public content, daily operations, visual editing, and the public store from collapsing into a single app, while Turborepo and the four approved shared packages keep them one product.

Vite fits Admin and Builder, which are authenticated work surfaces. Next.js fits the company site and the storefront, which need public routing and SEO. That split is already the rule and the agreed stack.

Tailwind and shadcn satisfy the styling rule without a second styling system. Putting each component in its own folder, leaving pages as composition, and keeping modules free of appearance keeps presentation, behavior, and data access apart.

Puck is confined to editing. Page schema and business APIs remain the source of truth so a storefront cannot drift from stock, price, or accounting.

The legacy shop-panel and the current Vite app are not used as the structure. Carrying either forward would make the new frontend a copy of a narrower product.

---

## 4. Alternatives considered

- **Use the current Vite application as the architecture.** Rejected. This frontend is greenfield. That app must not dictate the structure.
- **Use the legacy shop-panel as the architecture.** Rejected. The only agreed carry-over is the panel login palette.
- **Use CSS Modules instead of Tailwind and shadcn.** Not chosen. The rules allow an approved styling system, and Tailwind and shadcn are that system.
- **Put Website, Admin, Builder, and Storefront in one Next.js application.** Not chosen. Admin and Builder are Vite applications.
- **Introduce micro frontends.** Not proposed. The rules forbid that without an approved decision.
- **Let Puck own the page schema and business data.** Rejected. The rules keep Puck as an editing engine only.
- **Install every library named in the rules now.** Rejected. The rules say that list is not permission to install every library in every application.

---

## 5. Affected applications

The decision applies to the future Company site, Admin, Builder, and Storefront, and to the shared packages they will use.

No existing application file is changed by this document. The four applications are not claimed to be present in this repository under this architecture.

---

## 6. Dependencies

**Established intent, not installed by this document.**

- TypeScript
- React
- Next.js for the company site and the storefront
- Vite for Admin and Builder
- Puck for the builder
- Turborepo
- pnpm
- Tailwind and shadcn
- Zustand
- TanStack Query
- Zod and React Hook Form

**Established constraint.** Node.js 16 is forbidden. The required Node version is **Open**.

**Proposed, not approved, and not installed.**

- TanStack Table for tables
- Apache ECharts for charts
- Lucide for icons
- Vitest, React Testing Library, and Playwright for tests
- The extra shared packages listed in section 2.4

Package versions are **Open**. Adding any dependency later still has to follow `frontend-rules.md` section 2.2: check what already exists, check shared packages, weigh bundle size and maintenance, skip a dependency for trivial work, and document a significant addition.

---

## 7. Compatibility implications

The shared UI, design-tokens, page-schema, and page-blocks packages affect their consuming applications. A change to any of these packages is a cross-application change under `frontend-rules.md` section 23.

Tailwind and shadcn, configured through the shared design-tokens package and consumed by the shared UI package, are the styling surface. A later change to brand color, type, spacing, radius, shadow, breakpoints, or shared components is a design-system change under section 21 and needs impact review before it is made.

Persian, English, RTL, and LTR have to work in every application. A component that works in only one direction is not complete.

Storefront tenants must stay isolated. Preview content and published content must stay isolated. Representative branding, once decided, must not fork the applications into separate codebases.

Admin and the assistant display business figures only from confirmed data. They must not invent revenue, stock, or accounting results.

---

## 8. Decision record: repository layout and initial shared packages

**Status:** Established — approved by the user.

**Problem:** The frontend needs a predictable monorepo layout that keeps four application responsibilities separate while sharing foundational UI, design tokens, page schema, and reusable page blocks without creating unnecessary packages.

**Proposed solution:** Use the approved directory tree in `architecture/project-structure.md`: `apps/website`, `apps/admin`, `apps/builder`, and `apps/storefront`; plus `packages/ui`, `packages/design-tokens`, `packages/page-schema`, and `packages/page-blocks`. Manage the repository with pnpm Workspaces and Turborepo. Keep Puck-specific code inside Builder. Keep application-specific features and workflows inside their owning application.

**Reasoning:** The four applications have distinct runtime and product responsibilities. The four initial packages correspond to confirmed cross-application capabilities. A Puck-independent page schema and block layer allow Builder to edit pages without making public rendering applications depend on the editor. Deferring speculative packages reduces initial coordination and maintenance cost.

**Alternatives considered:** A single application for all surfaces; rejected because the four application boundaries are established. A `puck-blocks` package; rejected because public renderers must not depend on Puck. Creating every candidate shared package immediately; rejected because API, authentication, permissions, internationalization, and renderer boundaries are not yet sufficiently specified. A generic `common` or `utils` package; rejected because it obscures ownership.

**Affected applications:** Company Website, Admin, Builder, and Storefront, plus the four initial shared packages.

**Dependencies:** pnpm Workspaces, Turborepo, React, TypeScript, Next.js, Vite, Puck in Builder, Tailwind, and shadcn. Exact versions and Node.js version remain Open; Node.js 16 is forbidden.

**Compatibility implications:** Applications may import shared packages but not one another. Shared packages may not import from `apps/*`. Puck must remain isolated to Builder. Changes to `ui`, `design-tokens`, `page-schema`, or `page-blocks` require impact review across every consumer. Public renderers consume the published page contract and approved block capabilities, not Builder source code.

**Migration requirements:** Greenfield implementation. Do not migrate the legacy shop-panel or current Vite application structure. Create the workspace and packages according to the approved tree when implementation begins.

**Testing requirements:** Verify workspace dependency boundaries; verify each application can build independently; verify shared packages build and type-check; verify the page schema and blocks can be consumed without importing Puck into Company Website or Storefront; verify RTL/LTR and responsive behavior in all applications.

---

## 9. Migration requirements

**Established.** There is no migration of the legacy shop-panel architecture or of the current Vite application into this frontend.

**Established.** The shop-panel login palette is a visual input for the panel login only.

**Open.** Any later move of users, domains, or content from an older surface. No frontend data migration is specified here.

No backend, database, authentication server, or infrastructure change is part of this document.

---

## 10. Testing requirements

**Established.** `frontend-rules.md` section 16 requires unit tests, integration tests, end-to-end tests for important workflows, and checks for RTL, LTR, mobile, tablet, desktop, loading, empty, error, long text, and large data sets. TypeScript checks are required. A written change is not complete until it is verified.

**Proposed.** Vitest and React Testing Library for unit and integration tests, and Playwright for end-to-end tests. These tools are not installed.

**Open.** The first workflows that must have end-to-end coverage, and the viewports that count as the required set beyond the categories already named in the rules.

This document adds no tests and runs none.
