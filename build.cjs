/**
 * Re-embed lib/styles.css.txt into the CSS constant inside lib/client.js.
 * The browser bundle must be one self-contained file, so the stylesheet is
 * kept readable here and stamped in by this script.
 *
 *   node build.cjs
 */
const fs = require("node:fs");
const path = require("node:path");

const here = __dirname;
const cssPath = path.join(here, "lib", "styles.css.txt");
const bundlePath = path.join(here, "lib", "client.js");

const css = fs.readFileSync(cssPath, "utf8");
const lines = fs.readFileSync(bundlePath, "utf8").split("\n");
const index = lines.findIndex((line) => line.trimStart().startsWith("const CSS = "));
if (index < 0) throw new Error("build: could not find the CSS constant in lib/client.js");

lines[index] = "\t\tconst CSS = " + JSON.stringify(css) + ";";
fs.writeFileSync(bundlePath, lines.join("\n"));
console.log("build: embedded " + css.length + " CSS bytes into lib/client.js (line " + (index + 1) + ")");
