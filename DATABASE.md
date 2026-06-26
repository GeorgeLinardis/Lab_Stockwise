# Database

PostgreSQL via Drizzle ORM. Schema lives in `db/src/schema/`. Full design spec: [designs/designs.md](./designs/designs.md).

## Current tables

```mermaid
erDiagram
    users ||--|| settings : "has"
    users ||--o{ portfolio_items : "owns"
    users ||--o{ watchlist_items : "watches"
    portfolio_items }o--|| stocks : "references"
    watchlist_items }o--|| stocks : "references"

    users {
        text id PK
        text email
        text username
        text password_hash
        timestamp created_at
        timestamp updated_at
    }

    settings {
        text id PK
        text user_id FK
        text currency
        timestamp created_at
        timestamp updated_at
    }

    portfolio_items {
        text id PK
        text user_id FK
        text stock_id FK
        integer quantity
        integer purchase_price
        timestamp purchased_at
        integer sell_price
        timestamp sold_at
        timestamp deleted_at
        text notes
        timestamp created_at
        timestamp updated_at
    }

    watchlist_items {
        text id PK
        text user_id FK
        text stock_id FK
        text notes
        timestamp created_at
        timestamp updated_at
    }

    stocks {
        text id PK
        varchar ticker
        text exchange
        text name
        text sector
        text currency
        integer last_price
        timestamp price_cached_at
        timestamp created_at
        timestamp updated_at
    }
```

## Migrations

Generate a migration after changing the schema:

```bash
npm run db:generate -w @stockwise/db
```

Apply it to the database:

```bash
npm run db:migrate -w @stockwise/db
```

Migrations are stored in `db/src/migrations/`.
