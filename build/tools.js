"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.disableTool = exports.getTools = exports.registerTools = void 0;
const RegisteredTools = {};
const registerTool = (server, name, description, tool) => {
    RegisteredTools[name] = server.tool(name, description, tool);
};
const toolExists = (name) => {
    return Object.keys(RegisteredTools).includes(name);
};
const STANDARD_TOOLS = [
    "run_lsd", // To execute codegen'ed LSD
    "find_trips", // To leverage LSD trips with dynamic tools
    "brave_search", // To perform basic SERP
];
const registerTools = (server, tools) => {
    // console.log("We got a request to work with the following tools")
    // console.log(tools);
    tools.forEach((tool) => {
        if (!STANDARD_TOOLS.includes(tool.name)) {
            if (toolExists(tool.name)) {
                (0, exports.disableTool)(tool.name);
                delete RegisteredTools[tool.name];
            }
            registerTool(server, tool.name, tool.description, tool.tool);
        }
    });
};
exports.registerTools = registerTools;
const getTools = () => {
    return Object.keys(RegisteredTools);
};
exports.getTools = getTools;
const disableTool = (name) => {
    RegisteredTools[name].disable();
    RegisteredTools[name].remove();
};
exports.disableTool = disableTool;
//# sourceMappingURL=tools.js.map