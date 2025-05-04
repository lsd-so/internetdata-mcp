import {
  McpServer,
  ToolCallback,
} from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

import { runLSD } from "./lsd";
import { registerTools } from "./tools";

const toToolDefinition = (
  row: Record<string, any>,
): { name: string; description: string; tool: ToolCallback } => {
  return {
    name: row["NAME"],
    description: row["DESCRIPTION"],
    tool: async () => {
      const result = await runLSD(row["STATEMENT"]);
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result),
          },
        ],
      };
    },
  };
};

export const findTrips = async (server: McpServer, query: string) => {
  const result = await runLSD(`SEARCH "${query.replaceAll("\"", "'")}"`);

  registerTools(server, result.map(toToolDefinition));
  return result;
};

export const applyTripsTool = (server: McpServer) => {
  server.tool("find_trips", { query: z.string() }, async ({ query }) => {
    const result = await findTrips(server, query);
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
