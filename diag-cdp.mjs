const fs = await import("node:fs");
const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
const base = "http://127.0.0.1:9222";
const APP = "http://127.0.0.1:3080/";
const list = await (await fetch(base + "/json/list")).json();
const tab = list.find((t) => t.type === "page");
const ws = new WebSocket(tab.webSocketDebuggerUrl);
await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });
let nextId = 1; const pending = new Map(); const events = [];
ws.onmessage = (msg) => {
  const data = JSON.parse(msg.data);
  if (data.id !== undefined && pending.has(data.id)) { const p = pending.get(data.id); pending.delete(data.id); data.error ? p.reject(new Error(JSON.stringify(data.error))) : p.resolve(data.result); }
  else if (data.method) events.push(data);
};
const send = (method, params = {}) => new Promise((resolve, reject) => { const id = nextId++; pending.set(id, { resolve, reject }); ws.send(JSON.stringify({ id, method, params })); });
await send("Page.enable"); await send("Runtime.enable"); await send("Log.enable");
await send("Network.enable");
await send("Network.setCacheDisabled", { cacheDisabled: true });
await send("Page.navigate", { url: APP });
await sleep(16000);
const evaluate = async (expr) => { const r = await send("Runtime.evaluate", { expression: expr, returnByValue: true }); if (r.exceptionDetails) return "EVAL-ERR: " + (r.exceptionDetails.exception?.description || r.exceptionDetails.text).slice(0, 300); return r.result?.value; };
const checks = await evaluate(`(() => JSON.stringify({
  hdDeck: !!document.querySelector(".hd-deck"),
  hdSess: !!document.querySelector(".hd-sess"),
  hdFbtn: !!document.querySelector(".hd-fbtn"),
  hdClasses: Array.from(new Set(Array.from(document.querySelectorAll("[class*=hd-]")).map(n => n.className).join(" ").split(/\s+/).filter(c => c.startsWith("hd-")))).slice(0, 40),
  deckText: (document.querySelector(".hd-deck")?.innerText || "").slice(0, 300),
  bodyHasSessions: (document.body.innerText || "").includes("Sessions")
}))()`);
console.log("HOMEPAGE CHECKS:", checks);
const errs = events.filter(e => (e.method === "Runtime.exceptionThrown") || (e.method === "Log.entryAdded" && ["error","warning"].includes(e.params.entry.level)) || (e.method === "Runtime.consoleAPICalled" && ["error","warning"].includes(e.params.type))).map(e => {
  if (e.method === "Runtime.exceptionThrown") return "EXC: " + (e.params.exceptionDetails.exception?.description || e.params.exceptionDetails.text).slice(0, 400);
  if (e.method === "Log.entryAdded") return "LOG-" + e.params.entry.level + ": " + String(e.params.entry.text).slice(0, 300);
  return "CONSOLE-" + e.params.type + ": " + (e.params.args || []).map(a => a.value !== undefined ? String(a.value) : (a.description || "")).join(" ").slice(0, 300);
});
console.log("ERRORS (" + errs.length + "):");
for (const e of errs.slice(0, 20)) console.log("  " + e);
const shot = await send("Page.captureScreenshot", { format: "png" });
fs.writeFileSync("D:/dsh/DSH/dsh-home-deck/diag-shot-home.png", Buffer.from(shot.data, "base64"));
console.log("home screenshot saved");
ws.close(); process.exit(0);
