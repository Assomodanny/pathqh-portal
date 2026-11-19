import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/host._sessionId-9X1P-JhL.js
var $$splitComponentImporter = () => import("./host._sessionId-GHH7yzG0.mjs");
var Route = createFileRoute("/quiz/host/$sessionId")({
	ssr: false,
	head: () => ({ meta: [
		{ title: "Hosting Live Quiz — Path to Qur'anic Understanding" },
		{
			name: "description",
			content: "Host controls for a live quiz session, with the PIN and a live leaderboard."
		},
		{
			property: "og:title",
			content: "Hosting Live Quiz — Path to Qur'anic Understanding"
		},
		{
			property: "og:description",
			content: "Host controls for a live quiz session."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
