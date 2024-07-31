import type { MetaFunction } from "@remix-run/node";

import { HomePage } from "@pages/home";

export const meta: MetaFunction = () => {
	return [
		{ title: "Coming soon" },
		{
			name: "description",
			content:
				"Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals."
		}
	];
};

export default HomePage;
