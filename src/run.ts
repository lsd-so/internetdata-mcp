import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from 'zod';

export const applyRunTool = (server: McpServer) => {
  server.tool(
    "run_lsd",
    { code: z.string() },
    async ({ code }) => {
      // Here is where we would be running the provided code
      return {
        content: [{
          type: "text",
          text: code
        }],
      }
    }
  )
}
