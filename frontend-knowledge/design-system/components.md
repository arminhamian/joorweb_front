# Joorweb Components

This file is the component-system specification. It records layers, ownership, interaction rules, and a catalog of candidates. It does not implement components, and it does not install libraries.

Application boundaries, package layout, and Puck stay in [frontend-architecture.md](../architecture/frontend-architecture.md) and [project-structure.md](../architecture/project-structure.md). Token categories stay in [design-system.md](design-system.md). Color stays in [colors.md](colors.md). Typography stays in [typography.md](typography.md). Mandatory engineering rules stay in [frontend-rules.md](../frontend-rules.md).

`components.md` was empty. This is the component record.

`development/component-guidelines.md` exists as the component implementation guide. It complements the catalog in this file. It is not a restatement of the catalog. The file is written and uncommitted. It is not an approved final decision. `applications/website.md`, `applications/admin.md`, `applications/builder.md`, and `applications/storefront.md` are empty. Those files do not add component decisions. This file does not fill them and does not invent behavior they might later own.

**Established** means a decision the source documents already made. **Proposed** means a recommendation or a catalog candidate the sources support as a needed UI shape. It is not approved as a built component, and it is not installed. **Open** means ownership, layer, existence, or another decision is still required.

Nothing in this file is a package dependency, a React component, or a shipped API. Examples, if any appear later, are illustrative only when they restate an approved rule. This file does not publish prop names, TypeScript interfaces, token identifiers, numeric dimensions, keyboard shortcuts, an icon library, or package versions.

The accessibility target is WCAG 2.2 Level AA, as [design-system.md](design-system.md) section 11 and [frontend-rules.md](../frontend-rules.md) section 12 already state. This file does not claim conformance.

Joorweb is the platform named in the architecture. This file does not expand AaaS.

---

## 1. Purpose and scope

The component system is how Joorweb keeps one interaction language across Company Website, Admin, Builder, and Storefront. [design-system.md](design-system.md) section 1 owns that boundary. This file applies it to components.

It owns:

- The three layers and the rules for which layer a component may occupy.
- Where a shared component lives, and where an application-specific component stays.
- The catalog of candidate shapes.
- The documentation a component needs before anyone implements it.
- How components consume tokens, direction, state, and accessibility rules that other files already set.

It does not own:

- Business rules, accounting, inventory, pricing, orders, or any other business truth.
- Authorization, role assignment, or the permission model.
- Authentication implementation, API contracts, base URLs, or the API client package.
- Page Schema, block registries, or publishing pipelines.
- Tenant host resolution, white-label mechanism, or organization visual configuration storage.
- Agent transport, memory, orchestration, or tool catalogs.
- Admin’s module map, navigation inventory, or route list.
- Color values, type metrics, spacing, radius, shadow, motion, elevation, or breakpoint pixels.

Frontend permission checks change what a person sees. They are not the security boundary. Backend authorization remains responsible for whether an operation is allowed. Hiding a control does not secure the operation. A visible agent action does not imply permission. [frontend-rules.md](../frontend-rules.md) section 10.3 and [design-system.md](design-system.md) section 1.

---

## 2. Principles

These restate [design-system.md](design-system.md) section 2 and [frontend-rules.md](../frontend-rules.md) section 1 for components. They do not add a product principle.

- **One purpose, one treatment.** The same job uses the same appearance, behavior, states, spacing, type, accessibility, and responsive behavior. [frontend-rules.md](../frontend-rules.md) section 4.2.
- **No business meaning in a shared primitive.** A primitive does not know invoices, stock, prices, or agents. [design-system.md](design-system.md) section 9.
- **Reuse before duplication.** Search shared and application components first. Extend, then add a shared component only when more than one application needs the same responsibility, then keep a local component when the job is local. [frontend-rules.md](../frontend-rules.md) section 22.
- **Presentation stays separate from data access and business logic.** A page composes components. A module holds data and behavior and has no appearance. [frontend-architecture.md](../architecture/frontend-architecture.md) section 2.5.
- **Status is never color alone, weight alone, or size alone.** [design-system.md](design-system.md) section 2 and [typography.md](typography.md) section 13.
- **Success follows confirmation.** Loading is not success. A proposal is not an execution. Pending is not completed. [design-system.md](design-system.md) section 14.
- **Density is a layout mode, not a second design system.** Operational screens may be denser than public pages. They use the same tokens. [design-system.md](design-system.md) section 6.
- **Do not over-abstract.** A theoretical reuse is not a reason to share a workflow. [frontend-rules.md](../frontend-rules.md) section 22.4 and [project-structure.md](../architecture/project-structure.md) section 5.1.

---

## 3. Architecture and layers

**Established.** Components are classified in three layers. [design-system.md](design-system.md) section 9. The catalog in section 14 names candidates inside those layers. It is not an approved inventory. The source text says the examples of each class are not an approved inventory.

| Layer | Meaning | Examples of the class, not an inventory |
|---|---|---|
| Primitive | One behavior, no business meaning. It owns its style and lives in its own folder. | Button, text input, checkbox, spinner |
| Composite | Primitives assembled for a repeated interface job that is still not an application workflow. | Labeled field, dialog, menu, page header |
| Pattern | A composite arrangement for a recurring task shape. It describes structure and states. It does not call an API and it does not encode one module’s process. | Filterable data region, confirmation step, agent execution summary |

**Established.** A page only composes components. A module holds data and behavior and has no appearance. Components do not reach into another application. [frontend-architecture.md](../architecture/frontend-architecture.md) section 2.5 and [design-system.md](design-system.md) section 9.

**Established.** Extend by variant, slot, or composition. Do not copy a component into another application to change one detail. Do not split every small fragment into its own component. [design-system.md](design-system.md) section 9 and [frontend-rules.md](../frontend-rules.md) section 8.2.

**Established.** React and TypeScript are the UI library and language. Tailwind CSS is the styling foundation. shadcn/ui is the component foundation. [frontend-rules.md](../frontend-rules.md) section 2.2. Architecture names that same styling system “Tailwind and shadcn.” This file treats those phrases as one foundation. CSS Modules are not a second styling system.

**Established responsibilities, not a component API.** Zustand holds appropriate client state. TanStack Query holds server state. React Hook Form with Zod holds form state and validation. [frontend-architecture.md](../architecture/frontend-architecture.md) section 2.7. A shared component does not become a second store, a second cache, or a second schema language.

**Proposed, not approved, and not installed.** TanStack Table, Apache ECharts, and Lucide. Vitest, React Testing Library, and Playwright. [frontend-rules.md](../frontend-rules.md) section 2.2 and [frontend-architecture.md](../architecture/frontend-architecture.md) section 6. A catalog row that mentions tables, charts, or icons does not adopt these libraries.

**Established.** Puck is the visual editing layer inside Builder only. It does not own business logic or the canonical Page Schema. Public renderers do not depend on Puck. [frontend-architecture.md](../architecture/frontend-architecture.md) sections 2.4 and 2.8.

---

## 4. Ownership and reuse

**Established.** Shared, application-agnostic primitives and composites belong in `packages/ui`. [frontend-architecture.md](../architecture/frontend-architecture.md) section 2.5 and [project-structure.md](../architecture/project-structure.md) section 5.1. That package consumes shared design tokens. It does not define a second palette.

**Established.** Patterns that more than one application needs may be shared. A pattern that is only one application’s workflow stays in that application. [design-system.md](design-system.md) section 9.

**Established.** Applications do not import applications. Shared packages do not import applications. There are no circular dependencies. [project-structure.md](../architecture/project-structure.md) section 6.

**Established.** App-specific presentation lives in that app’s `components/` or in a feature folder. Cross-application UI does not move by importing another app. [project-structure.md](../architecture/project-structure.md) sections 4.2 and 4.3.

**Established.** `packages/page-blocks` owns reusable page-block capabilities that public renderers can use without Puck. Puck adapters, editor controls, and editor-only configuration stay in `apps/builder`. A block needed by only one target may stay in that target. [project-structure.md](../architecture/project-structure.md) section 5.4. Editor chrome in section 14 is not a page block and is not Shared.

**Established.** Components do not own business logic, authorization, API contracts, or business data. They do not scatter raw HTTP calls. [frontend-rules.md](../frontend-rules.md) sections 3.3, 9.2, and 10.3. The architecture also says API calls go through one centralized client. The rules say the client architecture remains Open. Both statements forbid uncontrolled HTTP inside unrelated components. This file does not choose a client package.

**Established reuse order.** Reuse an existing component, then extend it, then create a shared component when several applications need it, then create an application-specific component when the job is local. [frontend-rules.md](../frontend-rules.md) section 22.2.

**Established.** A component is shared because more than one application needs the same responsibility and behavior, not because it could theoretically be reused. [project-structure.md](../architecture/project-structure.md) section 5.1.

Package names in [frontend-rules.md](../frontend-rules.md) section 3.2, including `design-system`, `page-renderer`, `api-client`, `auth`, `permissions`, `i18n`, and `types`, are illustrative candidates. The approved initial packages are `ui`, `design-tokens`, `page-schema`, and `page-blocks`. [frontend-architecture.md](../architecture/frontend-architecture.md) section 2.3. Deferred packages stay deferred. [project-structure.md](../architecture/project-structure.md) section 7.

---

## 5. Naming and organization

**Established.**

- Directory and package names use lowercase kebab-case. [project-structure.md](../architecture/project-structure.md) section 9.
- Each component owns its style and lives in its own folder. [frontend-architecture.md](../architecture/frontend-architecture.md) section 2.5.
- In `packages/ui`, the folder shape is one component per folder, with a public `index.ts`. Tests, when added, sit with the component. [project-structure.md](../architecture/project-structure.md) section 5.1. That tree is a structure rule. It is not permission to create the files now.
- Pages and routes compose. They do not become the home of domain logic.
- Business behavior stays in features, not in presentation components.
- Shared package exports are intentional. Deep imports into private source are avoided.
- Names describe the interface job. They do not encode a module, a tenant, an organization, or a campaign. [design-system.md](design-system.md) section 4.

**Open.** The workspace package scope, the design-system package name beyond the approved `packages/ui` and `packages/design-tokens` paths, and the versioning scheme. [design-system.md](design-system.md) section 16 and [project-structure.md](../architecture/project-structure.md) section 11.

Catalog names in section 14 are display names for candidates. They are not file names, export names, or prop names.

---

## 6. API and composition

**Established.** A component has a clear responsibility, explicit TypeScript types, predictable behavior, accessibility, responsive behavior, and documented variants where variants exist. [frontend-rules.md](../frontend-rules.md) section 8.1. Shared types live in an appropriate shared package once that package’s type boundary is approved. This file does not define those types.

**Established.** Avoid `any`, unnecessary assertions, unclear names, excessive optional properties, and duplicated type definitions. [frontend-rules.md](../frontend-rules.md) section 8.3. Those are quality rules. They are not an API.

**Established.** Composition is the extension method. A parent passes content and callbacks. The child does not reach into a module, an API, or another application to discover them. [design-system.md](design-system.md) section 9.

**Established.** Components render data they are given. They do not fabricate API responses, and they do not show mock data as real business data. [frontend-rules.md](../frontend-rules.md) sections 9.3 and 24.

**Open.** Exact props, event names, slot names, and TypeScript interfaces for every catalog candidate. They stay Open until a component’s own documentation is approved. Section 21 is the template that documentation must fill. Filling this file with invented props would close that decision.

---

## 7. Variants, sizes, and slots

**Established.** Variants, slots, and composition are how a component extends. A second copy is not a variant. [design-system.md](design-system.md) section 9.

**Established.** Component dimensions are a token category. Numeric sizes, control heights, icon-slot sizes, and touch-target minimums are not chosen. [design-system.md](design-system.md) sections 4 and 16. Touch targets on touch devices stay large enough to use. [frontend-rules.md](../frontend-rules.md) section 6. This file does not pick a pixel minimum.

**Established.** Button text uses the Button role in [typography.md](typography.md). That file owns the size, the line height, and the weights. This file does not restate them and does not assign a weight to the Button role. Label, Input, Navigation, and Code metrics stay Open there.

**Open.** Which variants exist for each candidate. Which sizes exist. The names of slots. A size scale for controls. Icon dimensions. The mapping of those sizes onto tokens or Tailwind.

Until those are approved, an implementer does not invent a private size scale or a private slot vocabulary and call it the system.

---

## 8. Interaction states

**Established** in [frontend-rules.md](../frontend-rules.md) section 4.3, and repeated by [frontend-architecture.md](../architecture/frontend-architecture.md) section 2.5. Interactive components support every relevant state:

- Default
- Hover
- Focus
- Active
- Disabled
- Loading
- Error
- Success
- Empty

Shipping only the default state is incomplete.

**Established** in [design-system.md](design-system.md) section 10, in addition to that list:

- **Selected.** The current choice remains after the pointer leaves. Selected is not hover.
- **Read-only.** The value is visible and not editable. Read-only is not disabled.

The rules list and the design-system list are not the same. This file does not delete either list and does not declare them synonyms. Section 24 records that difference. A control implements a state when that state can occur. A static heading has no hover. [design-system.md](design-system.md) section 10.

**Established meanings that components must not collapse:**

- Loading means the outcome is unknown. Loading is not success.
- Success means the platform has confirmed the outcome. The interface does not show success earlier.
- Error means the attempt failed or the value is invalid. The message says what is wrong.
- Empty means there is nothing to show, and the view says what the person can do next when a next step exists.
- Disabled means the control is unavailable. The reason is available to assistive technology when the person needs it. A disabled color is not an authorization decision. [colors.md](colors.md) section 10.
- Focus is visible and is not color alone.

Agent lifecycle words in section 16 are statuses. They use these component states. They are not a second visual language. [design-system.md](design-system.md) section 10.

---

## 9. Accessibility

**Established target.** WCAG 2.2 Level AA for all four applications, including Builder and agent interactions. This file does not claim that any component conforms.

**Established requirements.** [design-system.md](design-system.md) section 11 and [frontend-rules.md](../frontend-rules.md) sections 8.5 and 12.

- Every pointing-device action can be completed from the keyboard. No freehand-drawing exception is granted.
- Focus order follows the task. Focus is always visible. It moves into a dialog and back to the invoking control. It is not trapped except inside a modal that provides a close action.
- Semantic HTML. Headings stay in order. Form controls have labels. Icon-only controls have accessible names. Tables expose headers.
- Name, role, and state are exposed. Status changes that matter, including agent progress, success, and failure, are announced.
- Color is never the only signal. Contrast uses [colors.md](colors.md). This file does not pick pairs.
- Loading, empty, error, and live agent updates are announced without stealing focus on every minor refresh.
- Toasts and validation errors are reachable and dismissible.
- Reduced motion is respected. [design-system.md](design-system.md) sections 4 and 11.
- Text must be able to resize to 200% without loss of content or functionality. The mechanism is Open in [typography.md](typography.md).

The icon library is Open. Lucide remains Proposed and is not selected here. An icon button still needs an accessible name before a library exists. [design-system.md](design-system.md) sections 5 and 16.

---

## 10. RTL, LTR, and internationalization

**Established.** Persian is RTL. English is LTR. Both are first-class. Direction is part of the component, not a later patch. A component that works in only one direction is incomplete. [frontend-rules.md](../frontend-rules.md) section 7 and [design-system.md](design-system.md) section 8.

**Established.** Prefer logical properties: inline start and end, not physical left and right. Navigation, padding, icons that point forward, and popover attachment follow the active direction. [frontend-rules.md](../frontend-rules.md) section 7.2.

**Established.** Isolate URLs, email addresses, phone numbers, and code so they keep their own direction. Labels, help, and errors stay associated with the field in both directions. Table headers and numeric columns survive a direction change. Sort indicators and row actions mirror with the direction. [design-system.md](design-system.md) section 8 and [typography.md](typography.md) section 8.

**Established.** Icons that imply direction mirror in RTL. Icons that depict an object do not mirror when mirroring would change their meaning. [design-system.md](design-system.md) section 8.

**Established.** Family, numerals, and the type scale come from [typography.md](typography.md). Persian text uses IRANSans. English text uses Inter. The fallback is the system sans-serif. Do not silently replace IRANSans with IRANSansX. This file does not restate the scale.

**Open.** The internationalization library. Phone-number numerals. The mechanism for Persian and Latin numerals. Whether IRANSans or Inter provides tabular figures, and how a component enables them. [typography.md](typography.md) section 14 and [design-system.md](design-system.md) section 16.

Financial figures use tabular figures where the typeface provides them. That requirement stands in [design-system.md](design-system.md) section 8. This file does not close it.

---

## 11. Responsive behavior

**Established.** Every application supports mobile, tablet, laptop, desktop, and large desktop. Pixel widths are Open. [design-system.md](design-system.md) section 7 and [frontend-rules.md](../frontend-rules.md) section 6.

**Established.**

- Do not design only for desktop.
- Avoid fixed widths where the layout can flex.
- Prevent horizontal overflow of the page.
- Dialogs and forms remain usable on mobile.
- Navigation adapts to smaller screens.
- Images and media scale.
- Admin tables, filters, and bulk actions need an explicit small-screen arrangement. A desktop grid is not the only way to finish a task. Horizontal page overflow is not that strategy. [design-system.md](design-system.md) section 7.
- Large sets are paginated or virtualized. The component does not load or render an entire large set when a page is enough. Column priority keeps monetary values, quantities, and status findable when columns collapse. The application owns the query. [design-system.md](design-system.md) sections 6 and 7.
- Builder may offer a viewport preview. That preview is an editing aid. It is not the published site, and it is not a substitute for responsive behavior in Company Website and Storefront.

**Open.** Exact breakpoints, the mobile type sizes, and which widths count as the tested set beyond the named categories. [typography.md](typography.md) section 14 and [frontend-architecture.md](../architecture/frontend-architecture.md) section 10.

---

## 12. Theming and tokens

**Established.** Tokens are the only approved way to express reusable visual decisions. Components do not hardcode one-off colors, sizes, or shadows. [design-system.md](design-system.md) section 4.

**Established.** The naming shape is `{category}.{role}.{modifier}` when a modifier is needed. Categories include color, typography, spacing, sizing, radius, borders, shadows, motion, elevation, and breakpoints. [design-system.md](design-system.md) section 4.

**Established.** Approved type values that [typography.md](typography.md) marks Established stay Established. Color values that [colors.md](colors.md) marks Established stay Established. Values those files mark Proposed stay Proposed. Values they mark Open stay Open. A component does not promote a Proposed ramp, a Proposed role map, or an Open token name by using it.

**Established.** Light and dark must be representable. A theme assigns values. It does not rename tokens, remove a state, or fork a component. An organization override, when allowed, replaces a value. It does not replace a component. Layout behavior, accessibility behavior, agent-status meaning, and permission presentation are not brand options. [design-system.md](design-system.md) section 12.

**Established.** The panel-login palette is limited to that login. It is not a component theme and not a global token source. [colors.md](colors.md) section 11.

**Open.** Token prefix, file format, Tailwind mapping, default theme mode, whether light and dark both ship, the override allowlist, white-label mechanism, and how organization visual configuration is stored. [design-system.md](design-system.md) section 16. Multi-tenant theme isolation is required. How a host resolves to a tenant is Open. [frontend-architecture.md](../architecture/frontend-architecture.md) section 2.8.

Until token names exist, a component does not invent a private token and treat it as the system. A local exception is allowed only when a shared token cannot express the case, and it must not become a private brand. [design-system.md](design-system.md) section 15 and [frontend-rules.md](../frontend-rules.md) section 21.3.

---

## 13. How to read the catalog

Every name in section 14 is a candidate. None is an approved implementation. None is a file that should be created from this document.

- **Proposed** means the source documents support that UI shape as needed work, and they have not approved it as a built component.
- **Open** means existence, layer, or ownership is not decided. A layer or scope printed on an Open row is the closest reading so the row can be discussed. It is not a decision.
- **Established** is not used for a catalog row. The sources established layers and ownership rules. They did not establish this inventory. [design-system.md](design-system.md) section 9 says its examples are not an approved inventory.
- Scope **Shared** means the candidate, if approved, belongs with shared UI primitives, composites, or cross-application patterns. It does not mean `packages/ui` already exports it.
- Scope **Builder** means the candidate is editor chrome for `apps/builder`. It is not Shared, and it is not a `packages/page-blocks` entry.
- Scope **Open** means this file does not assign an owner.

A Builder-only editor control is not Shared. A business workflow is not turned into a generic component. CRM, ERP, finance, warehouse, orders, and marketing remain application capabilities. Their screens compose these candidates. They do not each receive a private copy of a button or a table.

---

## 14. Component catalog

### Foundations

| Name | Layer | Scope | Purpose | Status |
|---|---|---|---|---|
| Button | Primitive | Shared | Starts or confirms an action. No business meaning. design-system.md §9 names button as a class example. | Proposed |
| Icon Button | Primitive | Shared | An action shown as an icon. It still has an accessible name. The icon library is Open. | Proposed |
| Text Input | Primitive | Shared | Accepts a single line of text. design-system.md §9 names text input as a class example. | Proposed |
| Textarea | Primitive | Shared | Accepts more than one line of text. A form control in the same class as text input. | Proposed |
| Checkbox | Primitive | Shared | A single boolean choice. design-system.md §9 names checkbox as a class example. | Proposed |
| Radio | Primitive | Shared | One option in a single choice. A form control. The group is composition, not a second primitive. | Proposed |
| Switch | Primitive | Shared | A boolean control with the same job as a checkbox when the product needs that presentation. | Proposed |
| Select | Primitive | Shared | Chooses from a list. Rules §5.2 require dropdowns to behave consistently. | Proposed |
| Combobox | Composite | Shared | A text control plus a list for a choice the person can type. It does not own the option source. | Proposed |
| Label | Primitive | Shared | Names a control. Rules §12 require labels for form controls. | Proposed |
| Separator | Primitive | Shared | A visual division with no business meaning. The sources do not require this component. | Open |
| Avatar | Composite | Shared | A visual stand-in for a person or organization. The sources do not require this component. | Open |
| Badge | Composite | Shared | A short text status. Status is not color alone. It does not define a business status vocabulary. | Proposed |
| Skeleton | Primitive | Shared | A loading placeholder. Loading is required. This particular placeholder is not. | Open |
| Spinner | Primitive | Shared | Shows that work is in progress. design-system.md §9 names spinner as a class example. Loading is not success. | Proposed |
| Tooltip | Composite | Shared | Supplementary text. The sources do not require it. It must not replace an accessible name if it is approved later. | Open |

### Forms

| Name | Layer | Scope | Purpose | Status |
|---|---|---|---|---|
| Form Field | Composite | Shared | Label, control, help, and validation as one field. design-system.md §9 names a labeled field as a composite example. | Proposed |
| Input Group | Composite | Shared | Related controls presented as one entry. It does not own a business schema. | Proposed |
| Search Field | Composite | Shared | A text entry whose job is to find items in a set the application supplies. | Proposed |
| Date Picker | Composite | Shared | Accepts a date the platform formats. design-system.md does not invent a calendar. The calendar and the formatter stay Open. | Proposed |
| Number Input | Primitive | Shared | Accepts a quantity the platform formats. It does not own inventory or arithmetic rules. | Proposed |
| Currency Input | Composite | Shared | Accepts a monetary value the platform formats. It does not invent a currency or an accounting rule. | Proposed |
| Password Input | Primitive | Shared | Accepts a secret string. It does not choose an authentication scheme or store credentials. | Proposed |
| File Upload | Composite | Open | The sources do not require a file-upload component. Existence and ownership stay Open. | Open |
| Multi-select | Composite | Shared | Chooses more than one option from a list the application supplies. | Proposed |
| Form Section | Composite | Shared | Groups fields and shows the step when work has more than one step. | Proposed |
| Validation Message | Composite | Shared | Says what is wrong for a field. Validation appears with the field. design-system.md §6. | Proposed |

### Navigation

| Name | Layer | Scope | Purpose | Status |
|---|---|---|---|---|
| Tabs | Composite | Shared | Switches among panels of one task. Rules §5.2 name tabs. | Proposed |
| Breadcrumbs | Composite | Shared | A location trail. The sources do not require this component. | Open |
| Pagination | Composite | Shared | Moves through a page of a large set. Rules §§9.3 and 11 require pagination. The component does not own the query. | Proposed |
| Dropdown Menu | Composite | Shared | A menu of actions. Rules §5.2 name dropdowns and menus. | Proposed |
| Navigation Menu | Composite | Shared | A navigation pattern. The link inventory stays in the application. design-system.md §6. | Proposed |
| Sidebar Navigation | Pattern | Shared | A side region for navigation. Shells do not share one information architecture. Admin’s module list stays Open. | Proposed |
| Command Menu | Composite | Open | The sources do not require a command palette. Existence and ownership stay Open. | Open |
| Stepper | Composite | Shared | Shows completed steps and the current step. design-system.md §6. | Proposed |

### Feedback

| Name | Layer | Scope | Purpose | Status |
|---|---|---|---|---|
| Alert | Composite | Shared | A message in the page flow for a condition the person must see. | Proposed |
| Toast | Composite | Shared | A transient notice. design-system.md §11 requires toasts to be reachable and dismissible. | Proposed |
| Dialog | Composite | Shared | A focused surface over the task. design-system.md §9 names dialog as a composite example. Focus returns to the invoker. | Proposed |
| Alert Dialog | Composite | Shared | Confirmation for a destructive or sensitive action. The dialog states the consequence. Dismissing it is not approval. | Proposed |
| Drawer | Composite | Shared | A panel that enters from the inline edge. The sources do not require this component apart from dialog. | Open |
| Popover | Composite | Shared | An anchored overlay. design-system.md §8 requires popovers to follow the active direction. | Proposed |
| Context Menu | Composite | Shared | A menu tied to a target. The sources name menus, not this separate component. | Open |
| Empty State | Pattern | Shared | There is nothing to show, and the view says what the person can do next when a next step exists. | Proposed |
| Error State | Pattern | Shared | The attempt failed. The message distinguishes validation, authentication, permission, network, and server errors when the platform reports them. Rules §9.4. | Proposed |
| Loading State | Pattern | Shared | Work is in progress and the outcome is unknown. | Proposed |
| Progress Indicator | Composite | Shared | Shows progress during a wait. Progress is not success. Rules §5.1. | Proposed |

### Data

| Name | Layer | Scope | Purpose | Status |
|---|---|---|---|---|
| Data Table | Pattern | Shared | Rows, headers, and row actions for a page of data. The design system owns the pattern. The application owns the query. TanStack Table stays Proposed and is not a dependency. | Proposed |
| Data Grid | Pattern | Open | A second grid beside the table is not decided. | Open |
| Table Toolbar | Composite | Shared | The place for table-level actions and filters. It does not own the query. | Proposed |
| Filter Builder | Pattern | Shared | The filter UI for a data region. The application owns the query and any filter expression. The expression language is Open. | Proposed |
| Column Visibility Control | Composite | Shared | Chooses which columns are shown. Column priority on small screens stays part of the table pattern. | Proposed |
| Sort Control | Composite | Shared | Changes sort. The indicator mirrors with direction. design-system.md §8. | Proposed |
| Bulk Action Bar | Composite | Shared | Actions on a selection. Bulk actions remain reachable on small screens. design-system.md §7. | Proposed |
| Status Indicator | Composite | Shared | Text, with an optional color cue, for a status the platform supplies. It does not define the status vocabulary. | Proposed |
| Metric Card | Pattern | Shared | A dashboard summary of a confirmed value. It does not invent a metric. Placeholder numbers are never real results. | Proposed |
| Statistic | Pattern | Open | Whether this is distinct from Metric Card is not decided. | Open |
| Timeline | Pattern | Open | A generic timeline is not specified. Agent history uses Execution Timeline. | Open |
| Activity Feed | Pattern | Open | A generic feed is not specified. Agent history is presentation of platform records, not an invented feed. | Open |
| Key-Value Display | Composite | Shared | Shows pairs the platform returned, including a confirmed result. It does not compute the values. | Proposed |
| Chart Container | Pattern | Shared | A region for a chart of confirmed data. colors.md allows accent on a chart series. Apache ECharts stays Proposed and is not a dependency. | Proposed |

### Layout

| Name | Layer | Scope | Purpose | Status |
|---|---|---|---|---|
| Card | Composite | Shared | A surface that groups one subject. It uses tokenized color and radius once those tokens are approved. | Proposed |
| Panel | Composite | Shared | A named region of a screen. It is not an application shell. | Proposed |
| Section Header | Composite | Shared | The title and actions of a section. | Proposed |
| Page Header | Composite | Shared | The title and actions of a page. design-system.md §9 names page header as a composite example. Rules §14.2 require consistent page headers. | Proposed |
| Content Container | Composite | Shared | The width and padding of the primary content. It does not set a breakpoint. | Proposed |
| Split View | Pattern | Open | A two-pane workspace is not decided outside Builder’s own editor chrome. | Open |
| Resizable Panels | Pattern | Open | Resizable regions are not decided. | Open |
| Collapsible Section | Composite | Open | A generic collapse control is not decided. Builder section management stays in the Builder candidates. | Open |
| Responsive Container | Composite | Open | Responsive behavior is required. A wrapper component for it is not. | Open |

### Agent

These rows are presentation. Section 16 states the meanings. Section 17 groups these same twelve rows as a family. They do not implement orchestration or authorization.

| Name | Layer | Scope | Purpose | Status |
|---|---|---|---|---|
| Agent Status | Composite | Shared | Shows the identity the platform confirms and one current lifecycle status, in text. | Proposed |
| Agent Activity | Pattern | Shared | Shows what the agent is doing now, without claiming success. | Proposed |
| Execution Progress | Composite | Shared | Shows progress while status is executing. Progress is not success. | Proposed |
| Execution Timeline | Pattern | Shared | Shows the lifecycle the platform reported, in order. It does not invent history. | Proposed |
| Agent Message | Composite | Shared | Shows a text message. Voice transport stays Open. The component does not invent memory or identity. | Proposed |
| Agent Proposal | Pattern | Shared | Shows an operation that could run. Nothing has run. | Proposed |
| Approval Request | Pattern | Shared | Asks a person to approve. Approval is not completion. Dismissing it is not approval. | Proposed |
| Execution Result | Pattern | Shared | Shows what changed, after the platform confirms success, in the units the module uses. | Proposed |
| Execution Error | Pattern | Shared | Shows a failure, the reason when one exists, and a recovery path. Failure is not completed. | Proposed |
| Tool Activity | Composite | Shared | Shows an individual tool operation initiated by an Agent. It does not show secrets. The tool catalog is Open. | Proposed |
| Human Handoff | Pattern | Open | A transfer workflow beyond human approval is not specified. Approval Request covers approval. | Open |
| Cancellation Control | Composite | Shared | Requests cancellation while work is pending or executing. Which operations can be stopped is Open. Closing a panel is not cancellation. | Proposed |

### Builder candidates

These are editor controls. Scope is Builder unless the row says Open. None of them are Shared. None of them belong in `packages/page-blocks`. Puck may draw the editing surface. The design system styles that surface. Puck’s document is not the page model. [design-system.md](design-system.md) section 3.

| Name | Layer | Scope | Purpose | Status |
|---|---|---|---|---|
| Editor Toolbar | Composite | Builder | Actions for the editing session. Rules §13.7. | Proposed |
| Block Navigator | Composite | Builder | Section and component selection in the editor. | Proposed |
| Block Inspector | Composite | Builder | Property editing for the selection. It does not own Page Schema. | Proposed |
| Viewport Switcher | Composite | Builder | The editor’s viewport preview. It is an editing aid, not the published site. | Proposed |
| Canvas Overlay | Composite | Builder | Chrome drawn over the editing surface. It is not the public renderer. | Proposed |
| Selection Outline | Primitive | Builder | Marks the selected block in the editor. | Proposed |
| Drag Handle | Primitive | Builder | The affordance for drag-and-drop arrangement. Rules §13.7. | Proposed |
| Block Placeholder | Primitive | Builder | The empty spot where a block can be placed while editing. | Proposed |
| Page Status Indicator | Composite | Open | Makes draft, preview, and published visually distinct. Builder must show that status. Company Website and Storefront must not present a non-published page as published. Which package owns the indicator is Open. | Open |

Shared page blocks that both public renderers can show are a separate inventory. Which blocks are shared is Open. [frontend-architecture.md](../architecture/frontend-architecture.md) section 2.8. This catalog does not list them and does not pretend the Open list is decided.

---

## 15. Application-specific components

**Established.** An application may keep a component whose meaning belongs only to that application. It still uses shared tokens, states, direction, and accessibility. [design-system.md](design-system.md) sections 9 and 13.

| Application | What its components may cover | What they do not become |
|---|---|---|
| Company Website | Presentation of published corporate pages. Public density. | The editor, Page Schema, or publishing. |
| Admin | Dense operational screens for the platform capabilities the architecture already names. | The authorization system, the business data, or the module map. |
| Builder | Editor chrome for corporate pages and customer storefront pages. | The canonical Page Schema, business records, or the public renderers. |
| Storefront | Presentation of published customer pages for the resolved tenant. | The editor, another tenant’s theme, or another tenant’s content. |

**Established.** Draft, preview, and published stay visually distinct. Preview must not look like the published site without an explicit preview indication. [design-system.md](design-system.md) section 3.

**Established.** No application imports another to reuse these pieces. [design-system.md](design-system.md) section 13.

**Open.** Admin’s module map. Whether corporate pages and storefronts share one schema, one registry, or one publish pipeline. Which blocks are shared. The four application files are empty and do not close these items.

Illustrative Admin areas in [frontend-rules.md](../frontend-rules.md) sections 3.1 and 14.1, including Dashboard, Products, Inventory, Sales, Orders, Customers, Accounting, Reports, Marketing, Integrations, Settings, and AI Assistant, are not a component list and not a route list.

---

## 16. Agent-native components

**Established.** The agent is an operational colleague, not a chat widget and not only a chat window. A person may type or speak. Transport, streaming, the voice pipeline, multi-agent orchestration, and history storage are Open. [design-system.md](design-system.md) section 14 and [frontend-architecture.md](../architecture/frontend-architecture.md) section 2.9.

**Established.** Human workflows and agent workflows coexist. The same business operation shows the same confirmation, the same permission limits, and the same confirmed result no matter which path started it.

The catalog’s Agent rows, where Proposed, are the presentation of the following meanings. Components do not implement orchestration or authorization. Section 17 groups the same twelve rows into one family. It does not add a row, remove a row, or change a Layer, Scope, or Status.

- **Proposal is not execution.** A proposal describes an operation that could run. Nothing has run.
- **Pending is not completed.** Waiting for information or for a person is not execution and is not success.
- **Loading is not success.** Executing shows progress. Progress is not a completed result.
- **Success needs a confirmed outcome.** Completed is reserved for platform confirmation. The result view appears only then.
- **Failure is explicit.** A failed operation says it failed, gives the reason when one exists, and offers a recovery path. It is not completed.
- **Cancellation is distinct from failure.** A cancelled operation shows that it was stopped. It is not success. It is not a technical failure unless the platform reports a failure while stopping.
- **Human approval is distinct from agent execution.** Sensitive or irreversible operations stay pending until a person approves. Dismissing the dialog is not approval. The agent does not get a weaker confirmation rule than a person using a form.
- **Visibility is not permission.** The interface may explain the boundary in human language. The backend decides the permission. A control hidden because of permissions is not proof of security. A visible agent action does not imply that the operation is allowed.

**Established.** If more than one agent is active, each is identifiable. This file does not decide how many agents exist.

**Established.** An operation shows which module it targets. This file does not create the module list. When data changes, the module’s own screens must be able to show the same confirmed result.

**Established.** History is presentation of what the platform returned: who asked, what was proposed, whether it was authorized, and how it ended. The interface does not invent history.

**Open.** Which operations may be cancelled. Which retries are safe. The tool catalog. Voice pipeline and transport. [design-system.md](design-system.md) section 16.

The engineering checkpoints in [frontend-rules.md](../frontend-rules.md) section 15.2 are request received, request understood, missing information, confirmation when required, executing, completed or failed, and result presented. [design-system.md](design-system.md) section 14 maps those checkpoints onto Proposal, Pending, Authorized, Executing, and Completed, plus failure and cancellation. This file does not add a quieter path that skips approval or shows success early.

---

## 17. Agent Interaction Components

**Established.** Agent Interaction Components is a family in the Joorweb Design System architecture. It is not a Layer, not a Scope, and not a Status. The layers stay Primitive, Composite, and Pattern. The scopes stay Shared, Builder, and Open. The statuses stay Established, Proposed, and Open.

The family groups the twelve Agent rows already listed in section 14. Membership in the family does not automatically determine component Scope. Eleven of those components currently have Scope Shared. Human Handoff retains Scope Open and Status Open. The family being Established does not make any individual component Established and does not approve its implementation. This section does not add a component, remove a component, or duplicate those rows. It does not decide Human Handoff’s existence, its layer, or its owner beyond the classification the catalog already records.

These components present what the platform reports. They do not implement orchestration or authorization. They do not own business logic, API contracts, or business data. Section 16 states the lifecycle meanings this family uses. This section does not replace those meanings.

### Purpose and architectural role

A person must be able to tell what an agent is, what it is doing, what it has proposed, what a person must approve, and how a specific execution ended. The family defines a consistent presentation model within the Joorweb Design System architecture. Applications may reuse applicable components when they show the same agent work. Reuse does not change a component's Scope or Status. An application does not invent a second family in order to change one of these meanings. That rule does not move Human Handoff from Scope Open to Scope Shared.

The platform remains the source of truth for execution state and outcomes. The UI must never invent Agent identity, execution state, tool activity, timestamps, or results.

### Component catalog

The catalog rows stay in section 14, under Agent. This index only names them and repeats the Layer, Scope, and Status already recorded there.

| Name | Layer | Scope | Status | Catalog |
|---|---|---|---|---|
| Agent Status | Composite | Shared | Proposed | Section 14, Agent |
| Agent Activity | Pattern | Shared | Proposed | Section 14, Agent |
| Execution Progress | Composite | Shared | Proposed | Section 14, Agent |
| Execution Timeline | Pattern | Shared | Proposed | Section 14, Agent |
| Agent Message | Composite | Shared | Proposed | Section 14, Agent |
| Agent Proposal | Pattern | Shared | Proposed | Section 14, Agent |
| Approval Request | Pattern | Shared | Proposed | Section 14, Agent |
| Execution Result | Pattern | Shared | Proposed | Section 14, Agent |
| Execution Error | Pattern | Shared | Proposed | Section 14, Agent |
| Tool Activity | Composite | Shared | Proposed | Section 14, Agent |
| Human Handoff | Pattern | Open | Open | Section 14, Agent |
| Cancellation Control | Composite | Shared | Proposed | Section 14, Agent |

### Responsibility boundaries

- **Agent Status** represents the current state of an Agent.
- **Execution Progress** represents the progress of a specific execution.
- **Agent Activity** represents high-level Agent activity.
- **Tool Activity** represents an individual tool operation initiated by an Agent.
- **Agent Proposal** represents a proposed action, not an executed action.
- **Approval Request** requests human authorization before an action proceeds.
- **Execution Result** displays only a result whose success has been confirmed by the platform.
- **Execution Error** represents a failed execution and its available recovery path.
- **Cancellation Control** requests cancellation. It does not guarantee that cancellation has completed.
- **Human Handoff** represents transferring responsibility from the Agent to a human. It is different from requesting approval. The catalog row retains Scope Open and Status Open. This boundary does not approve the component, mark it Established, or decide that a transfer workflow exists.

Agent Message shows text the platform supplied. Execution Timeline shows the lifecycle the platform reported, in order. Neither component creates an identity, a memory, or a history the platform did not return. Voice transport stays Open, as section 16 already says.

### Lifecycle and state integrity

These rules restate section 16 for this family. They do not add a second status vocabulary.

- Proposed actions are not completed actions.
- Approval is not execution.
- Execution progress is not success.
- A cancellation request is not a confirmed cancellation.
- A closed dialog or panel does not imply approval or cancellation.
- The UI must never invent Agent identity, execution state, tool activity, timestamps, or results.
- The platform remains the source of truth for execution state and outcomes.

Failure stays distinct from cancellation. A visible control still does not imply permission. Section 16 and [frontend-rules.md](../frontend-rules.md) section 10.3.

### Relationships

Agent Status is the Agent’s current state. Agent Activity is the high-level work around that state. Tool Activity is one tool operation inside that work, not a substitute for Agent Status. Execution Progress belongs to one execution. It is not the Agent’s overall status, and it is not Execution Result.

Agent Proposal comes before any run. Approval Request is the human authorization step when the platform requires one. Neither is Execution Progress, Execution Result, or Execution Error. Human Handoff is not Approval Request. Handoff would transfer responsibility to a human. Approval asks a human to authorize an action that can then proceed. Human Handoff retains Scope Open and Status Open, so this relationship is not an approval to build that component.

Execution Result and Execution Error are terminal presentations of a platform outcome. Cancellation Control only requests a stop. Until the platform reports a cancelled outcome, the request is not Execution Result and it is not Execution Error. Execution Timeline orders the events the platform actually returned. Agent Message carries the words of that record. It does not advance the lifecycle by itself.

### Accessibility and RTL/LTR

Sections 9 and 10 apply. This family does not add sizes, shortcuts, token names, or props.

- Status, progress, success, failure, and cancellation are text, not color alone, weight alone, or size alone.
- Name, role, and state are exposed. Progress, success, and failure are announced without stealing focus on every minor refresh.
- Approval Request and Cancellation Control, when shown in a dialog, move focus into that dialog and back to the invoking control. Dismissing the dialog is not approval and is not cancellation.
- Persian RTL and English LTR both work. Prefer logical properties. Directional icons follow section 10. Agent Message isolates URLs, email addresses, phone numbers, and code the way section 10 already requires.
- The icon library stays Open. An icon-only control still has an accessible name.
- The target remains WCAG 2.2 Level AA. This family does not claim conformance.

---

## 18. Data-dense enterprise components

**Established.** Operational screens show exact amounts, quantities, stock, statuses, dates, and financial figures that the platform provides. Density is deliberate. Decoration does not compete with the figure. [design-system.md](design-system.md) section 2.

This section does not invent accounting, inventory, valuation, pricing, or order rules. FIFO, weighted average, IFRS, and marketplace names belong to the product boundary in the architecture. They are not component behavior.

**Established presentation duties.**

- Large datasets are paged or virtualized. The component does not render the entire set when a page is enough. [frontend-rules.md](../frontend-rules.md) section 11.2 and [design-system.md](design-system.md) section 7.
- Dense tables keep headers, row actions, filters, and an empty pattern. [design-system.md](design-system.md) section 6.
- Financial values, quantities, and status remain findable when columns collapse.
- Filtering and bulk actions are part of the pattern. The application owns the query, the selection’s server effect, and the permission to run a bulk action.
- Empty, loading, and error are separate. A permission failure is distinct from a validation error and from a server error. [design-system.md](design-system.md) section 14.
- The small-screen strategy is explicit. Horizontal overflow of the page is not that strategy.
- Monetary values, quantities, dates, and identifiers stay readable in both directions. The formatted value is provided to the component. [design-system.md](design-system.md) section 8.
- Tabular figures stay as [typography.md](typography.md) left them. Use them where the face provides them. Whether either approved face provides them, and how to enable them, is Open.
- Confirmed metrics only. A metric card does not display a sample revenue or a sample stock count as a real result.

**Proposed.** Data Table, Table Toolbar, Filter Builder, Column Visibility Control, Sort Control, Bulk Action Bar, Status Indicator, Metric Card, Key-Value Display, and Chart Container are the candidates for this duty. Their catalog status stays Proposed.

**Open.** Data Grid, Statistic, Timeline, and Activity Feed, as recorded in section 14. The chart library. The table library. The filter expression language.

---

## 19. Forms and validation

**Established.** Forms use React Hook Form with Zod where validation is required. [frontend-rules.md](../frontend-rules.md) section 9.1. That is the form stack. It is not a license for a shared component to encode a business schema.

**Established.**

- A workflow shows the step, the required fields, and the consequence of submission. [design-system.md](design-system.md) section 6.
- Validation appears with the field. The message says what is wrong.
- Labels, help, and errors stay associated with the control in both directions.
- Multi-step work keeps completed steps distinguishable from the current step.
- An agent-started operation uses the same field and confirmation patterns as a human-started one when the operation is the same.
- Success is shown only after confirmation.
- User input is validated. Unsafe HTML is not rendered. API data is untrusted. [frontend-rules.md](../frontend-rules.md) section 10.4.
- A password field, if implemented, does not store credentials in insecure browser storage and does not invent an authentication mechanism. [frontend-rules.md](../frontend-rules.md) section 10.2.

**Proposed.** Form Field, Input Group, Search Field, Date Picker, Number Input, Currency Input, Password Input, Multi-select, Form Section, and Validation Message.

**Open.** File Upload. The calendar. The currency. The numeral formatter. The internationalization library. Exact field props.

Zod schemas that express a business rule live with the feature that owns the rule. A shared field displays the message it is given.

---

## 20. Feedback, overlay, and navigation

**Established.** The interface gives feedback for user actions, API requests, validation errors, background operations, failed operations, and completed operations. It does not silently ignore a failure. [frontend-rules.md](../frontend-rules.md) section 5.3.

**Established.** Every API-dependent surface can show loading, success, an empty response, a validation error, an authentication error, a permission error, a network error, and a server error. [frontend-rules.md](../frontend-rules.md) section 9.4.

**Established.** Destructive actions require confirmation that states the consequence. [frontend-rules.md](../frontend-rules.md) section 5.4.

**Established.** Navigation is predictable and reflects permissions the person actually has. The design system defines navigation patterns. It does not define Admin’s module list or a storefront’s page tree. [design-system.md](design-system.md) section 6.

**Established.** Elevation roles include base, sticky, dropdown, overlay, and transient notice. Numeric z-index is not set. [design-system.md](design-system.md) section 4. A toast or dialog uses those roles once the values exist. It does not invent a private stacking scale.

**Proposed.** The Feedback and Navigation candidates in section 14 whose status is Proposed, including Alert, Toast, Dialog, Alert Dialog, Popover, Empty State, Error State, Loading State, Progress Indicator, Tabs, Pagination, Dropdown Menu, Navigation Menu, Sidebar Navigation, and Stepper.

**Open.** Drawer, Context Menu, Breadcrumbs, and Command Menu. Whether an unauthorized action is hidden, disabled, or shown with an explanation, beyond the requirement that a forbidden attempt is distinguishable. [design-system.md](design-system.md) section 16.

---

## 21. Documentation requirements

**Established.** Documentation matches what is approved. A written specification is not evidence that a screen works. [design-system.md](design-system.md) section 15.

Before a catalog candidate is implemented, its own note must exist and must use the template below. This file is that gate. It is not a filled template for every row. Exact props, sizes, and tokens stay Open until that note is approved. `development/component-guidelines.md` exists as the component implementation guide. It complements the catalog in this file. It is not a restatement of the catalog, and it is not a substitute for the template. The file is written and uncommitted. It is not an approved final decision.

Required headings:

1. **Name.** The display name, and the kebab-case folder name once implementation is approved.
2. **Purpose.** The one job the component does.
3. **Layer.** Primitive, Composite, or Pattern.
4. **Ownership.** `packages/ui`, another approved shared package, or one application. Builder editor chrome names `apps/builder`.
5. **Use cases.** The tasks it supports, without turning a module workflow into the component.
6. **When not to use.** The neighboring component that should be used instead, when one exists.
7. **API responsibilities.** What the caller provides and what the component renders. No invented prop names. Types follow [frontend-rules.md](../frontend-rules.md) section 8.3 once the API is approved.
8. **Variants.** The approved variants, or Open.
9. **Sizes.** The approved sizes, or Open. No numeric size is implied by this template.
10. **States.** Which states from section 8 can occur.
11. **Slots.** The composition points, or Open. Slot names are not invented here.
12. **Keyboard interaction.** The keyboard behavior required by section 9. Specific shortcuts stay unlisted until approved.
13. **Accessibility semantics.** Name, role, and state. The WCAG 2.2 AA target. No conformance claim.
14. **RTL and LTR.** Direction, logical properties, and mixed-content isolation.
15. **Responsive behavior.** The five viewport categories. What changes when the width shrinks. Pixel breakpoints stay Open until approved.
16. **Token dependencies.** The token categories it consumes, pointing at [colors.md](colors.md), [typography.md](typography.md), or [design-system.md](design-system.md). Concrete token identifiers stay Open until those files approve them.
17. **Testing requirements.** The checks in section 22 that apply to this component.

A note that invents a prop, a pixel size, a token name, a shortcut, or a library dependency is not an approved note.

---

## 22. Testing and quality

**Established.** [frontend-rules.md](../frontend-rules.md) section 16 and [frontend-architecture.md](../architecture/frontend-architecture.md) section 10.

- Unit tests for components once tests are part of the work.
- Integration tests for component, state, and API interaction when that interaction exists.
- End-to-end tests for important workflows. The first workflows are Open.
- RTL and LTR.
- Mobile, tablet, and desktop, and the laptop and large-desktop categories required by [frontend-rules.md](../frontend-rules.md) section 6 and [design-system.md](design-system.md) section 7.
- Loading, empty, error, long text, and large data sets.
- TypeScript checks. A type error is not bypassed to make a build pass.
- Agent statuses in [design-system.md](design-system.md) section 14, when the component shows agent work.
- Light and dark, when both exist.

**Proposed, not installed.** Vitest, React Testing Library, and Playwright. [frontend-rules.md](../frontend-rules.md) section 2.2. This file does not make them mandatory and does not choose a replacement.

**Established.** A component is not complete because a file exists. It is complete when the required checks have been run. [frontend-rules.md](../frontend-rules.md) section 16.6. Shared changes need an impact look across Company Website, Admin, Builder, and Storefront. [frontend-rules.md](../frontend-rules.md) section 23.

**Open.** Visual-regression tools and the first automated workflows. [design-system.md](design-system.md) section 16.

---

## 23. Open decisions and future extensions

This file does not choose the following. Later work may add an approved component note without changing the layer rules.

- Every catalog row marked Open, including its existence, layer, and owner.
- Exact props, variants, sizes, slots, and keyboard shortcuts.
- Numeric spacing, sizing, radius, border, shadow, motion, elevation, and breakpoint values.
- Token prefix, file format, and Tailwind mapping.
- Default theme mode, and whether light and dark both ship.
- The icon library. Lucide stays Proposed.
- Table and chart libraries. TanStack Table and Apache ECharts stay Proposed.
- The calendar, the currency, numeral formatting, tabular-figure support, and the internationalization library.
- The filter expression language and the Data Grid question.
- Admin’s module map and any application’s navigation inventory.
- Which page blocks are shared, and whether the two page targets share a schema, a registry, or a publish pipeline.
- White-label mechanism, override allowlist, and tenant host resolution.
- Whether an unauthorized action is hidden, disabled, or shown with an explanation.
- Agent transport, voice, multi-agent orchestration, history storage, cancellable operations, and safe retries.
- Package versioning and deprecation mechanics. [design-system.md](design-system.md) section 15 leaves the scheme unresolved. Removal of a shared component waits until a replacement exists.
- Test tools and the first end-to-end workflows.

Future components enter through the reuse order in section 4. A new shared component updates this catalog only after the shape is approved. A local workflow stays in the owning application and does not need a catalog row here unless it becomes shared.

---

## 24. Conflicts this file does not resolve

These differences are in the sources. This specification records them. It does not pick a winner.

1. **State lists.** [frontend-rules.md](../frontend-rules.md) section 4.3 and [frontend-architecture.md](../architecture/frontend-architecture.md) section 2.5 require default, hover, focus, active, disabled, loading, error, success, and empty. [design-system.md](design-system.md) section 10 also requires Selected and Read-only. Both lists stand.
2. **Package examples.** [frontend-rules.md](../frontend-rules.md) section 3.2 lists illustrative package names. [frontend-architecture.md](../architecture/frontend-architecture.md) section 2.3 approves four initial packages. This file follows the architecture list.
3. **Naming of the component foundation.** The rules say shadcn/ui. The architecture says shadcn. This file treats them as one Established foundation and does not rename either document.
4. **API client.** Architecture section 2.7 describes one centralized client as Established. Rules section 9.2 say the client architecture remains Open. Components still do not scatter HTTP calls.
5. **Icons.** Lucide is Proposed in the rules and the architecture. [design-system.md](design-system.md) section 16 leaves the icon library Open. This file selects neither.
6. **Tables and charts.** TanStack Table and Apache ECharts are Proposed. Catalog candidates for tables and charts do not adopt them.
7. **Color finality.** [colors.md](colors.md) marks many ramps and role maps Proposed. [design-system.md](design-system.md) section 16 still lists final color values as unresolved. Components do not treat Proposed color values as Established.
8. **Viewport test list.** Rules section 16.4 names mobile, tablet, and desktop. Rules section 6 and design-system.md section 7 also require laptop and large desktop. Pixel widths stay Open.
9. **Guidelines file.** `component-guidelines.md` exists as the component implementation guide. It complements the catalog in this file. It is not a restatement of the catalog. The file is written and uncommitted. It is not an approved final decision. The four application files are empty. They neither confirm nor contradict a catalog row.

---

## 25. Decision index

### Established

- Layers: Primitive, Composite, and Pattern, with the meanings in section 3.
- Shared application-agnostic primitives and composites belong in `packages/ui`. Cross-application patterns may be shared. Application workflows stay in the owning app.
- Applications do not import applications. Shared packages do not import applications.
- Components do not own business logic, authorization, API contracts, or business data. They do not scatter HTTP calls.
- React, TypeScript, Tailwind CSS as the styling foundation, and shadcn/ui as the component foundation.
- Zustand, TanStack Query, React Hook Form, and Zod keep the responsibilities in architecture section 2.7.
- Persian and English, RTL and LTR, logical properties, and the typography and color files as the value sources.
- WCAG 2.2 AA is the target. This file does not claim conformance.
- Viewport categories: mobile, tablet, laptop, desktop, and large desktop. Pixel widths stay Open.
- Interaction states in section 8, including both source lists.
- Agent meanings in section 16: proposal is not execution, pending is not completed, loading is not success, success needs confirmation, failure is explicit, cancellation is distinct from failure, human approval is distinct from execution, and visibility is not permission.
- Agent Interaction Components, in section 17, is an Established family in the Joorweb Design System architecture. It names the twelve Agent catalog rows. It is not a layer, a scope, or a status. Family membership does not automatically determine component Scope. Eleven of the components currently have Scope Shared. Human Handoff retains Scope Open and Status Open. The family being Established does not make any individual component Established and does not approve its implementation.
- Frontend permissions affect visibility only. Backend authorization is the boundary.
- The documentation template in section 21 is required before implementation.
- Builder editor controls in section 14 are not Shared page blocks.

### Proposed

- The catalog rows marked Proposed in section 14. They are candidates, not built components.
- TanStack Table, Apache ECharts, Lucide, Vitest, React Testing Library, and Playwright, already Proposed in the rules and the architecture. This file does not promote them.

### Open

- Every catalog row marked Open. Human Handoff keeps Scope Open and Status Open. Section 17 does not resolve it.
- Props, variants, sizes, slots, shortcuts, and concrete token identifiers.
- The items listed in section 23.
- The source conflicts in section 24.
