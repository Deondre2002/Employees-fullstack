import pkg from "pg";
const { Pool } = pkg;

const db = new Pool({
  user: "postgres",
  host: "localhost",
  database: "fullstack_employees",
  password: "2011maxima",
  port: 5432,
});

console.log("Type of password:", typeof "2011maxima");

db.connect()
  .then(() => {
    console.log("✅ Connected successfully!");
    db.end();
  })
  .catch((err) => {
    console.error("❌ Connection failed:", err);
  });
