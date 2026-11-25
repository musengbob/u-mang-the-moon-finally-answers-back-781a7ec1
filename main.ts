import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Four billion years of wishes, howls, and 2 a.m. promises \u2014 and not one of you has ever once asked how I'm doing.";

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
