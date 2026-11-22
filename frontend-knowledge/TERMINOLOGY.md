# Joorweb Frontend Terminology

## How to read this glossary

### What this file defines

This glossary establishes a consistent vocabulary for the Joorweb frontend knowledge base. It explains how terms are used in the current frontend rules, frontend architecture, and design-system documents, and points to the document that owns the relevant requirement or decision.

### What this file does not decide

This file does not create architecture decisions, approve proposed technologies, resolve open questions, define backend behavior, or replace mandatory engineering rules. It does not define implementation details that the source documents leave unspecified.

The owning documents remain:

- `frontend-rules.md`: mandatory frontend engineering rules and AI coding-agent guidelines.
- `architecture/frontend-architecture.md`: frontend architecture and the authoritative `Established`, `Proposed`, and `Open` decision statuses.
- `design-system/design-system.md`: shared visual and interaction foundations.
- Specialized files such as `colors.md`, `typography.md`, `components.md`, application documents, and development documents remain the intended owners of their subjects when they contain approved content. `typography.md` contains the approved typography system and is the source for type decisions. This glossary does not restate that system. `design-system/components.md` contains the component catalog, the layer meanings, and the Agent Interaction Components family. This glossary does not restate the 90-row catalog. A catalog row stays Proposed or Open as that file marks it. `development/component-guidelines.md` is the component implementation guide. It complements the catalog, it is not a restatement of the catalog, and it does not settle an Open or Proposed item. This glossary does not restate it. Application documents and the other development documents are cited only where they record a boundary already stated by an owning document. They are not a second architecture.

### Established, Proposed, and Open

These labels describe architecture decision status. They must not be treated as synonyms for glossary definition status.

- **Established**: the architecture document records the decision as established.
- **Proposed**: a suggested direction that has not been approved as an established decision.
- **Open**: no final decision has been made.

A glossary entry may explain a term even when the implementation mechanism is `Open`. A definition in this file does not promote an item from `Proposed` or `Open` to `Established`.

### Mandatory rules versus architecture status

A mandatory requirement in `frontend-rules.md` remains mandatory even if a related architecture mechanism is still open. Conversely, an example, candidate, or proposed tool does not become mandatory merely because it appears in a knowledge document.

### Illustrative examples are not standards

Examples of package names, directory layouts, CSS, modules, marketplaces, and tools must be read as examples wherever the source document identifies them as illustrative. This glossary does not convert examples into approved standards.

### Entry format

Each entry uses the following fields where applicable:

- **Preferred term**: the canonical term used in this glossary.
- **Other names**: alternative wording found in the source documents.
- **Definition**: the meaning supported by the source documents.
- **Definition status**: `Explicit`, `Partial`, `Ambiguous`, or `Missing`.
- **Architecture status**: `Established`, `Proposed`, or `Open`, only when the architecture source assigns one.
- **Source**: the owning document and relevant section.
- **Do not confuse with**: a distinction needed to prevent a known terminology collision.

Definition status describes how clearly the documents define a term. Architecture status describes whether an architecture decision is settled. They are independent.

---

## Product

### Joorweb and AaaS

- **Preferred term:** Joorweb
- **Other names:** AaaS; Agent as a Service.
- **Definition:** Joorweb is an enterprise-grade AaaS (Agent as a Service) platform. In this product model, AI agents are provided as operational capabilities that can work with the platform's business modules and workflows. They are not limited to answering questions or acting as standalone chatbots: within the permissions granted to them, agents can understand requests, gather missing information, propose or execute operations, request human approval when required, report progress, and present outcomes confirmed by the platform. The frontend must make the agent's identity, operation, status, permissions, approval requirements, progress, result, and failure or cancellation states understandable to the user.
- **Definition status:** `Explicit` for the AaaS expansion and product positioning; `Partial` for the full product scope and all agent capabilities.
- **Architecture status:** `Established` for the AaaS product direction and greenfield/enterprise-first positioning. Specific agent transport, orchestration, voice pipeline, and history-storage mechanisms remain `Open` where identified by the architecture document.
- **Source:** `architecture/frontend-architecture.md`, sections 1–2 and 8; `frontend-rules.md`, sections 1 and 15; `design-system/design-system.md`, section 14.
- **Do not confuse with:** SaaS as the product category; a conventional chatbot; or the legacy shop panel. The legacy system may provide business-context references but is not the technical foundation for the new frontend.

**Naming convention:** Use `AaaS` as the preferred short form throughout the knowledge base. At the first explanatory occurrence in a document, it may be written as `Agent as a Service (AaaS)`. Do not relabel Joorweb as SaaS.

### Product areas

- **Preferred term:** Product area
- **Other names:** Business area; functional area.
- **Definition:** A broad area of product capability referenced by the architecture and design documents. The current documents name areas such as CRM, ERP, finance, warehouse, orders, marketing, and the assistant, but do not establish a complete product taxonomy or final module map.
- **Definition status:** `Partial`
- **Architecture status:** `Open` for the final Admin module map and navigation inventory.
- **Source:** `design-system/design-system.md`, section 13; `frontend-rules.md`, sections 14.1 and 14.2; `architecture/frontend-architecture.md`, section 2.2.
- **Do not confuse with:** An application. A product area is not automatically a separately deployed frontend application.

### Representative branding

- **Preferred term:** Representative branding
- **Other names:** Representative brand.
- **Definition:** The presentation of the system under a representative's own brand, discussed in the design-system document as part of White-label support.
- **Definition status:** `Partial`
- **Architecture status:** `Open` for the mechanism and how a representative brand is applied.
- **Source:** `design-system/design-system.md`, section 12.
- **Do not confuse with:** A separate fork of the applications or an unrestricted replacement of shared design-system behavior.

---

## Applications

### Company Website

- **Preferred term:** Company Website
- **Other names:** Website; corporate website (where the source describes its purpose).
- **Definition:** The public-facing Next.js application responsible for rendering published corporate pages. It does not embed Builder and does not edit pages.
- **Definition status:** `Explicit`
- **Architecture status:** `Established` as one of the four frontend applications and as a Next.js application.
- **Source:** `architecture/frontend-architecture.md`, section 2.2; `frontend-rules.md`, section 3.1; `design-system/design-system.md`, section 13.
- **Do not confuse with:** Storefront. Company Website renders Joorweb's corporate pages; Storefront renders customer-facing pages for stores.

### Admin

- **Preferred term:** Admin
- **Other names:** Admin Panel; panel (when the context clearly means the management application).
- **Definition:** The React + Vite management application. It provides the shared management experience for platform capabilities and product areas. The final module map and navigation inventory have not been decided.
- **Definition status:** `Explicit` for its application role; `Partial` for its complete scope.
- **Architecture status:** `Established` as one of the four applications and as React + Vite; `Open` for the final module map.
- **Source:** `architecture/frontend-architecture.md`, section 2.2; `frontend-rules.md`, sections 3.1 and 14; `design-system/design-system.md`, section 13.
- **Do not confuse with:** Builder. Admin manages the platform; Builder provides page-editing capabilities.

### Builder

- **Preferred term:** Builder
- **Other names:** Website Builder; visual editor.
- **Definition:** The React + Vite application that provides visual editing for both Company Website pages and customer Storefront pages. It owns the editing experience, not the published rendering of those pages.
- **Definition status:** `Explicit`
- **Architecture status:** `Established` as one of the four applications and as React + Vite with Puck; the exact shared block set and publishing treatment remain `Open`.
- **Source:** `architecture/frontend-architecture.md`, sections 2.2 and 2.8; `frontend-rules.md`, section 13; `design-system/design-system.md`, section 13.
- **Do not confuse with:** Company Website or Storefront. Builder edits pages; those applications render published output.

### Storefront

- **Preferred term:** Storefront
- **Other names:** Customer storefront; store frontend.
- **Definition:** The Next.js frontend application that renders published customer pages for multiple stores. It uses the active tenant's content and allowed theme and must prevent tenant data or theme from leaking across stores.
- **Definition status:** `Explicit`
- **Architecture status:** `Established` as one of the four applications and as a Next.js application; host-to-tenant resolution remains `Open`.
- **Source:** `architecture/frontend-architecture.md`, sections 2.2 and 2.8; `frontend-rules.md`, sections 3.1 and 13.6; `design-system/design-system.md`, section 13.
- **Do not confuse with:** Builder, which edits customer pages; or the general commerce capability, which may be broader than this named frontend application.

### Application boundaries

- **Preferred term:** Application boundary
- **Other names:** Application responsibility; application separation.
- **Definition:** The defined separation of responsibilities among Company Website, Admin, Builder, and Storefront. Shared capabilities may be consumed by applications, but one application must not take over another application's assigned responsibility.
- **Definition status:** `Explicit`
- **Architecture status:** `Established`
- **Source:** `architecture/frontend-architecture.md`, sections 2.2 and 2.4; `frontend-rules.md`, sections 3 and 23; `design-system/design-system.md`, section 13.
- **Do not confuse with:** Package boundaries. Application responsibilities and shared package structure are related but not identical.

---

## Builder and pages

### Puck

- **Preferred term:** Puck
- **Other names:** Puck editor; visual editing layer.
- **Definition:** The selected visual editing layer used by Builder. Puck is not the canonical owner of Page Schema and does not own business logic or the published rendering applications.
- **Definition status:** `Explicit`
- **Architecture status:** `Established` for its role as the editing layer.
- **Source:** `architecture/frontend-architecture.md`, sections 2.4 and 2.8; `frontend-rules.md`, sections 13.1–13.2.
- **Do not confuse with:** Page Schema. Puck is the editor; Page Schema is the platform's structured page representation.

### Page Schema

- **Preferred term:** Page Schema
- **Other names:** Page data; page structure (when referring to the same structured representation).
- **Definition:** Structured, versioned page data independent of Puck. It is not executable JavaScript, JSX, or HTML. The current documents establish these characteristics but do not fully specify its fields, validation model, or complete schema.
- **Definition status:** `Partial`
- **Architecture status:** `Established` for structured/versioned data independent of Puck; detailed schema design remains `Open`.
- **Source:** `architecture/frontend-architecture.md`, sections 2.4 and 2.8; `frontend-rules.md`, section 13.2.
- **Do not confuse with:** Puck's internal editor state or executable frontend code.

### Block

- **Preferred term:** Block
- **Other names:** Page block; content block.
- **Definition:** A reusable page-level unit used in the page-building model. The documents establish the use of blocks and discuss shared versus application-specific blocks, but do not fully define the block data contract or complete catalog.
- **Definition status:** `Partial`
- **Architecture status:** `Established` for the block concept; whether the two page targets share one block set remains `Open`.
- **Source:** `architecture/frontend-architecture.md`, section 2.8; `frontend-rules.md`, sections 13.1–13.4.
- **Do not confuse with:** A UI component. A block may be implemented using components, but the terms describe different levels of the system.

### Component Registry

- **Preferred term:** Component Registry
- **Other names:** Registry (generic); block registry (in the architecture document's open-decision wording).
- **Definition:** A named registry concept associated with the Builder/page model. The documents do not provide a complete definition of its data structure, registration API, ownership, or runtime behavior.
- **Definition status:** `Ambiguous`
- **Architecture status:** `Open` for the relationship between the page targets, one block registry, and the publishing pipeline.
- **Source:** `frontend-rules.md`, section 13.3; `architecture/frontend-architecture.md`, section 2.8.
- **Do not confuse with:** A component catalog or the Page Schema. The current documents do not establish that these are the same thing.

### Draft

- **Preferred term:** Draft
- **Other names:** Draft state.
- **Definition:** A page version or state that is being edited and is not the published output. The Builder must make its draft status visible.
- **Definition status:** `Explicit`
- **Architecture status:** `Established`
- **Source:** `architecture/frontend-architecture.md`, section 2.8; `frontend-rules.md`, section 13.5; `design-system/design-system.md`, section 13.
- **Do not confuse with:** Published content. A draft must not be represented as the live published page.

### Preview

- **Preferred term:** Preview
- **Other names:** Page preview; preview state.
- **Definition:** A way to inspect a page before or separately from its published presentation. The documents distinguish preview from draft and published, but do not fully specify preview URLs, authorization, data isolation, or rendering infrastructure.
- **Definition status:** `Partial`
- **Architecture status:** `Established` for its distinction from draft and published; implementation details remain `Open` where not specified.
- **Source:** `architecture/frontend-architecture.md`, section 2.8; `frontend-rules.md`, section 13.5; `design-system/design-system.md`, sections 13 and 16.
- **Do not confuse with:** The Preview environment or deployment environment. The source usage in the page model concerns page presentation, not a fully defined infrastructure environment.

### Published

- **Preferred term:** Published
- **Other names:** Published state; published output.
- **Definition:** The page output designated as the live/published version and rendered by Company Website or Storefront, not by Builder.
- **Definition status:** `Explicit`
- **Architecture status:** `Established`
- **Source:** `architecture/frontend-architecture.md`, section 2.8; `frontend-rules.md`, section 13.5; `design-system/design-system.md`, section 13.
- **Do not confuse with:** Draft or Preview.

### Publishing

- **Preferred term:** Publishing
- **Other names:** Publish process; publishing pipeline.
- **Definition:** The process by which page content becomes the published output consumed by Company Website or Storefront. The documents establish the separation between editing and rendering but do not define the complete pipeline, deployment mechanics, or transaction model.
- **Definition status:** `Partial`
- **Architecture status:** `Open` for the detailed publishing pipeline and whether the two page targets share one pipeline.
- **Source:** `architecture/frontend-architecture.md`, section 2.8; `frontend-rules.md`, section 13.5.
- **Do not confuse with:** Rendering. Publishing makes a version available as published content; rendering displays that content.

---

## Design system

### Design system

- **Preferred term:** Design system
- **Other names:** Shared design system; shared visual foundations.
- **Definition:** The centrally governed set of shared visual foundations, tokens, component behavior, interaction patterns, and application adaptation rules used across the four frontend applications.
- **Definition status:** `Explicit`
- **Architecture status:** `Established` for a shared design-system direction; individual values and mechanisms may remain `Open`.
- **Source:** `design-system/design-system.md`, sections 1–3 and 15; `frontend-rules.md`, sections 4 and 21.
- **Do not confuse with:** A styling library. Tailwind and shadcn/ui are technology choices; they are not the whole design system.

### Design token

- **Preferred term:** Design token
- **Other names:** Token; design-system token.
- **Definition:** A named design value consumed by shared UI foundations. The design-system document describes tokens as the shared foundation for values such as color, typography, spacing, and related visual properties. Approved typography values are Established in `design-system/typography.md`. Naming prefix, file format, Tailwind mapping, and the type decisions that file still marks Open remain undecided.
- **Definition status:** `Partial`
- **Architecture status:** `Established` for the approved typography values in `typography.md`. `Open` for token implementation details and for typography decisions that file still marks Open.
- **Source:** `design-system/design-system.md`, sections 3–4 and 16; `design-system/typography.md`; `frontend-rules.md`, section 4.1.
- **Do not confuse with:** An organization-specific override. An override supplies a value to an allowed token; it does not create a replacement component or a separate design system.

### Styling system

- **Preferred term:** Styling system
- **Other names:** Styling approach.
- **Definition:** The chosen frontend styling technologies and conventions. Tailwind CSS and shadcn/ui are established in the architecture; this does not mean every implementation detail or package name is settled.
- **Definition status:** `Partial`
- **Architecture status:** `Established` for Tailwind CSS and shadcn/ui; other styling details remain as recorded in the architecture document.
- **Source:** `architecture/frontend-architecture.md`, section 2.5; `frontend-rules.md`, sections 2.1–2.2.
- **Do not confuse with:** The design system, which defines shared design decisions and behavior rather than only the styling technology.

### Component

- **Preferred term:** Component
- **Other names:** UI component; shared component (when reused across applications).
- **Definition:** A reusable frontend UI unit with its own structure, behavior, and styling responsibility. The rules require components to be designed for clear responsibility, typed props, reuse where appropriate, and consistent states. The candidate catalog, the layer meanings, and the Agent Interaction Components family are recorded in `design-system/components.md`. This glossary does not restate that catalog.
- **Definition status:** `Explicit`
- **Architecture status:** `Established` for the shared component approach and for `packages/ui` as the home of shared application-agnostic primitives and composites. Individual catalog rows remain Proposed or Open as `components.md` marks them. Exact props remain Open.
- **Source:** `frontend-rules.md`, sections 8 and 22; `design-system/design-system.md`, sections 9–10; `design-system/components.md`, sections 3, 4, and 14; `development/component-guidelines.md`.
- **Do not confuse with:** Block. A block belongs to the page-building model; a component is a frontend implementation unit.

### Primitive, composite, and pattern

- **Preferred term:** Primitive / Composite / Pattern
- **Other names:** Component levels.
- **Definition:** The three component layers recorded in `design-system/components.md` section 3: Primitive, Composite, and Pattern. This glossary does not restate the layer table or the catalog. A row’s Layer in that catalog is not its Scope and is not its Status.
- **Definition status:** `Explicit` for the three layer meanings. Which candidate uses which layer is the catalog row, not this glossary.
- **Architecture status:** Not an architecture-document status. `components.md` section 3 marks the layer meanings Established. Catalog rows stay Proposed or Open.
- **Source:** `design-system/components.md`, section 3; `design-system/design-system.md`, section 9; `development/component-guidelines.md`, section 2.
- **Do not confuse with:** Product modules or Builder blocks.

### Component state

- **Preferred term:** Component state
- **Other names:** UI state; interaction state.
- **Definition:** A visible or behavioral condition of a UI component, including states such as loading, empty, error, disabled, selected, or other states required by its interaction. Shared components must preserve consistent state behavior.
- **Definition status:** `Explicit`
- **Source:** `frontend-rules.md`, sections 4.3 and 8; `design-system/design-system.md`, section 10.
- **Do not confuse with:** Application data state such as server state or client state.

### Theme

- **Preferred term:** Theme
- **Other names:** Shared theme.
- **Definition:** A controlled set of values assigned to shared design tokens. A theme changes token values; it does not rename tokens, remove component states, or create a separate design system per customer.
- **Definition status:** `Explicit`
- **Architecture status:** `Open` for default mode and initial light/dark availability.
- **Source:** `design-system/design-system.md`, section 12.
- **Do not confuse with:** White-label. A theme is the token-value layer; White-label is a product/branding capability that may use controlled organization-level overrides.

### White-label

- **Preferred term:** White-label
- **Other names:** Representative branding; organization-level brand customization.
- **Definition:** The capability for a representative to present the system under its own brand, using an organization-level visual configuration that inherits the shared theme and overrides only explicitly allowed tokens. The applications are not forked.
- **Definition status:** `Partial`
- **Architecture status:** `Open` for the mechanism, override allowlist, and application of a representative brand.
- **Source:** `design-system/design-system.md`, section 12 and section 16.
- **Do not confuse with:** A separate design system, unrestricted CSS customization, or a fork of each application.

### Organization visual configuration

- **Preferred term:** Organization visual configuration
- **Other names:** Organization theme configuration; organization-level visual settings.
- **Definition:** Data applied to design tokens to represent an organization's allowed visual customization. The source says it inherits from the shared theme and is not a second stylesheet maintained inside an application.
- **Definition status:** `Partial`
- **Architecture status:** `Open` for storage and application mechanisms.
- **Source:** `design-system/design-system.md`, sections 12 and 16.
- **Do not confuse with:** A component override or a separate application stylesheet.

### Panel-login palette

- **Preferred term:** Panel-login palette
- **Other names:** Login palette.
- **Definition:** The palette reserved for the panel login screen. The design-system document explicitly excludes it from the global theme/token model and from the global brand decision.
- **Definition status:** `Explicit`
- **Source:** `design-system/design-system.md`, sections 12 and 16.
- **Do not confuse with:** The global Joorweb brand palette.

---

## Repository and packages

### Monorepo

- **Preferred term:** Monorepo
- **Other names:** Monorepository.
- **Definition:** A repository structure that contains the frontend applications and shared packages in one coordinated codebase. The established repository approach is pnpm Workspaces with Turborepo.
- **Definition status:** `Explicit`
- **Architecture status:** `Established`
- **Source:** `architecture/frontend-architecture.md`, sections 2.3 and 8; `frontend-rules.md`, sections 3.2–3.3.
- **Do not confuse with:** A single application. A monorepo can contain multiple independently responsible applications.

### Shared package

- **Preferred term:** Shared package
- **Other names:** Shared capability package; workspace package.
- **Definition:** A package in the monorepo that provides reusable capabilities to more than one application. Shared packages are an established architectural direction; exact package names, paths, and complete package tree are not finalized.
- **Definition status:** `Partial`
- **Architecture status:** `Established` for shared packages; exact names and structure remain `Open`.
- **Source:** `architecture/frontend-architecture.md`, sections 2.3 and 2.4; `frontend-rules.md`, section 3.2.
- **Do not confuse with:** An application. A shared package is consumed by applications and must not silently take ownership of their responsibilities.

### Package-name candidates

- **Preferred term:** Package-name candidate
- **Other names:** Illustrative package name.
- **Definition:** A package name shown as an example or candidate rather than an approved package identifier. Example names and directory sketches must not be treated as mandatory until approved.
- **Definition status:** `Explicit`
- **Architecture status:** `Open` for final package names and paths.
- **Source:** `architecture/frontend-architecture.md`, sections 5 and 10; `frontend-rules.md`, sections 2.2 and 3.2.
- **Do not confuse with:** An established package name.

### Module

- **Preferred term:** Module
- **Other names:** Functional module; feature area.
- **Definition:** The term has two distinct uses in the current documents:
  1. In the Admin/product context, a module is a functional area such as CRM, ERP, finance, warehouse, orders, or marketing.
  2. In design-system/engineering wording, a module may refer to a unit of application or code organization. The design-system document explicitly says a module has no appearance.
- **Definition status:** `Ambiguous` unless the context identifies which meaning is intended.
- **Architecture status:** `Open` for the final Admin module map.
- **Source:** `design-system/design-system.md`, sections 13–15; `frontend-rules.md`, sections 14 and 21; `architecture/frontend-architecture.md`, section 2.2.
- **Do not confuse with:** A frontend application, a shared package, or a UI component. When writing new documentation, qualify the term as `Admin functional module` or `code module` whenever ambiguity is possible.

### Dependency direction

- **Preferred term:** Dependency direction
- **Other names:** Dependency rule.
- **Definition:** The allowed direction of dependencies between applications and shared capabilities in the frontend architecture. The architecture document treats dependency direction as an explicit architectural concern; implementation-specific package paths are not inferred by this glossary.
- **Definition status:** `Partial`
- **Source:** `architecture/frontend-architecture.md`, section 2.4; `frontend-rules.md`, sections 3.3 and 23.
- **Do not confuse with:** Runtime communication between applications.

---

## State, API, and security

### Server state

- **Preferred term:** Server state
- **Other names:** Remote state; API state.
- **Definition:** Data whose authoritative source is the server and that the frontend retrieves and synchronizes. TanStack Query is the established library for server-state management.
- **Definition status:** `Explicit`
- **Architecture status:** `Established`
- **Source:** `architecture/frontend-architecture.md`, section 2.7; `frontend-rules.md`, sections 9.1 and 9.2.
- **Do not confuse with:** Client state.

### Client state

- **Preferred term:** Client state
- **Other names:** Local UI state.
- **Definition:** State owned and managed in the frontend client rather than treated as server-authoritative data. Zustand is the established library for client-state management.
- **Definition status:** `Explicit`
- **Architecture status:** `Established`
- **Source:** `architecture/frontend-architecture.md`, section 2.7; `frontend-rules.md`, section 9.1.
- **Do not confuse with:** Server state or form state.

### Form state

- **Preferred term:** Form state
- **Other names:** Form data and validation state.
- **Definition:** The values and validation-related state associated with user input forms. React Hook Form and Zod are the established choices in the architecture.
- **Definition status:** `Explicit`
- **Architecture status:** `Established`
- **Source:** `architecture/frontend-architecture.md`, section 2.7; `frontend-rules.md`, section 9.1.
- **Do not confuse with:** General client state. Form state has form-specific validation and submission responsibilities.

### API contract

- **Preferred term:** API contract
- **Other names:** Backend contract; endpoint contract.
- **Definition:** The agreed interface between frontend and backend, including the data and behavior the frontend may rely on. The rules require integration to follow defined contracts and prohibit inventing missing backend functionality. The complete contract format and API inventory are not defined in the current frontend documents.
- **Definition status:** `Partial`
- **Architecture status:** `Open` for API contracts, base URL, and authentication implementation where identified by the architecture document.
- **Source:** `frontend-rules.md`, sections 9.2, 24.4, and 24.5; `architecture/frontend-architecture.md`, section 2.7.
- **Do not confuse with:** Mock data. Mock data must not be presented as a real API contract.

### API client

- **Preferred term:** API client
- **Other names:** Frontend API layer.
- **Definition:** The frontend-side mechanism used to communicate with backend APIs. The current documents require disciplined API integration but do not settle every implementation detail of the API client.
- **Definition status:** `Partial`
- **Architecture status:** `Open` where the architecture document leaves API implementation details undecided.
- **Source:** `frontend-rules.md`, section 9.2; `architecture/frontend-architecture.md`, sections 7 and 10.
- **Do not confuse with:** An API endpoint or backend service.

### Authentication

- **Preferred term:** Authentication
- **Other names:** User authentication; identity verification.
- **Definition:** The process by which the system establishes the identity of a user or session. The frontend rules require authentication behavior to follow the platform's actual implementation and do not permit the UI to invent authentication outcomes.
- **Definition status:** `Partial`
- **Architecture status:** `Open` for the frontend authentication implementation where identified by the architecture document.
- **Source:** `frontend-rules.md`, section 10.2; `architecture/frontend-architecture.md`, section 2.7.
- **Do not confuse with:** Authorization or permissions.

### Authorization

- **Preferred term:** Authorization
- **Other names:** Access decision.
- **Definition:** The system's decision about whether an identified user is allowed to perform an operation or access a resource. The backend is authoritative for this decision; frontend visibility or disabled controls are not security enforcement.
- **Definition status:** `Explicit`
- **Source:** `frontend-rules.md`, section 10.3; `design-system/design-system.md`, section 14.
- **Do not confuse with:** Authentication. Authentication establishes identity; authorization determines allowed actions.

### Permission

- **Preferred term:** Permission
- **Other names:** Access permission; capability permission.
- **Definition:** An authorization boundary that determines which actions a user or agent may perform in a given context. The UI may explain or reflect permissions, but the backend determines and enforces them.
- **Definition status:** `Explicit`
- **Source:** `frontend-rules.md`, sections 10.3 and 14.4; `design-system/design-system.md`, section 14.
- **Do not confuse with:** A UI control's visibility. Hiding a control does not prove that the operation is protected.

### Mock data

- **Preferred term:** Mock data
- **Other names:** Development mock; fixture data (where applicable).
- **Definition:** Non-production or simulated data used for development and testing under the restrictions in the frontend rules. It must remain distinguishable from real backend data and must not be used to claim that missing backend functionality exists.
- **Definition status:** `Explicit`
- **Source:** `frontend-rules.md`, section 24.
- **Do not confuse with:** A real API response or an approved API contract.

---

## Assistant and agent UI

### Assistant

- **Preferred term:** Assistant
- **Other names:** AI Assistant; product assistant.
- **Definition:** The user-facing assistant capability inside Joorweb through which a person may interact by supported input modes and initiate business operations. The frontend documents define interaction and presentation requirements but leave transport, session model, memory mechanism, and parts of orchestration unresolved.
- **Definition status:** `Partial`
- **Architecture status:** `Open` for transport and related mechanisms identified in the architecture document.
- **Source:** `architecture/frontend-architecture.md`, section 2.9; `frontend-rules.md`, section 15; `design-system/design-system.md`, section 14; `design-system/components.md`, sections 16 and 17. The Agent catalog rows are not restated here.
- **Do not confuse with:** An AI coding agent that works on the source code.

### Agent

- **Preferred term:** Agent
- **Other names:** Product agent (when referring to an operational agent in Joorweb).
- **Definition:** In the product UI context, an operational actor that can propose and perform platform operations within the permissions of the person and organization. The UI must represent its identity, status, operation, progress, result, errors, and relevant history.
- **Definition status:** `Explicit` for the product-UI meaning.
- **Source:** `design-system/design-system.md`, section 14; `frontend-rules.md`, section 15; `design-system/components.md`, sections 16 and 17. Family membership does not make a catalog row Established.
- **Do not confuse with:** An AI coding agent. The coding agent is a development tool/actor governed by `frontend-rules.md`, sections 17–18; it is not the same as an operational agent inside Joorweb.

### AI coding agent

- **Preferred term:** AI coding agent
- **Other names:** Coding agent; development agent.
- **Definition:** An AI tool or agent that inspects, changes, verifies, or reports on frontend source code. It must follow the repository's rules, inspect before implementing, verify changes, and avoid unsupported claims.
- **Definition status:** `Explicit`
- **Source:** `frontend-rules.md`, sections 17–18 and 25.
- **Do not confuse with:** The product Assistant or an operational Agent shown to Joorweb users.

### Agent status vocabulary

- **Preferred term:** Agent status
- **Other names:** Operation status; lifecycle status (in the operation context).
- **Definition:** The distinct visible states used to communicate the state of an agent operation:
  - **Proposal:** an operation has been described; nothing has run.
  - **Pending:** the operation is waiting, for example for missing information or a person.
  - **Authorized:** a person with the required permission has approved the operation; approval does not mean completion.
  - **Executing:** the operation is running.
  - **Completed:** the platform has confirmed success.
  - **Failure / Failed:** the operation failed.
  - **Cancellation / Cancelled:** the operation was stopped.
- **Definition status:** `Explicit`
- **Source:** `design-system/design-system.md`, section 14; `frontend-rules.md`, section 15; `design-system/components.md`, sections 16 and 17. The presentation candidates stay Proposed or Open as that catalog marks them. This glossary does not restate those rows.
- **Do not confuse with:** Progress indicators or request checkpoints. A status communicates the current operation state; progress communicates movement while executing.

### Operation lifecycle

- **Preferred term:** Operation lifecycle
- **Other names:** Agent execution lifecycle; operation flow.
- **Definition:** The sequence from request and interpretation through missing-information handling, required approval, execution, and a confirmed terminal outcome with a presented result or recovery path.
- **Definition status:** `Explicit`
- **Source:** `design-system/design-system.md`, section 14; `frontend-rules.md`, sections 15.2–15.6; `design-system/components.md`, sections 16 and 17.
- **Do not confuse with:** The status vocabulary. Lifecycle describes the sequence; statuses label the operation's state at a point in time.

### Human approval

- **Preferred term:** Human approval
- **Other names:** Explicit approval; confirmation (when the operation requires authorization).
- **Definition:** An explicit approval by a person with the required permission before a sensitive or irreversible operation may proceed to the authorized state. Dismissing an approval dialog is not approval.
- **Definition status:** `Explicit`
- **Source:** `design-system/design-system.md`, section 14; `frontend-rules.md`, sections 15.3 and 5.4; `design-system/components.md`, sections 16 and 17. Human Handoff remains Open in that catalog and is not this term.
- **Do not confuse with:** A generic acknowledgement or the operation's completed result.

### Operation result

- **Preferred term:** Operation result
- **Other names:** Agent result; execution result.
- **Definition:** The outcome presented after the platform confirms what happened. The interface must not show success before that confirmation; failure and cancellation must remain distinct from completion.
- **Definition status:** `Explicit`
- **Source:** `design-system/design-system.md`, section 14; `frontend-rules.md`, sections 15.4–15.5; `design-system/components.md`, sections 16 and 17.
- **Do not confuse with:** A proposal, progress update, or optimistic assumption.

### Agent history and audit

- **Preferred term:** Agent history
- **Other names:** Operation history; audit record (for the underlying platform record).
- **Definition:** The UI presentation of past agent operations for authorized people. The design-system document distinguishes history presentation from the platform's responsibility for the underlying audit record and storage.
- **Definition status:** `Partial`
- **Architecture status:** `Open` for history persistence/storage where identified by the architecture document.
- **Source:** `design-system/design-system.md`, sections 14 and 16; `architecture/frontend-architecture.md`, section 2.9.
- **Do not confuse with:** A client-generated activity list that is not backed by platform records.

---

## Language, accessibility, and quality

### Persian and English

- **Preferred term:** Persian and English support
- **Other names:** Bilingual support; language support.
- **Definition:** The frontend must support Persian and English content and interfaces. The current rules define language and direction handling requirements but do not select the final internationalization library.
- **Definition status:** `Explicit`
- **Architecture status:** `Open` for the internationalization library.
- **Source:** `frontend-rules.md`, section 7; `design-system/design-system.md`, section 8; `architecture/frontend-architecture.md`, section 2.6.

### RTL and LTR

- **Preferred term:** RTL / LTR
- **Other names:** Right-to-left / left-to-right.
- **Definition:** Text and layout direction modes required for Persian and English interfaces. Direction must be handled deliberately across layout, components, typography, and mixed-language content rather than by assuming one global direction.
- **Definition status:** `Explicit`
- **Source:** `frontend-rules.md`, section 7; `design-system/design-system.md`, section 8.
- **Do not confuse with:** Language selection. A language and its direction are related but are not interchangeable concepts.

### Accessibility

- **Preferred term:** Accessibility
- **Other names:** A11y.
- **Definition:** The requirement that frontend experiences be usable by people with different access needs, including keyboard and assistive-technology interaction. The design-system document sets WCAG 2.2 AA as the target.
- **Definition status:** `Explicit`
- **Architecture status:** `Established` as a target requirement.
- **Source:** `design-system/design-system.md`, section 11; `frontend-rules.md`, section 12.
- **Do not confuse with:** Visual polish or responsive behavior. Accessibility is a distinct quality requirement.

### Viewport categories

- **Preferred term:** Viewport category
- **Other names:** Responsive breakpoint category; device-size category.
- **Definition:** A category of viewport size used to validate responsive behavior. The rules require responsive behavior but final numeric breakpoint values remain an open design-system decision.
- **Definition status:** `Partial`
- **Architecture status:** `Open` for numeric breakpoint values.
- **Source:** `frontend-rules.md`, section 6; `design-system/design-system.md`, sections 6–7 and 16.

### Testing and quality assurance

- **Preferred term:** Testing and quality assurance
- **Other names:** QA; verification.
- **Definition:** The activities used to verify frontend behavior, compatibility, accessibility, responsiveness, and completion. The rules define required testing expectations; the architecture document leaves the final tool choices and testing priorities unresolved where stated.
- **Definition status:** `Partial`
- **Architecture status:** `Proposed` for candidate testing tools where explicitly marked Proposed; testing priorities and automation choices remain `Open`.
- **Source:** `frontend-rules.md`, section 16; `architecture/frontend-architecture.md`, sections 9–10; `design-system/design-system.md`, sections 11 and 15.
- **Do not confuse with:** A successful build alone. A build does not prove that the UI works as specified.

---

## Engineering practice

### Development workflow

- **Preferred term:** Development workflow
- **Other names:** Mandatory development workflow.
- **Definition:** The required sequence for frontend implementation work: Understand, Plan, Inspect, Implement, Verify, Review, and Report.
- **Definition status:** `Explicit`
- **Source:** `frontend-rules.md`, section 18.
- **Do not confuse with:** A product Agent's operation lifecycle.

### Architecture decision record

- **Preferred term:** Architecture decision record
- **Other names:** Decision record; architecture decision documentation.
- **Definition:** A documented record for a significant architecture decision or change. The frontend rules specify the information that must be recorded, including the problem, proposed solution, reasoning, alternatives, affected applications, dependencies, compatibility implications, migration requirements, and testing requirements.
- **Definition status:** `Explicit`
- **Source:** `frontend-rules.md`, section 25; `architecture/frontend-architecture.md`, section 11.
- **Do not confuse with:** A glossary entry. A glossary explains terminology; it does not replace a decision record.

### Proposed solution

- **Preferred term:** Proposed solution
- **Other names:** Proposal (in the decision-record context).
- **Definition:** A suggested solution recorded for consideration. It is not an established architecture decision unless the owning architecture document changes its status accordingly.
- **Definition status:** `Explicit`
- **Source:** `frontend-rules.md`, section 25; `architecture/frontend-architecture.md`, section 11 and status labels.
- **Do not confuse with:** The product Agent status `Proposal`. The same everyday word appears in two contexts.

---

## Named but not defined

The following terms appear in the source documents, but the current frontend knowledge files do not provide a sufficient definition for them. They are listed to preserve traceability, not to introduce definitions. Their meanings must be established in the appropriate owning documentation before this glossary expands them.

| Term | Current treatment |
|---|---|
| CRM | Named as a product/Admin area; no domain definition or module specification is provided in the frontend source documents. |
| ERP | Named as a product/Admin area; no domain definition or module specification is provided in the frontend source documents. |
| Finance | Named as a product/Admin area; detailed functional scope is not defined here. |
| Warehouse | Named as a product/Admin area; detailed functional scope is not defined here. |
| Orders | Named as a product/Admin area; detailed functional scope is not defined here. |
| Marketing | Named as a product/Admin area; detailed functional scope is not defined here. |
| IFRS | Named in product context outside the current frontend definitions; not defined by these frontend documents. |
| FIFO | Named in product context outside the current frontend definitions; not defined by these frontend documents. |
| Weighted average | Named in product context outside the current frontend definitions; not defined by these frontend documents. |
| SEO | Mentioned as a web concern; no formal definition is provided in the current glossary source documents. |
| XSS | Used in security context; the frontend documents do not provide a glossary definition. |
| ARIA | Used in accessibility context; the frontend documents do not provide a glossary definition. |
| WCAG | The target version/level is stated as WCAG 2.2 AA, but the standard itself is not defined in these documents. |
| Tenant | Used in multi-tenant/storefront context; the isolation requirement is stated, but the full tenancy model is not defined. |
| Tenant isolation | The requirement that tenant data and theme do not leak across stores is stated; implementation and enforcement mechanisms are not defined here. |
| Host resolution | The Storefront host-to-tenant resolution requirement is named, but its mechanism is Open. |
| Authentication mechanism | The need for authentication is stated; the implementation is not selected in the architecture document. |
| Internationalization library | The need for Persian/English support is stated; the library is Open. |
| Streaming | Mentioned as an assistant/agent interaction concern; protocol and implementation are not defined. |
| Multi-agent orchestration | Identified as unresolved; no orchestration model is defined. |
| Voice pipeline | Identified as unresolved; no frontend protocol or implementation is defined. |
| Cancellation semantics | The UI must show the real cancellation outcome, but the set of cancellable operations and backend semantics are not defined. |
| Retry safety | The interface may offer retry only when safe; the operations considered safe to retry are not defined here. |
| Publishing pipeline | The separation of editing and rendering is established; the complete pipeline is not defined. |
| Block catalog | Blocks are part of the page model; the complete catalog and sharing rules remain open. |
| Token identifier prefix | Explicitly unresolved in the design-system document. |
| Theme allowlist | Explicitly unresolved in the design-system document. |
| Organization visual configuration storage | Explicitly unresolved in the design-system document. |

---

## Documentation reference strategy

- This file defines terminology and points to the owning document. It does not copy decision records, token values, or mandatory engineering rules.
- `architecture/frontend-architecture.md` remains the authoritative source for `Established`, `Proposed`, and `Open` architecture status.
- `frontend-rules.md` remains the mandatory engineering reference. A glossary definition does not weaken, extend, or replace a rule.
- `design-system/design-system.md` remains the presentation and interaction reference. A term defined from that document does not automatically become an architecture decision.
- A specialized document is a definition source only for a decision it records as already approved. `typography.md` is cited for type and is not restated here. `design-system/components.md` and `development/component-guidelines.md` are cited for the catalog and the implementation guide and are not restated here. A boundary file that repeats an owning document and lists Open items is not a new decision.
- When two source documents use a term differently, this glossary records the distinction rather than silently merging the meanings.
- When an entry is incomplete or ambiguous, the glossary says so. It does not fill the gap using assumptions or general industry definitions.
- When an owning document changes, the corresponding glossary entry must be reviewed. The glossary must not become more authoritative than its source.

## Change control

Changes to this glossary should be made only after checking the current versions of the owning source documents. If a proposed glossary edit would settle an `Open` architecture item, approve a `Proposed` item, or change a mandatory rule, it must first be handled in the owning document through the appropriate decision or review process.

