import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  students: defineTable({
    name: v.string(),
    dob: v.string(),
    studentId: v.string(),
    familyId: v.id("families"),
  })
    .index("by_studentId", ["studentId"])
    .index("by_familyId", ["familyId"]),

  families: defineTable({
    name: v.string(),
  }).index("by_name", ["name"]),
  familyMemberships: defineTable({
    userId: v.string(),
    familyId: v.id("families"),
  })
    .index("by_userId", ["userId"])
    .index("by_familyId", ["familyId"]),

  emergencyContacts: defineTable({
    name: v.string(),
    phones: v.array(
      v.object({
        type: v.union(
          v.literal("home"),
          v.literal("work"),
          v.literal("mobile"),
          v.literal("other")
        ),
        number: v.string(),
      })
    ),
    relationship: v.string(),
    familyId: v.id("families"),
  }).index("by_familyId", ["familyId"]),

  tutors: defineTable({
    name: v.string(),
    userId: v.string(),
    bio: v.string(),
  }).index("by_userId", ["userId"]),

  courses: defineTable({
    name: v.string(),
    description: v.string(),
  }),
  sessions: defineTable({
    courseId: v.id("courses"),
    tutorId: v.id("tutors"),
    time: v.string(),
    day: v.union(
      v.literal("monday"),
      v.literal("tuesday"),
      v.literal("wednesday"),
      v.literal("thursday"),
      v.literal("friday"),
      v.literal("saturday"),
      v.literal("sunday")
    ),
    capacity: v.number(),
  })
    .index("by_courseId", ["courseId"])
    .index("by_tutorId", ["tutorId"]),

  enrollments: defineTable({
    studentId: v.id("students"),
    sessionId: v.id("sessions"),
    status: v.union(
      v.literal("pending"),
      v.literal("confirmed"),
      v.literal("cancelled")
    ),
    preferenceOrder: v.number(),
  })
    .index("by_studentId", ["studentId"])
    .index("by_sessionId", ["sessionId"])
    .index("by_status", ["status"]),
});
