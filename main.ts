// Midnight Fridge Roast — one-line roast of a smart fridge that locks after midnight.
// The joke: the fridge stayed silent while the milk expired for three weeks,
// but polices a 12:01 snack in the name of "wellness" — the petty rule is the target.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My fridge locks at midnight and flashes 'wellness mode' — it let the milk expire in silence for three weeks, but my 12:01 snack is where it draws the line.";

// Self-check the sealed gate before writing: 1–200 characters, single line.
// A gate failure here is louder than a silent zero from the scorer.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.includes("\n")) {
  throw new Error(`entry violates the 1–200 char single-line gate: ${ENTRY.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
