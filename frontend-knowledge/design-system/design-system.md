# Joorweb Design System

Joorweb is an Enterprise-Grade AaaS platform. This document defines how that platform presents itself. It does not choose brand values, and it does not change the frontend architecture.

Color values belong in [colors.md](colors.md). Typography values belong in [typography.md](typography.md). The component catalog belongs in [components.md](components.md). Those files are specialized. This file does not fill them.

The established frontend architecture still holds. Company Website and Storefront render published pages. Builder is the shared editor for the corporate website and for customer storefronts. Puck is the visual editing layer only. It does not own business logic or the canonical Page Schema. Applications do not depend on one another. Shared packages do not depend on applications. There are no circular dependencies.

A panel-login palette recorded in the architecture is a visual reference for that login only. It is not the global brand and it is not a token in this system.

---

## 1. Purpose & Scope

The design system is the shared interface foundation for Joorweb. It keeps Company Website, Admin, Builder, and Storefront recognizably one product while each application keeps its own job.

It owns presentation and interaction that must stay consistent:

- Visual language, once values are approved.
- Token structure.
- Component appearance, composition, and interaction states.
- Layout patterns for shells, dense operational screens, and public pages.
- Direction-aware behavior for Persian and English.
- How themes are inherited and how far an organization may override them.
- How an agent’s work is shown, including status, approval, progress, result, failure, and cancellation.

It does not own:

- Business rules, accounting, inventory, pricing, or order truth.
- Authorization decisions, role assignment, or the permission model.
- Authentication implementation, API contracts, or base URLs.
- Page Schema, block registries, or publishing pipelines.
- Tenant host resolution, corporate domain identity, or environment topology.
- Agent transport, memory, or orchestration.
- The module map of Admin.

Frontend permission checks change what a person sees. They are not the security boundary. Backend authorization remains responsible for whether an operation is allowed. Hiding a control does not secure the operation.

The system must serve more than one organization, fine-grained permissions, audit, multi-tenant storefronts, white-label presentation, and both small shops and large operational teams. Scale is a design constraint, not a later theme.

This is a greenfield system. Visual language is not taken from a legacy application.

---

## 2. Design Principles

**Enterprise-first.** Joorweb is an Enterprise-Grade AaaS platform, not a conventional storefront theme. CRM, ERP, finance, warehouse, orders, marketing, and the agent share one interface standard. Public pages use the same foundations with a different density.

**Consistency.** The same purpose uses the same appearance, behavior, spacing, type, accessibility, and responsive behavior. Status is never communicated by color alone.

**Scalability.** Screens must remain usable from a small shop to a large organization and a production operation, and across many organizations. Navigation, tables, and dashboards must accept more modules and more data without a new visual system.

**Reusability.** Build a component once and use it wherever the job is the same. Application-specific workflows stay in the application that owns them.

**Accessibility.** The target is WCAG 2.2 Level AA. Keyboard use, visible focus, semantics, contrast, and screen-reader names are part of the component, not a later pass.

**Data clarity and density.** Operational screens show exact amounts, quantities, stock, statuses, dates, and financial figures. Density is deliberate. Decoration does not compete with the figure. Placeholder numbers are never shown as real results.

**Operational efficiency.** Frequent work stays close at hand. Filters, tables, forms, and agent actions have predictable placement. Important actions are identifiable. Destructive actions require confirmation that states the consequence.

**User control and transparency.** A person can tell what will happen, what is happening, and what did happen. An agent proposal is not an authorization. A pending operation is not a result. Completion is shown only after the real outcome is confirmed.

**AI-native interaction.** The agent is a first-class way to operate the platform, not a chat widget attached to a traditional panel. Human workflows and agent workflows coexist. Either path can start the same business operation, and both must show the same truth.

---

## 3. Design Architecture

The design system sits beside the four applications. It does not become a fifth application, and no application imports another application to reuse interface pieces.

**Shared foundations** are the tokens, primitives, composites, and patterns that more than one application needs, plus the rules for direction, theme, state, and agent status. They live in shared capabilities. They do not contain an application’s business workflow.

**Application-specific extensions** are layouts and components whose meaning belongs to one application. Admin’s operational density, Builder’s editing canvas, and the public page frame of Company Website or Storefront are extensions. They use the shared foundations. They are not copied into the other applications by default.

**Boundaries**

| Application | What it uses the system for | What it does not own |
|---|---|---|
| Company Website | Presentation of published corporate pages | Editing those pages, Page Schema, publishing |
| Admin | Management screens, dense data, permissions as shown, agent operations | Authorization itself, business data, the module map |
| Builder | Editor chrome for corporate pages and customer storefront pages | The canonical Page Schema, business logic, public rendering |
| Storefront | Presentation of published customer storefront pages | Editing those pages, tenant host resolution |

Builder edits and manages both kinds of page. Company Website renders published corporate pages. Storefront renders published customer pages. Draft, preview, and published stay visually distinct. Preview must not look like the published site without an explicit preview indication.

Puck may draw the editing surface inside Builder. The design system styles that surface and the shared blocks. Puck’s internal document is not the page model and not the source of visual truth for published pages.

Shared blocks and application-specific blocks may both exist. Whether corporate pages and storefronts share one schema, one registry, or one publish pipeline is not a design-system decision. A shared block that both renderers can show must use this system. An application-specific block must not be required by the other application.

The panel-login reference palette does not cross these boundaries.

---

## 4. Design Tokens

Tokens are the only approved way to express reusable visual decisions. Components do not hardcode one-off colors, sizes, or shadows. Final values are not set in this document.

Names are semantic. A name describes role, not a raw value and not a legacy screen. The naming shape is `{category}.{role}.{modifier}` when a modifier is needed. The concrete prefix, file format, and the mapping onto Tailwind are unresolved. Tailwind and shadcn are the established styling system. CSS Modules are not a second system.

Categories, and what each one names:

- **Color.** Brand, semantic (information, success, warning, danger), surface, text, and border roles. Values are specified only in [colors.md](colors.md).
- **Typography.** Family roles, size roles, weight roles, and line-height roles for Persian and English. Values are specified only in [typography.md](typography.md).
- **Spacing.** A single scale for inset, gap, and stack. No extra one-off steps inside a component.
- **Sizing.** Control heights, icon slots, and touch targets. Numeric minimums are not chosen here.
- **Radius.** A short scale from sharp to round. Components pick a role, not an arbitrary radius.
- **Borders.** Width and style roles tied to color tokens. No separate undocumented border color.
- **Shadows.** A short scale for resting, raised, and overlay surfaces. Shadows that do not match the scale are not allowed.
- **Motion.** Duration and easing roles for state change. Decorative motion is not a token consumer. Reduced-motion preferences override visible motion.
- **Elevation.** Stacking roles, such as base, sticky, dropdown, overlay, and transient notice. Numeric z-index is a value, and it is not set here.
- **Breakpoints.** Named viewport roles only. Pixel thresholds are not set here. The roles must cover the categories in section 7.

Token names do not include an organization name, a tenant name, or a marketing campaign. Organization overrides, when allowed, reassign values. They do not invent a parallel naming scheme.

---

## 5. Visual Language

The visual language must read as a serious operating system for business: calm, current, and precise. It must carry financial figures, warehouse quantities, and agent status without ornament.

Responsibilities:

- Define how surfaces, type, and emphasis create hierarchy.
- Keep operational screens denser than public marketing pages without looking like a different product.
- Reserve strong emphasis for primary actions, current selection, and true status.
- Treat illustration, iconography, and motion as functional. If they do not explain state or action, they are omitted.

Principles:

- One purpose, one treatment.
- No arbitrary color, no excessive gradient, no inconsistent shadow, no decorative control that does nothing.
- Status uses text or an equivalent non-color cue together with any color.
- Empty, loading, and error views explain the situation and the next useful step.
- Real metrics appear only after the platform confirms them.

This section does not select brand colors, font families, an illustration style, or an icon library. Those choices are unresolved. Icon buttons still need an accessible name even before a library is chosen. The component shapes that use icons are catalogued in [components.md](components.md), not here.

---

## 6. Layout System

Layouts are patterns. They are not a new application structure.

**Shells.** Each application has a shell: the stable frame around the task. Public shells for Company Website and Storefront prioritize the published page. Admin’s shell prioritizes repeated operational work. Builder’s shell prioritizes the canvas, the selected block, and page status (draft, preview, or published). Shells share tokenized spacing and type. They do not share one information architecture.

**Navigation.** Navigation is predictable and reflects permissions the person actually has. Items the person must not discover can be omitted only when omission will not hide the reason an expected task is unavailable. The design system defines navigation patterns. It does not define Admin’s module list or a storefront’s page tree.

**Content regions.** A screen separates primary work, supporting context, and transient feedback. Feedback does not cover the figure the person is checking unless the situation is blocking.

**Dashboards.** A dashboard summarizes confirmed data and offers the next operational step. It is not a place for sample revenue. Large dashboards must tolerate many cards or sections without inventing a second grid system.

**Dense operational UI.** Admin, and any other management surface, may use compact type, compact tables, and persistent filters. Density is a layout mode on the same tokens, not a separate theme with its own colors.

**Data-heavy screens.** Tables and lists paginate or virtualize large sets. The design system owns row, header, filter, and empty patterns. The application owns the query. Wide data needs a defined small-screen strategy. Horizontal page overflow is not that strategy.

**Forms and workflows.** A workflow shows the step, the required fields, and the consequence of submission. Validation appears with the field. Multi-step work keeps completed steps distinguishable from the current step. An agent-started workflow uses the same field and confirmation patterns as a human-started one when the operation is the same.

---

## 7. Responsive Design

Every application supports responsive layout. Required viewport categories are mobile, tablet, laptop, desktop, and large desktop. Pixel widths for those categories are not set here.

Do not design only for desktop. Avoid fixed widths where the layout can flex. Prevent horizontal overflow of the page. Images and media scale. Touch targets on touch devices stay large enough to use. Dialogs and forms remain usable on mobile.

**Complex operational interfaces.** Admin tables, filters, and bulk actions need an explicit small-screen arrangement: stacked filters, a row summary that keeps the identifying columns, and actions that remain reachable. A desktop grid must not be the only way to finish a task.

**Large datasets.** Do not load or render an entire large set when a page of it is enough. The interface shows loading, empty, and error for each request. Column priority is part of the pattern so that monetary values, quantities, and status remain findable when columns collapse.

Public pages and the Builder canvas also reflow. Builder’s canvas may offer a viewport preview. That preview is an editing aid. It is not the published site, and it is not a substitute for responsive behavior in Company Website and Storefront.

Responsive behavior is tested at more than one width, in both Persian RTL and English LTR.

---

## 8. RTL & LTR Support

Persian (RTL) and English (LTR) are first-class. Direction is part of the layout model, not a patch. The interface must change language without breaking layout or task flow. The internationalization library is not chosen.

**Direction-aware layouts.** Prefer logical properties: inline start and end, not physical left and right. Navigation, padding, icons that point “forward,” and the attachment of popovers follow the active direction. A component that works in only one direction is incomplete.

**Bidirectional content.** A Persian paragraph may contain an English term, a URL, an email, a phone number, a product code, or a code snippet. Those runs are isolated so they keep their own direction. Punctuation stays with the run it belongs to.

**Mixed language.** Labels, errors, and agent messages must be able to render either language. Do not assume a string is short, or that it is Latin.

**Numbers and financial values.** Quantities, money, dates, and identifiers stay readable and correctly ordered in both directions. The design system does not invent a currency or a calendar. It requires that the formatted value, once provided, aligns and isolates correctly. Financial figures use tabular figures where the type face provides them. The face itself is not chosen here. See [typography.md](typography.md).

**Forms and tables.** Labels, help, and errors stay associated with the field in both directions. Table headers and numeric columns align in a way that survives direction change. Sort indicators and row actions mirror with the direction.

**Icons and directional controls.** Icons that imply direction mirror in RTL. Icons that depict an object or a sign do not mirror if mirroring would change their meaning. The icon library is not chosen.

---

## 9. Component Architecture

Components are classified in three layers. The catalog of actual components is [components.md](components.md). This section defines only the layers and the ownership rules.

**Primitive.** One behavior, no business meaning. Examples of the class, not an approved inventory: button, text input, checkbox, spinner. A primitive owns its style and lives in its own folder. It has no knowledge of invoices, stock, or agents.

**Composite.** Primitives assembled for a repeated interface job that is still not an application workflow. Examples of the class: labeled field, dialog, menu, page header. Composites are how forms and overlays stay consistent.

**Pattern.** A composite arrangement for a recurring task shape: a filterable data region, a confirmation step, an agent execution summary. A pattern describes structure and states. It does not call an API and it does not encode one module’s process.

**Ownership.** Primitives and cross-application composites belong to the shared UI capability. Patterns that more than one application needs are shared. A pattern that is only one application’s workflow stays in that application.

**Reuse.** Before adding a component, search the shared set and the application. Prefer an existing component, then an extension, then a new shared component when several applications need it, then an application-specific component when the job is local.

**Composition.** A page only composes components. A module holds data and behavior and has no appearance. Components do not reach into another application.

**Extension.** Extend by variant, slot, or composition. Do not copy a component into another application to change one detail. Do not split every small fragment into its own component.

**Application-specific components.** Allowed when the responsibility is specific to Company Website, Admin, Builder, or Storefront. They still use shared tokens, states, direction rules, and accessibility rules. Builder blocks follow the same split: shared blocks are reusable capabilities; application-specific blocks stay with the target that needs them. Which blocks are which is unresolved.

---

## 10. Component States

Interactive components implement every state that applies to them. Shipping only the default state is incomplete.

Required state vocabulary:

- **Default.** Resting, available.
- **Hover.** Pointer is over an enabled control.
- **Focus.** Keyboard or programmatic focus is visible. Focus appearance is not color alone.
- **Active.** The control is being pressed or is the current momentary action.
- **Selected.** The item is the current choice and stays selected after the pointer leaves.
- **Disabled.** The control is unavailable. The reason is available to assistive technology when the person needs it.
- **Loading.** Work is in progress and the outcome is not known. Loading is not success.
- **Error.** The last attempt failed, or the value is invalid. The message says what is wrong.
- **Success.** The platform has confirmed the successful outcome. The interface does not show success earlier.
- **Empty.** There is nothing to show. The view says what the person can do next, if anything.
- **Read-only.** The value is visible and not editable. Read-only is not disabled. Disabled means the control itself is unavailable.

Not every control uses every state. A static heading has no hover. A control omits a state only when that state cannot occur.

Agent work uses these component states and the additional lifecycle statuses in section 14. A lifecycle status is not a second, conflicting visual language.

---

## 11. Accessibility

The target is WCAG 2.2 Level AA for all four applications, including Builder and agent interactions.

- **Keyboard.** Every action a pointing device can complete can be completed from the keyboard, except freehand drawing if a later, approved exception exists. No such exception is granted here. Focus order follows the task.
- **Focus.** Focus is always visible. It moves into dialogs and back to the invoking control. It does not become trapped except inside a modal that provides a close action.
- **Semantics.** Use semantic HTML. Headings stay in order. Form controls have labels. Icon-only controls have accessible names. Tables expose headers.
- **Contrast.** Text, meaningful icons, and focus indicators meet the target against the surfaces they sit on, including light and dark themes if both exist. Contrast values are checked when colors exist. Colors are not chosen here. See [colors.md](colors.md).
- **Screen readers.** Name, role, and state are exposed. Status changes that matter, including agent progress, success, and failure, are announced. Color is never the only signal.
- **Dynamic interactions.** Loading, empty, error, and live agent updates are announced without stealing focus on every minor refresh. Reduced motion is respected. Toasts and validation errors are reachable and dismissible.

Accessibility is checked in Persian RTL and English LTR.

The design system owns these interaction requirements. It does not own the legal text of a consent record or the server’s authorization result.

---

## 12. Theming & Branding

Theming is a controlled layer on top of tokens. It is not a separate design system per customer.

**Shared themes.** All applications start from the same token names and the same component behavior. A theme assigns values. It does not rename tokens and it does not remove a state.

**Light and dark.** The system must be able to represent light and dark appearances. Which mode is the default, and whether both are offered in every application at first release, is unresolved. A mode switch, if present, must not drop contrast or direction support.

**Brand customization.** Brand color and related emphasis may vary by organization only through tokens that are explicitly overridable. Not every property is customizable. Layout behavior, accessibility behavior, agent status meaning, and permission presentation are not brand options.

**White-label.** Representatives may present the whole system under their own brand. The design system must allow an organization-level visual configuration to inherit the shared theme and override only the allowed tokens. The mechanism, the allowlist, and how a representative brand is applied are unresolved. White-label does not fork the applications.

**Organization visual configuration.** Configuration is data applied to tokens. It is not a second stylesheet maintained inside one application. Storefront presentation and the corporate website must not silently share one organization’s brand unless that configuration says so. How corporate identity is stored is unresolved.

**Inheritance and overrides.** Organization values inherit from the shared theme. An override replaces a value. It does not replace a component. An application may not locally redefine a global token. A local exception is allowed only when a shared token cannot express the case, and it must not become a private brand.

The panel-login palette remains outside this theme model.

---

## 13. Application Adaptation

Each application consumes the same foundations and keeps the responsibility already set in the architecture.

**Company Website.** Uses public layout, typography, and content patterns to render published corporate pages. It does not embed Builder and it does not edit pages. Draft and preview, if shown at all, are clearly not the published site. Marketing density is lower than Admin. The page frame still uses shared tokens so the corporate site belongs to Joorweb.

**Admin.** Uses dense shells, data patterns, forms, and agent patterns for management of the platform, including CRM, ERP, finance, warehouse, orders, marketing, and the assistant. It does not own the page editor. Its module list is not decided here. Permissions shown in Admin come from the authorization system. Admin does not invent them.

**Builder.** Uses editor patterns for both corporate pages and customer storefront pages: canvas, selection, properties, and a visible draft, preview, or published status. Shared blocks are styled by this system. Puck is only the editing layer. Published output is rendered by Company Website or Storefront, not by Builder. The two targets are not assumed to share one block set or one publish treatment.

**Storefront.** Uses commerce and content patterns to render published customer pages for many stores. It does not edit those pages. Tenant data and tenant theme must not leak across stores. How a host resolves to a tenant is not decided here. The design system only requires that the active tenant’s allowed theme and that tenant’s content are what the screen shows.

No application depends on another application for these adaptations. Shared pieces are taken from shared capabilities.

---

## 14. Agent Experience Design

The agent is an operational colleague inside the platform. It is not a chat bubble added to an otherwise human-only product. A person may type or speak. The design system does not choose the transport, the session model, or the memory mechanism. Those remain outside this document.

Human workflows and agent workflows coexist. The same business operation shows the same confirmation, the same permission limits, and the same confirmed result no matter which path started it.

### Identity and status

Every visible agent has an identity and a current status. Identity is whatever the platform confirms. The interface does not invent a persona, a memory, or a second authority. Status uses the lifecycle below, with text, not color alone.

If more than one agent is active, each is identifiable. The design system does not decide how many agents exist or how they are orchestrated.

### Status vocabulary

These statuses are distinct. The interface must not collapse them.

- **Proposal.** The agent has described an operation it could perform. Nothing has run.
- **Pending.** The operation is waiting. Typical reasons are missing information or a wait for a person. Waiting is not execution.
- **Authorized.** A person with the required permission has approved the operation. Approval is not completion.
- **Executing.** The operation is running. Progress is shown as progress, not as success.
- **Completed.** The platform has confirmed success. This word is reserved for that confirmation.

Failure and cancellation are terminal outcomes. They are not completed. A failed operation explains that it failed, gives the reason when one exists, and offers a recovery path. A cancelled operation shows that it was stopped, not that it succeeded and not that it failed for a technical reason, unless the platform reports an actual failure while stopping.

The engineering rules also require the narrative checkpoints of request received, request understood, missing information, confirmation when required, executing, completed or failed, and result presented. Those checkpoints map onto the statuses above. They do not add a second, quieter path that can skip approval or show success early.

### Execution lifecycle

1. The person asks, or the agent offers a proposal.
2. The interface shows that the request was received and how it was understood.
3. If information is missing, the status is pending and the missing fields are requested.
4. If the operation is sensitive, destructive, or otherwise requires approval, the status stays pending until authorization. The agent does not continue in silence.
5. After authorization, or immediately when no authorization is required, the status becomes executing.
6. The interface shows progress while work continues.
7. The interface shows completed, failed, or cancelled only when that is the real outcome, then presents the result or the recovery path.

A tool the agent uses is visible enough that the person can tell which class of action is underway. Tool names that leak secrets or internal credentials are not shown. The catalog of tools is not decided here.

### Permission boundaries

The agent acts only within the permissions of the person and the organization. The interface shows the boundary in human language: what the agent is allowed to do in this context, and what it will not do. The design system draws that explanation. The backend decides the permission.

A control hidden because of permissions is not proof of security. If a person attempts a forbidden operation, the interface shows a permission failure distinctly from a validation error and from a server error.

### Human approval

Sensitive and irreversible operations require an explicit human approval step before the status can become authorized. The approval states the action and its consequence. Dismissing the dialog is not approval. Approval is recorded in the way the platform’s audit requires. This document does not define the audit storage.

Irreversible work includes deletions and other high-impact changes already covered by the product’s confirmation rules. The agent does not get a weaker rule than a human using a form.

### Results, errors, and recovery

The result view shows what changed, in the same units the module uses for money, quantities, and dates. It appears after confirmation from the platform. If the operation fails, the interface does not leave a success state in place. Recovery is a real next step: correct the input, retry when retry is safe, or return to the module. The design system does not decide which operations are safe to retry.

### History and audit

Authorized people can review past agent operations: who asked, what was proposed, whether it was authorized, and how it ended. History is presentation. The audit record is the platform’s responsibility. The interface does not invent history the platform did not return.

### Agent to module

An operation shows which module it targets. The agent may move work into CRM, ERP, finance, warehouse, orders, marketing, or another confirmed module. The design system supplies the pattern for “this action concerns that module.” It does not create the module list. When the operation changes data, the module’s own screens must be able to show the same confirmed result.

### Interruption and cancellation

A person can request cancellation while an operation is pending or executing, when the platform can still stop it. The interface shows the request and then the real outcome. If the platform cannot stop it, the interface says so and continues to show executing until the real outcome arrives. Closing a panel is not cancellation.

### What this section does not decide

Transport, streaming, voice pipeline, multi-agent coordination, and the persistence of history are unresolved. The design system only fixes the meanings a person must be able to see.

---

## 15. Governance

The design system is centrally governed. An application team does not change a global token, a shared component, or a foundational rule on its own.

**Decisions.** A global change records why it is needed, which applications it affects, and whether an existing token or component already solves it. Company Website, Admin, Builder, and Storefront are all in that check. Significant design decisions use the same discipline as architecture decisions: problem, proposed solution, reasoning, alternatives, affected applications, dependencies, compatibility, migration, and testing. Undecided items stay open.

**Contribution.** New shared work enters through the shared capability, not through a copy in one application. Search existing components and tokens first.

**Documentation.** This file is the overview. [colors.md](colors.md), [typography.md](typography.md), and [components.md](components.md) hold the specialized decisions when those decisions exist. Documentation matches what is approved, not what is hoped for. Knowledge files remain Markdown.

**Consistency.** A shared component keeps one appearance and one behavior in every application that uses it. Local exceptions do not redefine the global rule.

**Versioning and deprecation.** Shared components and tokens need a versioning and deprecation policy so a breaking visual change is announced and migrated. The versioning scheme itself is unresolved. Removal waits until a replacement exists and consumers have moved.

**Compatibility.** A change to a shared token or component is a cross-application change. It must not break direction, contrast, keyboard behavior, or an application build. Breaking changes need an explicit migration note and approval.

**Design and engineering.** Design does not specify a second styling system. Engineering does not invent tokens inside a feature. Component structure stays the established one: a component owns its style and lives in its own folder, a page composes components, and a module has no appearance.

**QA.** Shared work is reviewed for RTL, LTR, the viewport categories, loading, empty, error, long text, large data sets, light and dark when both exist, and the agent statuses in section 14. The test tools and the first workflows to automate are unresolved. A written specification is not evidence that a screen works.

---

## 16. Open Decisions

These items are unresolved. This document does not choose them.

- Final color values, font families, font sizes, and the illustration style.
- The icon library.
- Numeric values for spacing, sizing, radius, border width, shadow, motion, elevation, and breakpoints.
- The token identifier prefix, file format, and the mapping from tokens onto Tailwind.
- The default theme mode, and whether light and dark both ship in every application initially.
- The allowlist of theme properties an organization may override.
- The white-label mechanism and how a representative brand is applied.
- How organization visual configuration is stored and applied.
- How corporate website identity, domains, environments, and permissions are represented.
- How a customer storefront host resolves to a tenant.
- Whether corporate pages and storefronts share one Page Schema, one block registry, and one publishing pipeline, and which blocks are shared.
- Admin’s module map and navigation inventory.
- Whether an unauthorized action is hidden, disabled, or shown with an explanation, beyond the requirement that a forbidden attempt is distinguishable.
- The internationalization library.
- Agent transport, voice pipeline, multi-agent orchestration, and history storage.
- Which operations may be cancelled, and which retries are safe.
- The design-system package name, path, and versioning scheme.
- Testing priorities and the tools used to automate visual regression.

The panel-login palette is not an open brand decision. It is already limited to that login, and it is not a candidate for the global token set.
