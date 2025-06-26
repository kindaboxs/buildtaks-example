"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { api } from "@/trpc/react";

export default function HomePage() {
	const invoke = api.post.invoke.useMutation({
		onSuccess: () => {
			toast.success("Background Job Started");
		},
	});

	return (
		<div className="mx-auto max-w-7xl p-4">
			<Button
				onClick={() => invoke.mutate({ text: "Hello World" })}
				disabled={invoke.isPending}
			>
				Invoke Background Job
			</Button>
		</div>
	);
}
