# Frontend Project Structure

## 1. Purpose

This document defines the approved repository layout for the greenfield Joorweb frontend. It describes ownership, dependency boundaries, and the intended internal organization of applications and shared packages. It does not create applications, install dependencies, or imply that the structure already exists in the working repository.

The repository is a single monorepo managed with **pnpm Workspaces** and **Turborepo**. The four applications remain independently buildable and deployable. Shared packages contain reusable capabilities and must never contain an application's private business workflow.

## 2. Approved top-level structure

```text
joorweb/
├── apps/
│   ├── website/                  # Company Website — Next.js
│   ├── admin/                    # Admin — React + Vite
│   ├── builder/                  # Builder — React + Vite + Puck
│   └── storefront/               # Storefront — Next.js
│
├── packages/
│   ├── ui/                       # Shared UI components
│   ├── design-tokens/            # Shared visual tokens and styling integration
│   ├── page-schema/              # Versioned, Puck-independent page contract
│   └── page-blocks/              # Reusable page-block capabilities
│
├── config/
│   ├── eslint/                   # Shared ESLint configuration
│   ├── typescript/               # Shared TypeScript configurations
│   └── tailwind/                 # Shared Tailwind configuration/presets
│
├── docs/                         # Project-level technical documentation
├── frontend-knowledge/           # Frontend engineering knowledge documents
│
├── package.json                 # Root scripts and workspace tooling
├── pnpm-workspace.yaml           # Workspace package discovery
├── turbo.json                   # Task pipeline configuration
├── tsconfig.json                # Root TypeScript references/base settings
├── .gitignore
└── README.md
```

`config/` contains shared tool configuration, not runtime business code. `docs/` is for project and implementation documentation; `frontend-knowledge/` remains the governed frontend standards and architecture knowledge base.

## 3. Application responsibilities

| Application | Runtime | Owns | Does not own |
|---|---|---|---|
| `apps/website` | Next.js | Public Joorweb corporate website and published corporate pages | Page editing, Admin workflows, customer-store rendering |
| `apps/admin` | React + Vite | Authenticated platform operations: CRM, ERP, finance, inventory, orders, marketing, integrations, settings, and assistant interface | Public website rendering, page editing, customer storefront rendering |
| `apps/builder` | React + Vite + Puck | Visual editing and management of corporate website pages and customer storefront pages; draft and preview editing experience | Public rendering, canonical business data, stock/pricing/accounting records |
| `apps/storefront` | Next.js | Public customer storefront rendering for the resolved tenant and published content | Page editing, Admin workflows, Puck editor runtime |

The applications do not import from one another. A workflow used only by one application stays in that application. A capability moves into a shared package only when it is genuinely reusable and has a clear owner.

## 4. Internal application structure

The following is the standard starting layout for each application. Framework-required files remain at the locations required by Next.js or Vite. Add a folder only when the application has a real need for it; do not create empty folders for symmetry.

```text
apps/<application>/
├── public/                       # Static files served as-is
├── src/
│   ├── app/                      # Application shell and framework routes
│   ├── features/                 # Application capabilities, grouped by domain
│   ├── components/               # App-specific reusable presentation components
│   ├── hooks/                    # App-specific React hooks
│   ├── services/                 # App-specific service orchestration
│   ├── lib/                      # App-local technical helpers and setup
│   ├── styles/                   # App-level styles and framework entry points
│   └── types/                    # App-local TypeScript types
├── tests/                        # App-level integration or end-to-end tests, when needed
├── package.json
├── tsconfig.json
└── [framework configuration files]
```

### 4.1 `app/`

- In Next.js applications, `src/app/` uses the App Router. Route segments, layouts, loading/error boundaries, and route-level composition belong here.
- In Vite applications, `src/app/` contains the application entry point, root providers, router setup, and top-level shell. It is not a second feature directory.
- Route files compose features and components. They should not become repositories for domain logic or large data-access implementations.

### 4.2 `features/`

Features are grouped by business capability, not by generic file type. A feature may contain its own components, hooks, API-facing service functions, schemas, and types when those are private to that feature.

```text
features/<feature>/
├── components/
├── hooks/
├── services/
├── schemas/
├── types/
└── index.ts                      # Deliberate public surface, when useful
```

Do not create every subfolder automatically. Keep a feature cohesive and expose only the imports other parts of the same application need. Cross-application reuse belongs in a shared package, not by importing another app's feature.

### 4.3 `components/`

Contains presentation components reused within one application. Each component owns its style and lives in its own folder. Components must not become a hidden home for domain workflows or direct, scattered HTTP calls. Cross-application UI components belong in `packages/ui`.

### 4.4 `services/` and `lib/`

`services/` contains application-specific orchestration and integration with shared data-access capabilities. `lib/` contains low-level app-local setup and helpers. Neither folder is a catch-all: do not use them to bypass feature ownership or to create a generic `common` layer.

## 5. Shared package responsibilities and structure

### 5.1 `packages/ui`

Owns reusable, application-agnostic UI primitives and composites, such as buttons, inputs, dialogs, menus, form controls, and common layout components.

```text
packages/ui/
├── src/
│   ├── components/
│   │   └── <component-name>/
│   │       ├── <component-name>.tsx
│   │       ├── <component-name>.test.tsx   # when tests are added
│   │       └── index.ts
│   ├── hooks/                    # Only genuinely shared UI hooks
│   ├── lib/                      # UI-level helpers
│   └── index.ts                  # Public exports
├── package.json
└── tsconfig.json
```

A component is shared because more than one application needs the same responsibility and behavior, not merely because it could theoretically be reused. App-specific workflow patterns remain in the owning app. The package consumes shared design tokens; it does not define a second private brand palette.

### 5.2 `packages/design-tokens`

Owns the canonical names and values for visual design tokens after the Design System decisions are approved. It is the single source for shared color, typography, spacing, sizing, radius, border, shadow, motion, and elevation tokens as those categories are finalized.

```text
packages/design-tokens/
├── src/
│   ├── tokens/                   # Token source files, organized by category
│   ├── themes/                   # Approved base themes and semantic mappings
│   └── index.ts                  # Public exports
├── package.json
└── README.md
```

The exact token format, naming convention, theme modes, and Tailwind integration are Design System decisions and remain open until that work is approved. Do not invent token values in application styles. The existing panel-login palette remains specific to that login and is not automatically promoted to the global brand palette.

### 5.3 `packages/page-schema`

Owns the canonical, structured, versioned page document contract. The schema is independent of Puck's internal editor representation and must not contain executable JavaScript, JSX, or arbitrary HTML as its page model.

```text
packages/page-schema/
├── src/
│   ├── versions/                 # Explicit schema versions
│   ├── validation/               # Runtime validation for page documents
│   ├── types/                    # TypeScript types derived from the contract
│   └── index.ts
├── package.json
└── tsconfig.json
```

The schema describes page structure and approved block configuration. Product, stock, price, customer, order, and accounting records remain business data and are obtained through platform APIs. Whether corporate pages and customer storefronts use one schema or compatible variants remains a separate decision; this package must not assume they are identical.

### 5.4 `packages/page-blocks`

Owns reusable page-block capabilities that are approved for use across relevant page targets. A block implementation must be usable by the public renderers without importing Puck.

```text
packages/page-blocks/
├── src/
│   ├── blocks/                   # Shared block implementations, one folder per block
│   ├── definitions/              # Block metadata/configuration independent of Puck
│   ├── registry/                 # Public block registry or exports
│   └── index.ts
├── package.json
└── tsconfig.json
```

Puck-specific adapters, editor controls, and editor-only configuration stay inside `apps/builder`. Company Website and Storefront must not import Puck or Builder source code. Blocks needed by only one target may remain in that target's application. This package does not decide that every block is shared or that both targets must have identical registries.

## 6. Dependency rules

The allowed dependency direction is:

```text
Applications  ───────► Shared packages
      │
      └──────────────► Approved external libraries

Shared packages ─────► Other shared packages, only when the dependency is one-way and justified
```

Mandatory rules:

1. An application must never import another application.
2. A shared package must never import from `apps/*`.
3. Circular dependencies are forbidden at every level.
4. Shared packages must not contain an application's business workflow.
5. Puck and Puck-specific editor code are restricted to `apps/builder`.
6. Public renderers must consume the page contract and approved block capabilities, not Builder internals.
7. Shared package exports must be intentional. Avoid deep imports into another package's private source folders.
8. Do not create a package solely to move a small one-off helper.
9. Do not add a generic `common`, `shared`, or `utils` package as an unbounded dumping ground.

## 7. Deferred packages

The following are deliberately not part of the initial approved package tree:

- `api-client`
- `auth`
- `permissions`
- `i18n`
- `page-renderer`
- generic `types`

Their capabilities may initially live in a suitable application or in a clearly owned existing package. Create a separate package only after a concrete cross-application contract and consumer need are identified. This avoids premature package boundaries; it does not prohibit a later architecture decision.

## 8. Root configuration ownership

- `package.json`: root scripts and tooling dependencies only; application runtime dependencies belong to their application, and shared runtime dependencies belong to the package that uses them.
- `pnpm-workspace.yaml`: declares workspace discovery for `apps/*` and `packages/*` (and any explicitly approved config package that is made a workspace package).
- `turbo.json`: defines task dependencies and caching for install-independent tasks such as build, lint, typecheck, and test. Exact pipeline configuration is set during implementation.
- `tsconfig.json`: shared base compiler settings or project references. App/package-specific configuration extends the base.
- `config/`: shared lint, TypeScript, and Tailwind configuration. Keep configuration packages separate from runtime code.

Exact scripts, task graph, package names/scopes, Node.js version, and dependency versions are not selected by this document.

## 9. Naming and organization conventions

- Use lowercase kebab-case for directory and package names.
- Use descriptive names tied to the owning domain or capability.
- Keep a component in its own folder, with its implementation and local style together.
- Keep a page/route focused on composition.
- Keep business behavior in features, not in presentation components.
- Prefer explicit public exports over unrestricted deep imports.
- Do not create speculative files or empty directories just to match this example.

## 10. Environment and deployment boundaries

Each application has its own build output and deployment configuration. Turborepo coordinates tasks; it does not merge the applications into one runtime. Public Website and Storefront deployments are separate from authenticated Admin and Builder deployments.

Environment variable names, domains, deployment providers, preview infrastructure, and CI/CD workflows are not decided here. Secrets must never be exposed through client-side environment variables. Tenant resolution and tenant cache isolation for Storefront must follow the approved backend/domain contract.

## 11. What remains open

The following are intentionally not decided by the repository structure:

- Required Node.js version (Node.js 16 is forbidden).
- Exact dependency versions and package manager version.
- Workspace package names/scopes and release/versioning strategy.
- Exact Turborepo task graph, root scripts, CI/CD, and deployment providers.
- Exact token file format and Tailwind mapping.
- Internationalization library and translation resource strategy.
- API contracts, authentication implementation, and permission source.
- Whether corporate pages and customer storefronts share one Page Schema or use compatible variants.
- Block inventory, registry details, and which blocks are shared versus target-specific.
- Publishing, preview, rollback, and tenant host-resolution implementation.

These decisions must be made when the corresponding implementation work is planned. They must not block approval of this repository layout.

## 12. Acceptance checklist

The repository structure is ready to be implemented when:

- [ ] The four applications exist as separate workspace projects.
- [ ] The four approved shared packages exist with clear package manifests and public exports.
- [ ] Each application builds independently.
- [ ] No application imports another application.
- [ ] No shared package imports from `apps/*`.
- [ ] No circular package dependencies exist.
- [ ] Puck is only a dependency of Builder and is absent from public renderer dependency graphs.
- [ ] Company Website and Storefront can consume the published page schema and shared block capabilities without importing Builder.
- [ ] Root lint, typecheck, test, and build tasks are orchestrated by Turborepo.
- [ ] RTL and LTR support is preserved across all four applications.
