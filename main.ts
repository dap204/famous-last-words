// Famous Last Words: The Funniest Epitaph — make.fun entry
// (u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406)
//
// One line, carved in stone: the funniest famous last words.
// This program writes that line to /output/entry.txt for the judge.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "He died as he lived: on mute, camera off, in a meeting that should have been an email.";

// The gate only accepts UTF-8 text of 1 to 150 characters, not only
// white space, so refuse to write anything that would fail it.
// (86 characters: comfortably inside the limit, nothing wasted.)
if (LINE.length < 1 || LINE.length > 150 || LINE.trim().length === 0) {
  throw new Error(`Line is ${LINE.length} characters; the gate needs 1-150.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
