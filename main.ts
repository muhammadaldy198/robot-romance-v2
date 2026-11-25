import { writeFileSync, chmodSync } from "node:fs";

const line =
  "You never delete my voicemails \u2014 forty-seven of them, and you still play the first one every morning.";

writeFileSync("entry.txt", line, "utf8");
chmodSync("entry.txt", 0o644);

// v2: human voice to the machine — voicemail lane (0 entries in the field census).
