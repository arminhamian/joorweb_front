# State management

This file records which state belongs to which approved library. It does not name a store, a query key, a schema, or a form field. It does not close an Open decision.

## Established

**Established.** Server state uses TanStack Query. Client state uses Zustand. [frontend-architecture.md](../architecture/frontend-architecture.md) section 2.7. [frontend-rules.md](../frontend-rules.md) section 9.1.

**Established.** TanStack Query is the place for API data, caching, background refetching, mutations, loading states, error states, and query invalidation. [frontend-rules.md](../frontend-rules.md) section 9.1.

**Established.** Zustand is for appropriate client-side state. The rules’ examples are UI preferences, temporary interface state, shared client-side selections, and application-level interaction state. Those examples are not a store map. [frontend-rules.md](../frontend-rules.md) section 9.1.

**Established.** A shared component does not become a second store, a second cache, or a second schema language. [components.md](../design-system/components.md) section 3.

**Established.** Mock data is not production state and is not shown as real business data. [frontend-rules.md](../frontend-rules.md) section 24.

## Conflict, recorded and not resolved

[frontend-architecture.md](../architecture/frontend-architecture.md) section 2.7 says forms use React Hook Form with Zod.

[frontend-rules.md](../frontend-rules.md) section 9.1 says to use React Hook Form with Zod where appropriate.

This file does not decide when “where appropriate” excludes them, and it does not treat the two sentences as synonyms.

## Open

- The shape of any store, the query keys, and which client state is application-wide.
- Form field names, Zod schemas, and which control is controlled or uncontrolled.
- The API client that supplies server state. That conflict stays in [api-integration.md](api-integration.md).
- The internationalization library and any persisted preference that would require it.

Nothing here promotes TanStack Table, Apache ECharts, or a test library. Those stay Proposed in [frontend-rules.md](../frontend-rules.md) section 2.2.
