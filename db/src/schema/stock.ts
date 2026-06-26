import {
  integer,
  pgTable,
  text,
  timestamp,
  index,
  uniqueIndex,
  varchar,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

const stock = pgTable(
  "stocks",
  {
    id: text("id")
      .primaryKey()
      .default(sql`gen_random_uuid()`),
    ticker: varchar("ticker", { length: 10 }).notNull(),
    exchange: text("exchange"),
    name: text("name").notNull(),
    sector: text("sector"),
    currency: text("currency").notNull(),
    lastPrice: integer("last_price"),
    priceCachedAt: timestamp("price_cached_at", { mode: "string" }),
    createdAt: timestamp("created_at", { mode: "string" }),
    updatedAt: timestamp("updated_at", { mode: "string" })
      .notNull()
      .defaultNow()
      .$onUpdateFn(() => new Date().toISOString()),
  },
  (table) => [
    index("stocks_ticker_idx").on(table.ticker),
    index("stocks_name_idx").on(table.name),
    uniqueIndex("stocks_ticker_exchange_idx").on(table.ticker, table.exchange),
  ]
);

export default stock;
