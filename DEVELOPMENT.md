# Development Guide

## Contents

- [Project Structure](#project-structure)
- [Conventions](#conventions)
  - [Branch Names](#branch-names)
  - [Test Files](#test-files)
- [Frontend](#frontend)
  - [Component Library](#component-library)
  - [Path Alias](#path-alias)
  - [Styleguide](#styleguide)
- [CI / GitHub Actions](#ci--github-actions)
- [Local Database](#local-database)
- [Running Tests](#running-tests)

---

## Project Structure

This repo uses **npm workspaces** with four packages: `client`, `server`, `shared`, and `db`. Workspaces are used specifically to share the `shared` package (types, utilities) between client and server without publishing it to npm. A single `package-lock.json` lives at the root and covers all packages.

---

## Conventions

### Branch Names

```
<type>-<issue_number>_<short-description>
```

e.g. `feat-18_router-app-shell`, `infra-17_base-components-styleguide`

Types mirror commit types: `feat`, `fix`, `infra`, `docs`, `refactor`, `chore`.

---

### Test Files

- Unit tests live colocated next to the file they test, using the `.test.ts` suffix
  - e.g. `src/app.ts` → `src/app.test.ts`
- Integration tests live in `tests/integration/`
  - e.g. `tests/integration/api.test.ts`
- E2E tests live in `tests/e2e/` (added when there is a deployed environment to test against)

**Unit** — tests one module in isolation, all external dependencies mocked

**Integration** — tests multiple real layers together (e.g. route → controller → real DB)

**E2E** — tests the full system end to end (real HTTP, real DB, possibly a browser)

---

## Frontend

### Component library

UI primitives live in `client/src/components/ui/` and are managed by [shadcn/ui](https://ui.shadcn.com/). They are copied into the repo (not installed as a package) so you can edit them freely.

Add a new component:

```bash
npx shadcn@latest add <component-name> --cwd client
```

### Path alias

The `@/` alias maps to `client/src/`. Use it for all non-relative imports:

```ts
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
```

### Styleguide

A live component showcase is available at `/styleguide` when the dev server is running. Add new components and design tokens there as they are introduced.

---

## CI / GitHub Actions

Runs on every push and PR to `master`. Skips on docs, images, and markdown changes.

| Job | Steps |
|---|---|
| Format | install → prettier check (all packages) |
| Server | install → lint → type-check → build → test |
| Client | install → type-check → lint → build → test |
| Shared | install → lint → type-check → build → test |

Run `npm run format` from root to auto-fix formatting before committing.

Jobs run in parallel. A failing step fails the pipeline immediately.

### Automated workflows

**Security audit** — runs `npm audit` every 5 days on client and server. Fails only on high or critical severity findings. Can also be triggered manually from the Actions UI.

**Dependabot** — opens weekly PRs to update npm dependencies across all packages (`client`, `server`, `shared`, `db`) and to keep GitHub Actions pinned to up-to-date commit SHAs.

---

## Running locally with Docker

Copy `.env.example` to `.env` and fill in credentials before first run.

```bash
docker compose up --build         # start all services (client, server, db)
docker compose up -d              # start in background
docker compose down               # stop all services
docker compose up --build server  # rebuild and restart a single service
```

Exec into a running container:

```bash
docker exec -it stockwise_server sh
docker exec -it stockwise_client sh
```

---

## Local Database

```bash
npm run db:generate -w db         # generate SQL from schema changes
npm run db:migrate -w db          # apply pending migrations
npm run db:studio -w db           # open Drizzle Studio UI
```

