# Frontend terminology audit

This file records a terminology audit of `frontend-knowledge/`. It is not `TERMINOLOGY.md`. The glossary file itself was not created and waits for approval.

The audit was read from commit `bfec0ffbcd30e6a5365f355bfd14ad958c6262c2` on `docs/frontend-rules-consistency-fixes`. Architecture and design-system on that commit are byte-identical to `master` (`f273d5a2fd78745ee79b07eb413bea98c8e048fd`). Only `frontend-rules.md` differs. `master` is an ancestor of `bfec0ff`. The rules diff is wording and status labels, not a new architecture or design-system decision: §2.2 is renamed from “Recommended Libraries” to “Technology and Library Status”; the four application runtimes change from “Recommended technology” to “Established technology”; both Admin module lists are labeled illustrative, with the module map left Open; §3.2 package names are labeled illustrative; §25.2 changes “should document” to “must document.”

**Documented authority.** `frontend-architecture.md` defines Established, Proposed, and Open. `frontend-rules.md` is the mandatory engineering-rules document (25 numbered sections plus the Final Enforcement Rule). `design-system.md` says it does not change the frontend architecture and does not choose brand values. A future `TERMINOLOGY.md` would define words. It would not promote Proposed or Open material to Established, and it would not become a fourth authority.

**Recommendation, not a documented fact.** Preferred names below follow the architecture application table when the rules use several labels for one application. That is a glossary suggestion. It does not rename anything in the source documents.

AaaS is not expanded anywhere in this audit.

## Source inventory

Commit `bfec0ff` contains 15 paths under `frontend-knowledge/`. Nothing else is there. Empty means 0 bytes (Git empty blob `e69de29bb2d1d6434b8b29ae775ad8c2e48c5391`).

| Path | Bytes | Lines | State |
|---|---:|---:|---|
| `frontend-knowledge/frontend-rules.md` | 32409 on `bfec0ff`; 31587 on `master` | 1246 on `bfec0ff` | Non-empty. This is the only file that differs between the two commits. |
| `frontend-knowledge/architecture/frontend-architecture.md` | 25844 | 455 | Non-empty. Same blob on both commits (`17116d5`). |
| `frontend-knowledge/design-system/design-system.md` | 34395 | 410 | Non-empty. Same blob on both commits (`ee22829`). |
| `frontend-knowledge/applications/admin.md` | 0 | 0 | Empty |
| `frontend-knowledge/applications/builder.md` | 0 | 0 | Empty |
| `frontend-knowledge/applications/storefront.md` | 0 | 0 | Empty |
| `frontend-knowledge/applications/website.md` | 0 | 0 | Empty |
| `frontend-knowledge/architecture/project-structure.md` | 0 | 0 | Empty |
| `frontend-knowledge/design-system/colors.md` | 0 | 0 | Empty. `design-system.md` points here for color values. |
| `frontend-knowledge/design-system/components.md` | 0 | 0 | Empty. `design-system.md` points here for the component catalog. |
| `frontend-knowledge/design-system/typography.md` | 0 on `bfec0ff` | 0 on `bfec0ff` | Empty on that commit. The current file holds the approved typography system. It is not empty, and typography is not undefined. |
| `frontend-knowledge/development/api-integration.md` | 0 | 0 | Empty |
| `frontend-knowledge/development/component-guidelines.md` | 0 | 0 | Empty |
| `frontend-knowledge/development/state-management.md` | 0 | 0 | Empty |
| `frontend-knowledge/development/testing-standards.md` | 0 | 0 | Empty |

Twelve of the fifteen files are empty on that commit, so they contributed no terms then. `typography.md` now holds the approved typography system. It is not empty, and typography is not undefined.

## A. Recommended glossary categories

**Recommendation, not a documented fact.** A practical category set for a future `frontend-knowledge/TERMINOLOGY.md`:

1. How to read an entry, including document authority and the words Established, Proposed, Open, and Mandatory.
2. Product and platform terms a frontend developer needs.
3. The four applications and their boundaries.
4. Builder, Page Schema, blocks, registries, draft, preview, and publishing.
5. Design system, tokens, UI composition, and theming.
6. Repository, shared packages, and frontend structure.
7. State, forms, API integration, permissions, and security.
8. Product assistant and agent UI.
9. Language, direction, accessibility, and viewport categories.
10. Testing and engineering practice, including AI coding agents, kept apart from the product assistant.
11. Terms that are named but undefined, or whose mechanism is Open.

Categories 8 and 10 should stay separate. The documents use “agent” for both the product assistant and a coding agent.

## B. Candidate terms

**How to read the tables.** “Preferred term” is the name suggested for a glossary heading. “Basis” says whether that name is the only name the documents use, or a recommendation where they disagree. The definition cell is only what the documents say. “Status” is the state of the definition: explicit, inferred, ambiguous, or missing. It is not the architecture status. Architecture status is quoted inside the row when the documents assign one.

Illustrative material is not an approved standard. That includes the CSS sample in `frontend-rules.md` §4.1, the Admin module bullets in §3.1 and §14.1, the package names in §3.2, the directory sketch in `frontend-architecture.md` §5, and the primitive, composite, and pattern examples in `design-system.md` §9.

### B1. Authority and status words

| Preferred term | Basis | Alternatives in the docs | Proposed definition (documented fact) | Sources | Definition status | Conflicts or open status |
|---|---|---|---|---|---|---|
| Established | documented name | “confirmed”; rules also say “mandatory” for Established technology rows | An architectural decision explicitly confirmed for this frontend. A statement is not Established only because it was written earlier or because a rule mentions it. | `frontend-architecture.md` Status labels; applied throughout §2–§11 | explicit | Rules §2.2 say Established rows are mandatory. That is a rules statement about those rows, not a second definition of the label. |
| Proposed | documented name | “Proposed, not confirmed”; “Proposed, not installed”; “recommendation that still needs confirmation” | A recommendation that still needs confirmation. It is not built. In the rules, Proposed rows are not mandatory, are not installed, and must not be installed before approval. | `frontend-architecture.md` Status labels, §5, §6, §9; `frontend-rules.md` §2.2, §16.3 | explicit | Inside an architecture decision record, the field “Proposed solution” is one of the nine required fields. It is not the status Proposed. `frontend-architecture.md` intro and §11 state that the nine fields are used even when a record is Established. |
| Open | documented name | “unresolved”; “not decided”; “not chosen”; design system often says “unresolved” rather than “Open” | No solution is chosen. If a decision-record field has not been decided, it is marked Open and no answer is filled in. | `frontend-architecture.md` Status labels, §4, §10, §11; `design-system.md` §16 | explicit | The design system’s “unresolved” list is not labeled with the architecture status words. Do not treat a design-system requirement whose mechanism is unresolved as an Established architecture decision. |
| Product requirement | documented name | none | Stated as a product requirement and not treated as an implementation decision. | `frontend-architecture.md` Status labels, §1, §8 | explicit | None inside the definition. Individual product requirements often have Open mechanisms. |
| Mandatory | documented name | “mandatory guidelines”; “primary frontend engineering reference” | The rules document’s own status word. All 25 sections are mandatory guidelines for Joorweb frontend development. | `frontend-rules.md` header, Final Enforcement Rule | explicit | Mandatory is not the same label as Established. A mandatory rule can still point at an Open mechanism, as §9.2 and §13.5 do. |
| Greenfield | documented name | “designed from scratch”; “greenfield system” | This frontend is designed from scratch. The legacy shop-panel, any current Vite application, and any current backend, database, or deployment are not architectural constraints. There is no legacy migration requirement unless a later confirmed dependency creates one. None is confirmed. Visual language is not taken from a legacy application. | `frontend-architecture.md` §2, §11.1; `design-system.md` §1 | explicit | The documents name those non-constraints. They do not describe the legacy shop-panel or the current Vite application. |

### B2. Product and platform

| Preferred term | Basis | Alternatives in the docs | Proposed definition (documented fact) | Sources | Definition status | Conflicts or open status |
|---|---|---|---|---|---|---|
| Joorweb | documented name | “the platform”; “the product” | An AaaS platform. The rules say it is not only a store builder and not a conventional online business platform, and that it includes multiple integrated business capabilities. The design system adds the qualifier Enterprise-Grade. | `frontend-rules.md` §1; `frontend-architecture.md` §1; `design-system.md` §1, §2 | explicit | “Enterprise-Grade” appears only in the design system and is not defined. “Platform” and “product” are not given separate definitions. |
| AaaS | documented name | none | The documents call Joorweb an AaaS platform. `frontend-architecture.md` §1 says the acronym is not expanded. | `frontend-architecture.md` §1; `frontend-rules.md` §1; `design-system.md` §1 | explicit as a label; expansion missing | This audit does not expand it. The design system’s “Enterprise-Grade AaaS” is not a second acronym. |
| CRM | documented name | none | Named as inside Joorweb, and as a product area the Admin surface must be able to serve. The abbreviation is not expanded. | `frontend-architecture.md` §1, §3; `design-system.md` §2, §13, §14 | missing beyond that placement | Not defined as an Admin module. Not equated with the illustrative “Customers” bullet. |
| ERP | documented name | none | Named as inside Joorweb, and as a product area Admin must be able to serve. The abbreviation is not expanded. | same as CRM | missing beyond that placement | Not defined as a module. |
| Finance | documented name | “Accounting” appears only as an illustrative Admin bullet | Product area: accounting aligned with IFRS, and live profit-and-loss reports. | `frontend-architecture.md` §1, §3 | explicit as a product-area label; IFRS and the reports are not defined | Not equated with the illustrative Admin module “Accounting.” |
| Warehouse | documented name | “Inventory” appears only as an illustrative Admin bullet | Product area: professional inventory, live stock, and valuation by FIFO and weighted average. | `frontend-architecture.md` §1, §3 | explicit as a label; FIFO and weighted average are not defined | Not equated with the illustrative “Inventory” bullet. |
| Storefront (product area) | documented name | “shop site” | In the product-context list, Storefront is “a shop site, plus marketplace connections such as Digikala, Torob, and Basalam.” | `frontend-architecture.md` §1 | explicit as that bullet | This bullet is wider than the Storefront application, which is defined as rendering published customer storefront pages. The documents do not say the marketplace connections are part of that application. |
| Social | documented name | none | Product area: networks such as Instagram, Telegram, and Bale. | `frontend-architecture.md` §1 | explicit only as that list | Those names are examples. They are not defined, and Social is not an application. |
| Orders | documented name | also an illustrative Admin bullet | Product area: tracking from placement through delivery. | `frontend-architecture.md` §1, §3; `frontend-rules.md` §3.1, §14.1 | explicit as the product sentence | The same word is an illustrative Admin module. The documents do not equate the two. |
| Goods flow | documented name | none | A product is defined once, enters the system and the warehouse, is published to other networks and markets with copy suited to each, stock is updated on each sale, and a financial document is recorded. | `frontend-architecture.md` §1 | explicit as that product sentence | Not an application and not a confirmed module. “Copy” here is in that sentence only. “Financial document” is not defined. |
| Representative | documented name | design system also uses “white-label” for this idea | Representatives may sell the whole system under their own brand. How that brand is applied is Open. No mechanism is chosen. | `frontend-architecture.md` §1, §10; `design-system.md` §12, §16 | explicit as the product fact; mechanism missing | “White-label” is design-system wording. Architecture describes the same product fact and does not use that word. |
| Scale | documented name | “small businesses and enterprise-level organizations”; “small shop to a large store and a production center”; “small shops and large operational teams”; “production operation” | The documents require the product to serve both small and large organizations. They do not define a scale taxonomy. | `frontend-rules.md` §1; `frontend-architecture.md` §1; `design-system.md` §1, §2 | ambiguous | The phrases are not formally aliased. |

### B3. Applications

| Preferred term | Basis | Alternatives in the docs | Proposed definition (documented fact) | Sources | Definition status | Conflicts or open status |
|---|---|---|---|---|---|---|
| Company Website | recommendation | Rules heading “Website”; rules table “Public Website”; also “corporate website,” “corporate site,” “public corporate site” | One of four applications. It renders the published Joorweb corporate website, including, in the rules, marketing pages, documentation, and other public content. It does not edit those pages and does not own the corporate page editor. Established runtime: Next.js. | `frontend-architecture.md` §3, §11.1, §11.3; `frontend-rules.md` §2.2, §3.1, §13 | explicit for the job and runtime | Three rule labels versus the architecture table name. “Documentation” in §3.1 means public content of this site. It is not defined as `frontend-knowledge`. Recommendation: glossary headword “Company Website,” and record the other labels. |
| Admin | recommendation | “Admin Panel”; “unified business management dashboard”; “management surface”; “the place where the business is operated” | One of four applications. Management surface for the platform. It is not the page editor. Established runtime: React + Vite. The documents do not confirm a module map, route map, navigation structure, or information architecture. | `frontend-architecture.md` §3, §10, §11.1; `frontend-rules.md` §2.2, §3.1, §14 | explicit for the job and runtime; module map missing | “Admin Panel” is the rules §14 title and the §2.2 table label. Architecture uses “Admin.” Illustrative module bullets are not a finalized map. |
| Builder | recommendation | “Visual Builder”; “Website Builder”; “Joorweb Website Builder”; “shared website-building application”; “storefront builder” as a product capability | One of four applications. The shared editor for Joorweb’s corporate website and for customer storefronts. It edits and manages both. It is not a storefront-only tool. It does not render either public site, does not serve either public site, and does not replace Company Website or Storefront. Established runtime: React + Vite + Puck. | `frontend-architecture.md` §1, §3, §4, §11.1–§11.3; `frontend-rules.md` §2.2, §3.1, §13 | explicit | Rules §1 “store builder” means the platform is not only that kind of product. Architecture §1 separates “the storefront builder” as one product capability from “the Builder application.” Those are not documented as synonyms for the application name. |
| Storefront | documented name for the application | “customer storefront”; “customer store”; “shop site” in the product bullet | One of four applications. It renders published customer storefront pages. It does not edit them and does not own the customer page editor. It must support multiple stores, custom domains, SEO, and independent storefront configurations. Established runtime: Next.js. | `frontend-architecture.md` §3, §11.1, §11.3; `frontend-rules.md` §2.2, §3.1 | explicit for the rendering job | Custom domains and host resolution are required as support in the rules, and the mechanism is Open in architecture §4. SEO is not defined. The §1 product bullet is a different, wider use of the same word. See B2. |
| Application boundary | documented name | “applications must not depend on one another”; one architecture sentence says “must not depend directly” | Four applications stay separate. None depends on another. Shared packages must not depend on applications. Circular dependencies are not allowed. Shared packages hold reusable capabilities, not an application’s business workflow. Application-specific workflows stay in that application. | `frontend-architecture.md` §3, §5, §11.8; `frontend-rules.md` §3.3 | explicit | Architecture §3 once inserts “directly.” Decision §11.8 and rules §3.3 do not. The documents do not define a direct-versus-indirect exception. |

### B4. Builder, Page Schema, and publishing

| Preferred term | Basis | Alternatives in the docs | Proposed definition (documented fact) | Sources | Definition status | Conflicts or open status |
|---|---|---|---|---|---|---|
| Puck | documented name | “visual editing layer”; “visual editor” is a separate responsibility in the rules list | The visual editing layer in Builder. It does not own business logic. It is not the canonical page data model. Its internal representation, internal data, and internal document are not the canonical Page Schema and are not the source of visual truth for published pages. The rest of the builder architecture must remain independent of Puck. | `frontend-architecture.md` §4, §11.1, §11.4; `frontend-rules.md` §2.2, §3.1, §13.1; `design-system.md` §3, §13 | explicit for that boundary | Schema design is Open. No Page Schema library or package is confirmed. “Visual editor” in rules §13.1 is listed as its own responsibility. The documents do not say that list item is a synonym for Puck, only that Puck is the visual editing layer. |
| Page Schema | documented name | “Page schema”; “page schema”; “page configurations”; “saved page model”; “canonical page data model” | Structured and versioned, and independent of Puck’s internal editor representation. The rules require it to be stored as structured, versioned JSON, and say executable JavaScript, JSX, or arbitrary HTML must not be the primary page definition. Business data is not defined by Page Schema. | `frontend-rules.md` §13.1, §13.2, §13.4; `frontend-architecture.md` §4, §11.4 | explicit for those constraints | Architecture does not repeat the word JSON. It does not contradict it. Whether both targets use one Page Schema or compatible variants is Open. How versioning, backward compatibility, publishing, preview, and rollback are implemented is Open. A `page-schema` package is not approved. |
| Page schema contents | documented name | the §13.2 support list | The rules say the schema must support page structure, sections, components, component properties, layout settings, responsive settings, theme configuration, component ordering, visibility settings, and schema versioning. | `frontend-rules.md` §13.2 | explicit as a required-support list | Those ten items are not individually defined. Architecture does not adopt this list as a schema design. Schema design is Open. |
| Block | documented name | “shared reusable blocks”; “application-specific blocks”; “commerce blocks” appears only in reasoning | Shared reusable blocks are supported. Application-specific blocks may exist. Sameness of blocks across corporate pages and customer storefronts is not decided, and difference is not decided. | `frontend-architecture.md` §4, §11.6; `frontend-rules.md` §13.1, §13.3; `design-system.md` §3, §9, §13 | explicit for that allowance | The inventory and the registry shape are Open. Which blocks are shared is Open. “Commerce blocks” is an example inside §11.6 reasoning, not a defined block class. No block package is confirmed. |
| Component registry | documented name in the rules | “block registry”; “one registry”; “separate registries” | The rules say the renderer must use a controlled component registry, only approved components may be rendered, and arbitrary component code from stored page configurations must not be dynamically executed. The same section allows shared and application-specific blocks. | `frontend-rules.md` §13.1, §13.3; `frontend-architecture.md` §4, §11.6; `design-system.md` §1, §3 | ambiguous | The rules use “component registry” and “block registry.” Architecture and the design system talk about a block registry or “one registry.” The documents never say these are the same thing or two things. One shared registry versus separate registries is Open. |
| Section | documented name in the rules | “section management” in the builder UX list | Named as something Page Schema must support, and as something the editor should provide. | `frontend-rules.md` §13.2, §13.7 | missing | Not defined. Also used for document sections and for dashboard “cards or sections” in `design-system.md` §6. Relationship to Block and to schema “components” is not stated. |
| Page renderer | documented name for the responsibility | `page-renderer` as an example package name; “Next.js renderer”; “rendering engine” | Company Website and Storefront render published pages. The rules also list “Page renderer” as a responsibility separate from the visual editor. Creating a package named `page-renderer` is not assumed. | `frontend-architecture.md` §3, §5, §11.3; `frontend-rules.md` §3.2, §13.1, §13.5 | explicit for which applications render; package missing | Do not treat the responsibility as approval of the example package. How a published page is delivered to a renderer is Open. |
| Draft, preview, and published | documented name | “three states” | Established that the three states stay distinct. Only published pages are what Company Website and Storefront render as the public result. Preview must not be treated as published. How they are implemented is Open. | `frontend-architecture.md` §4, §11.5; `frontend-rules.md` §13.5; `design-system.md` §3, §13 | explicit for the distinction; mechanism missing | No storage, preview host, or publish pipeline is confirmed. Whether both targets share one publish pipeline is Open. |
| Preview system | documented name in the rules list | “preview” state; “viewport preview”; “preview host” | “Preview system” is one item in the rules §13.1 responsibility list. Separately, preview is one of the three states. Separately, Builder’s canvas may offer a viewport preview, which the design system calls an editing aid and not the published site. “Preview host” is an Open dependency. | `frontend-rules.md` §13.1, §13.5; `frontend-architecture.md` §11.5; `design-system.md` §7 | ambiguous | The documents do not equate these three uses. |
| Publishing | documented name | “publishing system”; “publish pipeline”; “deployment and publishing pipeline”; “publish status” | Named as a distinct responsibility and as something whose implementation is not defined. Whether corporate and customer-storefront publishing use the same pipeline is Open. | `frontend-rules.md` §13.1, §13.5; `frontend-architecture.md` §4, §11.5 | missing as a process | Rollback is named only as an Open implementation question. “Publish status” in rules §13.7 is not defined and is not explicitly equated with the published state. |
| Published page contract | documented name | not used in the rules or design system | Architecture §11.3 says renderers depend on the published page contract, not on Builder source, and that this contract is Open. | `frontend-architecture.md` §11.3 | missing | Not defined as Page Schema or as something else. |
| Theme configuration | documented name in the builder rules | “theme”; “tenant theme”; “shared themes” | Rules §13.1 list it as a builder responsibility, and §13.2 says the schema must support it. The design system defines theming separately, as a controlled layer on tokens, not a separate design system per customer. | `frontend-rules.md` §13.1, §13.2; `design-system.md` §12, §13 | ambiguous | The documents do not say schema theme configuration is the design-system theme. |
| Tenant | documented name | “stores” in the leak rule; “organization”; “multi-tenant” | Rules §13.6 require that tenant-specific data and cache never leak between stores, and that preview and published content be isolated. The section does not define tenant, corporate identity, domains, environments, permissions, or host resolution. Architecture leaves tenant domains and host resolution Open. | `frontend-rules.md` §3.1, §13.6; `frontend-architecture.md` §4; `design-system.md` §1, §13, §16 | missing | The documents never define whether tenant, store, organization, and customer are the same. |
| Multi-tenant | documented name | “multiple stores” | Used as the heading for the leak and isolation rule, and by the design system as a constraint the system must serve. | `frontend-rules.md` §13.6; `design-system.md` §1 | missing beyond that constraint | No tenant model is chosen. |

### B5. Design system and UI

| Preferred term | Basis | Alternatives in the docs | Proposed definition (documented fact) | Sources | Definition status | Conflicts or open status |
|---|---|---|---|---|---|---|
| Design system | documented name | “centralized design system”; “shared design system”; “single source of truth for visual consistency” | The shared interface foundation for the four applications. The rules say all applications must use it and that it is the single source of truth for visual consistency. It owns shared presentation and interaction. It does not own business rules, authorization, authentication, API contracts, Page Schema, block registries, publishing pipelines, tenant host resolution, agent transport, or Admin’s module map. | `frontend-rules.md` §4, §21; `design-system.md` §1, §3; `frontend-architecture.md` §6, §10 | explicit for that role | Brand colors, spacing, radius, shadow, and breakpoints stay Open where architecture still says so. Typography is not entirely Open: font families and the approved type scale are Established in `typography.md`. That file is not empty. `components.md` remains empty. “Single source of truth” does not mean every specialized file contains values. A package named `design-system` is an unapproved candidate. |
| Design token | documented name | “tokens”; rules also list specific token groups | Tokens are the only approved way, in the design system, to express reusable visual decisions. Names are semantic, with the shape `{category}.{role}.{modifier}` when a modifier is needed. Font families and the approved type scale are Established in `typography.md`. Prefix, file format, the mapping onto Tailwind, and the type decisions that file marks Open remain unresolved. | `design-system.md` §4, §16; `typography.md`; `frontend-rules.md` §4.1, §21.1; `frontend-architecture.md` §2, §6 | explicit for the role of tokens; approved type values are in `typography.md` | Rules §4.1 and design system §4 do not use the same category list. See section C. The CSS variable sample in rules §4.1 is illustrative and is not adopted. |
| Styling system | documented name | “styling foundation”; “component foundation” | Established: Tailwind and shadcn are the styling system. CSS Modules are not the chosen system and are not a styling architecture for this frontend. | `frontend-architecture.md` §6, §11.9; `frontend-rules.md` §2.1, §2.2; `design-system.md` §4 | explicit | Rules §2.1 also list “Modern CSS and CSS variables” among core technologies. Rules §2.2 say Tailwind CSS is the styling foundation and shadcn/ui is the component foundation. How Tailwind relates to global tokens is Open. |
| Tailwind CSS | documented name | “Tailwind” | Established styling foundation. Versions are Open. | `frontend-rules.md` §2.2; `frontend-architecture.md` §6, §11.9 | explicit for the choice | Mapping from tokens onto Tailwind is unresolved. |
| shadcn/ui | recommendation | “shadcn”; “component foundation” | Established component foundation in the rules table. Architecture says styling is Tailwind and shadcn. Placement of shadcn components inside the shared UI package is Proposed, not confirmed. | `frontend-rules.md` §2.2; `frontend-architecture.md` §6, §11.9 | explicit for the library choice; packaging not Established | The documents use both “shadcn/ui” and “shadcn” without saying they differ. Recommendation: use the rules-table name and record “shadcn” as the other form. |
| CSS Modules | documented name | “not a second system” | Not the chosen styling system. | `frontend-rules.md` §2.2; `frontend-architecture.md` §6, §11.9; `design-system.md` §4 | explicit | None. |
| Panel-login palette | documented name | “this palette” | Established only for a panel login: page `#F5F6FA`, card `#FFFFFF`, text `#1E293B`, gradient `#6366F1` → `#4F46E5` → `#7C3AED`. It does not define application structure, data flow, publishing, or the platform brand. It is not the token set and not a candidate for the global token set. | `frontend-architecture.md` §2, §6; `design-system.md` intro, §3, §16 | explicit | Do not treat these hex values as brand tokens. |
| Primitive | documented name | rules §21.1 also say “shared layout primitives” | Design-system component layer: one behavior, no business meaning. Examples of the class, not an approved inventory: button, text input, checkbox, spinner. | `design-system.md` §9 | explicit inside the design system | Architecture does not record this three-layer taxonomy as Established or Open. “Shared layout primitives” in the rules is not defined as this layer. |
| Composite | documented name | none | Primitives assembled for a repeated interface job that is still not an application workflow. Examples of the class, not an approved inventory: labeled field, dialog, menu, page header. | `design-system.md` §9 | explicit inside the design system | Same status limit as Primitive. |
| Pattern | documented name | “layouts are patterns”; “navigation patterns”; “data patterns” | A composite arrangement for a recurring task shape. It describes structure and states. It does not call an API and does not encode one module’s process. Examples of the class, not an approved inventory: a filterable data region, a confirmation step, an agent execution summary. | `design-system.md` §6, §9 | explicit for the layer; other uses ambiguous | §6 says “Layouts are patterns” without saying every layout is this third layer. |
| Shell | documented name | none | The stable frame around the task. Each application has one. They share tokenized spacing and type and do not share one information architecture. | `design-system.md` §6 | explicit in the design system | Not defined in the architecture or the rules. “Information architecture” is not defined. |
| Component state | documented name | two lists | Rules §4.3: Default, Hover, Focus, Active, Disabled, Loading, Error, Success, Empty. Design system §10 uses that set and adds Selected and Read-only, and it defines Active, Selected, Disabled, Loading, Success, and Empty. Success is confirmation from the platform, not an earlier indication. Shipping only the default state is incomplete. | `frontend-rules.md` §4.3; `design-system.md` §10 | explicit as two lists | The lists are not the same. Selected and Read-only are not in the rules list. Architecture does not give these lists an Established or Open label. |
| UI component | documented name | “component owns its style”; “page only composes components” | Established composition rule: each component owns its style and lives in its own folder. A page only composes components. A module holds data and behavior and has no appearance. | `frontend-architecture.md` §6, §11.9; `design-system.md` §9, §15; `frontend-rules.md` §8 | explicit for that rule | “Component” is also a Page Schema support item and a registry word. The documents do not define the relationship. |
| White-label | documented name in the design system | architecture says “representative” branding and does not use this word | Representatives may present the whole system under their own brand. The design system says an organization-level visual configuration must inherit the shared theme and override only allowed tokens. White-label does not fork the applications. The mechanism, the allowlist, and how the brand is applied are unresolved. | `design-system.md` §12, §16; `frontend-architecture.md` §1, §10 | explicit as a design-system requirement; mechanism missing | Not an Established architecture decision. Architecture leaves the mechanism Open and does not choose this term. |
| Light and dark | documented name | “theme mode” | The design system says the system must be able to represent light and dark appearances. Default mode, and whether both ship in every application initially, is unresolved. | `design-system.md` §11, §12, §16 | explicit as that requirement | Not stated in the architecture decision records. Not in the rules. |
| Elevation | documented name in the design system | rules say “Z-index layers” | Stacking roles, such as base, sticky, dropdown, overlay, and transient notice. Numeric z-index is not set. | `design-system.md` §4; `frontend-rules.md` §4.1 | explicit as design-system categories | The documents do not equate Elevation with “Z-index layers.” |
| Motion | documented name in the design system | rules say “Transitions” | Duration and easing roles for state change. Decorative motion is not a token consumer. Reduced-motion preferences override visible motion. | `design-system.md` §4, §11; `frontend-rules.md` §4.1, §12 | explicit in the design system | Not formally equated with “Transitions.” |
| Sizing | documented name in the design system | rules say “Component dimensions”; “touch targets must be sufficiently large” | Control heights, icon slots, and touch targets. Numeric minimums are not chosen. | `design-system.md` §4; `frontend-rules.md` §4.1, §6 | explicit as a category; numbers missing | Not formally equated with “Component dimensions.” |

### B6. Repository and structure

| Preferred term | Basis | Alternatives in the docs | Proposed definition (documented fact) | Sources | Definition status | Conflicts or open status |
|---|---|---|---|---|---|---|
| Monorepo | documented name | rules §3 also say “the recommended structure is a monorepo” | Established. One frontend monorepo, using pnpm workspaces and Turborepo. The directory tree is Open. | `frontend-architecture.md` §5, §11.7; `frontend-rules.md` §2.2, §3 | explicit | Rules §3 still say “recommended” in the same document that marks Monorepo Established in §2.2. Versions of pnpm and Turborepo are Open. |
| Shared package | documented name | “shared capabilities”; “workspace members” | Holds reusable capabilities, not an application’s business workflow, and does not depend on an application. Which additional packages exist is Open. | `frontend-architecture.md` §3, §5, §11.7, §11.8; `frontend-rules.md` §3.2, §3.3 | explicit for the boundary | The names in rules §3.2 are illustrative candidates, not an approved list. |
| Shared UI package | documented name | example name `ui`; sketch path `packages/ui`; “shared UI capability” | Established that a shared UI package exists so applications do not each invent the same controls. Its package name, folder path, and split from other packages are Open. The `packages/ui` sketch is Proposed, not the decided tree. | `frontend-architecture.md` §5, §6, §11.7 | explicit for existence; name missing | Rules `ui` is an example, not approval of that name. |
| Package-name candidates | documented name | `ui`, `design-system`, `page-schema`, `page-renderer`, `api-client`, `auth`, `permissions`, `i18n`, `types` | Rules §3.2 lists these as examples or potential candidates. Architecture §5 says they are not approved. Whether any are created, merged, or omitted is not decided. `api-client` is called an example name only. | `frontend-rules.md` §3.2, §9.2; `frontend-architecture.md` §5 | explicit that they are not approved | None of these names is a confirmed package. |
| Directory sketch | documented name | `apps/website`, `apps/admin`, `apps/builder`, `apps/storefront`, `packages/ui`, and a shared blocks package | Proposed, not confirmed. A sketch only. It is not the decided tree. `project-structure.md` is empty. | `frontend-architecture.md` §5, §11.7 | explicit as a non-decision | The sketch folder `apps/website` is not an approval of a name different from Company Website. |
| Module (composition) | documented name | “a module has no appearance” | Established: a module holds data and behavior and has no appearance. A page only composes components. | `frontend-architecture.md` §6, §11.9; `design-system.md` §9, §15 | explicit | This is not the Admin module map. Rules §3.3 “keep module boundaries clear” does not say which meaning it uses. |
| Module (Admin / product) | documented name | the illustrative bullets Dashboard, Products, Inventory, Sales, Orders, Customers, Accounting, Reports, Marketing, Integrations, Settings, AI Assistant | Expected product capabilities or illustrative examples. Not a finalized module map, navigation structure, or route architecture. The final structure remains Open. | `frontend-rules.md` §3.1, §14.1; `frontend-architecture.md` §3, §10; `design-system.md` §13, §16 | explicit that the list is not final | Do not define these bullets as approved modules. Several words also name product areas. The documents do not map one list onto the other. |
| Node.js 16 | documented name | “the ban” | Established as a ban. Node.js 16 must not be used. The required version is Open. No other version is required by the architecture document. | `frontend-architecture.md` §5, §10, §11.11 | explicit | None. |
| Micro Frontends | documented name | none | The rules say not to introduce them without an approved architectural decision. | `frontend-rules.md` §3.3 | missing | Not defined. Not listed as Proposed or Open in the architecture document. |
| UI language | documented name | none in this sense | Architecture §6 says the UI language is TypeScript and the UI library is React. | `frontend-architecture.md` §6 | explicit in that sentence | Easy to confuse with Persian and English, which the documents call first-class languages, not the “UI language.” |

### B7. State, API, security

| Preferred term | Basis | Alternatives in the docs | Proposed definition (documented fact) | Sources | Definition status | Conflicts or open status |
|---|---|---|---|---|---|---|
| Server state | documented name | “API data”; caching, refetching, mutations, query invalidation are listed uses | Established: TanStack Query. The rules list API data, caching, background refetching, mutations, loading states, error states, and query invalidation. | `frontend-architecture.md` §7, §11.10; `frontend-rules.md` §2.2, §9.1 | explicit for the library assignment | Versions are Open. Whether fetching lives in a shared package is Open. |
| Client state | documented name | examples: UI preferences, temporary interface state, shared client-side selections, application-level interaction state | Established: Zustand, for appropriate client-side state. The rules give examples, not a closed list. | `frontend-architecture.md` §7, §11.10; `frontend-rules.md` §9.1 | explicit for the library; scope of “appropriate” inferred | The examples are not defined as the complete set. |
| Form state | documented name | “React Hook Form with Zod” | Established in architecture: forms use React Hook Form with Zod. The rules say to use them “where appropriate.” | `frontend-architecture.md` §7, §11.10; `frontend-rules.md` §2.2, §9.1 | explicit for the libraries | “Where appropriate” is not defined. Architecture does not use that qualifier. |
| API client | documented name | example package `api-client` | The API client architecture remains Open. The rules do not mandate a specific client package, authentication-header scheme, response normalization, interceptors, or an endpoint map. Raw `fetch` or HTTP client calls must not be scattered through unrelated UI components. | `frontend-rules.md` §9.2; `frontend-architecture.md` §4, §7 | explicit that no client is chosen | “Uncontrolled API calls” is the rules phrase. It is not defined as a React uncontrolled component. |
| API contract | documented name | “approved API contracts”; “error shape”; “base URL strategy” | Architecture leaves API contracts, base URL strategy, and error shape Open. No client, header scheme, or endpoint map is confirmed. The rules still say to keep API types synchronized with approved contracts and to make mocks follow them. | `frontend-architecture.md` §4, §7, §10; `frontend-rules.md` §9.2, §9.3, §24.4 | missing; none is approved in these documents | The rules presuppose an approved contract. The architecture says no contract is confirmed. |
| Authentication | documented name | “approved authentication architecture”; example package `auth` | Implementation is Open. The rules say to follow the approved authentication architecture, not to invent a separate mechanism, not to store sensitive credentials in insecure browser storage, and to handle session expiration and unauthorized requests. | `frontend-rules.md` §10.2; `frontend-architecture.md` §7, §10 | missing; no architecture is chosen | Same tension as API contract. “Session” and “insecure browser storage” are not defined. The `auth` package name is not approved. |
| Frontend permissions | documented name | “permissions are for user experience only” | Once an authorization source exists, frontend permissions can only affect what a person sees. They are not the security boundary. Hiding a button or a control does not secure an operation. Backend authorization remains responsible for whether an operation is allowed. | `frontend-rules.md` §10.3, §14.4; `frontend-architecture.md` §7; `design-system.md` §1, §13, §14 | explicit for that boundary | How authentication and authorization are implemented is Open. Whether an unauthorized action is hidden, disabled, or shown with an explanation is unresolved in `design-system.md` §16. “Fine-grained permissions” is not defined. |
| Error categories | documented name | the §9.4 list | Every API-dependent interface must handle loading, success, empty response, validation error, authentication error, permission error, network error, and server error. The design system says a permission failure is distinct from a validation error and from a server error. | `frontend-rules.md` §9.4; `design-system.md` §14 | explicit as UI categories | The API error shape is Open, so these words are not a response schema. |
| Mock data | documented name | “fabricated business metrics”; “placeholder numbers”; “placeholder values” | Permitted for UI development, component previews, Storybook or visual testing, automated tests, and isolated development environments. It must be identifiable and isolated from production. It must not be presented as real business data, and API failures must not be hidden by fake success. | `frontend-rules.md` §24; `design-system.md` §2, §6 | explicit as policy | Storybook is named as one permitted context. It is not selected as a tool. “Approved API contracts” for mocks are Open. See API contract. |
| Secrets | documented name | the §10.1 list | Never expose API secret keys, database credentials, private tokens, server credentials, or internal authentication secrets. Anything included in frontend code must be considered publicly accessible. | `frontend-rules.md` §10.1, §10.5 | explicit as a prohibition | What counts as each secret type is not further defined. |
| XSS | documented name | “unsafe HTML rendering”; “dangerous HTML injection” | The rules say to prevent XSS vulnerabilities, to avoid unsafe HTML rendering, and not to use dangerous HTML injection without an explicitly approved and sanitized use case. The acronym is not expanded. | `frontend-rules.md` §10.4 | explicit as a prohibition; expansion missing | This audit does not expand it. |

### B8. Product assistant and agent UI

| Preferred term | Basis | Alternatives in the docs | Proposed definition (documented fact) | Sources | Definition status | Conflicts or open status |
|---|---|---|---|---|---|---|
| Assistant | recommendation | “AI Assistant”; “Joorweb AI Assistant”; “operational assistant”; “operational colleague”; “the agent” | A product requirement. The user can ask by voice or chat, or by text and voice, and the system carries out the panel operation. The rules say it is an operational assistant, not merely a chatbot. It is not a confirmed Admin navigation entry. That module bullet is illustrative and the module map is Open. | `frontend-architecture.md` §1, §8, §10; `frontend-rules.md` §3.1, §14.1, §15; `design-system.md` §2, §13, §14 | explicit as a product requirement | Communication architecture is Open: no transport, session model, or operation protocol is chosen. “Operational colleague” is design-system wording only. Recommendation: headword “Assistant,” with the other phrases recorded. Do not use this row for coding agents. |
| Agent (product UI) | documented name in the design system | “the agent”; “more than one agent”; “agent workflows” | The design system presents the agent as an operational colleague and a first-class way to operate the platform, not a chat bubble. A person may type or speak. If more than one agent is active, each is identifiable. How many exist, and how they are orchestrated, is not decided. | `design-system.md` §2, §14, §16 | explicit inside the design system | Architecture and the rules mostly speak of one assistant. The count is unresolved. “Agent” in rules §17 is a coding agent. |
| Agent status | documented name | Proposal, Pending, Authorized, Executing, Completed; failure and cancellation as terminal outcomes | Design system §14 says these statuses are distinct and must not be collapsed. Proposal means nothing has run. Pending means waiting, including for information or a person. Authorized means a person approved the operation, not that it completed. Executing means running, not success. Completed is reserved for platform-confirmed success. Failure and cancellation are not completed. | `design-system.md` §14 | explicit as design-system vocabulary | Not recorded as Established in the architecture. Rules §15.2 uses a different list. See section C. “Authorized” is not the same wording as backend authorization, though both appear. |
| Operation lifecycle | documented name | “narrative checkpoints” | Rules §15.2 require the interface to represent: request received, request understood, missing information requested if necessary, user confirmation requested if required, operation executing, operation completed or failed, result presented. The design system says those checkpoints map onto its statuses and do not add a path that skips approval or shows success early. It does not write the term-by-term map. | `frontend-rules.md` §15.2; `design-system.md` §14 | explicit as the rules list; mapping ambiguous | Cancellation is in the design system and not in the rules list. “Result presented” has no status name in §14. |
| Confirmation | documented name | “human approval”; “user confirmation” | Sensitive or destructive operations require confirmation. The assistant must not silently perform high-impact actions. The design system adds an Authorized status and says dismissing the dialog is not approval. Which operations qualify is not enumerated. | `frontend-rules.md` §5.4, §15.3; `design-system.md` §14 | explicit as a requirement; classification missing | “High-impact,” “sensitive,” “destructive,” and “irreversible” are all used. They are not defined as one set. |
| Cancellation | documented name in the design system | “cancelled”; “interruption” | A person can request cancellation while an operation is pending or executing, when the platform can still stop it. Closing a panel is not cancellation. If it cannot be stopped, the interface keeps showing executing until the real outcome. Which operations may be cancelled is unresolved. | `design-system.md` §14, §16 | explicit as a design-system requirement | Absent from the rules §15.2 list. “Panel” in this sentence is not defined. |
| History | documented name | “conversation history”; “operation history”; “audit” | The rules say the interface should support conversation history and operation context according to approved backend contracts, and must not invent AI memory or identity. The design system says authorized people can review past agent operations, history is presentation, and the interface does not invent history the platform did not return. Persistence of history is unresolved. | `frontend-rules.md` §15.1, §15.6; `design-system.md` §14, §16 | explicit for the “do not invent” rule; storage missing | “Should” in the rules versus the design system’s review wording. Approved backend contracts are Open. Audit storage is not defined and is called the platform’s responsibility. |
| Tool (agent) | documented name in the design system | none | A tool the agent uses should be visible enough to show the class of action. Tool names that leak secrets or internal credentials are not shown. The catalog is not decided. | `design-system.md` §14 | missing beyond that constraint | Not the same as an engineering tool or a test tool. |

### B9. Language, accessibility, quality, and engineering practice

| Preferred term | Basis | Alternatives in the docs | Proposed definition (documented fact) | Sources | Definition status | Conflicts or open status |
|---|---|---|---|---|---|---|
| Persian and English | documented name | “first-class languages” | Both are first-class. The interface must support changing language without breaking layout or functionality. The internationalization library is Open. No library is chosen. The `i18n` package name is not approved. | `frontend-rules.md` §1, §7; `frontend-architecture.md` §7, §10; `design-system.md` §8, §16 | explicit for the language requirement | Library and package are not chosen. |
| RTL and LTR | documented name | “direction”; “logical properties” | The rules assign Persian to RTL and English to LTR. Both documents treat them as layout direction, require logical properties, and say a component that works in only one direction is incomplete. The letters are not expanded in the documents. | `frontend-rules.md` §7, §16.4; `design-system.md` §8 | explicit for the pairing | Do not read RTL in §16.4 as React Testing Library. The documents never abbreviate that library as RTL. |
| WCAG 2.2 Level AA | documented name | none | The documented accessibility target for Joorweb, including, in the design system, Builder and agent interactions. The acronym is not expanded. | `frontend-rules.md` §12; `design-system.md` §2, §11 | explicit as the target phrase | Individual criteria are not restated. |
| Viewport categories | documented name | “Mobile, Tablet, Laptop, Desktop, Large Desktop”; design system uses the same five in lowercase | Required categories. Pixel widths are not set. Breakpoint token values are Open. | `frontend-rules.md` §6; `design-system.md` §4, §7; `frontend-architecture.md` §2 | explicit as names; pixels missing | None on the names. |
| Testing | documented name | unit, integration, end-to-end, visual and responsive | The rules require significant frontend functionality to be tested, and require end-to-end testing of important user workflows. Testing priorities and the workflows to cover first are Open. | `frontend-rules.md` §16; `frontend-architecture.md` §9, §10; `design-system.md` §15 | explicit that testing is required; priorities missing | The §2.2 row “Testing” is Proposed because the named tools are Proposed. That row is not a statement that testing itself is optional. |
| Vitest | documented name | grouped with React Testing Library and Playwright | Proposed, not installed, not confirmed. Must not be installed before approval. | `frontend-rules.md` §2.2; `frontend-architecture.md` §9 | explicit as Proposed | Not an Established tool. |
| React Testing Library | documented name | none besides the full name | Proposed, not installed. Named for unit and component tests in the architecture. | `frontend-rules.md` §2.2; `frontend-architecture.md` §9 | explicit as Proposed | No documented abbreviation. |
| Playwright | documented name | none | Proposed only. Not a requirement, and must not be installed before approval. The rules do not select another end-to-end tool. End-to-end testing of important workflows remains required. | `frontend-rules.md` §2.2, §16.3; `frontend-architecture.md` §9 | explicit | The requirement and the tool status are different. |
| TanStack Table | documented name | none | Proposed, not installed, not part of the confirmed stack. | `frontend-rules.md` §2.2; `frontend-architecture.md` §9 | explicit as Proposed | The design system discusses tables without naming this library. |
| Apache ECharts | documented name | none | Proposed, not installed, not part of the confirmed stack. | same | explicit as Proposed | Not mentioned by the design system. |
| Lucide | documented name | “the icon library” in the design system, unnamed | Proposed, not installed. The design system says the icon library is not chosen. | `frontend-rules.md` §2.2; `frontend-architecture.md` §9; `design-system.md` §8, §16 | explicit as Proposed, not as a design-system choice | A Proposed library is not the design system’s chosen icon library. |
| AI coding agent | documented name | “AI Coding Agents”; “the agent” in §17; “frontend agents” | An agent writing Joorweb frontend code. Rules §17 and §18 apply to it. It is not the product assistant. | `frontend-rules.md` header, §17, §18, §19, Final Enforcement Rule | explicit by audience and by §17 | The unqualified word “agent” is unsafe across §15 and §17. |
| Development workflow | documented name | Understand → Plan → Inspect → Implement → Verify → Review → Report | The mandatory seven-step workflow in rules §18. | `frontend-rules.md` §18 | explicit | None. |
| Architecture decision record | documented name | the nine fields | A significant architecture change must document problem, proposed solution, reasoning, alternatives considered, affected applications, dependencies, compatibility implications, migration requirements, and testing requirements. | `frontend-rules.md` §25.2; `frontend-architecture.md` intro, §11 | explicit | “Proposed solution” is a field name. See Proposed. |

## C. Inconsistent or ambiguous terminology

These are disagreements or unsettled uses in the documents. They are not resolved here.

1. **Four applications have more than one name.** Architecture §3’s table uses Company Website, Admin, Builder, and Storefront. Rules §2.2 uses Public Website, Admin Panel, Visual Builder, and Storefront. Rules §3.1 headings are Website, Admin, Builder, and Storefront, while the Website paragraph says “The Company Website.” Rules §13’s title is “Website Builder” and the body says “Joorweb Website Builder.” Rules §14’s title is “Admin Panel.” Rules §23.1 says Website, Admin, Builder, Storefront. The jobs and runtimes match. The labels do not.

2. **“Storefront” is both a product area and an application.** Architecture §1’s product bullet is a shop site plus marketplace connections such as Digikala, Torob, and Basalam. Architecture §3’s application renders published customer storefront pages. The documents do not say the marketplace connections belong to the application.

3. **“Store builder,” “storefront builder,” and Builder.** Rules §1 say Joorweb is not only a store builder. Architecture §1 says the storefront builder is one product capability, then distinguishes the Builder application. Rules §13 uses Website Builder for that application. The documents separate the capability from the whole platform, but they do not fix one proper name.

4. **“Recommended” remains next to Established.** Rules §2.2 mark the monorepo Established. Rules §3 still say “The recommended structure is a monorepo.” Architecture §5 and §11.7 mark it Established and the directory tree Open.

5. **Page Schema capitalization and nearby nouns.** Rules §13.2’s heading is “Page Schema.” The §13.1 list says “Page schema.” §13.4 and §25.1 say “page schema.” Architecture uses “Page Schema.” Nearby undefined or Open nouns are “page configurations,” “saved page model,” “canonical page data model,” and “published page contract” (architecture §11.3 only). JSON is required by rules §13.2 and not repeated by the architecture. That is an omission, not a contradiction.

6. **Component registry versus block registry.** Rules §13.1 and §13.3 require a controlled component registry and also say not to assume one “block registry.” Architecture §4 and §11.6, and design system §1 and §3, discuss a block registry or “one registry.” Identity of the two terms is not stated. One registry versus separate registries is Open.

7. **“Component” has at least three uses.** Architecture §6: a UI component owns its style, and a page composes components. Rules §13.2: Page Schema must support “components” and “component properties,” which are not defined. Rules §13.3: a registry of components that may be rendered, in a section that also allows blocks. Design system §9 adds Primitive, Composite, and Pattern. No document maps schema component, registry component, block, and React component onto each other.

8. **“Section” is undefined as a schema noun.** Rules §13.2 and §13.7 require sections. Design system §6 also uses “sections” for dashboard regions. No definition distinguishes them from blocks.

9. **Preview is three ideas.** Rules §13.5 and architecture §11.5: preview is a state, distinct from draft and published, implementation Open. Rules §13.1: “Preview system” is a separate responsibility. Design system §7: a Builder “viewport preview” is an editing aid and not the published site. Architecture §11.5: “preview host” is an unconfirmed dependency. Rules §13.7 also say “responsive preview” and “save status” and “publish status,” without equating them to draft, preview, and published.

10. **Token vocabularies are not aligned.** Rules §4.1 require brand colors, semantic colors, typography, font sizes, font weights, spacing, border radius, shadows, borders, breakpoints, z-index layers, transitions, and component dimensions. Design system §4 uses Color, Typography, Spacing, Sizing, Radius, Borders, Shadows, Motion, Elevation, and Breakpoints. Elevation is not documented as “z-index layers.” Motion is not documented as “transitions.” Sizing is not documented as “component dimensions.” Typography values that `typography.md` marks Established are not Open. That file is the type source and is not empty. Prefix, file format, and Tailwind mapping remain Open. `components.md` remains empty.

11. **CSS variables, tokens, and Tailwind.** Rules §2.1 list modern CSS and CSS variables with the core technologies. Rules §4.1 say to use design tokens and then show an illustrative CSS-variable sample that architecture §2 does not adopt. Design system §4 says tokens are the only approved way to express reusable visual decisions, and that the Tailwind mapping is unresolved. Architecture §6 says the styling system is Tailwind and shadcn, and §6 leaves global tokens Open.

12. **shadcn/ui versus shadcn.** Rules §2.2 use “shadcn/ui” and call it the component foundation. Architecture §6 and §11.9 and the design system say “shadcn” and call Tailwind and shadcn the styling system. Packaging is Proposed, not Established.

13. **Component-state lists differ.** Rules §4.3 do not include Selected or Read-only. Design system §10 does, and it defines Active as pressed or momentary, and Selected as remaining after the pointer leaves. The rules do not define Active. Architecture assigns no Established or Open label to either list.

14. **Assistant lifecycle words differ.** Rules §15.2: received, understood, missing information, confirmation if required, executing, completed or failed, result presented. Design system §14: Proposal, Pending, Authorized, Executing, Completed, plus failure and cancellation. The design system says the checkpoints map onto the statuses and does not give the map. Cancellation and Proposal are not in the rules list. “Completed” and the component state “Success” are both reserved for confirmed success and are not declared synonyms.

15. **Who confirms success.** Rules §15.4 say not to show success before the backend confirms it. Design system §10 and §14 say the platform has confirmed. Architecture §8 says the system performs the panel operation. The documents do not define backend, platform, and system as the same confirmer.

16. **“Agent” means two roles.** Rules §15 and design system §14 use it for the product assistant. Rules §17 through §21 and the Final Enforcement Rule use it for an AI coding agent. Design system §14 also allows more than one product agent and leaves the count undecided. Architecture §8 is singular: “the assistant.”

17. **History wording.** Rules §15.6 say the interface should support conversation history according to approved backend contracts. Design system §14 says authorized people can review past operations, and §16 leaves history storage unresolved. No approved contract is recorded.

18. **“Module” means two established-looking things.** Architecture §6: a module has data and behavior and no appearance. Rules §3.1 and §14.1: Admin modules, list illustrative, map Open. Rules §1 and §3.3 use “module” without saying which. Product-area names and illustrative bullets also overlap without a map: Finance and Accounting, Warehouse and Inventory, Orders and Orders, Customers and CRM, Products and goods flow. Sales, Reports, Integrations, Settings, and Dashboard appear only as illustrative bullets.

19. **“Panel” has several undocumented referents.** Architecture §2, panel login. Architecture §1 and §8, “panel operation.” Design system §14, “Closing a panel is not cancellation.” Architecture §2, legacy “shop-panel,” which is not a constraint. The documents do not define panel.

20. **“Pattern” is a layer and a looser word.** Design system §9 defines Pattern as a component layer. §6 says layouts are patterns and also speaks of navigation patterns. The identity is not stated.

21. **Theme.** Rules §13.1 and §13.2, theme configuration inside the builder and the schema. Design system §12, theming as token values, not a second design system. Design system §13, tenant theme. Design system §2, “not a conventional storefront theme,” which is a contrast with the platform, not a definition of the Storefront application. These are not tied together.

22. **Forms library strength.** Architecture §7 and §11.10 establish React Hook Form with Zod for forms. Rules §9.1 say to use them “where appropriate.”

23. **Dependency sentence.** Architecture §3 says applications must not depend “directly” on one another. §11.8 and rules §3.3 omit “directly.” No indirect exception is defined.

24. **Large-data strategies.** Rules §11.3 say pagination or infinite scrolling. Design system §6 and §7 say tables and lists paginate or virtualize. Infinite scrolling and virtualization are not equated.

25. **Light and dark, and white-label, sit outside the architecture status list.** Design system §12 requires the ability to represent light and dark, and uses “white-label” for representative branding. Both mechanisms are unresolved there. Architecture §1 and §10 leave representative branding Open and do not mention light, dark, or white-label. The rules do not mention them. This is a documentation-scope gap, not a license to mark either one Established.

26. **Rules require “approved” contracts that the architecture says are Open.** Rules §9.3, §10.2, §14.4, §15.6, and §24.4 speak of approved API contracts, an approved authentication architecture, an approved authorization system, or approved backend contracts. Architecture §7 and §10 mark API contracts, base URL strategy, authentication implementation, error shape, and authorization implementation Open.

27. **Testing row versus testing requirement.** Rules §2.2 status “Proposed” on the row whose purpose is “Testing.” Rules §16 require tests, and §16.3 says Playwright is Proposed while end-to-end testing of important workflows remains required. Architecture §9 agrees the tools are not installed and the priorities are Open.

28. **Illustrative Admin modules were easy to misread before `bfec0ff`.** On the audited rules text, §3.1 and §14.1 now say the bullets are illustrative and the map is Open. That matches architecture §3 and §10. The bullets themselves remain undefined.

**Recommendation, not a decision.** A glossary should list every variant, its file and section, and whether the architecture status is Established, Proposed, Open, or unlabeled. It should not choose a winner for items 5 through 17, 19, 21, 22, or 26. For item 1, the glossary can use the architecture table’s application names as headwords only if it also records the rules’ labels.

## D. Missing definitions

Important terms that are used and not defined far enough to implement from. “Open” means the documents already say no solution is chosen. “Missing” means the word is used without a definition. None of these mechanisms are Established.

**Open in `frontend-architecture.md`, and still undefined as mechanisms**

- Node.js version other than the ban on 16 (§5, §10, §11.11). Exact dependency versions (§9, §10).
- Final package and directory structure, and which additional shared packages exist (§5, §10). `project-structure.md` is empty and does not fill this.
- Global brand colors and design tokens, and how Tailwind relates to them (§2, §6, §10).
- Internationalization library (§7, §10).
- API contracts, base URL strategy, authentication implementation, and error shape (§7, §10). The page-data API contracts are also Open (§4).
- The seven builder questions in §4: one Page Schema or compatible variants; one shared block registry or separate registries; which blocks are shared; one publishing pipeline or two; how corporate identity, domains, environments, and permissions are represented; how tenant domains and host resolution work; how schema versioning, backward compatibility, publishing, preview, and rollback are implemented.
- Published page contract and how a published page is delivered (§11.3). Preview host and publish pipeline (§11.5).
- Assistant transport, session model, and operation protocol (§8, §10).
- Testing priorities and the workflows to cover first (§9, §10).
- How a representative brand is applied (§1, §10).
- Admin’s module map and routes (§3, §10).

**Open or unresolved in `design-system.md` §16, including items architecture does not list**

- Final color values, illustration style, icon library, and numeric token values other than the approved typography system. Font families and the approved type scale are Established in `typography.md`. Decisions that file marks Open stay Open. `components.md` remains empty.
- Token identifier prefix, file format, and the mapping from tokens onto Tailwind.
- Default theme mode, and whether light and dark both ship.
- Allowlist of theme properties an organization may override. How organization visual configuration is stored.
- White-label mechanism.
- Whether an unauthorized action is hidden, disabled, or shown with an explanation.
- Agent transport, voice pipeline, multi-agent orchestration, and history storage.
- Which operations may be cancelled, and which retries are safe.
- Design-system package name, path, and versioning scheme.
- Tools for visual regression.

**Used, and not defined even as an Open mechanism**

- AaaS, CRM, ERP, IFRS, FIFO, weighted average, SEO, XSS, ARIA, WCAG, RTL, and LTR are not expanded. RTL and LTR are at least paired with Persian and English.
- Tenant, organization, store, and customer are not related to each other.
- Section, visibility settings, layout settings, responsive settings, component ordering, and schema “components” (`frontend-rules.md` §13.2).
- Rollback, beyond being unimplemented and Open.
- Save status and publish status (`frontend-rules.md` §13.7).
- Independent storefront configurations (`frontend-rules.md` §3.1).
- Business logic and data access, named as layers to separate in rules §1. Puck does not own business logic. What frontend business logic includes is not defined.
- Technical contract (`frontend-rules.md` §25.4).
- Session, insecure browser storage, interceptors, response normalization, endpoint map.
- Approver. The rules say “request approval” and do not name who approves.
- Which operations are sensitive, destructive, high-impact, or irreversible.
- Micro Frontends.
- Information architecture.
- Router. Rules §25.1 name routing as a decision that must be documented. No router is chosen. Admin routes are Open.
- Storybook, other than as a permitted mock-data context.
- n8n and Laravel appear only as systems frontend agents must not modify unless authorized (`frontend-rules.md` §19). They are not defined, and they are outside this glossary’s scope.
- Marketplace and social names Digikala, Torob, Basalam, Instagram, Telegram, and Bale are examples, not definitions.
- The legacy shop-panel is named only to exclude it.

The empty application files and the empty development files do not define Admin, Builder, Storefront, Company Website, API integration, component guidelines, state management, or testing. Those topics currently exist only inside the three non-empty documents, at the level recorded above.

## E. Recommended glossary structure

**Recommendation, not a file and not a decision.**

```text
# Joorweb Frontend Terminology

## How to read this glossary
### What this file defines
### What this file does not decide
### Established, Proposed, and Open
### Mandatory rules versus architecture status
### Illustrative examples are not standards

## Product
### Joorweb and AaaS
### Product areas
### Representative branding

## Applications
### Company Website
### Admin
### Builder
### Storefront
### Boundaries between applications

## Builder and pages
### Puck
### Page Schema
### Blocks
### Registries
### Draft, preview, and published
### Publishing

## Design system
### Design system and tokens
### Styling system
### Components, primitives, composites, and patterns
### States
### Theming, white-label, and the panel-login palette

## Repository and packages
### Monorepo
### Shared packages
### Names that are only candidates
### Module, in both senses

## State, API, and security
### Server state, client state, and forms
### API client and contracts
### Authentication, permissions, and authorization
### Mock data

## Assistant and agent UI
### Assistant
### Status vocabulary
### Operation checkpoints
### What is not decided

## Language, accessibility, and quality
### Persian, English, RTL, and LTR
### Accessibility target
### Viewport categories
### Testing and proposed tools

## Engineering practice
### Workflow
### AI coding agents
### Architecture decision fields

## Named but not defined
```

Each entry should have: preferred term, other names with sources, definition, definition status, architecture status when one exists, and a “do not confuse with” line when section C applies. Entries in “Named but not defined” should stay empty of invented meanings.

## F. Documentation reference strategy

**Recommendation, not a change to any current document.**

- `TERMINOLOGY.md` would define terms and point at the owning document. It would not copy decision records, token values, or engineering rules.
- `frontend-architecture.md` would remain the only place that marks Established, Proposed, and Open. A glossary entry would quote that status and link to the section. It would not restate a Proposed or Open item as if it were settled.
- `frontend-rules.md` would remain the mandatory engineering reference. Where it uses a term, it can link to the glossary instead of defining it again. The glossary would not soften or extend a rule.
- `design-system.md` would remain the presentation document. Glossary entries taken from it would say they come from the design system and would not upgrade them to architecture decisions. `typography.md` holds the approved typography system, so type is cited from there and is not restated here. The component catalog stays in `components.md`, which remains empty and is not a definition source.
- Application files, `project-structure.md`, and the development files are empty. Other documents should not cite them as sources until they have approved content.
- Illustrative samples stay in their source: the CSS sample, the Admin bullets, the package-name examples, and the directory sketch. The glossary should name them as examples and should not turn them into entries with the status of a standard.
- When two documents disagree, the glossary records both locations. It does not merge them into one silent definition.
- A link from an existing document to a glossary entry replaces a repeated definition. It does not replace the requirement, the decision record, or the Open marker.

No existing file was edited to add those links. This audit does not add them. `TERMINOLOGY.md` was not created and waits for approval.

## Summary

On commit `bfec0ff`, three knowledge files had content. `frontend-rules.md` on that commit was the rules wording that differed from `master` at the time. `frontend-architecture.md` and `design-system.md` were byte-identical on both commits. The other twelve `frontend-knowledge` files were empty on that commit. `typography.md` is no longer empty. It is the canonical typography record.

The documents define the four application jobs, the Puck boundary, Page Schema as structured versioned data rather than executable code, the draft/preview/published split, the monorepo and the banned Node.js 16 line, the styling choice, the three state libraries, and the permission boundary. They do not define the mechanisms behind Page Schema, registries, publishing, packages, tokens, APIs, authentication, tenancy, or the assistant protocol. Several everyday words are used in more than one way, especially agent, module, component, registry, storefront, preview, panel, and the application names.

Sections A, E, and F, and the preferred-name choices where the documents disagree, are recommendations. They are not architecture decisions. Proposed and Open items stay Proposed and Open. AaaS is not expanded. `TERMINOLOGY.md` was not created and waits for approval.
