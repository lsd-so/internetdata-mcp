import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { runLSD } from "./lsd";

const filterDocs = (result: Array<Record<string, any>>) =>
  result.filter(
    (row) =>
      row["URL"] ===
        "https://lsd.so/docs/database/language/types/keywords/assignable/target" ||
      (![
        "https://lsd.so/docs/database/language/standard",
        "https://lsd.so/docs/database/language/sensitive_values",
        "https://lsd.so/docs/database/language/types/keywords/set",
        "https://lsd.so/docs/database/language/list-comprehension",
        "https://lsd.so/docs/database/language/exclamation-mark",
      ].includes(row["URL"]) &&
        !row["URL"].includes(
          "https://lsd.so/docs/database/language/types/keywords/assignable",
        )),
  );

export const getFilteredDocs = async () => {
  return filterDocs(await runLSD(`SCAN https://lsd.so/docs/database/language`));
};

export const applyDocsResource = (server: McpServer) => {
  server.resource("lsd_docs", "lsd://docs", async (uri, _) => {
    const result = getFilteredDocs();
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
