import { index, integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { relations, sql } from "drizzle-orm";
import user from "./user";
import stock from "./stock";

const portfolioItem = pgTable(
  "portfolio_items",
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
    quantity: integer("quantity").notNull(),
    purchasePrice: integer("purchase_price").notNull(),
    purchasedAt: timestamp("purchased_at"),
    sellPrice: integer("sell_price"),
    soldAt: timestamp("sold_at"),
    deletedAt: timestamp("deleted_at"),
    notes: text("notes"),
    createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { mode: "string" })
      .notNull()
      .defaultNow()
      .$onUpdateFn(() => new Date().toISOString()),
  },
  (table) => [index("portfolio_items_user_id_idx").on(table.userId)]
);

export const portfolioItemRelations = relations(portfolioItem, ({ one }) => ({
  user: one(user, {
    fields: [portfolioItem.userId],
    references: [user.id],
  }),
  stock: one(stock, {
    fields: [portfolioItem.stockId],
    references: [stock.id],
  }),
}));

export default portfolioItem;
