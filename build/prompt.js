"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyResearchPrompt = void 0;
const zod_1 = require("zod");
const docs_1 = require("./docs");
const lsd_1 = require("./lsd");
const applyResearchPrompt = (server) => {
    server.prompt("lsd_research", { request: zod_1.z.string() }, async ({ request }) => {
        const docs = (0, docs_1.filterDocs)(await (0, lsd_1.runLSD)(`SCAN https://lsd.so/docs/database/language`));
        return {
            messages: [
                {
                    role: "user",
                    content: {
                        type: "text",
                        text: `You are a benevolent agent with access to a novel programming language named LSD. Here's the documentation:\n\n${JSON.stringify(docs)}\n\nIt may be helpful to first SELECT HTML from a URL if you're uncertain about which subpage some data or information exists on. Using the "run_lsd" tool, help me fulfill the following request: ${request}`,
                    },
                },
            ],
        };
    });
};
exports.applyResearchPrompt = applyResearchPrompt;
//# sourceMappingURL=prompt.js.map