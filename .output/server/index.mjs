globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/apple-touch-icon.png": {
		"type": "image/png",
		"etag": "\"4fdb-5gsWG7A5tI/z/cA7DgDdLy1qBU4\"",
		"mtime": "2026-11-17T13:25:38.000Z",
		"size": 20443,
		"path": "../public/apple-touch-icon.png"
	},
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"4b38-/rYHUCMs1My7x8wRBq0JcROUhA8\"",
		"mtime": "2026-11-17T13:25:38.000Z",
		"size": 19256,
		"path": "../public/favicon.png"
	},
	"/manifest.webmanifest": {
		"type": "application/manifest+json",
		"etag": "\"2d4-h3hisqgFLk1KkGZpy3fXBPJ1hxs\"",
		"mtime": "2026-11-17T13:25:38.000Z",
		"size": 724,
		"path": "../public/manifest.webmanifest"
	},
	"/pwa-192x192.png": {
		"type": "image/png",
		"etag": "\"1f8a-PuoW4v4xhtYf3c2StFPY/nEPVWg\"",
		"mtime": "2026-11-17T13:25:38.000Z",
		"size": 8074,
		"path": "../public/pwa-192x192.png"
	},
	"/pwa-512x512.png": {
		"type": "image/png",
		"etag": "\"2e38-r8Ci3vG2x4HILNDRrPxSuJjhEF4\"",
		"mtime": "2026-11-17T13:25:38.000Z",
		"size": 11832,
		"path": "../public/pwa-512x512.png"
	},
	"/pwa-maskable-512x512.png": {
		"type": "image/png",
		"etag": "\"37d9-htaiXW+7O/EWZCcZpK3fWRvuIKI\"",
		"mtime": "2026-11-17T13:25:38.000Z",
		"size": 14297,
		"path": "../public/pwa-maskable-512x512.png"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-11-17T13:25:38.000Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/sw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b9a-qp1qwKlET7PClK4IPPhImp4R1Pc\"",
		"mtime": "2026-11-17T13:25:38.000Z",
		"size": 2970,
		"path": "../public/sw.js"
	},
	"/assets/admin-Brtek_f5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d52-RhceeuFJImF3L4Kf48xISHQHIJE\"",
		"mtime": "2026-11-19T07:49:32.367Z",
		"size": 3410,
		"path": "../public/assets/admin-Brtek_f5.js"
	},
	"/assets/check-444w95lC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"72-t25AuysiEUvlfiu37YudpEYd3sU\"",
		"mtime": "2026-11-19T07:49:32.368Z",
		"size": 114,
		"path": "../public/assets/check-444w95lC.js"
	},
	"/assets/curriculum-bcLO5sjT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"942c-LhBbJJXUtYFdFHQUWdKlc84N6S0\"",
		"mtime": "2026-11-19T07:49:32.370Z",
		"size": 37932,
		"path": "../public/assets/curriculum-bcLO5sjT.js"
	},
	"/assets/dashboard-DblKJKSG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6bf-N7AclEK2yR9S11WWl4WlApODa4A\"",
		"mtime": "2026-11-19T07:49:32.371Z",
		"size": 1727,
		"path": "../public/assets/dashboard-DblKJKSG.js"
	},
	"/assets/dist-B3F41m82.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2a69-KhTcDQvEqyqmujN4fN4Q7wVFNQI\"",
		"mtime": "2026-11-19T07:49:32.371Z",
		"size": 10857,
		"path": "../public/assets/dist-B3F41m82.js"
	},
	"/assets/enrollments-Donr9w5R.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"33e6-IICKiDG7F/pJhrbmIas1aLqyvSI\"",
		"mtime": "2026-11-19T07:49:32.372Z",
		"size": 13286,
		"path": "../public/assets/enrollments-Donr9w5R.js"
	},
	"/assets/host._sessionId-BFDt5NoM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b1f-ZxX2bYhhz7NXLxQcBIVgn9lrLes\"",
		"mtime": "2026-11-19T07:49:32.373Z",
		"size": 6943,
		"path": "../public/assets/host._sessionId-BFDt5NoM.js"
	},
	"/assets/join-CS-1vWXb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"204b-T7vCZ1hdbOQ2mBnhjXoowqQbZmc\"",
		"mtime": "2026-11-19T07:49:32.374Z",
		"size": 8267,
		"path": "../public/assets/join-CS-1vWXb.js"
	},
	"/assets/live-classes-bk5vT03t.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2678-OlzuiaWt5Rq0mVGpUHQRpr0y1bM\"",
		"mtime": "2026-11-19T07:49:32.375Z",
		"size": 9848,
		"path": "../public/assets/live-classes-bk5vT03t.js"
	},
	"/assets/login-2XXq-YWo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"12ae-J5AQ6gRfFzB/Q81+NI+r27GmLd8\"",
		"mtime": "2026-11-19T07:49:32.377Z",
		"size": 4782,
		"path": "../public/assets/login-2XXq-YWo.js"
	},
	"/assets/payments-BZ1TZ1Ma.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3f88-OUNBTlCMZDkP/9oeG5HGMHs37/o\"",
		"mtime": "2026-11-19T07:49:32.378Z",
		"size": 16264,
		"path": "../public/assets/payments-BZ1TZ1Ma.js"
	},
	"/assets/plus-1oPq_BJ-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"16e-wKg5vw6s0UXh5YpF2lCsgYGLXeE\"",
		"mtime": "2026-11-19T07:49:32.379Z",
		"size": 366,
		"path": "../public/assets/plus-1oPq_BJ-.js"
	},
	"/assets/portal-shell-B7Av--H_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cc8e-VlDnlL5kZYbfFmeoA9HNkaV0Loo\"",
		"mtime": "2026-11-19T07:49:32.380Z",
		"size": 52366,
		"path": "../public/assets/portal-shell-B7Av--H_.js"
	},
	"/assets/quiz-ClfFydCJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2e47-QPX7fSBY40DOvUBDQo0O2NvmvsM\"",
		"mtime": "2026-11-19T07:49:32.381Z",
		"size": 11847,
		"path": "../public/assets/quiz-ClfFydCJ.js"
	},
	"/assets/quiz-DUC0d2Y9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4304-o/2J6qGqFz6eml5WTPdGCvuKkjk\"",
		"mtime": "2026-11-19T07:49:32.382Z",
		"size": 17156,
		"path": "../public/assets/quiz-DUC0d2Y9.js"
	},
	"/assets/quiz-leaderboard-yEuUwaWe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6ff-ZkgqTUXwHpDldNwH3VBR8y1j+i4\"",
		"mtime": "2026-11-19T07:49:32.383Z",
		"size": 1791,
		"path": "../public/assets/quiz-leaderboard-yEuUwaWe.js"
	},
	"/assets/index-Dbbh6rFQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9bebd-6FVMeM8Eh3Pnj42J7wwbqWW89ew\"",
		"mtime": "2026-11-19T07:49:32.365Z",
		"size": 638653,
		"path": "../public/assets/index-Dbbh6rFQ.js"
	},
	"/assets/results-0ctMLuj0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"26a8-GUvNKzTC9c7XPXRHeTep9BqtNfE\"",
		"mtime": "2026-11-19T07:49:32.396Z",
		"size": 9896,
		"path": "../public/assets/results-0ctMLuj0.js"
	},
	"/assets/results-C2T8sLBX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2a06-F0WC/QTLlaWiWnSv4S5049VtHlg\"",
		"mtime": "2026-11-19T07:49:32.396Z",
		"size": 10758,
		"path": "../public/assets/results-C2T8sLBX.js"
	},
	"/assets/routes-YDZFFDya.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6663-WpPGPf9iSQxb1m9mfyAgfcrmz48\"",
		"mtime": "2026-11-19T07:49:32.398Z",
		"size": 26211,
		"path": "../public/assets/routes-YDZFFDya.js"
	},
	"/assets/search-B-58uf-a.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a4-4MGOGMavqU1d0xrDUFrLTfVfTCM\"",
		"mtime": "2026-11-19T07:49:32.399Z",
		"size": 164,
		"path": "../public/assets/search-B-58uf-a.js"
	},
	"/assets/signup-DG6B1cB1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c61-mMETfwzvQ2DxHRSNhTJrvcP63tE\"",
		"mtime": "2026-11-19T07:49:32.401Z",
		"size": 7265,
		"path": "../public/assets/signup-DG6B1cB1.js"
	},
	"/assets/student-C4nLTXGj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"22f7-7mtOFhC38yHMXCN7ONN8sllM9Z4\"",
		"mtime": "2026-11-19T07:49:32.402Z",
		"size": 8951,
		"path": "../public/assets/student-C4nLTXGj.js"
	},
	"/assets/students-BiIV0C00.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8d2-tmxqrcRAnyel0oyIcX8CB5KQTcQ\"",
		"mtime": "2026-11-19T07:49:32.403Z",
		"size": 2258,
		"path": "../public/assets/students-BiIV0C00.js"
	},
	"/assets/styles-ClxzHbLQ.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1718b-A86pBtALu+t0CynZXwtbbWHC/gE\"",
		"mtime": "2026-11-19T07:49:32.416Z",
		"size": 94603,
		"path": "../public/assets/styles-ClxzHbLQ.css"
	},
	"/assets/teacher-BfH-XOx0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10be-45s0EMLBDvcRvKXkxnEQdqCkgv0\"",
		"mtime": "2026-11-19T07:49:32.404Z",
		"size": 4286,
		"path": "../public/assets/teacher-BfH-XOx0.js"
	},
	"/assets/teachers-aenc4r-_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"36db-zW3HO0tVf/wfe/12wTVuTnJBOhU\"",
		"mtime": "2026-11-19T07:49:32.405Z",
		"size": 14043,
		"path": "../public/assets/teachers-aenc4r-_.js"
	},
	"/assets/trash-2-Btm6pxT_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13e-Tuj0CdpQ68vvig0nRW3AGdusj8s\"",
		"mtime": "2026-11-19T07:49:32.410Z",
		"size": 318,
		"path": "../public/assets/trash-2-Btm6pxT_.js"
	},
	"/assets/trophy-CNYWzOwE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d2-DCox4WlcaFnvy4EyXufRhuAvQc0\"",
		"mtime": "2026-11-19T07:49:32.413Z",
		"size": 466,
		"path": "../public/assets/trophy-CNYWzOwE.js"
	},
	"/assets/use-portal-role-DgC3JtMP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"26b-kIDz+MM3MgnxIUrv/+Nz2hU/KOU\"",
		"mtime": "2026-11-19T07:49:32.413Z",
		"size": 619,
		"path": "../public/assets/use-portal-role-DgC3JtMP.js"
	},
	"/assets/useMutation-kycrXbwt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"91e-VsDME0TcXFpX2/6yVzn2JsugTVU\"",
		"mtime": "2026-11-19T07:49:32.414Z",
		"size": 2334,
		"path": "../public/assets/useMutation-kycrXbwt.js"
	},
	"/assets/aistudio/quranic-path-portal-main__2__983bd672.zip": {
		"type": "application/zip",
		"etag": "\"3f6d0-Co+9jCsHJ+qmoF2/2fcZLZ/3gnk\"",
		"mtime": "2026-11-17T13:25:38.000Z",
		"size": 259792,
		"path": "../public/assets/aistudio/quranic-path-portal-main__2__983bd672.zip"
	},
	"/assets/aistudio/file_000000001f1c81f480c6e33a83b06779_df73c98b.png": {
		"type": "image/png",
		"etag": "\"1b0f19-9wd82F9aTkAiEunWZKLCu+q9VZk\"",
		"mtime": "2026-11-17T13:25:38.000Z",
		"size": 1773337,
		"path": "../public/assets/aistudio/file_000000001f1c81f480c6e33a83b06779_df73c98b.png"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_Y31HSa = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_Y31HSa
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
