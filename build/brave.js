"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyBraveTool = void 0;
const zod_1 = require("zod");
const lsd_1 = require("./lsd");
const applyBraveTool = (server) => {
    server.tool("brave_search", "Search Brave for possibly relevant links to a query", { query: zod_1.z.string() }, async ({ query }) => {
        const result = await (0, lsd_1.runLSD)(`FROM https://search.brave.com?search?q=${encodeURIComponent(query)} |> G
ROUP BY div.snippet |> SELECT a@href AS result_link`);
        return {
            content: [{
                    type: 'text',
                    text: `Here are the results for searching on Brave for: ${query}\n\n${JSON.stringify(result)}`
                }]
        };
    });
};
exports.applyBraveTool = applyBraveTool;
//# sourceMappingURL=brave.js.map