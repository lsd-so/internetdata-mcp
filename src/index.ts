import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

import { applyLookupResource } from "./lookup";
import { server } from "./mcp";
import { applyRunTool } from "./run";
import { applyResearchPrompt } from "./prompt";
import { applyDocsResource } from "./docs";

applyDocsResource(server);
applyLookupResource(server);
applyRunTool(server);
applyResearchPrompt(server);

(async function () {
  await server.connect(new StdioServerTransport());
})();
