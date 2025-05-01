"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyDocsResource = exports.filterDocs = void 0;
const lsd_1 = require("./lsd");
const filterDocs = (result) => result.filter((row) => row["URL"] ===
    "https://lsd.so/docs/database/language/types/keywords/assignable/target" ||
    (![
        "https://lsd.so/docs/database/language/standard",
        "https://lsd.so/docs/database/language/sensitive_values",
        "https://lsd.so/docs/database/language/types/keywords/set",
        "https://lsd.so/docs/database/language/list-comprehension",
        "https://lsd.so/docs/database/language/exclamation-mark",
    ].includes(row["URL"]) &&
        !row["URL"].includes("https://lsd.so/docs/database/language/types/keywords/assignable")));
exports.filterDocs = filterDocs;
const applyDocsResource = (server) => {
    server.resource("lsd_docs", "lsd://docs", async (uri, _) => {
        const result = await (0, lsd_1.runLSD)(`SCAN https://lsd.so/docs/database/language`);
        return {
            contents: [
                {
                    uri: uri.href,
                    text: JSON.stringify((0, exports.filterDocs)(result)),
                },
            ],
        };
    });
};
exports.applyDocsResource = applyDocsResource;
//# sourceMappingURL=docs.js.map