# Stockwise

![Status](https://img.shields.io/badge/status-in%20progress-yellow)
![Pipeline](https://img.shields.io/github/actions/workflow/status/GeorgeLinardis/Lab_Stockwise/ci.yml?branch=master&label=pipeline)

> A clean, fast stock evaluation tool for investors who want signal without the noise.

---

## What it does

Most stock platforms overwhelm you with data. Stockwise does the opposite.

Search a ticker, get a clear evaluation of the fundamentals, track the stocks you care about, and move on. No ads, no noise, no infinite scroll of financial news.

---

## Stack

| Layer | Technology |
|---|---|
| Frontend | React + Vite + TypeScript |
| Backend | Express + TypeScript |
| Database | PostgreSQL |
| Caching | Redis |
| Testing | Jest + React Testing Library |

---

## Architecture

_To be added_

---

## Project structure

```
lab-untitled-project/
├── client/         # React + Vite frontend
│   └── src/
├── server/         # Express API
│   └── src/
└── README.md
```

---

## Running locally

```bash
# Frontend
cd client && npm install && npm run dev

# Backend
cd server && npm install && npm run dev
```

---

## Testing

```bash
# Server — run once
cd server && npm test

# Server — watch mode
cd server && npm run test:watch

# Client — run once
cd client && npm test

# Client — watch mode
cd client && npm run test:watch
```

---

## CI

Runs on every push and PR to `master`. Skips on docs and image changes.

| Job | Steps |
|---|---|
| Server | install → type-check → build → test |
| Client | install → type-check → lint → build → test |

See [DEVELOPMENT.md](./DEVELOPMENT.md) for full conventions.
