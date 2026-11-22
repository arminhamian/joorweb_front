# Storefront

This file records the boundary of the Storefront application. It does not add a route, a tenant API, a domain rule, or a component. It does not close an Open decision.

The application is not claimed to exist in this repository. [frontend-architecture.md](../architecture/frontend-architecture.md) section 5.

## Established boundary

**Established.** Storefront is one of the four frontend applications. Its runtime is Next.js. Its path in the approved layout is `apps/storefront`. [frontend-architecture.md](../architecture/frontend-architecture.md) sections 2.2 and 2.3. [project-structure.md](../architecture/project-structure.md) section 3. [frontend-rules.md](../frontend-rules.md) section 3.1.

**Established.** It renders published customer storefront pages. It does not own the customer page editor. It does not edit those pages. [frontend-rules.md](../frontend-rules.md) section 3.1. [design-system.md](../design-system/design-system.md) section 13.

**Established.** The rules require support for multiple stores, custom domains, SEO, and independent storefront configurations. [frontend-rules.md](../frontend-rules.md) section 3.1. The documents do not define the mechanisms. Host-to-tenant resolution remains Open. [frontend-architecture.md](../architecture/frontend-architecture.md) section 2.8. [frontend-rules.md](../frontend-rules.md) section 13.6.

**Established.** Each storefront resolves its tenant from the approved domain or host configuration. Tenant-specific data and cache must not leak between stores. The screen shows the active tenant’s allowed theme and that tenant’s content. Preview and published content stay isolated. [frontend-architecture.md](../architecture/frontend-architecture.md) section 2.8. [frontend-rules.md](../frontend-rules.md) section 13.6. [design-system.md](../design-system/design-system.md) section 13.

**Established.** It does not import Builder or Puck. Published customer pages are rendered here, not in Builder. [frontend-architecture.md](../architecture/frontend-architecture.md) sections 2.4 and 2.8. [project-structure.md](../architecture/project-structure.md) section 5.4.

**Established.** Persian and English, RTL and LTR, the five viewport categories, and the WCAG 2.2 Level AA target apply. This file does not claim conformance. Pixel widths stay Open. [frontend-rules.md](../frontend-rules.md) sections 6, 7, and 12.

## Open

This file does not choose the following.

- How a host resolves to a tenant, and how custom domains, environments, and corporate identity are represented.
- What “SEO” requires beyond the rule that the application must support it. The documents do not define the mechanism.
- Whether corporate pages and customer storefronts share one Page Schema, one block registry, or one publishing pipeline, and which blocks are shared.
- How preview, publishing, version compatibility, and rollback are implemented.
- The internationalization library, the default theme mode, whether light and dark both ship, and the white-label mechanism.
- Concrete token identifiers and any catalog row’s props.

The product area named Storefront in the architecture, including marketplace connections, is not defined as this application. [frontend-architecture.md](../architecture/frontend-architecture.md) section 2.1. This file does not merge those meanings.
