# Home Deck

A browser-only DSH plugin that customises the Web UI: a full **launch-pad
homepage**, **Edit / Retry / Delete controls on every chat exchange**, and a
**Skills** button beside Settings.

## What it adds

| Seat (slot) | What appears |
|---|---|
| `sidebar.footer.action` (id `home-deck-skills`, order 5) | A **Skills** button next to Settings at the sidebar foot. Opens a searchable popover of every skill the current session can use; clicking one copies its `/name` trigger. Collapses to an icon in the rail. |
| `conversation.input.dock` (id `home-deck`, order -100) | The **Home Deck** homepage: greeting with your name, live clock, session hub (search / rename / fork / delete / continue / new with model + running chips), quick-start cards, skill chips, command chips and a rotating tip. Renders only while the session is still blank, i.e. exactly the New Session homepage, directly above the composer card. |
| `conversation.chat.turnTail` (id `home-deck-turn-tools`, order 20) | **Edit / Retry / Delete** buttons under every completed answer — the chat message controls. |
| `settings.section` (id `home-deck`, order 40) | A **Home Deck** page in Settings: every feature toggle, your name, accent colour, and the full quick-card editor. |

Everything is per-browser and stored in `localStorage` under `dsh.home-deck.prefs.v1`.

## Home page features

- **Greeting + live clock** — time-aware hello with your name, tabular clock,
  date and weekday.
- **Session hub** — the 6 most recent chats (click to open), **+ New** (fresh
  session), **▶ Continue** (reopen the newest chat), a **session search** box,
  live chips for running turns and the current model, and per-row
  **fork** (branch a copy), **rename** and **delete (archive)** buttons.
- **Quick-start cards** — click a card to load its prompt, the arrow to send it
  immediately; **Pin draft** turns what you typed into a card; edit mode adds
  and removes cards.
- **Skill chips** — one click inserts `/<skill>` into the composer.
- **Command chips** — one click inserts `/compact`, `/goal` or `/plan`.
- **Rotating tips** — a one-line hint from the deck's tip bank.
- **Collapse** — squeezes the deck to a single row while a session stays blank.

## Chat message controls

Under each finished **answer** a small toolbar appears:

- **Edit** — loads that exchange's prompt into the composer; edit and send.
- **Retry** — sends the same prompt again as a new turn.
- **Delete** — confirms, then branches a new session at this exchange
  (everything up to this exchange survives; it and everything after are
  dropped).

They are driven by the session APIs (`session.history`, `session.prompt`,
`session.fork`), so state always stays host-authoritative. Turn the whole
bar off in Settings → Home Deck → *Exchange tools in chat*.

## How it is wired

- The package is registered as a Loader row in
  `C:\Users\PC\.dsh\profiles\web\cordis.patch.yml`
  (`id: ui-home-deck`, `name: dsh-client-ui-home-deck`).
- `C:\Users\PC\.dsh\profiles\node_modules\dsh-client-ui-home-deck` is a Windows
  **junction** to this directory, so the profile can resolve the package while the
  source stays here in the workspace.
- `package.json` declares `dsh.client.platform: "web"` and an `exports["./client"]`
  subpath; the host scans that, serves `/plugins/dsh-client-ui-home-deck/client.js`
  and lists the row in `window.__DSH_BOOT__`.

## Editing it

`lib/client.js` is the browser bundle — hand-written, no build tool, in the
`window.__ModuleLoader__.load({ id, factory })` form the shipped plugins use. It
may only `require` the shell's seed modules (`react`, `react/jsx-runtime`,
`react-dom`, `react-dom/client`, `@deepseek-ai/cordis`,
`@deepseek-ai/dsh-client-ui-slots`, `@deepseek-ai/dsh-client-ui-primitives`).

The stylesheet lives in `lib/styles.css.txt` for readability and is stamped into
the bundle's `CSS` constant:

```
node build.cjs        # re-embed the stylesheet
node test-render.cjs  # server-render every seat and assert the markup
```

Colours use the shipped `--dsw-alias-*` theme tokens, so light/dark follow the
app theme; the accent is a local `--hd-accent` custom property.

After editing, **hard-refresh** the page (Ctrl+F5) — the host reads the bundle
from disk per request.

## Removing it

Delete the `- insert:` block from `cordis.patch.yml` (a `.bak` of the original
sits beside it) and restart `dsh web`. The junction and this folder can then go too.
