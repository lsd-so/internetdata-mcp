"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyRunTool = void 0;
const zod_1 = require("zod");
const lsd_1 = require("./lsd");
const applyRunTool = (server) => {
    server.tool("run_lsd", { code: zod_1.z.string() }, async ({ code }) => {
        const result = await (0, lsd_1.runLSD)(code);
        return {
            content: [{
                    type: "text",
                    text: JSON.stringify(result)
                }],
        };
    });
};
exports.applyRunTool = applyRunTool;
//# sourceMappingURL=run.js.map