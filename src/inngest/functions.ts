import { createAgent, gemini } from "@inngest/agent-kit";

import { env } from "@/env";
import { inngest } from "@/inngest/client";

export const helloWorld = inngest.createFunction(
	{ id: "hello-world" },
	{ event: "test/hello.world" },
	async ({ event }) => {
		// Create a new agent with a system prompt (you can add optional tools, too)
		const codeAgent = createAgent({
			name: "code-agent",
			system:
				"You are an expert Next.js developer. You write readable, maintainable code. You write simple Next.js & React snippets",
			model: gemini({ model: "gemini-1.5-flash", apiKey: env.GEMINI_API_KEY }),
		});

		const { output } = await codeAgent.run(
			`Write the following snippet: ${event.data.value}`
		);
		console.log(output);

		return { output };
	}
);

// DOCS: https://www.inngest.com/docs/features/inngest-functions/steps-workflows/step-ai-orchestration
// DOCS: https://agentkit.inngest.com/concepts/agents
