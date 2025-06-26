"use client";

import { useState } from "react";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { api } from "@/trpc/react";

export default function HomePage() {
	const [value, setValue] = useState<string>("");

	const invoke = api.post.invoke.useMutation({
		onSuccess: () => {
			toast.success("Background Job Started");
		},
	});

	return (
		<div className="mx-auto max-w-7xl p-4">
			<Input value={value} onChange={(e) => setValue(e.target.value)} />
			<Button
				onClick={() => invoke.mutate({ value: value })}
				disabled={invoke.isPending}
			>
				Invoke Background Job
			</Button>
		</div>
	);
}
