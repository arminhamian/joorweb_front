# Joorweb Component Guidelines

This file is the implementation standard for Joorweb components. It tells an implementer how to build a component that already belongs in the design system. It does not replace the specification.

The catalog, the layers, and the Agent Interaction Components family stay in [components.md](../design-system/components.md). Color stays in [colors.md](../design-system/colors.md). Typography stays in [typography.md](../design-system/typography.md). This file does not restate the 90-row catalog, the color ramps, or the type scale.

Application boundaries, package layout, and Puck stay in [frontend-architecture.md](../architecture/frontend-architecture.md) and [project-structure.md](../architecture/project-structure.md). Mandatory engineering rules stay in [frontend-rules.md](../frontend-rules.md). Vocabulary stays in [TERMINOLOGY.md](../TERMINOLOGY.md).

**Established** means a decision the source documents already made, or a rule this file repeats from those documents. **Proposed** means a recommendation that is not approved and not installed. **Open** means a decision is still required. This file does not promote a Proposed or Open item to Established.

Nothing in this file is a package dependency, a React component, or a shipped API. Examples are illustrative only when they restate an approved rule.

---

## 1. Purpose, scope, and governing principles

Joorweb is an enterprise-grade AaaS (Agent as a Service) platform. It is not SaaS.

**Conflict, recorded and not resolved.** [frontend-architecture.md](../architecture/frontend-architecture.md) section 2.1 says Joorweb is an AaaS platform and that the acronym is not expanded. [frontend-rules.md](../frontend-rules.md) section 1 and [design-system.md](../design-system/design-system.md) section 1 use AaaS without expanding it. The design system writes “Enterprise-Grade AaaS.” [TERMINOLOGY.md](../TERMINOLOGY.md) expands the first explanatory occurrence as Agent as a Service (AaaS) and says not to relabel Joorweb as SaaS. This file uses the expansion “Agent as a Service” and the words “not SaaS” because this document was instructed to say them. It does not edit the architecture, and it does not close the disagreement.

**Established.** These guidelines apply to Company Website, Admin, Builder, and Storefront, and to the shared packages those applications consume. [frontend-rules.md](../frontend-rules.md) section 1. [design-system.md](../design-system/design-system.md) section 1.

**Established principles.** They restate the sources. They do not add a product principle.

- The same job uses the same appearance, behavior, states, spacing, type, accessibility, and responsive behavior. [frontend-rules.md](../frontend-rules.md) section 4.2.
- A shared primitive has no business meaning. It does not know invoices, stock, prices, or agents. [design-system.md](../design-system/design-system.md) section 9.
- Search before adding. Reuse, then extend, then add a shared component when more than one application needs the same responsibility, then keep a local component when the job is local. [frontend-rules.md](../frontend-rules.md) section 22.
- A page composes components. A module holds data and behavior and has no appearance. [frontend-architecture.md](../architecture/frontend-architecture.md) section 2.5.
- Status is never color alone, weight alone, or size alone. [design-system.md](../design-system/design-system.md) section 2. [typography.md](../design-system/typography.md) section 13.
- Success follows platform confirmation. Loading is not success. A proposal is not an execution. [design-system.md](../design-system/design-system.md) section 14.
- Frontend permission checks change what a person sees. They are not the security boundary. [frontend-rules.md](../frontend-rules.md) section 10.3.

This file does not own business rules, authorization, API contracts, Page Schema, tenant resolution, white-label mechanism, or agent transport. [components.md](../design-system/components.md) section 1.

---

## 2. Component architecture

**Established.** Implement in three layers. [design-system.md](../design-system/design-system.md) section 9. [components.md](../design-system/components.md) section 3.

| Layer | What the implementation is | What it must not become |
|---|---|---|
| Primitive | One behavior, no business meaning. It owns its style and lives in its own folder. | A workflow, an API client, or a module. |
| Composite | Primitives assembled for a repeated interface job that is still not an application workflow. | A copy of one application’s process. |
| Pattern | Structure and states for a recurring task shape. | A caller of an API, or the owner of one module’s process. |

A page only composes components. A component does not reach into another application. Extend by variant, slot, or composition. Do not copy a component into another application to change one detail. Do not split every small fragment into its own component. [components.md](../design-system/components.md) section 3.

The examples of each class in the design system are not an approved inventory. The catalog of candidates is [components.md](../design-system/components.md) section 14. This file does not add a row to it.

**Established.** React and TypeScript are the UI library and language. Tailwind CSS is the styling foundation. shadcn/ui is the component foundation in the rules. The architecture names that same system “Tailwind and shadcn.” CSS Modules are not a second styling system. [frontend-rules.md](../frontend-rules.md) section 2.2. [frontend-architecture.md](../architecture/frontend-architecture.md) section 2.5. The two names are one foundation. Which spelling is canonical stays unresolved. Section 23.

**Established.** Puck is the visual editing layer inside Builder only. It does not own business logic or the canonical Page Schema. Public renderers do not depend on Puck. [frontend-architecture.md](../architecture/frontend-architecture.md) sections 2.4 and 2.8.

---

## 3. Where to implement

**Established.** Scope in the catalog is Shared, Builder, or Open. [components.md](../design-system/components.md) section 13. Family membership does not set Scope.

**Shared.** Application-agnostic primitives and composites belong in `packages/ui`. A pattern that more than one application needs may be shared. [project-structure.md](../architecture/project-structure.md) section 5.1. [design-system.md](../design-system/design-system.md) section 9.

Shared implementation stays independent of Builder-only needs. A shared component does not import Builder, does not import Puck, and does not require an editor-only control in order to render. Public Company Website and Storefront must be able to use a shared component without the editor.

**Builder.** Editor chrome stays in `apps/builder`. It is not Shared, and it is not a `packages/page-blocks` entry. Puck adapters and editor-only configuration stay there. [project-structure.md](../architecture/project-structure.md) section 5.4. [components.md](../design-system/components.md) section 14.

**Open.** When the catalog says Scope Open, this file does not assign an owner. Do not place that component in `packages/ui` or in `apps/builder` and call the placement approved. Human Handoff is Scope Open and Status Open. Section 15.

**Established.** Applications do not import applications. Shared packages do not import applications. There are no circular dependencies. [project-structure.md](../architecture/project-structure.md) section 6.

**Conflict, recorded and not resolved.** [frontend-rules.md](../frontend-rules.md) section 3.2 lists illustrative package names, including `design-system`, `page-renderer`, `api-client`, `auth`, `permissions`, `i18n`, and `types`. [frontend-architecture.md](../architecture/frontend-architecture.md) section 2.3 approves four initial packages: `ui`, `design-tokens`, `page-schema`, and `page-blocks`. Implement against the architecture list. Do not create the illustrative packages because they were named. [project-structure.md](../architecture/project-structure.md) section 7 keeps the extra packages deferred.

A component is shared because more than one application needs the same responsibility, not because it could theoretically be reused. [project-structure.md](../architecture/project-structure.md) section 5.1.

---

## 4. File structure and naming

**Established.** [project-structure.md](../architecture/project-structure.md) sections 5.1 and 9. [components.md](../design-system/components.md) section 5.

- Directory and package names use lowercase kebab-case.
- Each component owns its style and lives in its own folder.
- In `packages/ui`, the folder is one component, with a public `index.ts`. A test file sits with the component when tests are added.
- Pages and routes compose. They do not hold domain logic.
- Business behavior stays in features, not in presentation components.
- Shared exports are intentional. Do not deep-import another package’s private source.

Catalog names in [components.md](../design-system/components.md) section 14 are display names. They are not file names, export names, or prop names. Choose a kebab-case folder only when implementation of that candidate is approved.

**Open.** Workspace package scope, and the versioning scheme. [design-system.md](../design-system/design-system.md) section 16. [project-structure.md](../architecture/project-structure.md) section 11.

This file does not create those folders. The tree in the project-structure document is a structure rule, not permission to add the files now.

---

## 5. Component API and props contracts

**Established.** A component has one clear responsibility, explicit TypeScript types, predictable behavior, accessibility, responsive behavior, and documented variants where variants exist. [frontend-rules.md](../frontend-rules.md) section 8.1.

**Established.** The caller passes content and behavior. The component does not reach into a module, an API, or another application to discover them. [components.md](../design-system/components.md) section 6. [design-system.md](../design-system/design-system.md) section 9.

**Open.** Exact props, event names, and slot names. [components.md](../design-system/components.md) section 6. Do not invent them in an implementation and treat them as the system. The component note required by [components.md](../design-system/components.md) section 21 must name them before they are the contract. Until that note is approved, the implementation does not publish a private prop vocabulary as shared API.

Variants, slots, and composition are how a component extends. A second copy is not a variant. Numeric sizes and slot names stay Open. [components.md](../design-system/components.md) section 7.

---

## 6. TypeScript and type safety

**Established.** [frontend-rules.md](../frontend-rules.md) sections 8.3 and 16.5.

- Use explicit types.
- Do not use `any` to finish the work.
- Do not add an assertion to hide a type you have not checked.
- Do not duplicate a shared type.
- Shared types live in the shared package that owns them, once that boundary is approved.
- A TypeScript error is not bypassed to make a build pass.

**Open.** The concrete interfaces for each catalog candidate. Section 5.

---

## 7. State and controlled or uncontrolled components

**Established responsibilities.** They are not a component API. [frontend-architecture.md](../architecture/frontend-architecture.md) section 2.7. [frontend-rules.md](../frontend-rules.md) section 9.1.

- Server state uses TanStack Query.
- Client state uses Zustand for UI preferences, temporary interface state, shared client selections, and application-level interaction state.
- Form state uses React Hook Form with Zod where validation is required.

A shared component does not become a second store, a second cache, or a second schema language. A Zod schema that expresses a business rule lives with the feature that owns the rule. A shared field displays the message it is given. [components.md](../design-system/components.md) section 19.

**Open.** Whether a given control is controlled, uncontrolled, or both. The sources do not name that contract. Do not invent `value`, `defaultValue`, or a change-callback name and call it approved. The approved component note must say who owns the value. Until then, the component does not keep a private copy of server data and present that copy as the platform result.

---

## 8. Event handling and callback contracts

**Established.** Interactive controls behave consistently. A control that looks interactive does something. Decorative controls that do nothing are not shipped. [frontend-rules.md](../frontend-rules.md) section 5.2.

The caller supplies what happens when the person acts. The component reports the action. It does not decide authorization, and it does not perform the business operation inside the shared presentation.

**Established.** A destructive or sensitive action uses confirmation that states the consequence. Dismissing the dialog is not approval. [frontend-rules.md](../frontend-rules.md) section 5.4. [design-system.md](../design-system/design-system.md) section 14.

**Open.** The names of callbacks, and which keyboard shortcuts exist. [components.md](../design-system/components.md) section 21. Do not publish a shortcut table that the sources did not approve.

A callback does not scatter a raw HTTP call through an unrelated component. Section 14.

---

## 9. Styling and design tokens

**Established.** Tokens are the only approved way to express reusable visual decisions. A component does not hardcode a one-off color, size, or shadow. [design-system.md](../design-system/design-system.md) section 4.

Do not hardcode color, spacing, size, or typography in place of an approved token. The naming shape `{category}.{role}.{modifier}` is Established. Do not invent a concrete token identifier, a prefix, a file format, or a Tailwind mapping. Those stay Open. [design-system.md](../design-system/design-system.md) sections 4 and 16. [components.md](../design-system/components.md) section 12.

Until an approved token exists, the implementation does not invent a private custom property and treat it as the system. A local exception is allowed only when a shared token cannot express the case, and it must not become a private brand. [frontend-rules.md](../frontend-rules.md) section 21.3.

**Established.** Values that [colors.md](../design-system/colors.md) or [typography.md](../design-system/typography.md) mark Established stay Established. Values they mark Proposed stay Proposed. Values they mark Open stay Open. A component does not promote a Proposed ramp or an Open metric by using it as if it were final.

Button text uses the Button role in [typography.md](../design-system/typography.md). This file does not restate the scale and does not assign a weight to that role. Label, Input, Navigation, and Code metrics stay Open there.

The panel-login palette is limited to that login. It is not a component theme. [colors.md](../design-system/colors.md) section 11.

Light and dark must be representable. A theme assigns values. It does not rename tokens or remove a state. Whether both modes ship, and which is the default, stays Open. [design-system.md](../design-system/design-system.md) section 12.

The illustrative CSS sample in [frontend-rules.md](../frontend-rules.md) section 4.1 is not the token file. That section already says the values are illustrative.

---

## 10. RTL, LTR, and Persian and English

**Established.** Persian is RTL. English is LTR. Both are first-class. A component that works in only one direction is incomplete. [frontend-rules.md](../frontend-rules.md) section 7. [design-system.md](../design-system/design-system.md) section 8.

Prefer logical properties: inline start and end, not physical left and right. Navigation, padding, icons that point forward, and popover attachment follow the active direction.

Isolate URLs, email addresses, phone numbers, and code so they keep their own direction. Labels, help, and errors stay associated with the field in both directions. Sort indicators and row actions mirror with the direction.

**Established.** Persian text uses IRANSans. English text uses Inter. The fallback is the system sans-serif. Do not silently replace IRANSans with IRANSansX. Family, numerals, and the scale stay in [typography.md](../design-system/typography.md). This file does not restate them.

Icons that imply direction mirror in RTL. Icons that depict an object do not mirror when mirroring would change their meaning. The icon library is Open. [design-system.md](../design-system/design-system.md) section 8.

**Open.** The internationalization library. Phone-number numerals. The numeral mechanism. Whether IRANSans or Inter provides tabular figures, and how a component enables them. Financial figures use tabular figures where the face provides them. [design-system.md](../design-system/design-system.md) section 8. [typography.md](../design-system/typography.md) section 14. This file does not close that.

---

## 11. Accessibility

**Established target.** WCAG 2.2 Level AA for all four applications, including Builder and agent interactions. This file does not claim that any component conforms. [frontend-rules.md](../frontend-rules.md) section 12. [design-system.md](../design-system/design-system.md) section 11.

**Established requirements.** [components.md](../design-system/components.md) section 9.

- Every pointing-device action can be completed from the keyboard. No freehand-drawing exception is granted.
- Focus is visible and is not color alone. Focus order follows the task. Focus moves into a dialog and back to the invoking control. It is not trapped except inside a modal that provides a close action.
- Use semantic HTML. Headings stay in order. Form controls have labels. Icon-only controls have accessible names. Tables expose headers.
- Name, role, and state are exposed. Status changes that matter are announced without stealing focus on every minor refresh.
- Color is never the only signal. Contrast uses [colors.md](../design-system/colors.md). This file does not pick pairs.
- Toasts and validation errors are reachable and dismissible.
- Reduced motion is respected.
- Text must be able to resize to 200% without loss of content or functionality. The mechanism is Open in [typography.md](../design-system/typography.md).

Lucide remains Proposed. It is not the icon library, and it is not installed. An icon button still needs an accessible name. [frontend-rules.md](../frontend-rules.md) section 2.2. [design-system.md](../design-system/design-system.md) section 16.

---

## 12. Responsive design

**Established.** Every application supports mobile, tablet, laptop, desktop, and large desktop. Pixel widths are Open. [design-system.md](../design-system/design-system.md) section 7. [frontend-rules.md](../frontend-rules.md) section 6.

Do not design only for desktop. Avoid fixed widths where the layout can flex. Prevent horizontal overflow of the page. Dialogs and forms remain usable on mobile. Navigation adapts. Images and media scale. Touch targets stay large enough to use. This file does not pick a pixel minimum. [components.md](../design-system/components.md) section 7.

Tables, filters, and bulk actions need an explicit small-screen arrangement. Horizontal page overflow is not that strategy. Large sets are paginated or virtualized. The component does not render an entire large set when a page is enough. The application owns the query. [design-system.md](../design-system/design-system.md) sections 6 and 7.

Builder may offer a viewport preview. That preview is an editing aid. It is not the published site, and it is not a substitute for responsive behavior in Company Website and Storefront.

**Conflict, recorded and not resolved.** [frontend-rules.md](../frontend-rules.md) section 16.4 names mobile, tablet, and desktop in the test list. Section 6 of the rules and [design-system.md](../design-system/design-system.md) section 7 also require laptop and large desktop. Implement for the five categories. Pixel widths stay Open. [components.md](../design-system/components.md) section 24.

---

## 13. Loading, empty, error, disabled, and the other recorded states

**Established** in [frontend-rules.md](../frontend-rules.md) section 4.3 and [frontend-architecture.md](../architecture/frontend-architecture.md) section 2.5:

- Default, hover, focus, active, disabled, loading, error, success, and empty.

**Established** in [design-system.md](../design-system/design-system.md) section 10, in addition:

- Selected. The choice remains after the pointer leaves.
- Read-only. The value is visible and not editable. Read-only is not disabled.

**Conflict, recorded and not resolved.** The two lists are not the same. This file does not delete either list and does not declare them synonyms. [components.md](../design-system/components.md) section 24 records the difference. A control implements a state when that state can occur. Shipping only the default state is incomplete.

**Established meanings.**

- Loading means the outcome is unknown. Loading is not success.
- Success means the platform has confirmed the outcome.
- Error means the attempt failed or the value is invalid. The message says what is wrong.
- Empty means there is nothing to show, and the view says what the person can do next when a next step exists.
- Disabled means the control is unavailable. The reason is available when the person needs it. A disabled color is not an authorization decision. [colors.md](../design-system/colors.md) section 10.

Agent lifecycle words use these component states. They are not a second visual language. [components.md](../design-system/components.md) section 8.

---

## 14. API and data handling

**Established.** Do not scatter raw HTTP calls through unrelated UI components. [frontend-rules.md](../frontend-rules.md) section 9.2.

**Conflict, recorded and not resolved.** [frontend-architecture.md](../architecture/frontend-architecture.md) section 2.7 says API calls go through one centralized client and describes that client’s responsibilities as Established. [frontend-rules.md](../frontend-rules.md) section 9.2 says the client architecture remains Open and does not mandate a package, an authentication-header scheme, interceptors, or an endpoint map. Both forbid uncontrolled HTTP inside unrelated components. This file does not choose a client package. [components.md](../design-system/components.md) section 4.

**Established.** [frontend-rules.md](../frontend-rules.md) sections 9.3, 9.4, and 24.

- Do not fabricate an API response.
- Do not show success before confirmation.
- Handle empty and nullable fields.
- Handle pagination. Do not load an entire large set when a page is enough.
- Every API-dependent surface can show loading, success, an empty response, a validation error, an authentication error, a permission error, a network error, and a server error.
- Mock data is for development and tests. It is kept out of production behavior. It is never shown as real business data.
- Product, inventory, price, and other business data come from APIs, not from Page Schema. [frontend-architecture.md](../architecture/frontend-architecture.md) section 2.8.

A component renders data it is given. It does not own the query, the contract, or the business record.

---

## 15. Agent Interaction Components

**Established.** Agent Interaction Components is a family in the Joorweb Design System architecture. It is not a Layer, not a Scope, and not a Status. The specification is [components.md](../design-system/components.md) section 17. The rows stay in section 14 of that file. This file does not copy them into a second catalog.

The family being Established does not make any member Established and does not approve its implementation.

Membership does not set Scope. Eleven of the components currently have Scope Shared: Agent Status, Agent Activity, Execution Progress, Execution Timeline, Agent Message, Agent Proposal, Approval Request, Execution Result, Execution Error, Tool Activity, and Cancellation Control. Human Handoff retains Scope Open and Status Open. Do not implement Human Handoff as a shared component, and do not mark it Established.

**Established implementation rules.** They use the lifecycle distinctions and rules defined in [components.md](../design-system/components.md) sections 16 and 17 and [design-system.md](../design-system/design-system.md) section 14.

- A proposal is not a completed action.
- Approval is not execution.
- Progress is not success.
- A cancellation request is not a confirmed cancellation.
- Closing a dialog or panel is not approval and is not cancellation.
- The UI does not invent agent identity, execution state, tool activity, timestamps, or results.
- The platform is the source of truth for execution state and outcomes.
- Failure is explicit and is not completed. Cancellation is distinct from failure.
- A visible agent action does not imply permission.
- These components do not implement orchestration or authorization.

Agent Message shows text the platform supplied. Execution Timeline shows the lifecycle the platform reported. Tool Activity shows an individual tool operation initiated by an Agent and does not show secrets. The tool catalog is Open. Voice transport is Open. Which operations may be cancelled is Open. [components.md](../design-system/components.md) section 16.

An agent-started operation uses the same field and confirmation patterns as a human-started one when the operation is the same. [design-system.md](../design-system/design-system.md) section 6.

---

## 16. Security and unconfirmed status

**Established.** Backend authorization is the boundary. Hiding a control does not secure an operation. [frontend-rules.md](../frontend-rules.md) section 10.3.

Do not display an unconfirmed status or an unconfirmed result as if the platform had confirmed it. Success, completion, cancellation, and failure appear only when the platform reports that outcome. [frontend-rules.md](../frontend-rules.md) section 15.4. [design-system.md](../design-system/design-system.md) section 14.

**Established.** [frontend-rules.md](../frontend-rules.md) sections 10.1, 10.4, and 10.5.

- Do not put secrets, credentials, or private tokens in frontend code, logs, URLs, client storage, or error text.
- Do not invent an authentication mechanism. Do not store credentials in insecure browser storage. [frontend-rules.md](../frontend-rules.md) section 10.2.
- Validate input. Do not render unsafe HTML. Treat API data as untrusted.
- A password field, if implemented later, does not store credentials in insecure browser storage and does not invent an authentication mechanism. [components.md](../design-system/components.md) section 19.

Whether an unauthorized action is hidden, disabled, or explained stays Open, beyond the requirement that a forbidden attempt is distinct from a validation error and from a server error. [design-system.md](../design-system/design-system.md) section 16.

---

## 17. Performance

**Established.** [frontend-rules.md](../frontend-rules.md) section 11.

- Avoid a re-render that does not change what the person sees.
- Use memoization when it provides a measured benefit, not by default on every component.
- Use stable keys in lists.
- Do not do expensive work on every render.
- Paginate or virtualize a large set. Do not render the entire set when a page is enough.
- Do not import a large library for a small feature.

**Proposed, not installed.** TanStack Table for tables. Apache ECharts for charts. [frontend-rules.md](../frontend-rules.md) section 2.2. A Data Table or Chart Container candidate does not adopt those libraries. [components.md](../design-system/components.md) section 14.

---

## 18. Testing

**Established.** [frontend-rules.md](../frontend-rules.md) section 16. [frontend-architecture.md](../architecture/frontend-architecture.md) section 10. [components.md](../design-system/components.md) section 22.

- Unit tests for a component once tests are part of the work.
- Integration tests for component, state, and API behavior when that behavior exists.
- Accessibility checks for name, role, state, keyboard use, and visible focus.
- End-to-end tests for important workflows. The first workflows are Open.
- Persian RTL and English LTR.
- The viewport categories in section 12.
- Loading, empty, error, long text, and large data sets.
- Agent statuses when the component shows agent work.
- Light and dark, when both exist.
- TypeScript checks.

**Proposed, not installed.** Vitest, React Testing Library, and Playwright. [frontend-rules.md](../frontend-rules.md) section 2.2. This file does not make them mandatory and does not choose a replacement. Do not read the direction term RTL as the name of a test library. [frontend-rules.md](../frontend-rules.md) section 16.3 says Playwright is Proposed only.

A written specification is not evidence that a screen works. [design-system.md](../design-system/design-system.md) section 15.

**Open.** Visual-regression tools, and the first automated workflows. [design-system.md](../design-system/design-system.md) section 16.

---

## 19. Documentation, examples, and usage

**Established.** Before a catalog candidate is implemented, its own note uses the template in [components.md](../design-system/components.md) section 21. That template covers name, purpose, layer, ownership, use cases, when not to use, API responsibilities without invented prop names, variants, sizes, states, slots, keyboard behavior, accessibility, direction, responsive behavior, token dependencies, and tests. Exact props, sizes, and tokens stay Open until that note is approved.

This file is the implementation standard. It is not that filled note, and it is not a second catalog.

Examples in code stay illustrative. They do not become a token file, a prop list, or a shortcut map. [frontend-rules.md](../frontend-rules.md) section 4.1.

Documentation matches what is approved. [design-system.md](../design-system/design-system.md) section 15. Knowledge files remain Markdown.

Usage text says when to use the component and when not to. It points at the neighboring catalog candidate instead of describing a private variant.

---

## 20. Versioning, deprecation, and backward compatibility

**Established.** A change to a shared component is a cross-application change. It must not break direction, keyboard behavior, or an application build. A breaking change needs an explicit migration note and approval. [frontend-rules.md](../frontend-rules.md) section 23. [design-system.md](../design-system/design-system.md) section 15.

Removal of a shared component waits until a replacement exists and consumers have moved.

**Open.** The versioning scheme and the deprecation mechanics. [design-system.md](../design-system/design-system.md) section 16. [components.md](../design-system/components.md) section 23. Do not invent a version number or a deprecation attribute and call it the policy.

Do not change a shared prop, once one is approved, without the impact check across Company Website, Admin, Builder, and Storefront.

---

## 21. Code review and acceptance criteria

A component change is not accepted because the file exists. [frontend-rules.md](../frontend-rules.md) section 16.6.

Review confirms all of the following.

- The catalog was searched first. The reuse order in section 1 was followed.
- The layer and the scope match [components.md](../design-system/components.md). An Open scope was not silently assigned.
- No catalog row was added, removed, or marked Established by the implementation.
- Props, slots, sizes, and token names that are still Open were not published as the system.
- No Proposed library was added as a dependency.
- Puck and editor chrome stayed in Builder.
- Shared code does not import an application.
- Both directions work. The recorded states that can occur are present.
- Success, cancellation, and failure follow platform confirmation.
- TypeScript checks pass.
- The tests in section 18 that apply to this change were run, or the gap is stated.
- The four applications were considered when the component is shared. [frontend-rules.md](../frontend-rules.md) section 23.

---

## 22. Anti-patterns

- A second catalog, a second type scale, or a second color ramp inside a component.
- A hardcoded color, spacing value, size, or font that bypasses an approved token.
- An invented token name, prefix, or Tailwind mapping.
- IRANSansX used as a silent replacement for IRANSans.
- CSS Modules introduced as a second styling system.
- Puck, or a Builder editor control, imported by Company Website, Storefront, Admin, or a shared package.
- A shared component that exists only to satisfy a Builder-only need.
- Human Handoff implemented as Shared, or any Agent Interaction component treated as approved because the family is Established.
- A proposal, a loading state, or a cancellation request shown as success.
- A closed dialog treated as approval or as cancellation.
- An invented agent identity, execution state, tool activity, timestamp, or result.
- Mock data shown as a real metric.
- A raw HTTP call inside an unrelated component.
- `any`, or a type check bypassed to pass a build.
- A component copied into another application to change one detail.
- Status shown by color alone, weight alone, or size alone.
- A claim that the component conforms to WCAG.
- Lucide, TanStack Table, Apache ECharts, Vitest, React Testing Library, or Playwright installed because a source named them.

---

## 23. Conflicts this file does not resolve

These disagreements are in the sources. This file records them. It does not pick a winner, except where section 1 states the wording this document was instructed to use for AaaS.

1. **AaaS expansion.** Architecture section 2.1 says the acronym is not expanded. [TERMINOLOGY.md](../TERMINOLOGY.md) expands it as Agent as a Service and says Joorweb is not SaaS. This file uses that expansion. It does not change the architecture.
2. **State lists.** Rules section 4.3 omit Selected and Read-only. Design-system section 10 includes them. Both lists stand. [components.md](../design-system/components.md) section 24.
3. **Package names.** Rules section 3.2 examples versus the four approved packages. Section 3.
4. **Component foundation spelling.** The rules say shadcn/ui. The architecture says shadcn. One foundation. The spelling is not settled.
5. **API client.** Architecture section 2.7 describes one centralized client as Established. Rules section 9.2 leave the client architecture Open. Section 14.
6. **Icon library.** Lucide is Proposed. Design-system section 16 leaves the icon library Open. This file selects neither.
7. **Viewport test list.** Rules section 16.4 names three widths. Rules section 6 and the design system require five categories. Section 12.
8. **Color finality.** [colors.md](../design-system/colors.md) marks many ramps and role maps Proposed. Design-system section 16 still lists final color values as unresolved. Components do not treat Proposed color values as Established.

---

## 24. Open decisions

This file does not choose the following.

- Exact props, callback names, slot names, variants, sizes, and keyboard shortcuts.
- Token identifiers, prefix, file format, and Tailwind mapping.
- Numeric breakpoints and touch-target pixels.
- Whether light and dark both ship, and which mode is the default.
- The white-label mechanism, the override allowlist, and tenant host resolution.
- The internationalization library, phone-number numerals, and tabular-figure support.
- Controlled versus uncontrolled ownership for each control.
- The API client package.
- The icon library, the table library, and the chart library.
- Which operations may be cancelled, which retries are safe, the tool catalog, and voice transport.
- Human Handoff’s existence, layer, and owner beyond the catalog row.
- The versioning scheme.
- Test tools beyond the Proposed names, and the first end-to-end workflows.
- Whether an unauthorized action is hidden, disabled, or explained.

An implementation that fills one of these items without an approved note has not closed it.
