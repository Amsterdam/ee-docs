# Engineering Enablement Docs

This is an example application of Docusaurus. The Markdown files in the `docs` directory are copied from the [amsterdam/development-standards project](https://github.com/Amsterdam/development-standards) as examples.

There are also two `mdx` files created to show off code snippets from an imported test React component and an embedded React Component.

## Docusaurus

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ npm i
```

### Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true npm run deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
