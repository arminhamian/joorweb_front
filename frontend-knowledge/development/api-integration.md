# API integration

This file records the API boundary for frontend UI. It does not define an endpoint, a payload, a base URL, or a client package. It does not close an Open decision, and it does not pick a winner where the sources disagree.

## Established

**Established.** Do not scatter raw `fetch` or other HTTP calls through unrelated UI components. Uncontrolled API calls from UI components are not allowed. [frontend-rules.md](../frontend-rules.md) section 9.2.

**Established.** Do not fabricate an API response. Do not show success before confirmation. Handle empty and nullable fields. Handle pagination. Validate external data at the boundary. Keep API types aligned with an approved contract when one exists. [frontend-rules.md](../frontend-rules.md) section 9.3.

**Established.** Do not load an entire large set when a page is enough. [frontend-rules.md](../frontend-rules.md) section 11.3. [design-system.md](../design-system/design-system.md) section 7.

**Established.** Every API-dependent surface can show loading, success, an empty response, a validation error, an authentication error, a permission error, a network error, and a server error. [frontend-rules.md](../frontend-rules.md) section 9.4.

**Established.** Product, inventory, price, and other business data come from APIs, not from Page Schema. [frontend-architecture.md](../architecture/frontend-architecture.md) section 2.8. [frontend-rules.md](../frontend-rules.md) section 13.4.

**Established.** Mock data is for development and tests. It stays out of production behavior. It is never shown as real business data. [frontend-rules.md](../frontend-rules.md) section 24.

**Established.** Frontend permissions affect what a person sees. Backend authorization is the boundary. [frontend-rules.md](../frontend-rules.md) section 10.3.

A component renders data it is given. It does not own the contract. [component-guidelines.md](component-guidelines.md) section 14.

## Conflict, recorded and not resolved

[frontend-architecture.md](../architecture/frontend-architecture.md) section 2.7 says API calls go through one centralized client and describes that client’s responsibilities as Established: base URL, authentication headers, errors, request configuration, response normalization, timeout, and interceptors where they are needed.

[frontend-rules.md](../frontend-rules.md) section 9.2 says the API client architecture remains Open. Those rules do not mandate a client package, an authentication-header scheme, response normalization, interceptors, or an endpoint map.

Both forbid uncontrolled HTTP inside unrelated components. This file does not choose a client package. [components.md](../design-system/components.md) section 24 records the same conflict.

The name `api-client` in the rules is an example. A separate `api-client` package is deferred. [frontend-architecture.md](../architecture/frontend-architecture.md) section 2.4. [project-structure.md](../architecture/project-structure.md) section 7.

## Open

- The API contracts, base URL, authentication scheme, and error body. No contract is approved in this file. [frontend-architecture.md](../architecture/frontend-architecture.md) section 2.7.
- Whether pagination, infinite scrolling, and virtualization are the same strategy. The rules name pagination or infinite scrolling. The design system says tables and lists paginate or virtualize, and that an entire large set is not loaded when a page is enough. This file does not equate those strategies. [frontend-rules.md](../frontend-rules.md) section 11.3. [design-system.md](../design-system/design-system.md) sections 6 and 7.
- Duplicate-request, cache, and refetch behavior beyond the rules that uncontrolled duplication and unnecessary refetching are avoided. No cache policy is specified here.
