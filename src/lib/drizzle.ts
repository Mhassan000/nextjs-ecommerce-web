import {
    pgTable,
    serial,
    varchar,
    integer
} from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";

export const cartTable = pgTable('cart',{
    id: serial('id').primaryKey(),
    user_id: varchar('user_id',{length:255}).notNull(),
    product_id: varchar('product_id',{length:255}).notNull(),
    Quantity: integer('quantity').notNull()

})

export const db = drizzle(sql)