# Builder

This file records the boundary of the Builder application. It does not add a block catalog, a route, an API, or a component. It does not close an Open decision.

The application is not claimed to exist in this repository. [frontend-architecture.md](../architecture/frontend-architecture.md) section 5.

## Established boundary

**Established.** Builder is one of the four frontend applications. Its runtime is React + Vite + Puck. Its path in the approved layout is `apps/builder`. [frontend-architecture.md](../architecture/frontend-architecture.md) sections 2.2 and 2.3. [project-structure.md](../architecture/project-structure.md) section 3. [frontend-rules.md](../frontend-rules.md) section 3.1.

**Established.** It is the shared editor for corporate website pages and customer storefront pages. It is not a storefront-only tool. It does not render either public site. [frontend-rules.md](../frontend-rules.md) sections 3.1 and 13.

**Established.** The builder edits storefront and website presentation. It is not the system of record for products, stock, prices, customers, or accounting. [frontend-architecture.md](../architecture/frontend-architecture.md) section 2.2.

**Established.** Puck is the visual editing layer only. It does not own business logic or the canonical Page Schema. Puck adapters, editor controls, and editor-only configuration stay in `apps/builder`. They are not shared page blocks and they are not `packages/ui`. Public renderers do not depend on Puck. [frontend-architecture.md](../architecture/frontend-architecture.md) sections 2.4 and 2.8. [project-structure.md](../architecture/project-structure.md) section 5.4.

**Established.** Page configuration is structured, versioned data. It is not stored as executable JavaScript, JSX, or arbitrary HTML. Product, inventory, price, and other business data come from APIs, not from the page schema. [frontend-rules.md](../frontend-rules.md) sections 13.2 and 13.4. [frontend-architecture.md](../architecture/frontend-architecture.md) section 2.8.

**Established.** Draft, preview, and published stay distinct. A viewport preview in the editor is an editing aid. It is not the published site. [frontend-rules.md](../frontend-rules.md) section 13.5. [design-system.md](../design-system/design-system.md) sections 7 and 13.

**Established.** The responsibilities in [frontend-rules.md](../frontend-rules.md) section 13.1 stay separate: visual editor, page schema, component registry, page renderer, theme configuration, preview system, and publishing system. The rules say the editor should provide the items in section 13.7, including undo and redo where supported. That is not a requirement that undo and redo exist, and it is not an approved component inventory. Builder candidates in [components.md](../design-system/components.md) section 14 stay at the Status that catalog gives them.

**Established.** It does not import another application, and other applications do not import it. [project-structure.md](../architecture/project-structure.md) section 6.

## Open

This file does not choose the following.

- Whether corporate pages and customer storefronts use one Page Schema or compatible variants.
- One block registry or separate registries, which blocks are shared, and the block inventory.
- One publishing pipeline or two, and how preview, version compatibility, and rollback work.
- How corporate identity, domains, environments, and permissions are represented.
- Which package owns the page-status indicator. That catalog row stays Open.
- Undo and redo are “where supported.” This file does not require that they exist.
- Concrete token identifiers and any catalog row’s props.

Do not assume the two page targets share a schema, a registry, or a publishing pipeline. [frontend-rules.md](../frontend-rules.md) section 13.1.
