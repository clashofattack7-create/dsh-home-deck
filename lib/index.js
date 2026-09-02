/**
 * Home Deck — node half. The browser half ships through exports["./client"];
 * this row exists only so the Loader has a host-side entry to scan for
 * the `dsh.client` declaration.
 */
/** Host plugin body — this package contributes browser presentation only. */
export function apply() {}
