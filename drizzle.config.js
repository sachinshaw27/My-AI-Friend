/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://accounts:4z1ZpqVWAnLX@ep-fragrant-block-a5vb4hbc.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require',
    }
  };