import db from "#db/client";
import { createEmployee } from "./queries/employees.js";

await db.connect();

async function seedEmployees() {
  const employees = [
    ["Naruto Uzumaki", "1997-10-10", 85000],
    ["Sasuke Uchiha", "1997-07-23", 87000],
    ["Sakura Haruno", "1998-03-28", 70000],
    ["Kakashi Hatake", "1976-09-15", 96000],
    ["Rock Lee", "1997-11-27", 82000],
    ["Hinata Hyuga", "1997-12-27", 80000],
    ["Shikamaru Nara", "1997-09-22", 78000],
    ["Ino Yamanaka", "1997-09-23", 75000],
    ["Choji Akimichi", "1997-11-01", 77000],
    ["Neji Hyuga", "1997-07-03", 81000],
  ];

  for (const [name, birthday, salary] of employees) {
    await createEmployee(name, birthday, salary);
  }

  console.log("✅ Dattebayo!");
}

await seedEmployees();
await db.end();
