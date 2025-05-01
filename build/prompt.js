"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applySimplePrompt = void 0;
const zod_1 = require("zod");
const applySimplePrompt = (server) => {
    server.prompt("simple", { request: zod_1.z.string() }, ({ request }) => {
        return {
            messages: [{
                    role: "user",
                    content: {
                        type: "text",
                        text: `Here's a simple request: ${request}`
                    }
                }]
        };
    });
};
exports.applySimplePrompt = applySimplePrompt;
//# sourceMappingURL=prompt.js.map