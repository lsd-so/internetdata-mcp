import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

import { getFilteredDocs } from "./docs";
import { findTrips } from "./trips";

export const applyHuxleyPrompt = (server: McpServer) => {
  server.prompt("huxley", { request: z.string() }, async ({ request }) => {
    const filteredDocs = await getFilteredDocs();
    const relevantTrips = await findTrips(server, request);

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
