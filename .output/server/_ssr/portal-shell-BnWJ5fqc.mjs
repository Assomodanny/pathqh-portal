import { n as __toESM } from "../_runtime.mjs";
import { n as ALLOWED_SUBJECTS } from "./curriculum-rYiZvMsx.mjs";
import { _ as require_jsx_runtime, l as Slot, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as AlertDialogDescription$1, c as AlertDialogTitle$1, i as AlertDialogContent$1, l as AlertDialogTrigger$1, n as AlertDialogAction$1, o as AlertDialogOverlay$1, r as AlertDialogCancel$1, s as AlertDialogPortal$1, t as AlertDialog$1 } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { T as fetchUserRole, W as useAuth, z as signOut } from "./auth-Cf0ksebd.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { _ as useNavigate, g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { C as ClipboardList, D as BookOpen, E as CalendarClock, S as CreditCard, _ as LayoutDashboard, g as LogOut, k as BookCheck, m as Menu, n as Users, s as Sparkles, t as X, y as GraduationCap } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portal-shell-BnWJ5fqc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var AlertDialog = AlertDialog$1;
var AlertDialogTrigger = AlertDialogTrigger$1;
var AlertDialogPortal = AlertDialogPortal$1;
var AlertDialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogOverlay$1, {
	className: cn("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
AlertDialogOverlay.displayName = AlertDialogOverlay$1.displayName;
var AlertDialogContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props
})] }));
AlertDialogContent.displayName = AlertDialogContent$1.displayName;
var AlertDialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
AlertDialogHeader.displayName = "AlertDialogHeader";
var AlertDialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
AlertDialogFooter.displayName = "AlertDialogFooter";
var AlertDialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold", className),
	...props
}));
AlertDialogTitle.displayName = AlertDialogTitle$1.displayName;
var AlertDialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
AlertDialogDescription.displayName = AlertDialogDescription$1.displayName;
var AlertDialogAction = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogAction$1, {
	ref,
	className: cn(buttonVariants(), className),
	...props
}));
AlertDialogAction.displayName = AlertDialogAction$1.displayName;
var AlertDialogCancel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogCancel$1, {
	ref,
	className: cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className),
	...props
}));
AlertDialogCancel.displayName = AlertDialogCancel$1.displayName;
var portalCard = "rounded-xl border border-border/90 bg-card/85 p-6 shadow-sm backdrop-blur-sm transition-colors duration-200 hover:border-amber/50";
var portalPrimaryButton = "inline-flex h-11 items-center justify-center gap-2 rounded-md bg-amber px-5 text-sm font-semibold tracking-wide text-primary-foreground shadow-sm transition-colors duration-200 hover:bg-amber-soft";
var portalGhostButton = "inline-flex h-11 items-center justify-center gap-2 rounded-md border border-amber/50 px-5 text-sm font-medium text-amber transition-colors duration-200 hover:border-amber hover:bg-amber/10";
function SignOutButton({ className, fullWidth = false }) {
	const navigate = useNavigate();
	const [busy, setBusy] = (0, import_react.useState)(false);
	async function handleConfirmSignOut() {
		setBusy(true);
		try {
			await signOut();
			navigate({
				to: "/login",
				replace: true
			});
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialog, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogTrigger, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			disabled: busy,
			className: className ?? `inline-flex h-11 items-center justify-center gap-2 rounded-md border border-border px-4 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:border-amber/70 hover:text-amber ${fullWidth ? "w-full" : ""}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, {
				className: "size-4",
				"aria-hidden": "true"
			}), busy ? "Signing out…" : "Sign out"]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogContent, {
		className: "border-border bg-card text-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogTitle, {
			className: "font-display text-xl text-headline",
			children: "Sign out of your account?"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogDescription, {
			className: "text-sm leading-relaxed text-muted-foreground",
			children: "Are you sure you want to sign out? You will need your school email and password to sign back in."
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogCancel, {
			className: "border-border bg-secondary text-foreground hover:bg-accent",
			children: "Cancel"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogAction, {
			onClick: () => void handleConfirmSignOut(),
			className: "bg-amber font-semibold text-primary-foreground hover:bg-amber-soft",
			children: "Yes, sign out"
		})] })]
	})] });
}
var ROLE_NAV = {
	admin: {
		label: "Administration",
		items: [
			{
				label: "Overview",
				to: "/admin",
				icon: LayoutDashboard,
				exact: true
			},
			{
				label: "Students",
				to: "/admin/students",
				icon: GraduationCap
			},
			{
				label: "Enrollments",
				to: "/admin/enrollments",
				icon: BookCheck
			},
			{
				label: "Teachers",
				to: "/admin/teachers",
				icon: Users
			},
			{
				label: "Payments",
				to: "/admin/payments",
				icon: CreditCard
			},
			{
				label: "Results",
				to: "/admin/results",
				icon: ClipboardList
			},
			{
				label: "Live classes",
				to: "/live-classes",
				icon: CalendarClock
			},
			{
				label: "Live quizzes",
				to: "/quiz",
				icon: Sparkles
			}
		]
	},
	teacher: {
		label: "Teaching Staff",
		items: [
			{
				label: "Dashboard",
				to: "/teacher",
				icon: LayoutDashboard,
				exact: true
			},
			{
				label: "Live classes",
				to: "/live-classes",
				icon: CalendarClock
			},
			{
				label: "Live quizzes",
				to: "/quiz",
				icon: Sparkles
			}
		]
	},
	student: {
		label: "Student Portal",
		items: [
			{
				label: "Dashboard",
				to: "/student",
				icon: BookOpen,
				exact: true
			},
			{
				label: "Results",
				to: "/results",
				icon: ClipboardList
			},
			{
				label: "Live classes",
				to: "/live-classes",
				icon: CalendarClock
			},
			{
				label: "Join live quiz",
				to: "/quiz/join",
				icon: Sparkles
			}
		]
	}
};
function isNavActive(pathname, item) {
	if (item.exact) return pathname === item.to || pathname === `${item.to}/`;
	return pathname === item.to || pathname.startsWith(`${item.to}/`);
}
function SidebarNav({ role, email, pathname, onNavigate, showCloseButton = false }) {
	const config = ROLE_NAV[role];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col justify-between gap-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1 rounded-lg border border-border/80 bg-background/60 px-3.5 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] font-medium uppercase tracking-[0.2em] text-amber",
							children: config.label
						}), email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 truncate text-xs text-muted-foreground",
							title: email,
							children: email
						})]
					}), showCloseButton && onNavigate && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onNavigate,
						"aria-label": "Close portal sidebar",
						className: "grid size-9 shrink-0 place-items-center rounded-md border border-border bg-card text-muted-foreground transition-colors hover:border-amber/60 hover:text-amber",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
							className: "size-4",
							"aria-hidden": "true"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					"aria-label": "Programmes",
					className: "rounded-lg border border-border/80 bg-background/40 p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-amber",
						children: "Programmes"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-2.5 space-y-1",
						children: ALLOWED_SUBJECTS.map((subject) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/live-classes",
							onClick: onNavigate,
							className: "flex items-center gap-2.5 rounded-md px-2 py-1.5 text-xs font-medium text-foreground/90 transition-colors hover:bg-card hover:text-amber",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "size-1.5 shrink-0 rounded-full bg-amber/80",
								"aria-hidden": "true"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate",
								children: subject
							})]
						}) }, subject))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					"aria-label": `${config.label} navigation`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2 px-2 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground",
						children: "Navigation"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-1",
						children: config.items.map((item) => {
							const Icon = item.icon;
							const active = isNavActive(pathname, item);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: item.to,
								onClick: onNavigate,
								className: `flex items-center gap-3 rounded-lg px-3.5 py-2.5 text-sm transition-colors duration-150 ${active ? "border border-amber/40 bg-amber/12 font-medium text-amber" : "border border-transparent text-muted-foreground hover:bg-card hover:text-headline"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-4 shrink-0",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate",
									children: item.label
								})]
							}) }, item.to);
						})
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border/80 pt-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SignOutButton, { fullWidth: true })
		})]
	});
}
function PortalShell({ eyebrow, title, subtitle, showSignOut = true, role: explicitRole, children }) {
	const { user } = useAuth();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [mobileSidebarOpen, setMobileSidebarOpen] = (0, import_react.useState)(false);
	const roleQuery = useQuery({
		queryKey: ["user-role", user?.id],
		queryFn: () => fetchUserRole(user.id),
		enabled: Boolean(user?.id) && explicitRole === void 0
	});
	const activeRole = explicitRole !== void 0 ? explicitRole : roleQuery.data ?? null;
	const showSidebar = Boolean(activeRole);
	(0, import_react.useEffect)(() => {
		if (!mobileSidebarOpen) return;
		function onKeyDown(event) {
			if (event.key === "Escape") setMobileSidebarOpen(false);
		}
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [mobileSidebarOpen]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-[calc(100vh-8rem)]",
		children: [
			showSidebar && activeRole && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setMobileSidebarOpen(true),
					"aria-label": "Open portal sidebar",
					"aria-expanded": mobileSidebarOpen,
					"aria-controls": "mobile-portal-sidebar",
					className: "fixed left-3 top-[5.25rem] z-40 inline-flex h-10 items-center gap-2 rounded-lg border border-amber/50 bg-card/95 px-3 text-xs font-semibold uppercase tracking-[0.14em] text-amber shadow-lg backdrop-blur-md transition-colors hover:bg-amber hover:text-primary-foreground md:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
						className: "size-4",
						"aria-hidden": "true"
					}), "Menu"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": "true",
					onClick: () => setMobileSidebarOpen(false),
					className: `fixed inset-0 z-50 bg-black/75 backdrop-blur-xs transition-opacity duration-200 md:hidden ${mobileSidebarOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					id: "mobile-portal-sidebar",
					"aria-label": "Mobile portal sidebar",
					"aria-hidden": !mobileSidebarOpen,
					className: `fixed inset-y-0 left-0 z-50 w-72 max-w-[85vw] overflow-y-auto border-r border-border bg-sidebar p-4 shadow-2xl transition-transform duration-200 ease-out md:hidden ${mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarNav, {
						role: activeRole,
						email: user?.email,
						pathname,
						showCloseButton: true,
						onNavigate: () => setMobileSidebarOpen(false)
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hero-gradient border-b border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `mx-auto max-w-6xl px-4 pb-12 sm:px-6 sm:pb-14 lg:px-8 ${showSidebar ? "pt-16 md:pt-12" : "pt-12 sm:pt-14"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "inline-flex items-center rounded-full border border-amber/40 bg-amber/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-amber",
							children: eyebrow
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-5 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl",
							children: title
						}),
						subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-2xl text-sm leading-relaxed text-foreground/85",
							children: subtitle
						}),
						!showSidebar && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-7 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/live-classes",
								className: "inline-flex h-11 items-center justify-center gap-2 rounded-md border border-amber/50 px-5 text-sm font-medium text-amber transition-colors duration-200 hover:border-amber hover:bg-amber/10",
								children: "Live classes"
							}), showSignOut && user && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SignOutButton, {})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8",
				children: showSidebar && activeRole ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-8 md:flex-row md:items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
						"aria-label": "Portal sidebar",
						className: "hidden w-64 shrink-0 rounded-xl border border-border bg-sidebar/95 p-4 md:sticky md:top-24 md:block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarNav, {
							role: activeRole,
							email: user?.email,
							pathname
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "min-w-0 flex-1",
						children
					})]
				}) : children
			})
		]
	});
}
function EmptyState({ title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-dashed border-border bg-card/50 p-8 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-lg font-semibold text-headline",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground",
			children: body
		})]
	});
}
//#endregion
export { portalGhostButton as a, portalCard as i, PortalShell as n, portalPrimaryButton as o, SignOutButton as r, EmptyState as t };
