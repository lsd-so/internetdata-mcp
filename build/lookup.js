"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyLookupResource = void 0;
const mcp_js_1 = require("@modelcontextprotocol/sdk/server/mcp.js");
const lsd_1 = require("./lsd");
const lookupTrips = async (identifier) => {
    if (["me", "@me"].includes(identifier)) {
        const results = await (0, lsd_1.runLSD)(`SEARCH @me`);
        return results;
    }
    else if (identifier.includes("@")) {
        const results = await (0, lsd_1.runLSD)(`SEARCH ${identifier}`);
        return results;
    }
    else {
        const results = await (0, lsd_1.runLSD)(`SEARCH @${identifier}`);
        return results;
    }
};
const applyLookupResource = (server) => {
    server.resource("lookup", new mcp_js_1.ResourceTemplate("lsd://{user}", { list: undefined }), async (uri, { user }) => {
        const result = await lookupTrips(Array.isArray(user) ? user[0] : user);
        return {
            contents: [
                {
                    uri: uri.href,
                    text: JSON.stringify(result),
                },
            ],
        };
    });
};
exports.applyLookupResource = applyLookupResource;
//# sourceMappingURL=lookup.js.map