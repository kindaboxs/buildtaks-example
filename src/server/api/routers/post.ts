import { z } from "zod";

import { inngest } from "@/inngest/client";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const postRouter = createTRPCRouter({
	invoke: publicProcedure
		.input(z.object({ value: z.string() }))
		.mutation(async ({ input }) => {
			await inngest.send({
				name: "test/hello.world",
				data: {
					value: input.value,
				},
			});

			return { ok: "success" };
		}),

	hello: publicProcedure
		.input(z.object({ text: z.string() }))
		.query(({ input }) => {
			return {
				greeting: `Hello ${input.text}`,
			};
		}),
});
