"use client";

import { useSuspenseQuery } from "@tanstack/react-query";

import { api } from "@/trpc/react";

export const Client = () => {
	const utils = api.useUtils();
	const { data } = useSuspenseQuery(
		utils.post.hello.queryOptions({ text: "titid" })
	);

	return (
		<div>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
	);
};
