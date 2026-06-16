# Development Guide

## Conventions

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

## CI / GitHub Actions

Runs on every push and PR to `master`. Skips on docs, images, and markdown changes.

| Job | Steps |
|---|---|
| Server | install → type-check → build → test |
| Client | install → type-check → lint → build → test |

Jobs run in parallel. A failing step fails the pipeline immediately.

**Note:** Server has no ESLint setup yet — lint is client-only for now.

---

## Local Database

Requires Docker. Copy `.env.example` to `.env` and fill in credentials before first run.

```bash
docker compose up -d              # start PostgreSQL

npm run db:generate -w db         # generate SQL from schema changes
npm run db:migrate -w db          # apply pending migrations
npm run db:studio -w db           # open Drizzle Studio UI
```

---

## Running Tests

### Server (Jest + ts-jest)

```bash
npm test -w server           # run once
npm run test:watch -w server # watch mode
```

### Client (Vitest + React Testing Library)

```bash
npm test -w client           # run once
npm run test:watch -w client # watch mode (interactive)
```
