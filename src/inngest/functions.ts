import { inngest } from "@/inngest/client";

export const helloWorld = inngest.createFunction(
	{ id: "hello-world" },
	{ event: "test/hello.world" },
	async ({ event, step }) => {
		// sample this is download step
		await step.sleep("wait-a-moment", "30s");

		// sample this is transcript step
		await step.sleep("wait-a-moment", "15s");

		// sample this is a summary
		await step.sleep("wait-a-moment", "5s");
		return { message: `Hello ${event.data.email}!` };
	}
);
