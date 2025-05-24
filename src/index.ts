import Koa from "koa";
import cors from "@koa/cors";
import zodRouter from "koa-zod-router";
import qs from "koa-qs";

import books_list from "./books/list";
import create_or_update_book from "./books/create_or_update";
import delete_book from "./books/delete";
import { client } from "./database_access"; // MongoDB client

const app = new Koa();

// Enable parsing of complex query strings (e.g., filters[0][author]=...)
qs(app);

// Enable CORS for frontend integration
app.use(cors());

// Initialize router
const router = zodRouter();

// Register all routes
books_list(router);
create_or_update_book(router);
delete_book(router);

// Use router middleware
app.use(router.routes());

// Connect to MongoDB and start server
async function main() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");

    app.listen(3000, () => {
      console.log("Server listening at http://localhost:3000");
    });
  } catch (err) {
    console.error(" MongoDB connection failed:", err);
    process.exit(1);
  }
}

main();
