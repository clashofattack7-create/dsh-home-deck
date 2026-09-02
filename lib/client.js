window.__ModuleLoader__.load({
	id: "dsh-client-ui-home-deck",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		const CSS = "/* ------------------------------------------------------------------ deck */\n.hd-deck{position:relative;display:flex;flex-direction:column;gap:12px;width:100%;\n  max-width:var(--dsh-composer-card-max-width,760px);margin:0 auto 10px;\n  padding:16px 16px 15px;border-radius:16px;box-sizing:border-box;\n  background:linear-gradient(180deg,var(--hd-tint) 0%,transparent 58%),var(--dsw-alias-bg-layer-1,rgba(127,127,127,.06));\n  border:1px solid var(--dsw-alias-border-l1,rgba(127,127,127,.18));overflow:hidden}\n.hd-deck *{box-sizing:border-box}\n.hd-deck::before{content:\"\";position:absolute;inset:-38% -12% auto -12%;height:120px;pointer-events:none;\n  background:radial-gradient(ellipse 420px 120px at 50% 0%,var(--hd-tint) 0%,transparent 72%)}\n.hd-top{position:relative;display:flex;align-items:center;gap:10px;flex-wrap:wrap}\n.hd-hello{font-size:17px;font-weight:650;color:var(--dsw-alias-label-primary,inherit);letter-spacing:.1px}\n.hd-hello b{color:var(--hd-accent);font-weight:650}\n.hd-sub{font-size:12px;color:var(--dsw-alias-label-tertiary,rgba(127,127,127,.85))}\n.hd-spacer{flex:1 1 auto}\n.hd-clock{display:flex;align-items:baseline;gap:6px;font-variant-numeric:tabular-nums}\n.hd-time{font-size:15px;font-weight:650;color:var(--dsw-alias-label-primary,inherit)}\n.hd-date{font-size:11px;color:var(--dsw-alias-label-tertiary,rgba(127,127,127,.8))}\n.hd-mini{display:inline-flex;align-items:center;gap:5px;height:26px;padding:0 9px;border-radius:8px;\n  font-size:12px;cursor:pointer;border:1px solid transparent;background:transparent;color:var(--dsw-alias-label-secondary,inherit);\n  transition:background .15s,color .15s,border-color .15s}\n.hd-mini:hover{background:var(--dsw-alias-interactive-bg-hover,rgba(127,127,127,.12));color:var(--dsw-alias-label-primary,inherit)}\n.hd-mini[disabled]{opacity:.4;cursor:default}\n.hd-mini.hd-on{border-color:var(--hd-accent);color:var(--hd-accent)}\n.hd-mini.hd-primary{background:var(--hd-accent);color:#fff;border-color:transparent}\n.hd-mini.hd-primary:hover{filter:brightness(1.08)}\n/* --------------------------------------------------------------- stats */\n.hd-stats{position:relative;display:flex;flex-wrap:wrap;gap:6px;align-items:center}\n.hd-stat{display:inline-flex;align-items:center;gap:6px;height:24px;padding:0 9px;border-radius:999px;\n  font-size:11.5px;color:var(--dsw-alias-label-secondary,inherit);\n  border:1px solid var(--dsw-alias-border-l1,rgba(127,127,127,.16));background:var(--dsw-alias-bg-layer-2,rgba(127,127,127,.05))}\n.hd-stat b{color:var(--dsw-alias-label-primary,inherit);font-weight:650}\n.hd-stat.hd-warn b{color:var(--hd-accent)}\n/* ------------------------------------------------------------- sessions */\n.hd-sess{position:relative;display:flex;flex-direction:column;gap:8px;padding:10px 12px;border-radius:12px;\n  border:1px solid var(--dsw-alias-border-l1,rgba(127,127,127,.16));background:var(--dsw-alias-bg-layer-2,rgba(127,127,127,.05))}\n.hd-sess-head{display:flex;align-items:center;gap:8px;flex-wrap:wrap}\n.hd-sess-h{display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:650;\n  color:var(--dsw-alias-label-primary,inherit);letter-spacing:.2px}\n.hd-sess-head .hd-spacer{flex:1 1 auto}\n.hd-sess-search{display:flex;gap:6px;align-items:center;min-width:180px;flex:1 1 200px}\n.hd-search{flex:1 1 auto;height:28px;padding:0 10px;border-radius:8px;font-size:12.5px;color:var(--dsw-alias-label-primary,inherit);\n  background:var(--dsw-alias-bg-layer-1,rgba(127,127,127,.08));\n  border:1px solid var(--dsw-alias-border-l2,rgba(127,127,127,.28));outline:none;box-sizing:border-box}\n.hd-search:focus{border-color:var(--hd-accent)}\n.hd-search::placeholder{color:var(--dsw-alias-label-caption,rgba(127,127,127,.7))}\n.hd-listrows{display:flex;flex-direction:column;gap:4px;max-height:238px;overflow-y:auto}\n.hd-srow{display:flex;align-items:center;gap:8px;width:100%;padding:6px 8px;border-radius:9px;cursor:pointer;\n  border:1px solid transparent;background:transparent;color:var(--dsw-alias-label-secondary,inherit);text-align:left;font:inherit}\n.hd-srow:hover{background:var(--dsw-alias-interactive-bg-hover,rgba(127,127,127,.1));color:var(--dsw-alias-label-primary,inherit)}\n.hd-srow.hd-current{border-color:rgba(127,127,127,.26)}\n.hd-srow-t{flex:1 1 auto;min-width:0;display:flex;flex-direction:column;gap:1px}\n.hd-srow-name{font-size:12.5px;font-weight:550;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.hd-srow-meta{font-size:11px;color:var(--dsw-alias-label-tertiary,rgba(127,127,127,.8));white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.hd-srow-btns{display:flex;gap:3px;flex:none}\n.hd-srow-btn{width:26px;height:26px;display:inline-flex;align-items:center;justify-content:center;padding:0;border-radius:7px;\n  border:none;background:transparent;color:var(--dsw-alias-label-tertiary,rgba(127,127,127,.85));cursor:pointer;font-size:12px}\n.hd-srow-btn:hover{background:var(--dsw-alias-interactive-bg-hover,rgba(127,127,127,.14));color:var(--dsw-alias-label-primary,inherit)}\n.hd-srow-btn[disabled]{opacity:.35;cursor:default}\n.hd-srow-btn.hd-danger:hover{color:#e5484d}\n.hd-srow-btn.hd-stay{font-size:10.5px;width:auto;padding:0 8px;font-weight:600}\n/* ---------------------------------------------------------------- grid */\n.hd-grid{position:relative;display:grid;grid-template-columns:repeat(auto-fill,minmax(178px,1fr));gap:8px}\n.hd-card{position:relative;display:flex;align-items:flex-start;gap:9px;padding:10px 11px;min-height:56px;\n  border-radius:12px;cursor:pointer;text-align:left;\n  border:1px solid var(--dsw-alias-border-l1,rgba(127,127,127,.16));\n  background:var(--dsw-alias-bg-layer-2,rgba(127,127,127,.05));font:inherit;color:inherit;\n  transition:border-color .15s,background .15s,transform .12s}\n.hd-card:hover{border-color:var(--hd-accent);background:var(--dsw-alias-interactive-bg-hover,rgba(127,127,127,.08))}\n.hd-card:active{transform:scale(.985)}\n.hd-ico{width:30px;height:30px;flex:none;display:inline-flex;align-items:center;justify-content:center;font-size:17px;\n  border-radius:9px;background:var(--hd-tint)}\n.hd-body{min-width:0;display:flex;flex-direction:column;gap:2px;flex:1 1 auto}\n.hd-title{font-size:12.5px;font-weight:600;color:var(--dsw-alias-label-primary,inherit);line-height:1.3}\n.hd-desc{font-size:11px;color:var(--dsw-alias-label-tertiary,rgba(127,127,127,.85));line-height:1.35;\n  display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}\n.hd-go{position:absolute;right:7px;top:7px;width:24px;height:24px;display:inline-flex;align-items:center;justify-content:center;\n  border:none;border-radius:7px;background:transparent;color:var(--dsw-alias-label-tertiary,rgba(127,127,127,.9));\n  cursor:pointer;font-size:13px}\n.hd-card:hover .hd-go{color:var(--hd-accent)}\n.hd-x{position:absolute;right:7px;top:7px;width:24px;height:24px;display:inline-flex;align-items:center;justify-content:center;\n  border:none;border-radius:7px;background:transparent;color:var(--dsw-alias-label-tertiary,rgba(127,127,127,.9));cursor:pointer;font-size:12px}\n.hd-x:hover{color:#e5484d;background:var(--dsw-alias-interactive-bg-hover,rgba(127,127,127,.14))}\n.hd-add{display:inline-flex;align-items:center;justify-content:center;gap:5px;min-height:56px;border-radius:12px;\n  border:1px dashed var(--dsw-alias-border-l2,rgba(127,127,127,.3));background:transparent;color:var(--dsw-alias-label-tertiary,rgba(127,127,127,.85));\n  cursor:pointer;font-size:12.5px}\n.hd-add:hover{color:var(--hd-accent);border-color:var(--hd-accent)}\n/* ------------------------------------------------------------- skills */\n.hd-row{display:flex;align-items:center;gap:6px;flex-wrap:wrap}\n.hd-lbl{display:inline-flex;align-items:center;gap:5px;font-size:11px;font-weight:600;color:var(--dsw-alias-label-tertiary,rgba(127,127,127,.85));\n  text-transform:uppercase;letter-spacing:.6px}\n.hd-chip{display:inline-flex;align-items:center;gap:6px;height:26px;padding:0 10px;border-radius:999px;font-size:12px;cursor:pointer;\n  border:1px solid var(--dsw-alias-border-l1,rgba(127,127,127,.18));background:transparent;color:var(--dsw-alias-label-secondary,inherit)}\n.hd-chip:hover{border-color:var(--hd-accent);color:var(--hd-accent);background:var(--hd-tint)}\n.hd-dot{width:6px;height:6px;border-radius:999px;background:var(--hd-accent);flex:none}\n/* --------------------------------------------------------------- tip */\n.hd-tip{position:relative;display:flex;align-items:center;gap:7px;font-size:12px;\n  color:var(--dsw-alias-label-tertiary,rgba(127,127,127,.85))}\n.hd-kbd{display:inline-block;padding:0 6px;border-radius:5px;border:1px solid var(--dsw-alias-border-l2,rgba(127,127,127,.3));\n  background:var(--dsw-alias-bg-layer-2,rgba(127,127,127,.08));color:var(--dsw-alias-label-secondary,inherit);\n  font-family:ui-monospace,SFMono-Regular,Consolas,monospace;font-size:11px;line-height:18px}\n/* ------------------------------------------------------- sidebar popover */\n.hd-fbtn{display:inline-flex;align-items:center;gap:7px;width:100%;height:30px;padding:0 10px;border:none;border-radius:8px;\n  background:transparent;color:var(--dsw-alias-label-secondary,inherit);cursor:pointer;font-size:12.5px;text-align:left}\n.hd-fbtn:hover{background:var(--dsw-alias-interactive-bg-hover,rgba(127,127,127,.12));color:var(--dsw-alias-label-primary,inherit)}\n.hd-fbtn.hd-open{color:var(--hd-accent)}\n.hd-fbtn.hd-rail{justify-content:center;padding:0;width:30px}\n.hd-badge{margin-left:auto;min-width:18px;height:18px;padding:0 5px;display:inline-flex;align-items:center;justify-content:center;\n  border-radius:999px;background:var(--hd-tint);color:var(--hd-accent);font-size:10.5px;font-weight:650}\n.hd-pop{z-index:1200;position:fixed;width:320px;max-height:min(460px,calc(100vh - 24px));display:flex;flex-direction:column;gap:8px;\n  padding:10px;border-radius:14px;box-sizing:border-box;background:var(--dsw-specific-menu,var(--dsw-alias-bg-layer-1,#222));\n  border:1px solid var(--dsw-alias-border-inverted,rgba(127,127,127,.4));box-shadow:0 14px 38px rgba(0,0,0,.4)}\n.hd-pop-h{display:flex;align-items:center;gap:7px}\n.hd-pop-t{font-size:13px;font-weight:650;color:var(--dsw-alias-label-primary,inherit)}\n.hd-pop-n{font-size:11px;color:var(--dsw-alias-label-tertiary,rgba(127,127,127,.85))}\n.hd-list{display:flex;flex-direction:column;gap:2px;overflow-y:auto;max-height:300px}\n.hd-item{display:flex;flex-direction:column;gap:3px;padding:7px 9px;border-radius:9px;border:none;background:transparent;\n  cursor:pointer;text-align:left;color:var(--dsw-alias-label-secondary,inherit);font:inherit}\n.hd-item:hover{background:var(--dsw-alias-interactive-bg-hover,rgba(127,127,127,.12));color:var(--dsw-alias-label-primary,inherit)}\n.hd-item-n{display:flex;align-items:center;gap:6px;font-size:12.5px;font-weight:600;font-family:ui-monospace,SFMono-Regular,Consolas,monospace}\n.hd-item-d{font-size:11.5px;color:var(--dsw-alias-label-tertiary,rgba(127,127,127,.85))}\n.hd-tagu{font-size:9.5px;font-weight:700;letter-spacing:.5px;padding:1px 5px;border-radius:5px;background:var(--hd-tint);color:var(--hd-accent)}\n.hd-empty{font-size:12px;color:var(--dsw-alias-label-tertiary,rgba(127,127,127,.85));padding:8px 6px}\n/* ------------------------------------------------------- settings section */\n.hd-set{display:flex;flex-direction:column;gap:14px;padding:4px 2px;max-width:640px;box-sizing:border-box}\n.hd-set h3{margin:0 0 4px;font-size:15px;font-weight:650;color:var(--dsw-alias-label-primary,inherit)}\n.hd-set p{margin:0;font-size:12px;color:var(--dsw-alias-label-tertiary,rgba(127,127,127,.85))}\n.hd-panel{display:flex;flex-direction:column;gap:10px;padding:12px;border-radius:12px;\n  border:1px solid var(--dsw-alias-border-l1,rgba(127,127,127,.16));background:var(--dsw-alias-bg-layer-2,rgba(127,127,127,.05))}\n.hd-srow{display:flex;align-items:flex-start;gap:14px;padding:2px 0}\n.hd-srow-t{font-size:13px;font-weight:550;color:var(--dsw-alias-label-primary,inherit)}\n.hd-srow-d{font-size:11.5px;color:var(--dsw-alias-label-tertiary,rgba(127,127,127,.85));margin-top:2px}\n.hd-sw{width:38px;height:22px;flex:none;border-radius:999px;border:1px solid var(--dsw-alias-border-l2,rgba(127,127,127,.35));\n  background:var(--dsw-alias-bg-layer-1,rgba(127,127,127,.1));cursor:pointer;padding:2px;position:relative;transition:background .15s}\n.hd-sw i{display:block;width:16px;height:16px;border-radius:999px;background:var(--dsw-alias-label-tertiary,rgba(127,127,127,.8));\n  transition:transform .15s,background .15s}\n.hd-sw.hd-on{background:var(--hd-accent);border-color:var(--hd-accent)}\n.hd-sw.hd-on i{transform:translateX(16px);background:#fff}\n.hd-input{height:30px;padding:0 9px;border-radius:8px;font-size:12.5px;color:var(--dsw-alias-label-primary,inherit);\n  background:var(--dsw-alias-bg-layer-1,rgba(127,127,127,.08));border:1px solid var(--dsw-alias-border-l2,rgba(127,127,127,.28));outline:none}\n.hd-input:focus{border-color:var(--hd-accent)}\n.hd-ta{min-height:56px;padding:6px 9px;border-radius:8px;font-size:12.5px;color:var(--dsw-alias-label-primary,inherit);\n  background:var(--dsw-alias-bg-layer-1,rgba(127,127,127,.08));border:1px solid var(--dsw-alias-border-l2,rgba(127,127,127,.28));\n  outline:none;resize:vertical}\n.hd-btn{height:28px;padding:0 12px;border-radius:8px;font-size:12.5px;cursor:pointer;border:1px solid var(--dsw-alias-border-l2,rgba(127,127,127,.3));\n  background:transparent;color:var(--dsw-alias-label-secondary,inherit)}\n.hd-btn:hover{color:var(--dsw-alias-label-primary,inherit);background:var(--dsw-alias-interactive-bg-hover,rgba(127,127,127,.12))}\n.hd-btn.hd-primary{background:var(--hd-accent);border-color:transparent;color:#fff}\n.hd-swatch{width:26px;height:26px;border-radius:999px;border:2px solid transparent;cursor:pointer}\n.hd-swatch.hd-on{border-color:var(--dsw-alias-label-primary,inherit)}\n.hd-edit{display:flex;gap:8px;align-items:flex-start}\n/* -------------------------------------------------------- turn tools bar */\n.hd-ttool{display:flex;align-items:center;gap:6px;margin-top:8px;opacity:.75;transition:opacity .15s;flex-wrap:wrap}\n.hd-ttool:hover{opacity:1}\n.hd-ttb{display:inline-flex;align-items:center;gap:5px;height:26px;padding:0 8px;border-radius:8px;font-size:11.5px;cursor:pointer;\n  border:1px solid var(--dsw-alias-border-l1,rgba(127,127,127,.18));background:transparent;color:var(--dsw-alias-label-secondary,inherit)}\n.hd-ttb:hover{border-color:var(--hd-accent);color:var(--hd-accent);background:var(--hd-tint)}\n.hd-ttb[disabled]{opacity:.4;cursor:default}\n.hd-ttb.hd-danger:hover{border-color:#e5484d;color:#e5484d;background:rgba(229,72,77,.08)}\n.hd-err{font-size:11px;color:#e5484d}\n";

		const React = require("react");
		const h = React.createElement;
		const useState = React.useState, useEffect = React.useEffect, useRef = React.useRef,
		      useMemo = React.useMemo, useCallback = React.useCallback, useLayoutEffect = React.useLayoutEffect;

		const TAG = "dsh-client-ui-home-deck/home-deck.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(TAG) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "dsh-client-ui-home-deck";
			tag.dataset.pluginCss = TAG;
			tag.textContent = CSS;
			document.head.appendChild(tag);
		}

		/* ---------------------------------------------------------------- prefs */
		const KEY = "dsh.home-deck.prefs.v1";
		const ACCENTS = ["#4d6bfe", "#7c5cff", "#12b886", "#f76707", "#e64980", "#22b8cf"];
		const DEFAULT_CARDS = [
			{ id: "chain",   icon: "📊", title: "Option chain",   prompt: "Use the option-chain-live skill to pull the live NIFTY/BANKNIFTY option chain: LTP, OI, IV, Greeks, PCR and max pain." },
			{ id: "brain",   icon: "🧠", title: "Playlist Brain", prompt: "Ask Playlist Brain for the locked Nifty / Bank Nifty / Sensex trading plan from the SL Hunting Course, with class citations." },
			{ id: "tour",    icon: "🧭", title: "Tour workspace", prompt: "Give me a guided tour of this workspace: entry points, the main modules, and how they fit together." },
			{ id: "debug",   icon: "🐞", title: "Hunt a bug",     prompt: "I have a bug. Ask me for the error and the repro steps, then find the root cause and fix it." },
			{ id: "plan",    icon: "🗺️", title: "Draft a plan",   prompt: "Draft a step-by-step implementation plan for: " },
			{ id: "review",  icon: "🔍", title: "Review changes", prompt: "Review the most recent changes in this workspace and list concrete improvements, lowest risk first." },
			{ id: "tests",   icon: "🧪", title: "Add tests",      prompt: "Find the weakest test coverage in this project and add meaningful tests for it." },
			{ id: "explain", icon: "📘", title: "Explain file",   prompt: "Explain this file line by line, then point out anything risky: " },
			{ id: "ship",    icon: "⚡", title: "Fastest path",   prompt: "What is the fastest path to a working demo of: " },
			{ id: "deck",    icon: "🎨", title: "Customize DSH",  prompt: "Customize my DeepSeek Harness: make the Web UI cooler, add helpful features, or tweak themes and presets." }
		];
		const DEFAULTS = {
			enabled: true, greeting: true, clock: true, quick: true, skills: true, commands: true, tips: true, sessions: true, chatTools: true,
			accent: ACCENTS[0], name: "", compact: false, cards: DEFAULT_CARDS
		};

		let snapshot = null;
		const subs = new Set();
		function loadPrefs() {
			let stored = null;
			try { stored = JSON.parse(window.localStorage.getItem(KEY) || "null"); } catch (error) { stored = null; }
			const merged = Object.assign({}, DEFAULTS, stored || {});
			if (!Array.isArray(merged.cards) || merged.cards.length === 0) merged.cards = DEFAULT_CARDS;
			merged.cards = merged.cards.filter(function (card) { return card && typeof card.prompt === "string"; });
			return merged;
		}
		function getPrefs() { if (snapshot === null) snapshot = loadPrefs(); return snapshot; }
		function setPrefs(patch) {
			snapshot = Object.assign({}, getPrefs(), patch);
			try { window.localStorage.setItem(KEY, JSON.stringify(snapshot)); } catch (error) { /* private mode */ }
			subs.forEach(function (fn) { try { fn(); } catch (error) { console.error("[home-deck]", error); } });
		}
		function subscribePrefs(fn) { subs.add(fn); return function () { subs.delete(fn); }; }
		function usePrefs() {
			const state = useState(getPrefs);
			const value = state[0], set = state[1];
			useEffect(function () { return subscribePrefs(function () { set(getPrefs()); }); }, []);
			return value;
		}
		if (typeof window !== "undefined") {
			window.addEventListener("storage", function (event) {
				if (event.key !== KEY) return;
				snapshot = null;
				subs.forEach(function (fn) { try { fn(); } catch (error) {} });
			});
		}

		/* ---------------------------------------------------------------- utils */
		function uid() { return "c" + Math.random().toString(36).slice(2, 9); }
		function cx() {
			const out = [];
			for (let i = 0; i < arguments.length; i += 1) if (arguments[i]) out.push(arguments[i]);
			return out.join(" ");
		}
		function greetingFor(date, name) {
			const hour = date.getHours();
			const who = name ? ", " + name : "";
			if (hour < 5) return "Still up" + who + "?";
			if (hour < 12) return "Good morning" + who;
			if (hour < 17) return "Good afternoon" + who;
			if (hour < 22) return "Good evening" + who;
			return "Late night" + who;
		}
		function relTime(ts) {
			if (typeof ts !== "number" || !isFinite(ts)) return "";
			const diff = Date.now() - ts;
			if (diff < 60e3) return "just now";
			if (diff < 3600e3) return Math.floor(diff / 60e3) + "m ago";
			if (diff < 86400e3) return Math.floor(diff / 3600e3) + "h ago";
			return Math.floor(diff / 86400e3) + "d ago";
		}
		function textOf(content) {
			const parts = Array.isArray(content) ? content : [];
			return parts.filter(function (p) { return p && p.type === "text" && typeof p.text === "string"; })
				.map(function (p) { return p.text; }).join("");
		}
		function unwrap(r) { return r && r.result !== undefined ? r.result : r; }
		function focusComposer() {
			try {
				const area = document.querySelector("main textarea, form textarea, textarea");
				if (area) { area.focus(); }
			} catch (error) { /* best effort */ }
		}
		function confirmMsg(msg) {
			if (typeof window !== "undefined" && typeof window.confirm === "function") return window.confirm(msg);
			return true;
		}
		const COMMANDS = [
			{ name: "/compact", hint: "Trim a long conversation" },
			{ name: "/goal", hint: "Create, edit or pause a goal" },
			{ name: "/plan", hint: "Plan mode on/off" }
		];
		function tipParts(parts) {
			const out = [];
			for (let i = 0; i < parts.length; i += 1) {
				if (i % 2 === 1) out.push(h("span", { className: "hd-kbd", key: i }, parts[i]));
				else out.push(h("span", { key: i }, parts[i]));
			}
			return out;
		}
		const TIPS = [
			["Type ", "/", " for commands and skills."],
			["Type ", "@", " to reference a file."],
			["Press ", "Shift + Enter", " for a new line."],
			["Click a card to load it, the arrow to send it."],
			["Pin the current draft to keep it as a card."],
			["Every exchange gets ", "Edit / Retry / Delete", " buttons below the answer."],
			["Use ", "Search sessions", " above to jump back into an old chat."],
			["Run ", "/compact", ", ", "/goal", " or ", "/plan", " with one chip below."],
			["The ", "Skills", " button beside Settings lists every skill you can use."],
			["", "Continue", " reopens your most recent chat in one click."]
		];
		function SparkIcon(props) {
			const size = props && props.size ? props.size : 17;
			return h("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor",
				strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" },
				h("path", { d: "M12 3.2l1.75 4.35L18 9.2l-4.25 1.65L12 15.2l-1.75-4.35L6 9.2l4.25-1.65L12 3.2z" }),
				h("path", { d: "M18.4 14.4l.72 1.83 1.88.72-1.88.72-.72 1.83-.72-1.83-1.88-.72 1.88-.72.72-1.83z" }));
		}
		function PenIcon(props) {
			const size = props && props.size ? props.size : 13;
			return h("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor",
				strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" },
				h("path", { d: "M4 20l1.2-4.2L16.4 4.6a2 2 0 012.8 0l.2.2a2 2 0 010 2.8L8.2 18.8L4 20z" }),
				h("path", { d: "M14.6 6.4l3 3" }));
		}
		function ReplayIcon(props) {
			const size = props && props.size ? props.size : 13;
			return h("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor",
				strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" },
				h("path", { d: "M20 5v5h-5" }),
				h("path", { d: "M20 10a8 8 0 10-2.3 5.7" }));
		}
		function TrashIcon(props) {
			const size = props && props.size ? props.size : 13;
			return h("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor",
				strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" },
				h("path", { d: "M4 7h16" }),
				h("path", { d: "M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2" }),
				h("path", { d: "M6 7l1 13h10l1-13" }),
				h("path", { d: "M10 11v5M14 11v5" }));
		}

		/* ------------------------------------------------- sidebar: Skills seat */
		function SkillsAction(props) {
			const prefs = usePrefs();
			const wide = props.wide !== false;
			const useSessions = props.useSessions;
			const current = typeof useSessions === "function" ? useSessions(function (state) { return state.current; }) : undefined;
			const openState = useState(false), open = openState[0], setOpen = openState[1];
			const queryState = useState(""), query = queryState[0], setQuery = queryState[1];
			const dataState = useState({ loading: false, error: null, skills: [] }), data = dataState[0], setData = dataState[1];
			const anchorState = useState(null), anchor = anchorState[0], setAnchor = anchorState[1];
			const copiedState = useState(""), copied = copiedState[0], setCopied = copiedState[1];
			const rootRef = useRef(null);
			const popRef = useRef(null);
			const listSkills = props.listSkills;

			useEffect(function () {
				if (!open) return undefined;
				let alive = true;
				setData({ loading: true, error: null, skills: [] });
				Promise.resolve(listSkills ? listSkills(current, true) : []).then(function (skills) {
					if (alive) setData({ loading: false, error: null, skills: skills || [] });
				}, function (error) {
					if (alive) setData({ loading: false, error: String(error && error.message ? error.message : error), skills: [] });
				});
				return function () { alive = false; };
			}, [open, current, listSkills]);

			useLayoutEffect(function () {
				if (!open) return undefined;
				const place = function () {
					const node = rootRef.current;
					if (!node) return;
					const rect = node.getBoundingClientRect();
					setAnchor({ left: Math.max(8, rect.left), bottom: Math.max(8, window.innerHeight - rect.top + 8) });
				};
				place();
				window.addEventListener("resize", place);
				window.addEventListener("scroll", place, true);
				return function () {
					window.removeEventListener("resize", place);
					window.removeEventListener("scroll", place, true);
				};
			}, [open]);

			useEffect(function () {
				if (!open) return undefined;
				const onDown = function (event) {
					const inRoot = rootRef.current && rootRef.current.contains(event.target);
					const inPop = popRef.current && popRef.current.contains(event.target);
					if (!inRoot && !inPop) setOpen(false);
				};
				const onKey = function (event) { if (event.key === "Escape") setOpen(false); };
				document.addEventListener("pointerdown", onDown, true);
				document.addEventListener("keydown", onKey);
				return function () {
					document.removeEventListener("pointerdown", onDown, true);
					document.removeEventListener("keydown", onKey);
				};
			}, [open]);

			const filtered = useMemo(function () {
				const needle = query.trim().toLowerCase();
				if (!needle) return data.skills;
				return data.skills.filter(function (skill) {
					return (skill.name || "").toLowerCase().indexOf(needle) >= 0 ||
					       (skill.description || "").toLowerCase().indexOf(needle) >= 0;
				});
			}, [query, data.skills]);

			const pick = function (skill) {
				const text = "/" + skill.name + " ";
				try {
					if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text);
				} catch (error) { /* clipboard blocked */ }
				window.dispatchEvent(new CustomEvent("dsh-home-deck:insert", { detail: { text: text } }));
				setCopied(skill.name);
				window.setTimeout(function () { setCopied(""); }, 1400);
			};

			const button = h("button", {
				type: "button",
				className: cx("hd-fbtn", !wide && "hd-rail", open && "hd-open"),
				title: "Skills",
				"aria-label": "Skills",
				"aria-expanded": open ? "true" : "false",
				onClick: function () { setOpen(!open); }
			}, h(SparkIcon, { size: 17 }), wide ? h("span", null, "Skills") : null,
				wide && data.skills.length > 0 ? h("span", { className: "hd-badge" }, String(data.skills.length)) : null);

			let panel = null;
			if (open) {
				const rows = data.loading
					? [h("div", { className: "hd-empty", key: "l" }, "Loading skills…")]
					: data.error
						? [h("div", { className: "hd-empty", key: "e" }, data.error)]
						: filtered.length === 0
							? [h("div", { className: "hd-empty", key: "n" }, current ? "No skills match." : "Open a session to see its skills.")]
							: filtered.map(function (skill) {
								return h("button", { type: "button", className: "hd-item", key: skill.name, onClick: function () { pick(skill); } },
									h("span", { className: "hd-item-n" },
										h("span", { className: "hd-dot" }),
										"/" + skill.name,
										skill.modelInvocable === false ? h("span", { className: "hd-tagu" }, "USER") : null,
										copied === skill.name ? h("span", { className: "hd-pop-n" }, " copied ✓") : null),
									h("span", { className: "hd-item-d" }, skill.description || ""));
							});
				panel = h("div", {
					ref: popRef,
					className: "hd-pop",
					style: { left: (anchor ? anchor.left : 12) + "px", bottom: (anchor ? anchor.bottom : 60) + "px" }
				},
					h("div", { className: "hd-pop-h" },
						h(SparkIcon, { size: 15 }),
						h("span", { className: "hd-pop-t" }, "Skills"),
						h("span", { className: "hd-spacer" }),
						h("span", { className: "hd-pop-n" }, data.loading ? "…" : String(data.skills.length) + " available")),
					h("input", {
						className: "hd-search", placeholder: "Search skills…", value: query, autoFocus: true,
						onChange: function (event) { setQuery(event.target.value); }
					}),
					h("div", { className: "hd-list" }, rows),
					h("div", { className: "hd-empty", style: { padding: "2px 12px 10px", textAlign: "left" } },
						"Click a skill to copy its ", h("span", { className: "hd-kbd" }, "/name"), " trigger."));
			}

			return h("div", { ref: rootRef, style: { position: "relative", width: wide ? "100%" : "auto", "--hd-accent": prefs.accent } }, button, panel);
		}

		/* ------------------------------------------------------------ sessions */
		function useSessionsList(sessionsApi) {
			const store = sessionsApi && sessionsApi.listStore ? sessionsApi.listStore : null;
			const state = useState(function () { return store ? store.getSnapshot() : null; });
			const snapshot = state[0], setSnapshot = state[1];
			useEffect(function () {
				if (!store) return undefined;
				const update = function () { setSnapshot(store.getSnapshot()); };
				update();
				return store.subscribe(update);
			}, [store]);
			return useMemo(function () {
				if (!snapshot) return [];
				const byId = snapshot.byId || {};
				const ids = Array.isArray(snapshot.ids) ? snapshot.ids : Object.keys(byId);
				return ids.map(function (id) { return byId[id]; }).filter(Boolean);
			}, [snapshot]);
		}

		function SessionsHub(props) {
			const prefs = usePrefs();
			const sessionsApi = props.sessionsApi;
			const sessionId = props.sessionId;
			const items = useSessionsList(sessionsApi);
			const [query, setQuery] = useState("");
			const [searching, setSearching] = useState(false);
			const [results, setResults] = useState(null);
			const [busy, setBusy] = useState(false);
			const [error, setError] = useState("");

			const listable = useMemo(function () {
				const rows = items.slice().sort(function (a, b) { return (b.updatedAt || 0) - (a.updatedAt || 0); });
				return rows.slice(0, 6);
			}, [items]);
			const runningCount = useMemo(function () {
				return items.filter(function (s) { return s.running === true; }).length;
			}, [items]);
			const continueTarget = useMemo(function () {
				const rows = items.slice().sort(function (a, b) { return (b.updatedAt || 0) - (a.updatedAt || 0); });
				return rows.find(function (s) { return s.blank !== true; }) || null;
			}, [items]);
			const [modelInfo, setModelInfo] = useState(null);
			useEffect(function () {
				if (!sessionId || !sessionsApi || typeof sessionsApi.models !== "function") return undefined;
				let alive = true;
				Promise.resolve(sessionsApi.models(sessionId)).then(function (m) {
					if (alive) setModelInfo(m || null);
				}, function () { if (alive) setModelInfo(null); });
				return function () { alive = false; };
			}, [sessionId, sessionsApi]);
			const forkRow = async function (id) {
				if (!sessionsApi || typeof sessionsApi.fork !== "function") return;
				await guard("fork", function () { return sessionsApi.fork(id); });
			};

			const guard = async function (label, fn) {
				setBusy(true);
				setError("");
				try {
					await fn();
					return true;
				} catch (err) {
					setError(String(err && err.message ? err.message : err));
					return false;
				} finally {
					setBusy(false);
				}
			};
			const openRow = function (id) {
				if (!id || !sessionsApi || typeof sessionsApi.open !== "function") return;
				try { sessionsApi.open(id); } catch (err) { setError(String(err && err.message ? err.message : err)); }
			};
			const renameRow = async function (id, currentTitle) {
				if (!sessionsApi || typeof sessionsApi.rename !== "function") return;
				const next = window.prompt("Rename session", typeof currentTitle === "string" && currentTitle ? currentTitle : "");
				if (next === null) return;
				const trimmed = next.trim();
				if (!trimmed) return;
				await guard("rename", function () { return sessionsApi.rename(id, trimmed); });
			};
			const deleteRow = async function (id, title) {
				if (!sessionsApi || typeof sessionsApi.archive !== "function") return;
				if (!confirmMsg("Archive this session?\n\n" + ((title || "Untitled session")) + "\n\nIt is removed from the chat list. This cannot be undone from the browser.")) return;
				await guard("archive", function () { return sessionsApi.archive(id); });
			};
			const newSession = async function () {
				if (!sessionsApi || typeof sessionsApi.createBlank !== "function") return;
				await guard("create", async function () {
					const currentCwd = items.find(function (s) { return s.id === sessionId && typeof s.cwd === "string"; })?.cwd;
					const created = await sessionsApi.createBlank(currentCwd ? { cwd: currentCwd } : undefined);
					if (created && created.id) sessionsApi.open(created.id);
				});
			};
			const continueLast = function () {
				if (continueTarget) openRow(continueTarget.id);
			};
			const runSearch = async function () {
				const needle = query.trim();
				if (!needle || !sessionsApi || typeof sessionsApi.search !== "function") return;
				setSearching(true);
				setError("");
				try {
					const found = await sessionsApi.search(needle);
					setResults(found);
				} catch (err) {
					setError(String(err && err.message ? err.message : err));
					setResults([]);
				} finally {
					setSearching(false);
				}
			};

			const row = function (s) {
				const title = s.displayTitle || s.title || "Untitled";
				const meta = [relTime(s.updatedAt), s.running ? "running…" : null, s.blank ? "blank" : null]
					.filter(Boolean).join(" · ");
				return h("div", {
					key: s.id,
					className: cx("hd-srow", s.id === sessionId && "hd-current"),
					role: "button",
					tabIndex: 0,
					title: title,
					onClick: function () { openRow(s.id); },
					onKeyDown: function (event) { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); openRow(s.id); } }
				},
					h("span", { className: "hd-srow-t" },
						h("span", { className: "hd-srow-name" }, title, s.running ? h("span", { className: "hd-dot", style: { marginLeft: 6, background: "#f59f00" } }) : null),
						h("span", { className: "hd-srow-meta" }, meta)),
					h("span", { className: "hd-srow-btns" },
						h("button", { type: "button", className: "hd-srow-btn", title: "Fork a copy of this session", disabled: busy,
							onClick: function (event) { event.stopPropagation(); forkRow(s.id); } }, h(ReplayIcon, { size: 13 })),
						h("button", { type: "button", className: "hd-srow-btn", title: "Rename", disabled: busy,
							onClick: function (event) { event.stopPropagation(); renameRow(s.id, s.title || s.displayTitle); } }, h(PenIcon, { size: 13 })),
						h("button", { type: "button", className: "hd-srow-btn hd-danger", title: "Delete (archive)", disabled: busy,
							onClick: function (event) { event.stopPropagation(); deleteRow(s.id, s.displayTitle || s.title); } }, h(TrashIcon, { size: 13 }))));
			};

			const searchPanel = results !== null ? h("div", { className: "hd-listrows", style: { maxHeight: 160 } },
				results.length === 0
					? h("div", { className: "hd-empty" }, searching ? "Searching…" : "No sessions match.")
					: results.map(function (hit) {
						const snippet = hit.snippet || "";
						return h("div", { key: hit.sessionId, className: "hd-srow", role: "button", tabIndex: 0,
							onClick: function () { openRow(hit.sessionId); },
							onKeyDown: function (event) { if (event.key === "Enter") { event.preventDefault(); openRow(hit.sessionId); } } },
							h("span", { className: "hd-srow-t" },
								h("span", { className: "hd-srow-name" }, "Search hit"),
								h("span", { className: "hd-srow-meta" }, snippet)));
					})) : null;

			return h("div", { className: "hd-sess", style: { "--hd-accent": prefs.accent } },
				h("div", { className: "hd-sess-head" },
					h("span", { className: "hd-sess-h" }, "🕘 Sessions", h("span", { className: "hd-pop-n" }, "· " + String(items.length))),
					runningCount > 0 ? h("span", { className: "hd-stat hd-warn" }, "⚡", h("b", null, String(runningCount)), " running") : null,
					modelInfo && modelInfo.model ? h("span", { className: "hd-stat", title: modelInfo.provider || "" }, "🤖", h("b", null, String(modelInfo.model))) : null,
					h("span", { className: "hd-spacer" }),
					h("button", { type: "button", className: "hd-mini hd-primary", disabled: busy, title: "Open a fresh chat",
						onClick: newSession }, "+ New"),
					h("button", { type: "button", className: "hd-mini", disabled: busy || !continueTarget, title: continueTarget ? "Reopen your most recent chat" : "Nothing to continue yet",
						onClick: continueLast }, "▶ Continue")),
				h("div", { className: "hd-sess-search" },
					h("input", {
						className: "hd-search", placeholder: "Search sessions… press Enter", value: query,
						onChange: function (event) { setQuery(event.target.value); if (!event.target.value.trim()) setResults(null); },
						onKeyDown: function (event) { if (event.key === "Enter") runSearch(); }
					}),
					h("button", { type: "button", className: "hd-mini", disabled: !query.trim() || searching, onClick: runSearch },
						searching ? "…" : "Search")),
				searchPanel,
				listable.length === 0
					? h("div", { className: "hd-empty" }, "No chats yet — say hello below.")
					: h("div", { className: "hd-listrows" }, listable.map(row)),
				error ? h("div", { className: "hd-err" }, error) : null);
		}

		/* ------------------------------------------------------- homepage deck */
		function HomeDeck(props) {
			const prefs = usePrefs();
			const session = props.session;
			const input = props.input;
			const actions = props.inputActions;
			const sessionId = props.sessionId || (session ? session.sessionId : undefined);
			const listSkills = props.listSkills;
			const sessionsApi = props.sessionsApi;

			const nowState = useState(function () { return new Date(); }), now = nowState[0], setNow = nowState[1];
			const editState = useState(false), editing = editState[0], setEditing = editState[1];
			const skillState = useState([]), skills = skillState[0], setSkills = skillState[1];
			const visible = Boolean(prefs.enabled && session && session.blank === true);

			useEffect(function () {
				if (!visible || !prefs.clock) return undefined;
				const timer = window.setInterval(function () { setNow(new Date()); }, 1000);
				return function () { window.clearInterval(timer); };
			}, [visible, prefs.clock]);

			useEffect(function () {
				if (!visible || !prefs.skills || !sessionId || !listSkills) return undefined;
				let alive = true;
				Promise.resolve(listSkills(sessionId, false)).then(function (list) {
					if (alive) setSkills(list || []);
				}, function () { if (alive) setSkills([]); });
				return function () { alive = false; };
			}, [visible, prefs.skills, sessionId, listSkills]);

			const insert = useCallback(function (text, send) {
				if (!actions || typeof actions.setDraft !== "function") return;
				actions.setDraft(text);
				try {
					const area = document.querySelector("main textarea, form textarea, textarea");
					if (area) { area.focus(); const end = text.length; area.selectionStart = end; area.selectionEnd = end; }
				} catch (error) { /* focus is best effort */ }
				if (send && typeof actions.submit === "function") {
					window.setTimeout(function () { try { actions.submit(); } catch (error) { console.error("[home-deck]", error); } }, 40);
				}
			}, [actions]);

			useEffect(function () {
				if (!visible) return undefined;
				const onInsert = function (event) {
					const text = event && event.detail ? event.detail.text : "";
					if (text) insert(text, false);
				};
				window.addEventListener("dsh-home-deck:insert", onInsert);
				return function () { window.removeEventListener("dsh-home-deck:insert", onInsert); };
			}, [visible, insert]);

			if (!visible) return null;

			const draft = input && typeof input.draft === "string" ? input.draft : "";
			const tip = TIPS[now.getMinutes() % TIPS.length];
			const timeText = now.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });
			const dateText = now.toLocaleDateString(undefined, { weekday: "short", day: "numeric", month: "short" });

			const removeCard = function (id) {
				setPrefs({ cards: prefs.cards.filter(function (card) { return card.id !== id; }) });
			};
			const addCard = function () {
				const title = window.prompt("Card title", "My prompt");
				if (title === null) return;
				const prompt = window.prompt("Prompt text sent to the composer", "");
				if (prompt === null) return;
				setPrefs({ cards: prefs.cards.concat([{ id: uid(), icon: "✨", title: title || "Untitled", prompt: prompt }]) });
			};
			const pinDraft = function () {
				const text = draft.trim();
				if (!text) return;
				const title = text.length > 26 ? text.slice(0, 26) + "…" : text;
				setPrefs({ cards: [{ id: uid(), icon: "📌", title: title, prompt: text }].concat(prefs.cards) });
			};

			const header = h("div", { className: "hd-top" },
				prefs.greeting ? h("div", null,
					h("div", { className: "hd-hello" }, greetingFor(now, (prefs.name || "").trim()), h("b", null, ".")),
					h("div", { className: "hd-sub" }, "Your launch pad — start a chat, reopen an old one, or fire a quick card.")) : null,
				h("div", { className: "hd-spacer" }),
				draft.trim() ? h("button", { type: "button", className: "hd-mini", onClick: pinDraft, title: "Save the current draft as a card" }, "📌 Pin draft") : null,
				h("button", {
					type: "button", className: cx("hd-mini", editing && "hd-on"),
					onClick: function () { setEditing(!editing); }, title: "Add or remove cards"
				}, editing ? "✓ Done" : "✏️ Edit"),
				h("button", {
					type: "button", className: cx("hd-mini", prefs.compact && "hd-on"),
					onClick: function () { setPrefs({ compact: !prefs.compact }); }, title: "Collapse the launch pad"
				}, prefs.compact ? "▸ Expand" : "▾ Collapse"),
				prefs.clock ? h("div", { className: "hd-clock" },
					h("span", { className: "hd-time" }, timeText),
					h("span", { className: "hd-date" }, dateText)) : null);

			if (prefs.compact) {
				return h("div", { className: "hd-deck", style: { "--hd-accent": prefs.accent, "--hd-tint": prefs.accent + "14" } },
					header,
					prefs.tips ? h("div", { className: "hd-tip" }, h("span", null, "💡"), tipParts(tip)) : null);
			}

			const cards = prefs.quick ? h("div", { className: "hd-grid" },
				prefs.cards.map(function (card) {
					return h("div", { className: "hd-card", key: card.id, role: "button", tabIndex: 0,
						onClick: function () { if (!editing) insert(card.prompt, false); },
						onKeyDown: function (event) { if (event.key === "Enter" && !editing) insert(card.prompt, false); } },
						h("span", { className: "hd-ico" }, card.icon || "✨"),
						h("span", { className: "hd-body" },
							h("span", { className: "hd-title" }, card.title),
							h("span", { className: "hd-desc" }, card.prompt)),
						editing
							? h("button", { type: "button", className: "hd-x", title: "Remove card",
								onClick: function (event) { event.stopPropagation(); removeCard(card.id); } }, "✕")
							: h("button", { type: "button", className: "hd-go", title: "Send now",
								onClick: function (event) { event.stopPropagation(); insert(card.prompt, true); } }, "➤"));
				}).concat(editing ? [h("button", { type: "button", className: "hd-add", key: "__add", onClick: addCard }, "＋ Add card")] : [])) : null;

			const skillRow = prefs.skills && skills.length > 0 ? h("div", { className: "hd-row" },
				h("span", { className: "hd-lbl" }, h(SparkIcon, { size: 13 }), "Skills"),
				skills.slice(0, 8).map(function (skill) {
					return h("button", { type: "button", className: "hd-chip", key: skill.name, title: skill.description || skill.name,
						onClick: function () { insert("/" + skill.name + " ", false); } },
						h("span", { className: "hd-dot" }), h("span", null, skill.name));
				})) : null;

			const cmdRow = prefs.commands ? h("div", { className: "hd-row" },
				h("span", { className: "hd-lbl" }, "⌘ Commands"),
				COMMANDS.map(function (cmd) {
					return h("button", { type: "button", className: "hd-chip", key: cmd.name, title: cmd.hint,
						onClick: function () { insert(cmd.name + " ", false); } },
						h("span", { className: "hd-dot" }), h("span", null, cmd.name));
				})) : null;

			const tips = prefs.tips ? h("div", { className: "hd-tip" },
				h("span", null, "💡"), tipParts(tip)) : null;

			return h("div", { className: "hd-deck", style: { "--hd-accent": prefs.accent, "--hd-tint": prefs.accent + "14" } },
				header,
				prefs.sessions && sessionsApi ? h(SessionsHub, { sessionsApi: sessionsApi, sessionId: sessionId }) : null,
				cards, skillRow, cmdRow, tips);
		}

		/* ---------------------------------------------------- turn tools bar */
		function TurnTools(props) {
			const prefs = usePrefs();
			const chatApi = props.chatApi;
			const busyRef = useRef(false);
			const [busy, setBusy] = useState(false);
			const [error, setError] = useState("");
			if (!prefs.chatTools || !chatApi) return null;

			const seq = props.seq;
			const run = async function (label, fn) {
				if (busyRef.current) return;
				busyRef.current = true;
				setBusy(true);
				setError("");
				try {
					await fn();
					return true;
				} catch (err) {
					setError(String(err && err.message ? err.message : err));
					return false;
				} finally {
					busyRef.current = false;
					setBusy(false);
				}
			};
			const edit = function () {
				run("edit", async function () {
					await chatApi.edit(seq);
					focusComposer();
				});
			};
			const retry = function () {
				run("retry", function () { return chatApi.retry(seq); });
			};
			const remove = function () {
				if (!confirmMsg("Delete this exchange?\n\nThis removes the prompt and the answer from the chat and branches a new session with everything before it. Continue?")) return;
			
				run("delete", function () { return chatApi.remove(seq); });
			};
			const btn = function (label, iconNode, title, onClick, danger) {
				return h("button", {
					type: "button", className: cx("hd-ttb", danger && "hd-danger"), disabled: busy,
					title: title, "aria-label": title, onClick: onClick
				}, iconNode, label);
			};
			return h("div", { className: "hd-ttool" },
				btn("Edit", h(PenIcon, { size: 12 }), "Load this exchange's prompt into the composer, edit it, then send", edit),
				btn("Retry", h(ReplayIcon, { size: 12 }), "Send the same prompt again", retry),
				btn("Delete", h(TrashIcon, { size: 12 }), "Delete this exchange and everything after (branches a new session)", remove, true),
				busy ? h("span", { className: "hd-empty", style: { padding: 0 } }, "working…") : null,
				error ? h("span", { className: "hd-err" }, error) : null);
		}

		/* --------------------------------------------------- settings section */
		function Switch(props) {
			return h("button", { type: "button", className: cx("hd-sw", props.value && "hd-on"),
				role: "switch", "aria-checked": props.value ? "true" : "false", "aria-label": props.label,
				onClick: function () { props.onChange(!props.value); } }, h("i", null));
		}
		function Row(props) {
			return h("div", { className: "hd-srow" },
				h("div", { style: { flex: "1 1 auto", minWidth: 0 } },
					h("div", { className: "hd-srow-t" }, props.title),
					props.hint ? h("div", { className: "hd-srow-d" }, props.hint) : null),
				props.children);
		}
		function HomeDeckSection(props) {
			const prefs = usePrefs();
			const patchCard = function (id, patch) {
				setPrefs({ cards: prefs.cards.map(function (card) { return card.id === id ? Object.assign({}, card, patch) : card; }) });
			};
			return h("div", { className: "hd-set", style: { "--hd-accent": prefs.accent } },
				h("div", null,
					h("h3", null, "Home Deck"),
					h("p", null, "The launch pad on your New Session screen: hero + live stats, session hub, quick cards and skill chips. Plus Edit / Retry / Delete tools under every chat exchange, and the Skills button beside Settings.")),
				h("div", { className: "hd-panel" },
					h(Row, { title: "Show the Home Deck", hint: "Appears above the composer while a session is still empty." },
						h(Switch, { value: prefs.enabled, label: "Show the Home Deck", onChange: function (v) { setPrefs({ enabled: v }); } })),
					h(Row, { title: "Greeting", hint: "A time-aware hello with your name." },
						h(Switch, { value: prefs.greeting, label: "Greeting", onChange: function (v) { setPrefs({ greeting: v }); } })),
					h(Row, { title: "Live clock" },
						h(Switch, { value: prefs.clock, label: "Live clock", onChange: function (v) { setPrefs({ clock: v }); } })),
					h(Row, { title: "Session hub", hint: "Recent chats, search, rename, delete and continue buttons." },
						h(Switch, { value: prefs.sessions, label: "Session hub", onChange: function (v) { setPrefs({ sessions: v }); } })),
					h(Row, { title: "Quick-start cards" },
						h(Switch, { value: prefs.quick, label: "Quick-start cards", onChange: function (v) { setPrefs({ quick: v }); } })),
					h(Row, { title: "Skill chips", hint: "The skills this session can use, one click away." },
						h(Switch, { value: prefs.skills, label: "Skill chips", onChange: function (v) { setPrefs({ skills: v }); } })),
					h(Row, { title: "Command chips", hint: "One-click /compact, /goal and /plan shortcuts." },
						h(Switch, { value: prefs.commands, label: "Command chips", onChange: function (v) { setPrefs({ commands: v }); } })),
					h(Row, { title: "Exchange tools in chat", hint: "Edit / Retry / Delete buttons under every answer." },
						h(Switch, { value: prefs.chatTools, label: "Exchange tools in chat", onChange: function (v) { setPrefs({ chatTools: v }); } })),
					h(Row, { title: "Rotating tips" },
						h(Switch, { value: prefs.tips, label: "Rotating tips", onChange: function (v) { setPrefs({ tips: v }); } }))),
				h("div", { className: "hd-panel" },
					h(Row, { title: "Your name", hint: "Used in the greeting. Leave empty to skip it." },
						h("input", { className: "hd-input", style: { maxWidth: "220px" }, value: prefs.name, placeholder: "optional",
							onChange: function (event) { setPrefs({ name: event.target.value }); } })),
					h(Row, { title: "Accent colour", hint: "Tints the deck, chips, session hub and the Skills panel." },
						h("div", { className: "hd-row" },
							ACCENTS.map(function (color) {
								return h("button", { type: "button", key: color, className: cx("hd-swatch", prefs.accent === color && "hd-on"),
									style: { background: color }, "aria-label": color, onClick: function () { setPrefs({ accent: color }); } });
							}),
							h("input", { type: "color", value: prefs.accent, "aria-label": "Custom accent",
								style: { width: "28px", height: "26px", border: "none", background: "transparent", cursor: "pointer" },
								onChange: function (event) { setPrefs({ accent: event.target.value }); } })))),
				h("div", null,
					h("div", { className: "hd-row", style: { marginBottom: "8px" } },
						h("h3", { style: { flex: "1 1 auto" } }, "Quick-start cards"),
						h("button", { type: "button", className: "hd-btn",
							onClick: function () { setPrefs({ cards: prefs.cards.concat([{ id: uid(), icon: "✨", title: "New card", prompt: "" }]) }); } }, "＋ Add"),
						h("button", { type: "button", className: "hd-btn",
							onClick: function () { setPrefs({ cards: DEFAULT_CARDS }); } }, "Reset")),
					h("div", { className: "hd-panel" },
						prefs.cards.map(function (card) {
							return h("div", { className: "hd-edit", key: card.id },
								h("input", { className: "hd-input", style: { textAlign: "center", padding: 0, width: 44 }, value: card.icon || "",
									"aria-label": "Icon", onChange: function (event) { patchCard(card.id, { icon: event.target.value }); } }),
								h("div", { style: { display: "flex", flexDirection: "column", gap: "6px", minWidth: 0, flex: "1 1 auto" } },
									h("input", { className: "hd-input", value: card.title || "", placeholder: "Title",
										onChange: function (event) { patchCard(card.id, { title: event.target.value }); } }),
									h("textarea", { className: "hd-ta", value: card.prompt || "", placeholder: "Prompt sent to the composer",
										onChange: function (event) { patchCard(card.id, { prompt: event.target.value }); } })),
								h("button", { type: "button", className: "hd-btn", style: { padding: 0, width: "30px" }, title: "Delete card",
									onClick: function () { setPrefs({ cards: prefs.cards.filter(function (row) { return row.id !== card.id; }) }); } }, "✕"));
						}))),
				h("div", { className: "hd-row" },
					h("button", { type: "button", className: "hd-btn hd-primary",
						onClick: function () { if (typeof props.close === "function") props.close(); } }, "Done"),
					h("button", { type: "button", className: "hd-btn",
						onClick: function () { setPrefs(Object.assign({}, DEFAULTS)); } }, "Reset everything")));
		}

		/* --------------------------------------------------------- plugin body */
		const inject = ["slots", "connection", "conversation", "sessions", "workspaces"];

		function apply(ctx) {
			const connection = ctx.get("connection");
			const sessions = ctx.sessions;
			const api = connection && connection.api ? connection.api : undefined;
			const cache = new Map();
			const listSkills = function (sessionId, force) {
				if (!api || !sessionId) return Promise.resolve([]);
				if (!force && cache.has(sessionId)) return cache.get(sessionId);
				const controller = new AbortController();
				const promise = Promise.resolve(api.skills.list({ sessionId: sessionId }, controller.signal)).then(function (response) {
					const result = unwrap(response);
					if (!result || !result.ok) {
						const error = result && result.error ? result.error : { code: "unknown", message: "skill list failed" };
						throw new Error(error.code + ": " + error.message);
					}
					return result.value && result.value.skills ? result.value.skills : [];
				});
				cache.set(sessionId, promise);
				promise.catch(function () { if (cache.get(sessionId) === promise) cache.delete(sessionId); });
				return promise;
			};

			const sessionsApi = {
				listStore: sessions && sessions.list ? {
					getSnapshot: function () { return sessions.list.getSnapshot(); },
					subscribe: function (fn) { return typeof sessions.list.subscribe === "function" ? sessions.list.subscribe(fn) : function () {}; }
				} : null,
				open: function (id) {
					if (!sessions || typeof sessions.open !== "function") throw new Error("sessions service unavailable");
					sessions.open(id);
				},
				rename: async function (id, title) {
					if (!sessions || typeof sessions.binding !== "function") throw new Error("sessions service unavailable");
					const binding = sessions.binding(id);
					if (!binding || !binding.session) throw new Error("session not found: " + id);
					const result = await binding.session.rename(title);
					if (!result || !result.ok) throw new Error((result && result.error ? result.error.code + ": " + result.error.message : "rename failed"));
				},
				archive: async function (id) {
					const workspaces = ctx.get("workspaces");
					if (!workspaces || typeof workspaces.archiveSession !== "function") throw new Error("workspaces service unavailable");
					await workspaces.archiveSession(id);
				},
				createBlank: async function (opts) {
					if (!sessions || typeof sessions.create !== "function") throw new Error("sessions create unavailable");
					const result = await sessions.create(opts || {});
					if (!result || !result.ok) throw new Error((result && result.error ? result.error.code + ": " + result.error.message : "create failed"));
					return { id: result.value && result.value.sessionId };
				},
				search: async function (query) {
					if (!api || typeof api.sessions.search !== "function") throw new Error("session search unavailable");
					const response = await api.sessions.search({ query: query });
					const result = unwrap(response);
					if (!result || !result.ok) throw new Error((result && result.error ? result.error.code + ": " + result.error.message : "search failed"));
					return result.value && result.value.items ? result.value.items : [];
				},
				models: async function (id) {
					if (!api || typeof api.sessions.models !== "function") throw new Error("model list unavailable");
					const response = await api.sessions.models({ sessionId: id });
					const result = unwrap(response);
					if (!result || !result.ok) throw new Error((result && result.error ? result.error.code + ": " + result.error.message : "model list failed"));
					return result.value && result.value.current ? result.value.current : null;
				},
				fork: async function (id) {
					if (!sessions || typeof sessions.fork !== "function") throw new Error("fork unavailable");
					const childId = await sessions.fork({ sessionId: id, increaseTitle: true });
					if (sessions.open) sessions.open(childId);
					return childId;
				}
			};

			const turnToolsFor = function (sessionId) {
				return {
					findPrompt: async function (anchorSeq) {
						if (!api || typeof api.sessions.history !== "function") throw new Error("history unavailable");
						const response = await api.sessions.history({ sessionId: sessionId });
						const result = unwrap(response);
						if (!result || !result.ok) throw new Error((result && result.error ? result.error.code + ": " + result.error.message : "history failed"));
						const events = (result.value && result.value.events ? result.value.events : []).map(function (entry) {
							return entry && entry.event ? entry.event : entry;
						});
						let prompt = null;
						for (let i = events.length - 1; i >= 0; i -= 1) {
							const event = events[i];
							if (event && event.seq !== undefined && anchorSeq !== undefined && event.seq >= anchorSeq) continue;
							if (event && event.type === "user/message" && event.data && event.data.source && event.data.source.kind === "user") {
								const text = textOf(event.data.content);
								if (text) { prompt = { seq: event.seq, text: text }; break; }
							}
						}
						if (!prompt) throw new Error("no user prompt found in this session");
						return prompt;
					},
					edit: async function (anchorSeq) {
						const prompt = await this.findPrompt(anchorSeq);
						const conversation = ctx.get("conversation");
						const shell = conversation && conversation.input && typeof conversation.input.shell === "function" ? conversation.input.shell(sessionId) : null;
						if (!shell || typeof shell.setDraft !== "function") throw new Error("composer unavailable");
						shell.setDraft(prompt.text);
					},
					retry: async function (anchorSeq) {
						const prompt = await this.findPrompt(anchorSeq);
						if (!api || typeof api.sessions.prompt !== "function") throw new Error("prompt unavailable");
						const response = await api.sessions.prompt({
							sessionId: sessionId,
							mode: "queue",
							content: [{ type: "text", text: prompt.text }]
						});
						const result = unwrap(response);
						if (!result || !result.ok) throw new Error((result && result.error ? result.error.code + ": " + result.error.message : "resend failed"));
					},
					remove: async function (anchorSeq) {
						const prompt = await this.findPrompt(anchorSeq);
						if (!sessions || typeof sessions.fork !== "function") throw new Error("fork unavailable");
						const childId = await sessions.fork({ sessionId: sessionId, atSeq: prompt.seq, increaseTitle: true });
						sessions.open(childId);
					}
				};
			};

			try { ctx.on("connection/reset", function () { cache.clear(); }); } catch (error) { /* optional */ }

			const face = function () { return { listSkills: listSkills, sessionsApi: sessionsApi }; };

			ctx.slots.inject("sidebar.footer.action", function () {
				return ctx.slots.register({ name: "sidebar.footer.action", id: "home-deck-skills", order: 5, inject: face }, SkillsAction);
			});
			ctx.slots.inject("conversation.input.dock", function () {
				return ctx.slots.register({ name: "conversation.input.dock", id: "home-deck", order: -100, inject: face }, HomeDeck);
			});
			ctx.slots.inject("conversation.chat.turnTail", function () {
				return ctx.slots.register({
					name: "conversation.chat.turnTail",
					id: "home-deck-turn-tools",
					order: 20,
					select: function () { return getPrefs().chatTools ? {} : null; },
					inject: function (sessionId) { return { chatApi: turnToolsFor(sessionId) }; }
				}, TurnTools);
			});
			ctx.slots.inject("settings.section", function () {
				return ctx.slots.register({ name: "settings.section", id: "home-deck", order: 40, label: "Home Deck" }, HomeDeckSection);
			});
		}

		exports.apply = apply;
		exports.inject = inject;
		return module.exports;

	}
});
