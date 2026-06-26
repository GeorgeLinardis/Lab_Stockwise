import { pgEnum, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import user from "./user";
import { CURRENCY } from "@stockwise/shared/constants";

export const currencyEnum = pgEnum("currency", [CURRENCY.USD, CURRENCY.GBP, CURRENCY.EUR]);

const settings = pgTable("settings", {
  id: text("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  userId: text("user_id")
    .notNull()
    .unique()
    .references(() => user.id, { onDelete: "cascade" }),
  currency: currencyEnum("currency").notNull().default(CURRENCY.USD),
  createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "string" })
    .notNull()
    .defaultNow()
    .$onUpdateFn(() => new Date().toISOString()),
});

export default settings;
