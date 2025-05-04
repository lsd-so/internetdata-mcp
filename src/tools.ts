import {
  McpServer,
  RegisteredTool,
  ToolCallback,
} from "@modelcontextprotocol/sdk/server/mcp.js";

const RegisteredTools: Record<string, RegisteredTool> = {};

const registerTool = (
  server: McpServer,
  name: string,
  description: string,
  tool: ToolCallback,
) => {
  RegisteredTools[name] = server.tool(name, description, tool);
};

const toolExists = (name: string): boolean => {
  return Object.keys(RegisteredTools).includes(name);
};

const STANDARD_TOOLS = [
  "run_lsd", // To execute codegen'ed LSD
  "find_trips", // To leverage LSD trips with dynamic tools
  "brave_search", // To perform basic SERP
];

export const registerTools = (
  server: McpServer,
  tools: Array<{ name: string; description: string; tool: ToolCallback }>,
) => {
  // console.log("We got a request to work with the following tools")
  // console.log(tools);

  tools.forEach((tool) => {
    if (!STANDARD_TOOLS.includes(tool.name)) {
      if (toolExists(tool.name)) {
        disableTool(tool.name);
        delete RegisteredTools[tool.name];
      }
      registerTool(server, tool.name, tool.description, tool.tool);
    }
  });
};

export const getTools = (): Array<string> => {
  return Object.keys(RegisteredTools);
};

export const disableTool = (name: string) => {
  RegisteredTools[name].disable();
  RegisteredTools[name].remove();
};
