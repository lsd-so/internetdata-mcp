import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { z } from 'zod';

import { runLSD } from './lsd';

export const applyBraveTool = (server: McpServer) => {
  server.tool("brave_search", "Search Brave for possibly relevant links to a query", { query: z.string() }, async ({ query }) => {
    const result = await runLSD(`FROM https://search.brave.com?search?q=${encodeURIComponent(query)} |> G
ROUP BY div.snippet |> SELECT a@href AS result_link`);

    return {
      content: [{
        type: 'text',
        text: `Here are the results for searching on Brave for: ${query}\n\n${JSON.stringify(result)}`
      }]
    }
  })
}
