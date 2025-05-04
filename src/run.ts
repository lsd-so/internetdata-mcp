import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

import { runLSD } from "./lsd";

export const applyRunTool = (server: McpServer) => {
  server.tool("run_lsd", { code: z.string() }, async ({ code }) => {
    const result = await runLSD(code);

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
