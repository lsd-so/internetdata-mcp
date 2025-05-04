"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stdio_js_1 = require("@modelcontextprotocol/sdk/server/stdio.js");
const brave_1 = require("./brave");
const docs_1 = require("./docs");
const huxley_1 = require("./huxley");
const lookup_1 = require("./lookup");
const mcp_1 = require("./mcp");
const prompt_1 = require("./prompt");
const run_1 = require("./run");
const trips_1 = require("./trips");
(0, docs_1.applyDocsResource)(mcp_1.server);
(0, lookup_1.applyLookupResource)(mcp_1.server);
(0, brave_1.applyBraveTool)(mcp_1.server);
(0, run_1.applyRunTool)(mcp_1.server);
(0, trips_1.applyTripsTool)(mcp_1.server);
(0, prompt_1.applyResearchPrompt)(mcp_1.server);
(0, huxley_1.applyHuxleyPrompt)(mcp_1.server);
(async function () {
    await mcp_1.server.connect(new stdio_js_1.StdioServerTransport());
})();
//# sourceMappingURL=index.js.map