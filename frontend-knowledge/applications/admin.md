# Admin

This file records the boundary of the Admin application. It does not add a module map, a route, an API, or a component. It does not close an Open decision.

The application is not claimed to exist in this repository. [frontend-architecture.md](../architecture/frontend-architecture.md) section 5.

## Established boundary

**Established.** Admin is one of the four frontend applications. Its runtime is React + Vite. Its path in the approved layout is `apps/admin`. [frontend-architecture.md](../architecture/frontend-architecture.md) sections 2.2 and 2.3. [project-structure.md](../architecture/project-structure.md) section 3. [frontend-rules.md](../frontend-rules.md) section 3.1.

**Established.** It is the management surface for the platform, including CRM, ERP, finance, warehouse, orders, marketing, integrations, settings, and the assistant. It does not own the page editor. [frontend-architecture.md](../architecture/frontend-architecture.md) section 2.2. [design-system.md](../design-system/design-system.md) section 13.

**Established.** The module names in [frontend-rules.md](../frontend-rules.md) sections 3.1 and 14.1 are illustrative. They are not a finalized module map, navigation structure, or route architecture. This file does not copy them into a second list. [frontend-architecture.md](../architecture/frontend-architecture.md) section 2.2.

**Established.** Admin uses dense shells, data patterns, forms, and agent patterns from the shared design system. Navigation, page headers, tables, filters, forms, dialogs, and feedback stay consistent. It does not invent business metrics or show placeholder values as real data. Permissions shown in Admin come from the authorization system. Backend authorization remains the boundary. [frontend-rules.md](../frontend-rules.md) sections 14.2, 14.3, and 14.4. [design-system.md](../design-system/design-system.md) section 13.

**Established.** It does not import another application. [project-structure.md](../architecture/project-structure.md) section 6.

**Established.** Persian and English, RTL and LTR, the five viewport categories, and the WCAG 2.2 Level AA target apply. This file does not claim conformance. Pixel widths stay Open. [frontend-rules.md](../frontend-rules.md) sections 6, 7, and 12.

## Open

This file does not choose the following.

- The Admin module map, navigation inventory, and routes.
- Whether an unauthorized action is hidden, disabled, or shown with an explanation.
- API contracts, the authentication mechanism, and the permission source.
- The internationalization library, the default theme mode, and whether light and dark both ship.
- Concrete token identifiers and any catalog row’s props.

Catalog rows stay in [components.md](../design-system/components.md). An operational screen does not approve a row.
