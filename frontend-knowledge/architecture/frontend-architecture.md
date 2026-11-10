# Frontend Architecture

This document describes the greenfield frontend for Joorweb. It does not describe an existing implementation, and it does not create applications, packages, or installs.

`frontend-rules.md` remains the engineering rules. It has 25 numbered sections plus a final enforcement rule. Those sections are not the outline of this file, and they are not copied here.

Section 25.2 of `frontend-rules.md` lists nine fields that must be recorded for each significant architecture decision:

1. Problem
2. Proposed solution
3. Reasoning
4. Alternatives considered
5. Affected applications
6. Dependencies
7. Compatibility implications
8. Migration requirements
9. Testing requirements

Those nine fields are used in section 11. They are not the subject outline of this document. If a field has not been decided, it is marked **Open**. No answer is filled in for an open field.

## Status labels

- **Established** — an architectural decision explicitly confirmed for this frontend. A statement is not Established only because it was written earlier, or only because a rule mentions it.
- **Proposed** — a recommendation that still needs confirmation. It is not built.
- **Open** — unresolved. No solution is chosen.

Product requirements are stated as product requirements. They are not treated as implementation decisions.

---

## 1. Product context

**Product requirement.** Joorweb is an AaaS platform. The acronym is not expanded. CRM and ERP are inside it, together with:

- Finance: accounting aligned with IFRS, and live profit-and-loss reports.
- Warehouse: professional inventory, live stock, and valuation by FIFO and weighted average.
- Storefront: a shop site, plus marketplace connections such as Digikala, Torob, and Basalam.
- Social: networks such as Instagram, Telegram, and Bale.
- Orders: tracking from placement through delivery.
- Assistant: the user says what they want by voice or chat, and the system carries out the panel operation.
- Goods flow: a product is defined once, enters the system and the warehouse, is published to other networks and markets with copy suited to each, stock is updated on each sale, and a financial document is recorded.
- Scale: from a small shop to a large store and a production center. Representatives may sell the whole system under their own brand.

The storefront builder is one product capability, not the whole platform. The Builder application, below, is the shared editor for Joorweb's own corporate website and for customer storefronts.

How representative branding is applied is **Open**. No mechanism is chosen.

---

## 2. Greenfield principle

**Established.** This frontend is designed from scratch. The legacy shop-panel, any current Vite application, and any current backend, database, or deployment are not architectural constraints.

**Established.** There is no legacy migration requirement unless a later, confirmed dependency creates one. None is confirmed in this document.

**Established.** A panel login may use this palette, and this palette only: page `#F5F6FA`, card `#FFFFFF`, text `#1E293B`, colored panel gradient `#6366F1` → `#4F46E5` → `#7C3AED`. That is a visual choice for that login. It does not define application structure, data flow, publishing, or the platform brand.

Global brand colors, typography, spacing, radius, shadow, and breakpoints are **Open**. Sample colors in `frontend-rules.md` are illustrative and are not adopted here.

---

## 3. Applications

Four applications are confirmed. They stay separate. None depends on another application.

| Application | Responsibility | Runtime |
|---|---|---|
| Company Website | Render the published Joorweb corporate website | Next.js |
| Admin | Management surface for the platform | React + Vite |
| Builder | Edit and manage pages for the corporate website and for customer storefronts | React + Vite + Puck |
| Storefront | Render published customer storefronts | Next.js |

**Company Website.** Renders published corporate pages. It does not edit them.

**Admin.** The place where the business is operated: CRM, ERP, finance, warehouse, orders, marketing, and the assistant are product areas this surface must be able to serve. This document does not confirm a module map, route map, or information architecture for Admin.

**Builder.** A shared website-building application. It edits and manages both:

- Joorweb's own corporate website.
- Customer storefront websites.

It is not a storefront-only tool. It does not replace Company Website or Storefront as the public renderer.

**Storefront.** Renders published customer storefront pages. It does not edit them.

**Relationship.** Builder produces and manages page content. Company Website renders published corporate pages. Storefront renders published customer storefront pages. Each rendering application renders the pages that belong to it. Builder does not serve either public site.

**Established boundary rules.**

- Applications must not depend directly on one another.
- Shared packages must not depend on applications.
- Circular dependencies are not allowed.
- Shared packages hold reusable capabilities, not application-specific business workflows.

Admin's internal screens, and any workflow that belongs to only one application, stay inside that application.

---

## 4. Builder and page model

**Established.**

- Builder supports corporate website pages and customer storefront pages.
- Puck is the visual editing layer. It does not own business logic. It is not the canonical page data model.
- Page Schema is structured, versioned, and independent of Puck's internal editor representation.
- A published page is rendered by the matching Next.js application: Company Website for the corporate site, Storefront for a customer store.
- Draft, preview, and published states stay distinct.
- Shared reusable blocks are supported.
- Application-specific blocks and capabilities may exist where required.

**Established constraint.** Blocks, schema configuration, and publishing rules are not assumed to be identical for the corporate website and for customer storefronts. Sameness is not decided, and difference is not decided.

**Open.** The following are not decided. This document does not pick an answer:

- Whether the corporate website and customer storefronts use exactly the same Page Schema, or compatible schema variants.
- Whether they use one shared block registry, or separate registries built on shared infrastructure.
- Which blocks are globally shared, and which are application-specific.
- Whether corporate website publishing and customer storefront publishing use the same deployment and publishing pipeline.
- How corporate website identity, domains, environments, and permissions are represented.
- How tenant-specific domains and host resolution work for customer storefronts.
- How schema versioning, backward compatibility, publishing, preview, and rollback are implemented.

Business data such as products, stock, prices, customers, and accounting is not defined by Page Schema. Where that data is shown on a page, it has to come from the platform's APIs. The API contracts for that are **Open**.

---

## 5. Repository and shared packages

**Established.** The frontend is one monorepo, using pnpm workspaces and Turborepo.

**Established.** Node.js 16 is forbidden. The Node.js version that will be required is **Open**.

**Established.** A shared UI package is part of the architecture, so applications do not each invent the same interface controls. Shared reusable blocks are part of the architecture. Their package names, folder paths, and the split between packages are **Open**. They are included in the final package and directory structure, which is **Open**.

**Proposed, not confirmed.** One possible layout is `apps/website`, `apps/admin`, `apps/builder`, `apps/storefront`, `packages/ui`, and a shared blocks package. This is only a sketch. It is not the decided tree.

**Open.** Which additional shared packages exist. Candidates named by `frontend-rules.md` section 3.2, and not approved here, are `design-system`, `page-schema`, `page-renderer`, `api-client`, `auth`, `permissions`, `i18n`, and `types`. Whether any of these are created, merged, or omitted is not decided. Creating a `page-schema` or `page-renderer` package is not assumed.

**Established.** Whatever packages are added later, they hold reusable capabilities. They do not hold an application's business workflow, and they do not depend on an application.

---

## 6. UI composition and styling

**Established.** The UI language is TypeScript. The UI library is React.

**Established.** Each component owns its style and lives in its own folder. A page only composes components. A module holds data and behavior and has no appearance.

**Established.** Styling is Tailwind and shadcn. That is the styling system for this frontend. CSS Modules are not the chosen system.

**Proposed.** shadcn components would live in the shared UI package, one component per folder, and applications would consume that package rather than each generating a private copy. This packaging is not confirmed. The final package structure remains **Open**.

**Open.** Global design tokens, and how Tailwind relates to them. The panel-login palette in section 2 is not the token set.

Knowledge files for this frontend are Markdown. That includes this file.

---

## 7. State, forms, and server communication

**Established.** Server state uses TanStack Query. Client state uses Zustand. Forms use React Hook Form with Zod.

**Open.** API contracts, the base URL strategy, authentication implementation, and the error shape. No client, header scheme, or endpoint map is confirmed here.

**Open.** The internationalization library. No library is chosen.

Frontend permissions, once an authorization source exists, can only affect what a person sees. They are not the security boundary. How authentication and authorization are implemented is **Open**.

---

## 8. Assistant

**Product requirement.** The assistant is an operational assistant. The user can ask by voice or chat, and the system performs the panel operation.

**Open.** The communication architecture between the assistant interface and the rest of the system. No transport, session model, or operation protocol is chosen.

---

## 9. Quality

**Open.** Testing priorities and the workflows that must be covered first.

**Proposed, not installed.** Vitest and React Testing Library for unit and component tests, and Playwright for end-to-end tests. `frontend-rules.md` names these tools. This document does not confirm them and does not add them.

**Proposed, not installed.** TanStack Table for tables, Apache ECharts for charts, and Lucide for icons. They are not part of the confirmed stack.

Exact dependency versions are **Open** for every library, including the confirmed ones.

---

## 10. What this document does not decide

These stay **Open**. They are collected here so they are not dropped:

- Node.js version, other than the ban on Node.js 16.
- Exact dependency versions.
- Final package and directory structure.
- Which additional shared packages exist.
- Global brand colors and design tokens.
- Internationalization library.
- API contracts and base URL strategy.
- Authentication implementation.
- Detailed Page Schema and publishing architecture, including the seven builder questions in section 4.
- AI assistant communication architecture.
- Testing priorities and workflows.
- How a representative brand is applied.
- Admin's module map and routes.

---

## 11. Decision records

Each record below uses the nine section 25.2 fields. The status on the record says whether the solution is confirmed.

### 11.1 Four applications and their runtimes

**Status:** Established

**Problem:** The frontend has to cover a public corporate site, business management, visual page editing, and public customer stores without collapsing them into one application.

**Proposed solution:** Four applications with the runtimes in section 3: Company Website on Next.js, Admin on React and Vite, Builder on React, Vite, and Puck, Storefront on Next.js.

**Reasoning:** Public sites need a Next.js renderer. Admin and Builder are application surfaces and use Vite. The four responsibilities are different enough to be separate applications.

**Alternatives considered:** One Next.js application for all four roles. Not chosen. Admin and Builder are Vite applications. Using a legacy frontend's structure was not chosen. This product is greenfield.

**Affected applications:** Company Website, Admin, Builder, Storefront.

**Dependencies:** React, TypeScript, Next.js, Vite, and Puck, as named above. Versions are **Open**.

**Compatibility implications:** A change to one application's runtime does not by itself change the others, because applications do not depend on each other. Shared packages, once they exist, are the compatibility surface.

**Migration requirements:** None. No confirmed legacy dependency.

**Testing requirements:** **Open.**

### 11.2 Builder scope

**Status:** Established

**Problem:** Joorweb needs visual page editing for its own corporate website and for customer storefronts. A storefront-only builder would leave the corporate site outside the editor.

**Proposed solution:** Builder is a shared website-building application. It edits and manages both the corporate website and customer storefront websites.

**Reasoning:** The two public surfaces both need designed pages. One builder can serve both without making either renderer depend on the other. The corporate site and a customer store are still different products surfaces, so their blocks, schema, and publish rules are not assumed to be the same.

**Alternatives considered:** A builder that edits only customer storefronts. Not chosen.

**Affected applications:** Builder, Company Website, Storefront. Admin is not the page editor.

**Dependencies:** The Builder runtime in section 11.1. No further dependency is confirmed for this decision.

**Compatibility implications:** Builder must be able to target both kinds of page. Company Website and Storefront must each be able to render the published result that belongs to them. Identity of schema, blocks, and pipelines across the two targets is **Open** and must not be assumed.

**Migration requirements:** None. No confirmed legacy dependency.

**Testing requirements:** **Open.**

### 11.3 Editing versus rendering

**Status:** Established

**Problem:** The editor and the public sites have different jobs. If a public app also owns editing, or if Builder serves the public site, the boundaries blur.

**Proposed solution:** Builder edits and manages pages. Company Website renders published corporate pages. Storefront renders published customer storefront pages. Applications do not depend on each other.

**Reasoning:** Editing, corporate rendering, and customer-store rendering can change for different reasons. Keeping them as three applications, with Admin as the fourth, matches the confirmed boundaries.

**Alternatives considered:** Letting Storefront both edit and render customer pages, and letting Company Website both edit and render corporate pages. Not chosen. Builder is the editor for both.

**Affected applications:** Builder, Company Website, Storefront.

**Dependencies:** None beyond the confirmed runtimes. How a published page is delivered to a renderer is **Open**.

**Compatibility implications:** Renderers depend on the published page contract, not on Builder source. That contract is **Open**. Until it exists, neither renderer should import Builder.

**Migration requirements:** None. No confirmed legacy dependency.

**Testing requirements:** **Open.**

### 11.4 Puck and Page Schema

**Status:** Established for the boundary below. The schema design is **Open**.

**Problem:** A visual editor needs a saved page model. If that model is the editor's private format, the Next.js renderers and any later editor are tied to Puck.

**Proposed solution:** Puck is the visual editing layer only. Page Schema is structured, versioned, and independent of Puck's internal representation. Puck does not own business logic.

**Reasoning:** Company Website and Storefront must render published pages without embedding the editor. Business data stays outside the page document.

**Alternatives considered:** Using Puck's internal data as the canonical page model. Not chosen.

**Affected applications:** Builder, Company Website, Storefront.

**Dependencies:** Puck in Builder. No Page Schema library or package is confirmed.

**Compatibility implications:** Stored pages must remain readable without Puck-specific meaning as the canonical model. Whether both targets share one schema or use compatible variants is **Open**. Versioning and backward compatibility are **Open**.

**Migration requirements:** None. No confirmed legacy dependency.

**Testing requirements:** **Open.**

### 11.5 Draft, preview, and published

**Status:** Established that the three states stay distinct. How they are implemented is **Open**.

**Problem:** An editor needs unpublished work, a way to look at it, and a public result. Mixing those states would publish unfinished pages or hide the live page.

**Proposed solution:** Draft, preview, and published remain distinct states. Only published pages are what Company Website and Storefront render as the public result.

**Reasoning:** The editor and the public renderers do not share a single mutable page. The confirmed split in section 11.3 needs a published state the renderers can trust.

**Alternatives considered:** One saved state that is both the editor document and the public page. Not chosen.

**Affected applications:** Builder, Company Website, Storefront.

**Dependencies:** **Open.** No storage, preview host, or publish pipeline is confirmed.

**Compatibility implications:** Preview must not be treated as published. Whether both targets share one publish pipeline is **Open**.

**Migration requirements:** None. No confirmed legacy dependency.

**Testing requirements:** **Open.**

### 11.6 Blocks

**Status:** Established that shared reusable blocks are supported and that application-specific blocks may exist. The inventory and the registry shape are **Open**.

**Problem:** Corporate pages and storefront pages need reusable page parts, and they may also need parts that do not belong in both places.

**Proposed solution:** The architecture allows shared reusable blocks and application-specific blocks. It does not decide that every block is shared, and it does not decide that the two targets use one registry.

**Reasoning:** Forcing one block set would either bloat the corporate site with store features or strip the storefront of commerce blocks. Forcing two unrelated systems would duplicate the editor. Both options stay available until a block list is confirmed.

**Alternatives considered:** One mandatory block set for every target. Not chosen, because sameness is not assumed. Fully separate block systems with no shared infrastructure. Not chosen, because shared reusable blocks are supported.

**Affected applications:** Builder, Company Website, Storefront. Admin is unaffected unless a later decision puts a block in Admin, which is not decided.

**Dependencies:** **Open.** No block package is confirmed.

**Compatibility implications:** A shared block used by both renderers must be safe in both. An application-specific block must not be required by the other application. Which blocks fall into which group is **Open**.

**Migration requirements:** None. No confirmed legacy dependency.

**Testing requirements:** **Open.**

### 11.7 Monorepo

**Status:** Established for pnpm workspaces and Turborepo. The directory tree is **Open**.

**Problem:** Four applications and their reusable capabilities need one place to live without becoming one application.

**Proposed solution:** One monorepo managed with pnpm workspaces and Turborepo. Application code and shared capabilities are separate workspace members. The member list and paths are **Open**. A sketch is listed as **Proposed** in section 5 and is not adopted by this decision.

**Reasoning:** Workspaces give each application and package its own boundary. Turborepo is the confirmed way to run tasks across that workspace. Naming folders now would pretend the package list is decided.

**Alternatives considered:** Separate repositories per application. Not chosen. A single application package with no workspaces. Not chosen.

**Affected applications:** Company Website, Admin, Builder, Storefront, and any future shared packages.

**Dependencies:** pnpm and Turborepo. Versions are **Open**. Node.js 16 is forbidden. The required Node.js version is **Open**.

**Compatibility implications:** Workspace members still follow section 11.8. A package added later is a cross-application change if more than one application uses it.

**Migration requirements:** None. No confirmed legacy dependency.

**Testing requirements:** **Open.**

### 11.8 Dependency direction

**Status:** Established

**Problem:** If applications import each other, or if a shared package imports an application, a change in one place forces the others and cycles become likely.

**Proposed solution:** Applications do not depend on applications. Shared packages do not depend on applications. Circular dependencies are not allowed. Shared packages contain reusable capabilities, not an application's business workflow.

**Reasoning:** This is what keeps the four runtimes independent while still allowing a shared UI package and shared blocks.

**Alternatives considered:** Letting Storefront or Company Website import Builder to reuse editor components. Not chosen. Letting a shared package call back into an application for a workflow. Not chosen.

**Affected applications:** All four, plus every shared package.

**Dependencies:** None. This is a constraint on future packages, not a new library.

**Compatibility implications:** Reuse goes through shared packages. An application-specific workflow stays in that application even if two screens look similar.

**Migration requirements:** None. No confirmed legacy dependency.

**Testing requirements:** **Open.**

### 11.9 UI composition and styling

**Status:** Established for the rules in section 6. Placement of shadcn inside a package is **Proposed**. Global tokens are **Open**.

**Problem:** The four applications need one way to build screens, or each will invent its own components and styles.

**Proposed solution:** TypeScript and React. Each component owns its style and lives in its own folder. A page only composes components. A module has no appearance. Styling is Tailwind and shadcn. A shared UI package holds reusable controls. The panel-login palette in section 2 applies only to that login.

**Reasoning:** The composition rules keep presentation out of data modules. Tailwind and shadcn are the confirmed styling system, so CSS Modules are not introduced beside them.

**Alternatives considered:** CSS Modules as the styling system. Not chosen. Copying the legacy shop-panel structure. Not chosen. Treating the login palette as the platform brand. Not chosen.

**Affected applications:** All four, through the shared UI package once its contents are decided.

**Dependencies:** React, TypeScript, Tailwind, and shadcn. Versions are **Open**. A design-token package is **Open**, not confirmed.

**Compatibility implications:** A shared control used by more than one application must keep one appearance and one behavior. Brand tokens, when they exist, will affect every application that uses them. They are not defined yet.

**Migration requirements:** None. No confirmed legacy dependency. The login palette is not a migration of the legacy panel.

**Testing requirements:** **Open.**

### 11.10 Server state, client state, and forms

**Status:** Established for the three libraries. API and auth integration are **Open**.

**Problem:** Screen state, server data, and form validation need owners. Without that, each application will fetch and store data differently.

**Proposed solution:** TanStack Query for server state. Zustand for client state. React Hook Form with Zod for forms.

**Reasoning:** These roles are different. Server cache, local UI state, and form state should not be one store.

**Alternatives considered:** No alternative library set is confirmed, and this document does not invent one. The confirmed set stands.

**Affected applications:** All four, wherever they load server data or submit forms.

**Dependencies:** TanStack Query, Zustand, Zod, and React Hook Form. Versions are **Open**.

**Compatibility implications:** Shared packages that fetch data would need to follow the same server-state approach. Whether fetching lives in a shared package is **Open**.

**Migration requirements:** None. No confirmed legacy dependency.

**Testing requirements:** **Open.**

### 11.11 Node.js 16

**Status:** Established as a ban. The replacement version is **Open**.

**Problem:** A frontend toolchain has to name the runtime it will not support, without pretending a version has been selected.

**Proposed solution:** Node.js 16 must not be used. No other version is required by this document.

**Reasoning:** The ban is confirmed. Choosing 18, 20, 22, or another line here would be an invented decision.

**Alternatives considered:** None confirmed.

**Affected applications:** All four, and the workspace tooling.

**Dependencies:** The chosen Node.js version, which is **Open**. pnpm and Turborepo must run on that version once it is chosen.

**Compatibility implications:** **Open** until a version is chosen. The only confirmed implication is that Node.js 16 is out of scope.

**Migration requirements:** None. No confirmed legacy dependency.

**Testing requirements:** **Open.**
