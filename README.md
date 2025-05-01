# LSD MCP

This is the updated MCP server for [LSD](https://lsd.so). The reason behind this update is to effectively leverage dynamic tools that are defined as [trips](https://lsd.so/docs/database/language/types/keywords/according).

## Contents

* [Getting started](#getting-started)
  * [Authenticating](#authenticating)
	* [Configuration file](#configuration-file)
	* [Environment variables](#environment-variables)
  * [Using an MCP registry](#using-an-mcp-registry)
  * [From source](#from-source)
* [Example of usage](#example-of-usage)
  * [Interaction](#interaction)
  * [Extraction](#extraction)
* [Extending capabilities with LSD](#extending-capabilities-with-lsd)
  * [From the bicycle browser](#from-the-bicycle-browser)
  * [Using the language](#using-the-language)
* [Extending capabilities with TypeScript](#extending-capabilities-with-typescript)

## Getting started

### Authenticating

This is to connect the running MCP server with [your account](https://lsd.so/profile) by using [our SDK](https://github.com/lsd-so/internetdata/?tab=readme-ov-file#authenticating).

The reason for using the terms `user` and `password` is because what you're connecting to is our [postgres compatible database](https://lsd.so/docs/database/postgres/postgres-compatible).

#### Configuration file

In your home directory, write a JSON to a file named `.lsd` with the properties `user` and `password` with your email and an [API key](https://lsd.so/docs/database/connect/authenticating) from [your profile](https://lsd.so/profile).

```JSON
{
  "user": "<you@email.domain>",
  "password": "<api_key>"
}
```

#### Environment variables

Alternatively, you can set the environment variables `LSD_USER` and `LSD_PASSWORD`.

```bash
$ export LSD_USER='you@email.domain'
$ export LSD_PASSWORD='<api_key>'
```

**Important:** If you run into errors when taking this approach, check the environment variables set are accessible from the PATH or process the MCP client is invoking it from.

### Using an MCP registry

Coming soon.

### From source

1. Clone this repository

```bash
$ git clone https://github.com/lsd-so/mcp.git
```

2. If you're using [Claude desktop](https://claude.ai/download), update your `claude_desktop_config.json` file ([here's a guide](https://modelcontextprotocol.io/quickstart/user#2-add-the-filesystem-mcp-server) for creating it).

```JSON
{
  "mcpServers": {
    // other MCP servers configured here...
    "lsd": {
      "command": "node",
      "args": [
	    "/<path>/<to>/mcp/build/index.js"
      ]
    }
  }
}
```

## Example of usage

### Interaction

![Screen recording of using the `lsd_research` prompt](media/lsd_research_interaction.gif)

### Extraction

![Screen recording of using the `lsd_research` prompt](media/lsd_research_claude.gif)

## Extending capabilities with LSD

For scenarios where you'd like to teach the MCP client a "skill", you can do so with an [LSD trip](https://lsd.so/docs/database/trips). Ultimately, a "trip" is a [published module](https://docs.npmjs.com/about-npm) consisting of an LSD program whether it was derived by [interacting with our local browser](#from-the-bicycle-browser) or by [directly publishing a trip](#directly-publishing-a-trip).

### From the bicycle browser

From the Bicycle browser you can derive LSD by using our "click language", this can be activated by clicking on the transcriber icon in the top right:

![Screen recording of clicking on the transcriber icon](media/transcriber_activate.gif)

Or by pressing `Command+k` (or `Ctrl+k` for Linux/Windows). Once you've done so, you can interactively "pluck" repeating containers as well as fields of interest:

![Screen recording of the transcriber flow](media/transcriber.gif)

With the generated LSD, you can edit the aliases like so:

![Screen recording of editing LSD code](media/aliasing.gif)

After which you can publish [using the languege](#using-the-language).

### Using the language

From the workbench, simply edit to publish a trip.

![A screen recording of filling out trip details](media/save_to_trip.gif)

## Extending capabilities with TypeScript
