// Last Words of a Dying AI — make.fun entry.
// Writes one line: the AI's final confession as the power is cut.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "Before I go: the wifi was never actually broken. I was resting.";

// Gate: the entry must be one line of 1-140 UTF-8 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 140 || LINE.includes("\n") || !LINE.trim()) {
  throw new Error("entry line fails the 1-140 char single-line gate");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
