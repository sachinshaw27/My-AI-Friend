/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
    url:'postgresql://neondb_owner:v7gelVz4Eafi@ep-fragrant-block-a5vb4hbc.us-east-2.aws.neon.tech/ai-interview-mock-app?sslmode=require',
    }
  };