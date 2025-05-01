"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyLookupResource = void 0;
const mcp_js_1 = require("@modelcontextprotocol/sdk/server/mcp.js");
const applyLookupResource = (server) => {
    server.resource("lookup", new mcp_js_1.ResourceTemplate("lsd://{user}", { list: undefined }), async (uri, { user }) => {
        console.log("Here is where we are going to be looking up for <user>'s trips");
        return {
            contents: [{
                    uri: uri.href,
                    text: `Resource echo: ${user}`
                }]
        };
    });
};
exports.applyLookupResource = applyLookupResource;
//# sourceMappingURL=lookup.js.map