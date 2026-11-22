# Testing standards

This file records the testing requirements that already exist. It does not choose a test tool, a first workflow, or a pixel width. It does not install a library.

## Established

**Established.** Significant frontend behavior is tested. A task is not complete because the code was written. It is implemented, checked, and verified. A written specification is not evidence that a screen works. [frontend-rules.md](../frontend-rules.md) section 16. [design-system.md](../design-system/design-system.md) section 15. [frontend-architecture.md](../architecture/frontend-architecture.md) section 10.

**Established.** Unit tests cover functions, utilities, and components. Integration tests cover component, state, and API behavior when that behavior exists. End-to-end tests of important workflows remain required. [frontend-rules.md](../frontend-rules.md) sections 16.1, 16.2, and 16.3.

**Established.** TypeScript errors are resolved. Type checking is not bypassed to make a build pass. [frontend-rules.md](../frontend-rules.md) section 16.5.

**Established.** Important components are tested in Persian RTL and English LTR. A component that works in only one direction is not complete. [frontend-rules.md](../frontend-rules.md) section 7.5.

**Established.** Checks include loading, empty, error, long text, and large data sets. [frontend-rules.md](../frontend-rules.md) section 16.4. [frontend-architecture.md](../architecture/frontend-architecture.md) section 10.

## Proposed, not installed

Vitest, React Testing Library, and Playwright are Proposed. They are not mandatory, and they are not installed by this file. Playwright is not the end-to-end requirement. No other end-to-end tool is selected. [frontend-rules.md](../frontend-rules.md) sections 2.2 and 16.3.

Do not read the direction term RTL as the name of a test library.

## Conflict, recorded and not resolved

[frontend-rules.md](../frontend-rules.md) section 16.4 names mobile, tablet, and desktop in the visual test list.

[frontend-rules.md](../frontend-rules.md) section 6 and [design-system.md](../design-system/design-system.md) section 7 also require laptop and large desktop.

Both lists stand. This file does not delete either list. Pixel widths stay Open. [components.md](../design-system/components.md) section 24.

## Open

- The first end-to-end workflows. [design-system.md](../design-system/design-system.md) section 16. [frontend-architecture.md](../architecture/frontend-architecture.md) section 10.
- Visual-regression tools.
- Numeric breakpoints and the mechanism for 200% text resize.
- Whether light and dark both ship. When both exist, shared work is reviewed in both. [design-system.md](../design-system/design-system.md) section 15.

The acceptance checks for the repository layout stay in [project-structure.md](../architecture/project-structure.md) section 12. This file does not restate that checklist.
