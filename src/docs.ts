import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { runLSD } from "./lsd";

export const applyDocsResource = (server: McpServer) => {
  server.resource("lsd_docs", "lsd://docs", async (uri, _) => {
    const result = await runLSD(`SCAN https://lsd.so/docs`);
    return {
      contents: [
        {
          uri: uri.href,
          text: JSON.stringify(result),
        },
      ],
    };
  });
};
