"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyHuxleyPrompt = void 0;
const zod_1 = require("zod");
const docs_1 = require("./docs");
const trips_1 = require("./trips");
const applyHuxleyPrompt = (server) => {
    server.prompt("huxley", { request: zod_1.z.string() }, async ({ request }) => {
        const filteredDocs = await (0, docs_1.getFilteredDocs)();
        const relevantTrips = await (0, trips_1.findTrips)(server, request);
        return {
            messages: [
                {
                    role: "user",
                    content: {
                        type: "text",
                        text: `You are an intelligent agent with access to a novel programming language named LSD as well as published packages in this language referred to as \"trips\". Here's the documentation:\n\n${JSON.stringify(filteredDocs)}\n\nIt may be helpful to first SELECT HTML from a URL if you're uncertain about which page some data or information exists on. Additionally, this could be helpful for when there is not already a trip defined for the request made by the user.\n\nWhen the user requests something be done with the local browser, be sure to assigned "TARGET" to be "BROWSER".\n\nHere are some trips that you can call as tools:\n\n${JSON.stringify(relevantTrips)}\n\nRefresh the tools available before proceeding and use an available tool other than "run_lsd" if its description matches the request. Help me fulfill the following request: ${request}`,
                    },
                },
            ],
        };
    });
};
exports.applyHuxleyPrompt = applyHuxleyPrompt;
//# sourceMappingURL=huxley.js.map