# Implementation readiness

This file is a reading of the current knowledge documents. It does not approve a catalog row, install a library, or start implementation. It does not restate the repository tree or the package responsibilities. Those stay in [frontend-architecture.md](../architecture/frontend-architecture.md) sections 2.3 and 8 and in [project-structure.md](../architecture/project-structure.md) sections 2, 5, and 12.

No application, package, route, or library exists because it is named here. [frontend-architecture.md](../architecture/frontend-architecture.md) section 2.11.

## Next stage

Unspecified.

No knowledge document names a next stage, a phase number, or a first milestone. [frontend-architecture.md](../architecture/frontend-architecture.md) section 8 says to create the workspace and packages according to the approved tree when implementation begins. [project-structure.md](../architecture/project-structure.md) section 11 says the open items below must not block approval of the repository layout, and that they are decided when the corresponding implementation work is planned. Section 12 is an acceptance checklist for that layout. The boxes there are unchecked. None of those sentences names the next stage.

## What does not block a documentation-backed start of the approved layout

[project-structure.md](../architecture/project-structure.md) section 11:

> The following are intentionally not decided by the repository structure:
>
> - Required Node.js version (Node.js 16 is forbidden).
> - Exact dependency versions and package manager version.
> - Workspace package names/scopes and release/versioning strategy.
> - Exact Turborepo task graph, root scripts, CI/CD, and deployment providers.
> - Exact token file format and Tailwind mapping.
> - Internationalization library and translation resource strategy.
> - API contracts, authentication implementation, and permission source.
> - Whether corporate pages and customer storefronts share one Page Schema or use compatible variants.
> - Block inventory, registry details, and which blocks are shared versus target-specific.
> - Publishing, preview, rollback, and tenant host-resolution implementation.
>
> These decisions must be made when the corresponding implementation work is planned. They must not block approval of this repository layout.

This file infers that the Open rows in the component catalog, Human Handoff, Proposed color ramps, and the choice among Proposed test tools are not layout-approval gates. That inference is not section 11. The catalog leaves those rows Open, including Human Handoff, in [components.md](../design-system/components.md) sections 14 and 23. [colors.md](../design-system/colors.md) section 12 leaves the ramps other than the Established anchors Proposed. [frontend-rules.md](../frontend-rules.md) section 2.2 leaves Vitest, React Testing Library, and Playwright Proposed. They still block the work that would need them. This file does not begin the layout.

## What blocks implementation of a catalog candidate

These are gates already written. They are not new decisions.

- The candidate’s own note, using the template in [components.md](../design-system/components.md) section 21, before that candidate is implemented.
- No change to a row’s Layer, Scope, or Status. Proposed and Open are not promoted by being scheduled below.
- Scope Open is not given an owner by placing the component in `packages/ui` or in `apps/builder`.
- Concrete token identifiers, a token prefix, a token file format, and a Tailwind mapping stay Open. An implementation does not invent them. [design-system.md](../design-system/design-system.md) section 16.
- Numeric spacing, sizing, radius, breakpoints, and touch-target pixels stay Open.
- Proposed libraries stay uninstalled: TanStack Table, Apache ECharts, Lucide, Vitest, React Testing Library, and Playwright. [frontend-rules.md](../frontend-rules.md) section 2.2.
- Human Handoff stays Open. It is not implemented as a shared component.
- Builder editor chrome stays in `apps/builder`. It is not a shared page block.

## Catalog reading order

The order below is only a reading of the existing architecture: shared foundation before application workflows, Builder chrome not shared, and every Open row left out. It is not approval. It does not change [components.md](../design-system/components.md) section 14. Ninety rows are accounted for: 36 in the first group, 27 in the second, 8 in the third, and 19 unscheduled.

**Phase 1. Shared foundation first.** Proposed rows whose Scope is Shared, in Foundations, Forms, Feedback, and Layout. These are shared building blocks, not one application’s workflow and not editor chrome. Phase 1 does not approve them.

- Foundations: Button, Icon Button, Text Input, Textarea, Checkbox, Radio, Switch, Select, Combobox, Label, Badge, Spinner.
- Forms: Form Field, Input Group, Search Field, Date Picker, Number Input, Currency Input, Password Input, Multi-select, Form Section, Validation Message.
- Feedback: Alert, Toast, Dialog, Alert Dialog, Popover, Empty State, Error State, Loading State, Progress Indicator.
- Layout: Card, Panel, Section Header, Page Header, Content Container.

**Phase 2. Shared workflows after that foundation.** Proposed rows whose Scope is Shared, in Navigation, Data, and Agent. Agent Interaction Components remains an Established family. These rows stay Proposed. Phase 2 does not approve them.

- Navigation: Tabs, Pagination, Dropdown Menu, Navigation Menu, Sidebar Navigation, Stepper.
- Data: Data Table, Table Toolbar, Filter Builder, Column Visibility Control, Sort Control, Bulk Action Bar, Status Indicator, Metric Card, Key-Value Display, Chart Container.
- Agent: Agent Status, Agent Activity, Execution Progress, Execution Timeline, Agent Message, Agent Proposal, Approval Request, Execution Result, Execution Error, Tool Activity, Cancellation Control.

**Phase 3. Builder chrome, not shared.** Proposed rows whose Scope is Builder. They stay in `apps/builder`. They are not `packages/ui` and not `packages/page-blocks`. Phase 3 does not approve them.

- Editor Toolbar, Block Navigator, Block Inspector, Viewport Switcher, Canvas Overlay, Selection Outline, Drag Handle, Block Placeholder.

**Not scheduled.** Status Open. Human Handoff stays in this list. No owner is assigned.

- Separator, Avatar, Skeleton, Tooltip, File Upload, Breadcrumbs, Command Menu, Drawer, Context Menu, Data Grid, Statistic, Timeline, Activity Feed, Split View, Resizable Panels, Collapsible Section, Responsive Container, Human Handoff, Page Status Indicator.

## Prerequisites before any of that work is called started

The documents do not turn this list into a milestone.

- The layout decision remains the one in [project-structure.md](../architecture/project-structure.md). Creating `apps/` or `packages/` is implementation, and this change does not do it.
- Node.js 16 remains forbidden. A required version is still Open, so a runtime pin is not available from these documents.
- A component note under section 21 of the catalog is still required before a candidate is built.
- The conflicts recorded in [components.md](../design-system/components.md) section 24, [component-guidelines.md](component-guidelines.md) section 23, [api-integration.md](api-integration.md), and [state-management.md](state-management.md) stay unresolved. An implementation does not pick the winner.

## Component design kickoff

This is not a second roadmap, and it does not name the next stage. The next stage above stays unspecified. The three phases stay as they are. This section does not design the 90 catalog rows, and it does not design the 36 Phase 1 rows.

If component notes are written, the first step is the Phase 1 group only, and only as a plan. Phase 2, Phase 3, and the unscheduled Open rows are not designed here. A Phase 1 row stays Proposed. Scheduling it is not approval and does not change Layer, Scope, or Status.

Before one of those candidates is implemented, its own note must use the template in [components.md](../design-system/components.md) section 21. The note specifies these headings, and this file adds none:

1. Name. The display name, and the kebab-case folder name once implementation is approved.
2. Purpose. The one job the component does.
3. Layer. Primitive, Composite, or Pattern.
4. Ownership. `packages/ui`, another approved shared package, or one application. Builder editor chrome names `apps/builder`.
5. Use cases. The tasks it supports, without turning a module workflow into the component.
6. When not to use. The neighboring component that should be used instead, when one exists.
7. API responsibilities. What the caller provides and what the component renders. No invented prop names.
8. Variants. The approved variants, or Open.
9. Sizes. The approved sizes, or Open. No numeric size is implied.
10. States. Which states from the catalog’s section 8 can occur.
11. Slots. The composition points, or Open. Slot names are not invented here.
12. Keyboard interaction. The keyboard behavior the catalog already requires. Specific shortcuts stay unlisted until approved.
13. Accessibility semantics. Name, role, and state. The WCAG 2.2 AA target. No conformance claim.
14. RTL and LTR. Direction, logical properties, and mixed-content isolation.
15. Responsive behavior. The five viewport categories. Pixel breakpoints stay Open until approved.
16. Token dependencies. The token categories it consumes. Concrete token identifiers stay Open until the owning file approves them.
17. Testing requirements. The checks the catalog’s section 22 already names for that component.

A note that invents a prop name, a pixel size, a token name, a shortcut, or a library dependency is not an approved note. [components.md](../design-system/components.md) section 21.

Puck stays in Builder. Shared UI does not import Puck, and it does not depend on editor chrome. [frontend-architecture.md](../architecture/frontend-architecture.md) sections 2.4 and 2.8. [project-structure.md](../architecture/project-structure.md) section 5.4.
