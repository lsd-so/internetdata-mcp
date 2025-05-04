import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

import { applyBraveTool } from "./brave";
import { applyDocsResource } from "./docs";
import { applyHuxleyPrompt } from "./huxley";
import { applyLookupResource } from "./lookup";
import { server } from "./mcp";
import { applyResearchPrompt } from "./prompt";
import { applyRunTool } from "./run";
import { applyTripsTool } from "./trips";

applyDocsResource(server);
applyLookupResource(server);
applyBraveTool(server);
applyRunTool(server);
applyTripsTool(server);
applyResearchPrompt(server);
applyHuxleyPrompt(server);

(async function () {
  await server.connect(new StdioServerTransport());
})();
