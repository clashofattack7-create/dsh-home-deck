const fs = await import("node:fs");
const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
const base = "http://127.0.0.1:9222";
const list = await (await fetch(base + "/json/list")).json();
const tab = list.find((t) => t.type === "page");
const ws = new WebSocket(tab.webSocketDebuggerUrl);
await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });
let nextId = 1; const pending = new Map();
ws.onmessage = (msg) => { const data = JSON.parse(msg.data);
  if (data.id !== undefined && pending.has(data.id)) { const p = pending.get(data.id); pending.delete(data.id); data.error ? p.reject(new Error(JSON.stringify(data.error))) : p.resolve(data.result); } };
const send = (method, params = {}) => new Promise((resolve, reject) => { const id = nextId++; pending.set(id, { resolve, reject }); ws.send(JSON.stringify({ id, method, params })); });
await send("Page.enable"); await send("Runtime.enable"); await send("Network.enable");
await send("Network.setCacheDisabled", { cacheDisabled: true });
await send("Page.navigate", { url: "http://127.0.0.1:3080/" });
await sleep(13000);
const evaluate = async (expr) => { const r = await send("Runtime.evaluate", { expression: expr, returnByValue: true }); if (r.exceptionDetails) return "EVAL-ERR: " + (r.exceptionDetails.exception?.description || r.exceptionDetails.text).slice(0, 300); return r.result?.value; };
console.log("deck?", await evaluate("!!document.querySelector('.hd-deck')"));
const rows = await evaluate("Array.from(document.querySelectorAll('.hd-srow')).map(r => (r.textContent||'').slice(0,50))");
console.log("deck rows:", JSON.stringify(rows));
// Click the first non-blank session row in the deck (skip blank "DSH" row)
const clicked = await evaluate(`(() => {
  const rows = Array.from(document.querySelectorAll(".hd-srow"));
  const target = rows.find(r => !/blank/i.test(r.textContent || ""));
  if (!target) return "none";
  target.click();
  return "clicked: " + (target.textContent || "").slice(0, 50);
})()`);
console.log("CLICK:", clicked);
await sleep(9000);
console.log("after click:", await evaluate(`(() => JSON.stringify({
  url: location.href,
  ttool: !!document.querySelector(".hd-ttool"),
  tbuttons: Array.from(document.querySelectorAll(".hd-ttool .hd-ttb")).map(b => b.textContent.trim()),
  titles: Array.from(document.querySelectorAll(".hd-ttool .hd-ttb")).map(b => b.getAttribute("title")),
  textareaLen: document.querySelector("textarea") ? document.querySelector("textarea").value.length : -1
}))()`));
// Click Edit on the first exchange toolbar
console.log("click edit:", await evaluate(`(() => { const b = document.querySelector(".hd-ttool .hd-ttb"); if (!b) return "no-edit"; b.click(); return "ok"; })()`));
await sleep(5000);
console.log("after edit:", await evaluate(`(() => JSON.stringify({
  textareaHead: document.querySelector("textarea") ? document.querySelector("textarea").value.slice(0, 140) : "(none)",
  errs: Array.from(document.querySelectorAll(".hd-err")).map(e => e.textContent)
}))()`));
const shot = await send("Page.captureScreenshot", { format: "png" });
fs.writeFileSync("D:/dsh/DSH/dsh-home-deck/diag-shot-chat.png", Buffer.from(shot.data, "base64"));
console.log("screenshot saved");
ws.close(); process.exit(0);
