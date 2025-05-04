"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyResearchPrompt = void 0;
const zod_1 = require("zod");
const docs_1 = require("./docs");
const applyResearchPrompt = (server) => {
    server.prompt("lsd_research", { request: zod_1.z.string() }, async ({ request }) => {
        const docs = await (0, docs_1.getFilteredDocs)();
        return {
            messages: [
                {
                    role: "user",
                    content: {
                        type: "text",
                        text: `You are a benevolent agent with access to a novel programming language named LSD. Here's the documentation:\n\n${JSON.stringify(docs)}\n\nIt may be helpful to first SELECT HTML from a URL if you're uncertain about which page some data or information exists on. When the user requests something be done with the local browser, be sure to assign "TARGET" to be "BROWSER".\n\nUsing the "run_lsd" tool, help me fulfill the following request: ${request}`,
                    },
                },
            ],
        };
    });
};
exports.applyResearchPrompt = applyResearchPrompt;
//# sourceMappingURL=prompt.js.map