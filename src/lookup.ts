import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";

export const applyLookupResource = (server: McpServer) => {
  server.resource(
    "lookup",
    new ResourceTemplate("lsd://{user}", { list: undefined }),
    async (uri, { user }) => {
      console.log("Here is where we are going to be looking up for <user>'s trips");

      return {
        contents: [{
          uri: uri.href,
          text: `Resource echo: ${user}`
        }]
      }
    }
  );
}
