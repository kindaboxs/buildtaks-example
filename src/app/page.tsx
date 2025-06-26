import { Suspense } from "react";

import { Client } from "@/app/client";
import { api, HydrateClient } from "@/trpc/server";

export default async function HomePage() {
	void api.post.hello.prefetch({ text: "titid" });

	return (
		<HydrateClient>
			<Suspense fallback={<p>Loading...</p>}>
				<Client />
			</Suspense>
		</HydrateClient>
	);
}
