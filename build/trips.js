"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyTripsTool = exports.findTrips = void 0;
const zod_1 = require("zod");
const lsd_1 = require("./lsd");
const tools_1 = require("./tools");
const toToolDefinition = (row) => {
    return {
        name: row["NAME"],
        description: row["DESCRIPTION"],
        tool: async () => {
            const result = await (0, lsd_1.runLSD)(row["STATEMENT"]);
            return {
                content: [
                    {
                        type: "text",
                        text: JSON.stringify(result),
                    },
                ],
            };
        },
    };
};
const findTrips = async (server, query) => {
    const result = await (0, lsd_1.runLSD)(`SEARCH "${query.replaceAll("\"", "'")}"`);
    (0, tools_1.registerTools)(server, result.map(toToolDefinition));
    return result;
};
exports.findTrips = findTrips;
const applyTripsTool = (server) => {
    server.tool("find_trips", { query: zod_1.z.string() }, async ({ query }) => {
        const result = await (0, exports.findTrips)(server, query);
        return {
            content: [
                {
                    type: "text",
                    text: JSON.stringify(result),
                },
            ],
        };
    });
};
exports.applyTripsTool = applyTripsTool;
//# sourceMappingURL=trips.js.map