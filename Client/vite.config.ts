import { fileURLToPath, URL } from "node:url";
import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [
		remix({
			future: {
				v3_fetcherPersist: true,
				v3_relativeSplatPath: true,
				v3_throwAbortReason: true
			}
		}),
		tsconfigPaths()
	],
	resolve: {
		alias: [
			{ find: "@app", replacement: fileURLToPath(new URL("./app", import.meta.url)) },
			{ find: "@pages", replacement: fileURLToPath(new URL("./pages", import.meta.url)) },
			{ find: "@shared", replacement: fileURLToPath(new URL("./shared", import.meta.url)) },
			{ find: "@widgets", replacement: fileURLToPath(new URL("./widgets", import.meta.url)) }
		]
	}
});
