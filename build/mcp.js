"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const mcp_js_1 = require("@modelcontextprotocol/sdk/server/mcp.js");
exports.server = new mcp_js_1.McpServer({
    name: "Echo",
    version: "1.0.0",
});
//# sourceMappingURL=mcp.js.map