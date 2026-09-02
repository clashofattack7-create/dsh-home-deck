/* Render-test harness for the Home Deck client bundle (node, no browser). */
const fs = require("node:fs");
const path = require("node:path");
const { createRequire } = require("node:module");
/* React + react-dom live inside the DSH install; take all three from ONE tree
   so the harness and the bundle share a single React instance. */
const REACT_HOME = "C:/Users/PC/AppData/Roaming/npm/node_modules/@deepseek-ai/dsh/node_modules/@deepseek-ai/dsh-client-ui-trajectory/package.json";
const req = createRequire(REACT_HOME);
const React = req("react");
const jsxRuntime = req("react/jsx-runtime");
const ReactDOMServer = req("react-dom/server");

/* ---- minimal browser stubs the bundle touches at module scope ---- */
const styleTags = [];
const store = new Map();
globalThis.document = {
  querySelector: () => null,
  querySelectorAll: () => [],
  createElement: () => ({ dataset: {}, set textContent(v) { this._css = v; }, get textContent() { return this._css; } }),
  head: { appendChild: (tag) => styleTags.push(tag) },
  addEventListener: () => {},
  removeEventListener: () => {},
};
globalThis.window = {
  localStorage: {
    getItem: (k) => (store.has(k) ? store.get(k) : null),
    setItem: (k, v) => store.set(k, v),
  },
  addEventListener: () => {},
  removeEventListener: () => {},
  setInterval: () => 0,
  clearInterval: () => {},
  setTimeout: () => 0,
  innerHeight: 900,
  dispatchEvent: () => true,
  prompt: () => null,
  confirm: () => true,
};
globalThis.navigator = { clipboard: { writeText: async () => {} } };
globalThis.CustomEvent = class CustomEvent { constructor(type, init) { this.type = type; this.detail = init && init.detail; } };

/* ---- session fixture + api stub ---- */
const SESSIONS_ITEMS = [
  { id: "sess-old", displayTitle: "Option chain analysis", updatedAt: Date.now() - 3600e3, running: false, blank: false, cwd: "D:\\dsh\\DSH", agentPreset: "code" },
  { id: "sess-1", displayTitle: "New session", updatedAt: Date.now() - 60e3, running: false, blank: true, cwd: "D:\\dsh\\DSH", agentPreset: "code" },
  { id: "sess-working", displayTitle: "Fixing a bug", updatedAt: Date.now(), running: true, blank: false, cwd: "D:\\dsh\\DSH\\option-chain-live", agentPreset: "code" },
];
const SKILLS = [
  { name: "dsh-customization", description: "Customize this DeepSeek Harness install.", modelInvocable: true },
  { name: "option-chain-live", description: "Pull or analyse live NSE option chain data.", modelInvocable: true },
  { name: "playlist-brain", description: "Answer questions from the Playlist Brain knowledge base.", modelInvocable: false },
];
const HISTORY_EVENTS = [
  { seq: 1, time: Date.now() - 60000, type: "user/message", data: { source: { kind: "user" }, content: [{ type: "text", text: "First prompt" }] } },
  { seq: 2, time: Date.now() - 59000, type: "turn/start", data: { turn: 1 } },
  { seq: 10, time: Date.now() - 58000, type: "assistant/message", data: { source: { kind: 1 }, content: [{ type: "text", text: "First answer" }] } },
  { seq: 11, time: Date.now() - 50000, type: "user/message", data: { source: { kind: "user" }, content: [{ type: "text", text: "Second prompt" }] } },
  { seq: 12, time: Date.now() - 49000, type: "turn/start", data: { turn: 2 } },
  { seq: 20, time: Date.now() - 48000, type: "assistant/message", data: { source: { kind: 2 }, content: [{ type: "text", text: "Second answer" }] } },
];
const okResult = (value) => ({ ok: true, value });

const registrations = [];
const sessionCalls = { rename: [], fork: [], open: [], create: [] };
const apiCalls = { prompt: [], history: [], search: [] };
const sessionsService = {
  list: {
    getSnapshot: () => ({ ids: SESSIONS_ITEMS.map((s) => s.id), byId: Object.fromEntries(SESSIONS_ITEMS.map((s) => [s.id, s])), current: "sess-1", phase: "ready" }),
    subscribe: () => () => {},
  },
  open: (id) => { sessionCalls.open.push(id); },
  binding: (id) => ({ session: { rename: async (title) => { sessionCalls.rename.push({ id, title }); return okResult({ title, seq: 99 }); } } }),
  create: async () => { sessionCalls.create.push(null); return okResult({ sessionId: "sess-new" }); },
  fork: async (payload) => { sessionCalls.fork.push(payload); return "sess-forked"; },
  scope: () => undefined,
};
const connectionApi = {
  skills: { list: async () => ({ result: okResult({ skills: SKILLS }) }) },
  sessions: {
    history: async (payload) => { apiCalls.history.push(payload); return { result: okResult({ events: HISTORY_EVENTS.map((e) => ({ event: e, view: null })), hasMore: false }) }; },
    prompt: async (payload) => { apiCalls.prompt.push(payload); return { result: okResult({ accepted: true }) }; },
    search: async (payload) => { apiCalls.search.push(payload); return { result: okResult({ items: [{ sessionId: "sess-old", snippet: "… option chain …" }], hasMore: false }) }; },
    models: async (payload) => ({ result: okResult({ current: { provider: "deepseek-official", model: "deepseek-v4-flash-vision-exp" }, routable: true, groups: [], failures: [] }) }),
    create: async () => okResult({ sessionId: "sess-new" }),
    rename: async () => okResult({ title: "x", seq: 1 }),
    list: async () => okResult({ items: [] }),
    fork: async () => okResult({ sessionId: "sess-forked" }),
  },
};
const ctx = {
  get(name) {
    if (name === "connection") return { api: connectionApi, isLoopback: false };
    if (name === "conversation") return { input: { shell: () => ({ setDraft: () => {} }) } };
    if (name === "workspaces") return { archiveSession: async () => {} };
    return undefined;
  },
  on() {},
  slots: {
    inject(name, fn) { return fn(); },
    register(options, Component) { registrations.push({ options, Component }); return () => {}; },
  },
};
function loadBundle() {
  let registration = null;
  globalThis.window.__ModuleLoader__ = { load: (reg) => { registration = reg; } };
  const code = fs.readFileSync(path.resolve("D:/dsh/DSH/dsh-home-deck/lib/client.js"), "utf8");
  (0, eval)(code);
  if (!registration) throw new Error("bundle did not register");
  const requireShim = (spec) => {
    if (spec === "react") return React;
    if (spec === "react/jsx-runtime") return jsxRuntime;
    throw new Error("unexpected require(" + spec + ")");
  };
  const exportsObj = registration.factory(requireShim);
  console.log("registered id:", registration.id);
  console.log("exports:", Object.keys(exportsObj).sort().join(", "), "| inject:", JSON.stringify(exportsObj.inject));
  console.log("style tags injected:", styleTags.length, "| css bytes:", styleTags[0] ? styleTags[0].textContent.length : 0);
  exportsObj.apply(ctx);
  return exportsObj;
}
const exportsObj = loadBundle();

function find(optionsName, id) {
  const found = registrations.filter((r) => r.options.name === optionsName && r.options.id === id);
  return found.length === 0 ? null : found[0];
}
function render(entry, props) {
  return ReactDOMServer.renderToStaticMarkup(React.createElement(entry.Component, props));
}
function check(label, html, needles) {
  const missing = needles.filter((n) => !html.includes(n));
  console.log((missing.length === 0 ? "  OK   " : "  FAIL "), label, "->", html.length, "chars" + (missing.length ? "; MISSING: " + JSON.stringify(missing) : ""));
  return missing.length === 0;
}

console.log("\nslot registrations:");
for (const r of registrations) console.log("  -", r.options.name, r.options.id || r.options.key || "", "(order " + r.options.order + ")");

let failures = 0;
const face = { listSkills: (sid, force) => Promise.resolve(SKILLS), sessionsApi: { listStore: sessionsService.list, open: sessionsService.open, createBlank: async () => ({ id: "sess-new" }), rename: async () => {}, archive: async () => {}, search: async () => [], models: async () => ({ provider: "deepseek-official", model: "deepseek-v4-flash-vision-exp" }), fork: async () => "sess-forked" } };

const skillsEntry = find("sidebar.footer.action", "home-deck-skills");
const deckEntry = find("conversation.input.dock", "home-deck");
const turnEntry = find("conversation.chat.turnTail", "home-deck-turn-tools");
const settingsEntry = find("settings.section", "home-deck");

if (!skillsEntry || !deckEntry || !turnEntry || !settingsEntry) {
  console.log("FATAL: not all four registrations found");
  process.exit(1);
}

console.log("\nrender results:");
failures += check("sidebar.footer.action (wide)", render(skillsEntry, { wide: true, useSessions: (sel) => sel({ current: "sess-1" }), ...face }), ["Skills", "hd-fbtn"]) ? 0 : 1;
failures += check("sidebar.footer.action (rail)", render(skillsEntry, { wide: false, useSessions: (sel) => sel({ current: "sess-1" }), ...face }), ["hd-rail"]) ? 0 : 1;
failures += check("home dock (blank session)", render(deckEntry, {
  session: { sessionId: "sess-1", blank: true }, input: { draft: "draft text" }, sessionId: "sess-1",
  inputActions: { setDraft() {}, submit() {} }, ...face,
}), ["hd-hello", "hd-sess", "Search sessions", "Sessions", "+ New", "Continue", "Option chain", "hd-deck", "/compact", "/goal", "/plan", "Commands", "Fork a copy of this session", "Rename", "Delete (archive)"]) ? 0 : 1;
failures += check("home dock (active chat hidden)", render(deckEntry, {
  session: { sessionId: "sess-1", blank: false }, input: { draft: "" }, sessionId: "sess-1",
  inputActions: { setDraft() {}, submit() {} }, ...face,
}), []) ? 0 : 1;
failures += check("Settings section", render(settingsEntry, { close: () => {} }), ["Home Deck", "Session hub", "Exchange tools in chat", "Edit / Retry / Delete", "Command chips", "Reset everything"]) ? 0 : 1;
failures += check("turn tools bar", render(turnEntry, { turn: { id: 2 }, seq: 20, openFile: () => {}, chatApi: { edit: async () => {}, retry: async () => {}, remove: async () => {} } }),
  ["hd-ttool", "Edit", "Retry", "Delete", "hd-ttb", "hd-danger"]) ? 0 : 1;
failures += check("turn tools hidden without api", render(turnEntry, { turn: { id: 2 }, seq: 20, openFile: () => {}, chatApi: undefined }), []) ? 0 : 1;

console.log(failures === 0 ? "\nALL CHECKS PASSED" : "\nFAILURES: " + failures);
process.exit(failures === 0 ? 0 : 1);
