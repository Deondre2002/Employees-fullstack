import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const db = new pg.Client({
  connectionString: process.env.DATABASE_URL,
});

db.connect()
  .then(() => console.log("✅ Connected to DB!"))
  .catch((err) => console.error("❌ Connection failed:", err));

export default db;
