import { v } from "convex/values";
import {mutation, query} from "./_generated/server";

export const addSchools = mutation({
    args: {
        name: v.string(),
        address: v.string(),
        city: v.string(),
        state: v.string(),
        contact_number: v.string(),
        image: v.string(),
        email_id: v.string(),
        createdAt: v.number(),
    },
    handler: async (ctx, args) => {
        await ctx.db.insert("schools", {
            ...args,
            createdAt: Date.now(),
        })
    }
})

export const getSchools = query({
    args: {},
    handler: async (ctx) => {
        return await ctx.db.query("schools").order("desc").collect();
    }
})