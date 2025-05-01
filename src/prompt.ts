import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

export const applySimplePrompt = (server: McpServer) => {
  server.prompt("simple", { request: z.string() }, ({ request }) => {
    return {
      messages: [
        {
          role: "user",
          content: {
            type: "text",
            text: `Here's a simple request: ${request}`,
          },
        },
      ],
    };
  });
};
