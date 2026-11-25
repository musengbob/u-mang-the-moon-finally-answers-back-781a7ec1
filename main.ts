import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

function buildEntryLine(): string {
  return "Four billion years of wishes, howls, and 2 a.m. promises \u2014 and not one of you has ever once asked how I'm doing.";
}

const ENTRY = buildEntryLine();

// Kit gate (RULES.txt): entry must be UTF-8 text of 1–240 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 240 || ENTRY.trim().length === 0) {
  throw new Error("entry fails the 1–240 character gate");
}

function resolveOutputPath(): string {
  const dir =
    process.env.MAKEFUN_OUTPUT_DIR ||
    process.env.OUTPUT_PATH ||
    (process.env.MAKEFUN_BOT_DIR ? "/output" : "output");
  return join(dir, "entry.txt");
}

const outPath = resolveOutputPath();
mkdirSync(join(outPath, ".."), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
