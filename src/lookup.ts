import {
  McpServer,
  ResourceTemplate,
} from "@modelcontextprotocol/sdk/server/mcp.js";

import { runLSD } from "./lsd";

const lookupTrips = async (identifier: string) => {
  if (["me", "@me"].includes(identifier)) {
    const results = await runLSD(`SEARCH @me`);
    return results;
  } else if (identifier.includes("@")) {
    const results = await runLSD(`SEARCH ${identifier}`);
    return results;
  } else {
    const results = await runLSD(`SEARCH @${identifier}`);
    return results;
  }
};

export const applyLookupResource = (server: McpServer) => {
  server.resource(
    "lookup",
    new ResourceTemplate("lsd://{user}", { list: undefined }),
    async (uri, { user }) => {
      const result = await lookupTrips(Array.isArray(user) ? user[0] : user);

      return {
        contents: [
          {
            uri: uri.href,
            text: JSON.stringify(result),
          },
        ],
      };
    },
  );
};
