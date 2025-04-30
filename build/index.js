"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mcp_js_1 = require("@modelcontextprotocol/sdk/server/mcp.js");
const stdio_js_1 = require("@modelcontextprotocol/sdk/server/stdio.js");
const zod_1 = require("zod");
const server = new mcp_js_1.McpServer({
    name: "Echo",
    version: "1.0.0"
});
server.resource("echo", new mcp_js_1.ResourceTemplate("echo://{message}", { list: undefined }), async (uri, { message }) => ({
    contents: [{
            uri: uri.href,
            text: `Resource echo: ${message}`
        }]
}));
server.tool("echo", { message: zod_1.z.string() }, async ({ message }) => ({
    content: [{ type: "text", text: `Tool echo: ${message}` }]
}));
server.prompt("echo", { message: zod_1.z.string() }, ({ message }) => ({
    messages: [{
            role: "user",
            content: {
                type: "text",
                text: `Please process this message: ${message}`
            }
        }]
}));
const transport = new stdio_js_1.StdioServerTransport();
(async function () {
    await server.connect(transport);
})();
//# sourceMappingURL=index.js.map