import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

import { applyLookupResource } from "./lookup";
import { server } from "./mcp";
import { applyRunTool } from "./run";
import { applySimplePrompt } from "./prompt";
import { applyDocsResource } from "./docs";

applyDocsResource(server);
applyLookupResource(server);
applyRunTool(server);
applySimplePrompt(server);

(async function () {
  await server.connect(new StdioServerTransport());
})();
