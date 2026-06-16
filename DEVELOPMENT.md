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

## Running Tests

### Server (Jest + ts-jest)

```bash
cd server && npm test           # run once
cd server && npm run test:watch # watch mode
```

### Client (Vitest + React Testing Library)

```bash
cd client && npm test           # run once
cd client && npm run test:watch # watch mode (interactive)
```
