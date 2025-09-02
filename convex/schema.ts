import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    schools : defineTable({
        name: v.string(),
        address: v.string(),
        city: v.string(),
        state: v.string(),
        contact_number: v.string(),
        image: v.string(),
        email_id: v.string(),
        createdAt: v.number(),
    }).index("by_city", ["city"])
    .index("by_name", ["name"]),
})