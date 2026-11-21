const fs = require("fs");
const p = "C:/Users/Nishant Singh/Desktop/Naresh/src/lib/site.ts";
let s = fs.readFileSync(p, "utf8");
const start = s.indexOf("export const forumCards");
const end = s.indexOf("export const allRoutes");
if (start < 0 || end < 0) throw new Error("markers missing");
const replacement = `export const forumCards = [
  {
    icon: "account_balance",
    title: "[PLACEHOLDER: Primary appellate forum]",
    description:
      "Educational overview of appellate forums under Indian law. Actual courts of appearance: [PLACEHOLDER: Pending verification].",
    label: "Forum — Pending verification",
  },
  {
    icon: "balance",
    title: "[PLACEHOLDER: High Court / trial forum]",
    description:
      "Informational summary of High Court writ and civil jurisdiction frameworks. Not a claim of appearance until verified.",
    label: "Forum — Pending verification",
  },
  {
    icon: "corporate_fare",
    title: "[PLACEHOLDER: Tribunal / specialised forum]",
    description:
      "Generic educational note on specialised tribunals. Inclusion here does not assert practice before any named tribunal.",
    label: "Forum — Pending verification",
  },
  {
    icon: "contract",
    title: "[PLACEHOLDER: ADR / arbitration forum]",
    description:
      "Educational overview of arbitration under the Arbitration and Conciliation Act, 1996. Practice scope subject to verification.",
    label: "Forum — Pending verification",
  },
] as const;

`;
fs.writeFileSync(p, s.slice(0, start) + replacement + s.slice(end));
console.log("updated forumCards");
