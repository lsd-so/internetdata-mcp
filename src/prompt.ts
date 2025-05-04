import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

import { getFilteredDocs } from "./docs";

export const applyResearchPrompt = (server: McpServer) => {
  server.prompt(
    "lsd_research",
    { request: z.string() },
    async ({ request }) => {
      const docs = await getFilteredDocs();

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
    },
  );
};
