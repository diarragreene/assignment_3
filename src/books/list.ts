import { z } from "zod";
import assignment3 from "../../adapter/assignment-3"; // Adjust path as needed
import { ZodRouter } from "koa-zod-router";

export default function books_list(router: ZodRouter) {
  router.register({
    name: "list books",
    method: "get",
    path: "/books",
    validate: {
      query: z.object({
        filters: z
          .object({
            from: z.coerce.number().optional(),
            to: z.coerce.number().optional(),
            name: z.string().optional(),
            author: z.string().optional(),
          })
          .array()
          .optional(),
      }),
    },
    handler: async (ctx, next) => {
      const { filters } = ctx.request.query;

      const books = await assignment3.listBooks(filters);

      ctx.body = books;
      await next();
    },
  });
}
