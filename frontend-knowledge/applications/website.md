# Company Website

This file records the boundary of the Company Website application. It does not add a route, a page inventory, an API, or a component. It does not close an Open decision.

The application is not claimed to exist in this repository. [frontend-architecture.md](../architecture/frontend-architecture.md) section 5.

## Established boundary

**Established.** Company Website is one of the four frontend applications. Its runtime is Next.js. Its path in the approved layout is `apps/website`. [frontend-architecture.md](../architecture/frontend-architecture.md) sections 2.2 and 2.3. [project-structure.md](../architecture/project-structure.md) section 3. [frontend-rules.md](../frontend-rules.md) section 3.1.

**Established.** It renders published corporate pages, including marketing pages, documentation, and other public content. It does not own the corporate page editor. It does not embed Builder, and it does not edit pages. [frontend-rules.md](../frontend-rules.md) section 3.1. [design-system.md](../design-system/design-system.md) section 13.

**Established.** It does not import another application. It does not depend on Puck. Published corporate pages are rendered here, not in Builder. [frontend-architecture.md](../architecture/frontend-architecture.md) sections 2.4 and 2.8. [project-structure.md](../architecture/project-structure.md) section 6.

**Established.** It uses the shared design system. Marketing density is lower than Admin. The page frame still uses shared tokens. Draft and preview, if shown at all, are clearly not the published site. [design-system.md](../design-system/design-system.md) section 13.

**Established.** Persian and English, RTL and LTR, the five viewport categories, and the WCAG 2.2 Level AA target apply. This file does not claim conformance. Pixel widths stay Open. [frontend-rules.md](../frontend-rules.md) sections 6, 7, and 12.

## Open

This file does not choose the following.

- The corporate page inventory, routes, and information architecture.
- Whether corporate pages and customer storefronts share one Page Schema, one block registry, or one publishing pipeline, and which blocks are shared.
- How preview, publishing, version compatibility, and rollback are implemented.
- How corporate identity, domains, environments, and permissions are represented.
- The internationalization library, the default theme mode, and whether light and dark both ship.
- The white-label mechanism.
- Concrete token identifiers and any catalog row’s props.

Catalog rows stay in [components.md](../design-system/components.md). A public page does not approve a row.
