import express from "express";
import db from "./db/client.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Existing route
app.get("/", async (req, res) => {
  const result = await db.query("SELECT NOW()");
  res.send(`Database time: ${result.rows[0].now}`);
});

// New route to fetch employees
app.get("/employees", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM employees");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch employees" });
  }
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
