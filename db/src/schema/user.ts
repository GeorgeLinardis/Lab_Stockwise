import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { relations, sql } from "drizzle-orm";
import portfolioItem from "./portfolioItem";
import watchlistItem from "./watchlistItem";
import settings from "./settings";

const user = pgTable("users", {
  id: text("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  email: text("email").notNull().unique(),
  username: text("username").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "string" })
    .notNull()
    .defaultNow()
    .$onUpdateFn(() => new Date().toISOString()),
});

export const userRelations = relations(user, ({ many, one }) => ({
  portfolioItems: many(portfolioItem),
  watchlistItems: many(watchlistItem),
  settings: one(settings, {
    fields: [user.id],
    references: [settings.userId],
  }),
}));

export default user;
