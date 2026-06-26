import { pgTable, text, timestamp, uniqueIndex } from "drizzle-orm/pg-core";
import { relations, sql } from "drizzle-orm";
import user from "./user";
import stock from "./stock";

const watchlistItem = pgTable(
  "watchlist_items",
  {
    id: text("id")
      .primaryKey()
      .default(sql`gen_random_uuid()`),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    stockId: text("stock_id")
      .notNull()
      .references(() => stock.id),
    notes: text("notes"),
    createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { mode: "string" })
      .notNull()
      .defaultNow()
      .$onUpdateFn(() => new Date().toISOString()),
  },
  (table) => [uniqueIndex("watchlist_items_user_stock_idx").on(table.userId, table.stockId)]
);

export const watchlistItemRelations = relations(watchlistItem, ({ one }) => ({
  user: one(user, {
    fields: [watchlistItem.userId],
    references: [user.id],
  }),
  stock: one(stock, {
    fields: [watchlistItem.stockId],
    references: [stock.id],
  }),
}));

export default watchlistItem;
