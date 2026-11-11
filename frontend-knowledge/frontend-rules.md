# Joorweb Frontend Engineering Rules & Agent Guidelines

**Document:** Frontend Engineering Rules & Agent Guidelines  
**Project:** Joorweb  
**Scope:** All Joorweb frontend applications and shared frontend packages  
**Status:** Mandatory  
**Audience:** Frontend Developers, AI Coding Agents, UI/UX Engineers, and Technical Leads

---

# 1. General Principles

Joorweb is an AaaS platform. It is not only a store builder, and it is not a conventional online business platform. It includes multiple integrated business capabilities.

The frontend architecture must support a connected business ecosystem where different modules share a consistent user experience, design language, and data interaction model.

All frontend development must follow these principles:

1. Build reusable components instead of duplicating functionality.
2. Maintain a consistent design system across all applications.
3. Separate presentation, business logic, and data access.
4. Prioritize maintainability, scalability, accessibility, and performance.
5. Design for both small businesses and enterprise-level organizations.
6. Support Persian and English from the beginning.
7. Support RTL and LTR layouts correctly.
8. Keep the frontend independent from backend implementation details.
9. Never introduce unnecessary architectural complexity.
10. Every implementation must be testable and verifiable.

**Core Principle: Build once, reuse everywhere.**

---

# 2. Technology Standards

The frontend ecosystem must use the Established technology standards below unless an approved architecture decision explicitly changes them. Proposed entries are not standards.

## 2.1 Core Technologies

- React
- TypeScript
- Next.js for applications requiring server rendering, routing, and SEO.
- Vite for applications that primarily require a client-side application architecture.
- Modern CSS and CSS variables.
- HTML5 semantic elements.

## 2.2 Technology and Library Status

| Purpose | Technology | Status |
|---|---|---|
| UI Framework | React | Established |
| Language | TypeScript | Established |
| Public Website | Next.js | Established |
| Storefront | Next.js | Established |
| Admin Panel | React + Vite | Established |
| Visual Builder | React + Vite + Puck | Established |
| Styling foundation | Tailwind CSS | Established |
| Component foundation | shadcn/ui | Established |
| Client State | Zustand | Established |
| Server State | TanStack Query | Established |
| Forms | React Hook Form | Established |
| Validation | Zod | Established |
| Monorepo | pnpm Workspaces + Turborepo | Established |
| Tables | TanStack Table | Proposed |
| Charts | Apache ECharts | Proposed |
| Icons | Lucide | Proposed |
| Testing | Vitest, React Testing Library, Playwright | Proposed |

Established rows are mandatory. Proposed rows are not mandatory, are not installed, and must not be installed before approval. Tailwind CSS is the styling foundation. shadcn/ui is the component foundation. CSS Modules are not a styling architecture for this frontend.

Before adding a dependency:

1. Check whether the required functionality already exists.
2. Check whether an approved shared package provides it.
3. Evaluate bundle size and maintenance status.
4. Avoid introducing dependencies for trivial functionality.
5. Document significant new dependencies.

---

# 3. Project Architecture

Joorweb frontend must follow a modular architecture.

The recommended structure is a monorepo containing multiple applications and shared packages.

## 3.1 Applications

The primary applications are:

### Website
The Company Website renders published corporate pages, including marketing pages, documentation, and other public content. It does not own the corporate page editor.

Established technology: Next.js.

### Admin
The unified business management dashboard.

The modules listed below describe expected product capabilities or illustrative examples. They are not a finalized Admin module map, navigation structure, or route architecture. The final Admin module structure remains Open and needs a separate architectural decision.

- Dashboard
- Products
- Inventory
- Sales
- Orders
- Customers
- Accounting
- Reports
- Marketing
- Integrations
- Settings
- AI Assistant

Established technology: React + Vite.

### Builder
The shared editor for Joorweb's corporate website and for customer storefronts. It is not a storefront-only tool.

It edits and manages both corporate pages and customer storefront pages. It does not render either public site.

Established technology: React + Vite + Puck.

### Storefront
The Storefront renders published customer storefront pages. It does not own the customer page editor.

It must support multiple stores, custom domains, SEO, and independent storefront configurations.

Established technology: Next.js.

## 3.2 Shared Packages

Shared packages must contain reusable functionality.

The package names listed below are illustrative candidates, not an approved or mandatory package list. Package boundaries and names have not all been finalized. The listed names are examples or potential candidates. Their appearance does not establish approval. Final package architecture must follow frontend-architecture.md.

Examples:

- `ui`: reusable interface components.
- `design-system`: design tokens, typography, colors, spacing, and visual rules.
- `page-schema`: versioned page configuration definitions.
- `page-renderer`: rendering engine for published corporate pages and published customer storefront pages.
- `api-client`: an example name only. The API client architecture remains Open. See section 9.2.
- `auth`: shared authentication utilities.
- `permissions`: permission-aware frontend utilities.
- `i18n`: localization and language management.
- `types`: shared TypeScript types and interfaces.

## 3.3 Architecture Rules

1. Applications must not unnecessarily duplicate shared functionality.
2. Shared packages must not depend on individual applications.
3. Avoid circular dependencies.
4. Keep application-specific features inside their application.
5. Keep shared business-independent UI components inside shared packages.
6. Do not introduce Micro Frontends without an approved architectural decision.
7. Keep module boundaries clear.
8. Do not create unnecessary abstractions.
9. Applications must not depend on one another.
10. Shared packages must contain reusable capabilities, not an application's business workflow.

---

# 4. Design System Rules

All applications must use a centralized design system.

The design system is the single source of truth for visual consistency.

## 4.1 Design Tokens

The design system must define:

- Brand colors
- Semantic colors
- Typography
- Font sizes
- Font weights
- Spacing
- Border radius
- Shadows
- Borders
- Breakpoints
- Z-index layers
- Transitions
- Component dimensions

Use design tokens instead of arbitrary hardcoded values.

Example:

```css
:root {
  --color-primary: #2563eb;
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text-primary: #0f172a;
  --color-text-secondary: #64748b;

  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;

  --spacing-1: 4px;
  --spacing-2: 8px;
  --spacing-3: 12px;
  --spacing-4: 16px;
}
```

The values above are illustrative only. Actual brand values must come from the approved Joorweb design system.

## 4.2 Component Consistency

Components with the same purpose must have consistent:

- Appearance
- Behavior
- Interaction states
- Spacing
- Typography
- Accessibility
- Responsive behavior

## 4.3 Component States

Interactive components must support all relevant states:

- Default
- Hover
- Focus
- Active
- Disabled
- Loading
- Error
- Success
- Empty

Do not implement only the default state.

## 4.4 Visual Quality

The interface must feel professional, modern, clean, and suitable for a business management platform.

Avoid:

- Excessive gradients
- Unnecessary animations
- Inconsistent shadows
- Arbitrary colors
- Excessive border radii
- Decorative elements without a purpose
- Inconsistent component dimensions

---

# 5. UI/UX Standards

Every interface must be designed around the user's task.

## 5.1 Usability

- Important actions must be easy to identify.
- Navigation must be predictable.
- Forms must be understandable.
- Errors must explain what went wrong.
- Destructive actions must require appropriate confirmation.
- Loading states must communicate progress.
- Empty states must explain what the user can do next.
- Success messages must only appear after successful operations.

## 5.2 Interaction Design

Every interactive element must have a clear purpose.

Buttons, menus, dialogs, dropdowns, tabs, filters, and other controls must behave consistently.

Do not create decorative controls that appear interactive but do nothing.

## 5.3 Feedback

The interface must provide appropriate feedback for:

- User actions
- API requests
- Validation errors
- Background operations
- Failed operations
- Completed operations

Never silently ignore an operation failure.

## 5.4 Destructive Actions

Actions such as deleting products, canceling orders, or removing important configurations must use an appropriate confirmation mechanism.

Confirmation must explain the consequences of the operation.

---

# 6. Responsive Design

All applications must support responsive layouts.

Required viewport categories:

- Mobile
- Tablet
- Laptop
- Desktop
- Large Desktop

Rules:

1. Do not design exclusively for desktop.
2. Avoid fixed widths where responsive alternatives are appropriate.
3. Prevent horizontal overflow.
4. Tables must have an appropriate mobile strategy.
5. Navigation must adapt to smaller screens.
6. Dialogs and forms must remain usable on mobile.
7. Touch targets must be sufficiently large.
8. Images and media must scale correctly.

Responsive behavior must be tested at multiple viewport sizes.

---

# 7. Persian, English, RTL, and LTR

Joorweb must support Persian and English as first-class languages.

RTL and LTR must be considered architectural requirements, not visual adjustments added later.

## 7.1 Language Support

- Persian: RTL
- English: LTR

The interface must support changing language without breaking layout or functionality.

## 7.2 Direction Handling

Use appropriate direction-aware CSS.

Prefer logical properties:

```css
margin-inline-start
margin-inline-end
padding-inline-start
padding-inline-end
border-inline-start
text-align: start
```

Avoid unnecessary hardcoded `left` and `right` values.

## 7.3 Typography

Use suitable fonts for each language.

Persian typography must support:

- Readable Persian characters
- Appropriate line height
- Correct number presentation
- Proper punctuation
- Mixed Persian and English content

## 7.4 Mixed Content

The system must correctly display:

- Persian text with English technical terms
- URLs
- Email addresses
- Phone numbers
- Product codes
- Numeric values
- Dates
- Currency values
- Code snippets

Use appropriate direction isolation where necessary.

## 7.5 Testing

Every important component must be tested in both RTL and LTR modes.

A component is not complete if it works only in one direction.

---

# 8. Component Development

Components must be reusable, predictable, and maintainable.

## 8.1 Component Design

Each component should have:

- A clear responsibility
- Explicit props
- Strong TypeScript types
- Predictable behavior
- Appropriate accessibility
- Responsive behavior
- Documented variants where necessary

## 8.2 Component Size

Avoid unnecessarily large components.

Split components when they contain multiple independent responsibilities.

However, do not split every small JSX fragment into a separate component without a meaningful reason.

## 8.3 Props and Types

Use explicit TypeScript interfaces or types.

Avoid:

- `any`
- Unnecessary type assertions
- Unclear prop names
- Excessive optional properties
- Duplicated type definitions

Shared types must be placed in appropriate shared packages.

## 8.4 Reusability

Before creating a new component, search the existing component library.

Prefer extending an existing component over creating a duplicate.

## 8.5 Accessibility

Components must support:

- Keyboard navigation
- Focus management
- Appropriate ARIA attributes
- Semantic HTML
- Screen readers
- Visible focus indicators

---

# 9. State Management and API Integration

Frontend state must be managed according to its responsibility.

## 9.1 State Categories

### Server State

Use TanStack Query for:

- API data
- Caching
- Background refetching
- Mutations
- Loading states
- Error states
- Query invalidation

### Client State

Use Zustand for appropriate client-side state such as:

- UI preferences
- Temporary interface state
- Shared client-side selections
- Application-level interaction state

### Form State

Use React Hook Form with Zod validation where appropriate.

## 9.2 API Integration

Do not scatter raw `fetch` or HTTP client calls throughout unrelated UI components.

API calls stay out of unrelated UI components. Uncontrolled API calls from UI components are not allowed. Section 10 still applies.

The API client architecture remains Open. These rules do not mandate a specific client package, authentication-header scheme, response normalization, interceptors, or an endpoint map.

## 9.3 Data Integrity

- Do not fabricate API responses.
- Do not assume a successful operation before receiving confirmation.
- Handle empty and nullable fields.
- Handle pagination correctly.
- Validate external data at appropriate boundaries.
- Keep API types synchronized with approved API contracts.

## 9.4 Error Handling

Every API-dependent interface must handle:

- Loading
- Success
- Empty response
- Validation error
- Authentication error
- Permission error
- Network error
- Server error

---

# 10. Security Rules

Frontend security is mandatory.

## 10.1 Secrets

Never expose:

- API secret keys
- Database credentials
- Private tokens
- Server credentials
- Internal authentication secrets

Anything included in frontend code must be considered publicly accessible.

## 10.2 Authentication

- Follow the approved authentication architecture.
- Do not invent a separate authentication mechanism.
- Do not store sensitive credentials in insecure browser storage.
- Handle session expiration.
- Handle unauthorized requests consistently.

## 10.3 Permissions

Frontend permissions are for user experience only.

Backend authorization is the actual security boundary.

Hiding a button does not secure an operation.

## 10.4 Input and Output

- Validate user input.
- Avoid unsafe HTML rendering.
- Never use dangerous HTML injection without an explicitly approved and sanitized use case.
- Treat API responses as untrusted data.
- Prevent XSS vulnerabilities.

## 10.5 Sensitive Data

Do not unnecessarily expose sensitive business information in:

- Browser logs
- URLs
- Client-side storage
- Error messages
- Debugging output

---

# 11. Performance Standards

Performance must be considered throughout development.

## 11.1 Rendering

- Avoid unnecessary component re-renders.
- Use memoization when it provides measurable value.
- Avoid excessively large components.
- Use stable keys in lists.
- Avoid expensive calculations during every render.

## 11.2 Loading

Use:

- Lazy loading
- Dynamic imports where appropriate
- Code splitting
- Optimized image loading
- Pagination
- Virtualization for large datasets

## 11.3 Data Fetching

- Avoid duplicate API requests.
- Use caching appropriately.
- Avoid unnecessary refetching.
- Use pagination or infinite scrolling for large datasets.
- Avoid loading entire datasets when only a small subset is required.

## 11.4 Bundle Size

Do not import large libraries for small features.

Evaluate bundle size before introducing significant dependencies.

---

# 12. Accessibility Standards

Joorweb must target WCAG 2.2 Level AA.

Rules:

1. Use semantic HTML.
2. Provide labels for form controls.
3. Ensure sufficient color contrast.
4. Support keyboard navigation.
5. Provide visible focus states.
6. Do not communicate status using color alone.
7. Support screen readers.
8. Provide accessible names for icon-only buttons.
9. Maintain logical heading hierarchy.
10. Respect reduced-motion preferences.

Accessibility must be considered during implementation, not postponed until the end.

---

# 13. Website Builder Rules

The Joorweb Website Builder is a core platform capability.

It is the shared editor for Joorweb's corporate website and for customer storefronts. It is not a storefront-only tool.

It must allow users to create and customize those pages without writing code. The Company Website and the Storefront render the published pages. Neither of them owns the editor.

## 13.1 Architecture

Separate these responsibilities:

- Visual editor
- Page schema
- Component registry
- Page renderer
- Theme configuration
- Preview system
- Publishing system

Puck is the visual editing layer only. The rest of the architecture must remain independent of Puck.

Puck does not own Joorweb business logic or the canonical Page Schema.

Do not assume that corporate pages and customer storefront pages use the same Page Schema, the same block registry, or the same publishing pipeline. These rules do not choose among those options.

## 13.2 Page Schema

Page configurations must be stored as structured, versioned JSON, independent of Puck's internal representation.

Do not store executable JavaScript, JSX, or arbitrary HTML as the primary page definition.

The schema must support:

- Page structure
- Sections
- Components
- Component properties
- Layout settings
- Responsive settings
- Theme configuration
- Component ordering
- Visibility settings
- Schema versioning

## 13.3 Component Registry

The renderer must use a controlled component registry.

Only approved components may be rendered.

Do not dynamically execute arbitrary component code from stored page configurations.

Shared reusable blocks and application-specific blocks are both allowed.

## 13.4 Data Separation

Product data, inventory data, prices, and other business information must come from the appropriate APIs.

Do not hardcode business data inside page schema.

## 13.5 Preview and Publishing

Draft, preview, and published states must remain distinct.

Published pages render in the matching Next.js application, as defined in section 3.1.

This section does not define how preview, publishing, version compatibility, or rollback is implemented.

## 13.6 Multi-Tenant Requirements

Tenant-specific data and cache must never leak between stores.

Preview and published content must be isolated correctly.

This section does not define corporate identity, domains, environments, or permissions, and it does not define tenant domain or host resolution.

## 13.7 Builder User Experience

The editor should provide:

- Section management
- Component selection
- Drag-and-drop arrangement
- Property editing
- Responsive preview
- Undo and redo where supported
- Save status
- Publish status
- Clear validation errors

---

# 14. Admin Panel Rules

The Admin Panel is the unified management interface for Joorweb.

It must provide a consistent experience across all business modules.

## 14.1 Module Architecture

The modules listed below describe expected product capabilities or illustrative examples. They are not a finalized Admin module map, navigation structure, or route architecture. The final Admin module structure remains Open and needs a separate architectural decision.

- Dashboard
- Products
- Inventory
- Sales
- Orders
- Customers
- Accounting
- Reports
- Marketing
- Integrations
- Settings
- AI Assistant

Each module must have a clear responsibility and boundary.

## 14.2 Shared Experience

All modules must use the shared design system and common interface patterns.

Navigation, page headers, tables, filters, forms, dialogs, and feedback must remain consistent.

## 14.3 Data Presentation

Business data must be presented accurately.

Examples include:

- Monetary values
- Quantities
- Stock levels
- Order statuses
- Dates
- Financial reports
- Customer information

Never invent business metrics or display misleading placeholder values as real data.

## 14.4 Permissions

The interface must respect the permissions returned by the approved authorization system.

However, backend authorization remains mandatory.

## 14.5 Scalability

The Admin Panel must support additional modules without requiring a complete redesign.

---

# 15. AI Assistant Interface Rules

The Joorweb AI Assistant is an operational assistant, not merely a chatbot.

It must help users execute business operations through natural language.

## 15.1 Supported Interaction

The interface may support:

- Text messages
- Voice interaction
- Operation requests
- Clarification questions
- Confirmation requests
- Operation results
- Error messages
- Operation history

## 15.2 Operation Lifecycle

The interface must represent the operation lifecycle clearly:

1. Request received
2. Request understood
3. Missing information requested, if necessary
4. User confirmation requested, if required
5. Operation executing
6. Operation completed or failed
7. Result presented

## 15.3 Confirmation

Sensitive or destructive operations must require appropriate confirmation.

The assistant must not silently perform high-impact actions.

## 15.4 Progress and Results

Display meaningful progress and operation status.

Do not show a successful result before the backend confirms success.

## 15.5 Error Handling

If an operation fails:

- Explain that it failed.
- Show an understandable reason when available.
- Do not claim that the operation was completed.
- Provide a reasonable recovery path.

## 15.6 Context and History

The interface should support conversation history and relevant operation context according to the approved backend contracts.

Do not independently invent AI memory or identity mechanisms in the frontend.

---

# 16. Testing and Quality Assurance

All significant frontend functionality must be tested.

## 16.1 Unit Tests

Test individual functions, utilities, and components.

## 16.2 Integration Tests

Test interactions between components, state management, and API integration.

## 16.3 End-to-End Tests

End-to-end testing of important user workflows remains required.

Playwright is Proposed only. It is not a requirement, and it must not be installed before approval. These rules do not select another end-to-end tool.

## 16.4 Visual and Responsive Tests

Check:

- RTL
- LTR
- Mobile
- Tablet
- Desktop
- Loading states
- Empty states
- Error states
- Long text
- Large datasets

## 16.5 Type Safety

TypeScript errors must be resolved.

Do not bypass type checking simply to make the build pass.

## 16.6 Completion Criteria

A task is not complete merely because the code has been written.

It must be implemented, checked, and verified against its requirements.

---

# 17. AI Agent Working Rules

All AI coding agents working on Joorweb frontend must follow these rules.

## 17.1 Before Starting

The agent must:

1. Read this document.
2. Read the relevant architecture documents.
3. Read the relevant design system documentation.
4. Inspect the existing project structure.
5. Search for existing components and utilities.
6. Understand the task scope.
7. Identify dependencies and potential side effects.

Do not start implementation before understanding the relevant project context.

## 17.2 During Development

The agent must:

- Follow existing conventions.
- Reuse approved components.
- Avoid unnecessary dependencies.
- Maintain type safety.
- Respect application boundaries.
- Avoid unrelated modifications.
- Keep changes focused.
- Follow the approved design system.
- Preserve existing functionality unless the task explicitly requires changing it.

## 17.3 After Development

The agent must:

1. Review the implementation.
2. Run relevant tests.
3. Run TypeScript checks.
4. Run the relevant build.
5. Resolve errors introduced by its changes.
6. Report modified files.
7. Explain what was implemented.
8. Report any incomplete work or limitations.

## 17.4 No Unsupported Claims

An agent must never claim that something works without appropriate verification.

If a test was not executed, explicitly state that it was not executed.

---

# 18. Mandatory Development Workflow

All frontend tasks must follow this workflow:

## Step 1: Understand

Understand the requirement, existing architecture, affected applications, and dependencies.

## Step 2: Plan

Define the implementation approach and identify the files and components that need modification.

## Step 3: Inspect

Inspect existing code, shared packages, design tokens, and relevant documentation.

## Step 4: Implement

Implement the smallest complete solution that satisfies the requirement.

## Step 5: Verify

Run appropriate checks and tests.

## Step 6: Review

Review the changes for consistency, security, accessibility, responsiveness, and maintainability.

## Step 7: Report

Provide a concise but complete implementation report.

**Required workflow: Understand → Plan → Inspect → Implement → Verify → Review → Report.**

For multi-step tasks, do not silently skip verification between major stages.

---

# 19. Scope Restrictions

Frontend agents must respect the boundaries of their assigned responsibilities.

Unless explicitly authorized, frontend agents must not:

- Modify backend business logic.
- Modify database schemas.
- Modify database migrations.
- Modify Laravel APIs.
- Modify authentication backend logic.
- Modify n8n workflows.
- Change server infrastructure.
- Change production environment configuration.
- Modify unrelated applications.
- Introduce a new architectural pattern without approval.

If a frontend requirement cannot be completed without backend changes, explain the dependency and request authorization.

Do not simulate backend functionality as if it were real.

---

# 20. Final Principle

Joorweb must be developed as one coherent product ecosystem.

The goal is not to build disconnected interfaces.

The goal is to create a unified, scalable, maintainable, and consistent business management experience.

Every frontend application must contribute to this shared ecosystem.

**Build once, reuse everywhere.**

---

# 21. Design System Governance

The design system is centrally governed.

AI agents and developers must not independently change global design tokens, shared components, or foundational visual rules.

## 21.1 Global Changes

Changes to the following require impact assessment:

- Brand colors
- Typography
- Spacing scale
- Border radius
- Shadows
- Breakpoints
- Global component styles
- Shared layout primitives

## 21.2 Approval

Before changing a global design rule, the agent must:

1. Identify the reason for the change.
2. Identify affected applications.
3. Explain the expected impact.
4. Check whether an existing token or component can solve the problem.
5. Request approval when the change affects the shared design system.

## 21.3 Local Exceptions

Local styling exceptions may be used only when necessary.

They must not silently redefine global design behavior.

The shared design system remains the single source of truth.

---

# 22. Component Reuse and Duplication Prevention

Before creating a new component, the agent must inspect existing shared and application-specific components.

## 22.1 Mandatory Search

Search for existing:

- Components
- Hooks
- Utilities
- Layouts
- Form controls
- Table implementations
- Modal and dialog components
- Navigation patterns
- Design tokens

## 22.2 Reuse Priority

Follow this order:

1. Reuse an existing component.
2. Extend an existing component when appropriate.
3. Create a shared component if multiple applications genuinely need it.
4. Create an application-specific component when its responsibility is application-specific.

## 22.3 Duplication Prevention

Do not create multiple components with nearly identical behavior or appearance.

Do not copy and paste existing functionality into another application without evaluating reuse.

## 22.4 Avoid Over-Abstraction

Not every component needs to become a shared component.

Abstraction must be justified by actual reuse, stable responsibilities, or a clear architectural benefit.

---

# 23. Cross-Application Compatibility

Shared packages may affect multiple Joorweb applications.

Every change to a shared package must be evaluated for cross-application compatibility.

## 23.1 Impact Assessment

Before changing shared code, identify whether it affects:

- Website
- Admin
- Builder
- Storefront
- Other shared packages

## 23.2 Compatibility

Verify that changes do not unintentionally break:

- Existing component APIs
- TypeScript contracts
- Theme behavior
- RTL/LTR behavior
- Responsive layouts
- Application builds
- Shared package dependencies

## 23.3 Validation

After modifying shared packages:

1. Run relevant package tests.
2. Run TypeScript checks.
3. Build affected applications.
4. Identify breaking changes.
5. Document required updates.

## 23.4 Breaking Changes

Do not introduce breaking changes to shared components or package interfaces without an explicit migration plan and approval.

---

# 24. Mock Data and Development Data Policy

Mock data must be clearly separated from real application data.

## 24.1 Mock Data Usage

Mock data is permitted for:

- UI development
- Component previews
- Storybook or visual testing
- Automated tests
- Isolated development environments

## 24.2 Restrictions

Never:

- Present fabricated business metrics as real data.
- Generate random revenue or financial reports in production.
- Use mock API responses as a permanent substitute for backend integration.
- Hide API failures by silently displaying fake successful data.
- Mix mock data with production API responses without explicit rules.

## 24.3 Mock Data Isolation

Mock data must be clearly identifiable and isolated from production behavior.

Use explicit development or test configurations.

## 24.4 API Contracts

Mock responses must follow the approved API contracts.

Do not create frontend-only response structures that contradict the actual backend.

## 24.5 Missing Backend Functionality

If an API or backend capability does not exist:

1. Identify the missing dependency.
2. Explain the required contract.
3. Avoid presenting simulated functionality as complete.
4. Request backend implementation or approval for a temporary mock.

---

# 25. Architecture Decision and Change Documentation

Architectural decisions must be documented.

AI agents must not make major architectural changes without understanding their impact.

## 25.1 Decisions Requiring Documentation

Document significant changes involving:

- Application architecture
- Shared package boundaries
- State management
- Routing
- API communication
- Authentication integration
- Page schema
- Component architecture
- Major dependencies
- Build and deployment configuration

## 25.2 Required Information

A significant architecture change must document:

- Problem
- Proposed solution
- Reasoning
- Alternatives considered
- Affected applications
- Dependencies
- Compatibility implications
- Migration requirements
- Testing requirements

## 25.3 Existing Architecture

Do not replace an established architectural decision simply because another approach is preferred.

First evaluate the current approach and explain why a change is necessary.

## 25.4 Documentation Updates

When implementation changes an established architecture or technical contract, update the relevant documentation.

Documentation must reflect actual implementation, not intended or assumed behavior.

---

# Final Enforcement Rule

All 25 sections of this document are mandatory guidelines for Joorweb frontend development.

AI agents must read and follow this document before performing frontend tasks.

When a task conflicts with these rules:

1. Identify the conflict.
2. Explain its impact.
3. Do not silently violate the established architecture.
4. Request approval when a rule or architectural decision must change.

Task completion does not override security, architecture, design system, or quality requirements.

**This document is the primary frontend engineering reference for all Joorweb frontend applications and AI coding agents.**