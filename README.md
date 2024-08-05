# Engineering Enablement Docs

Team responsible: Engineering Enablement team

This is [Docusaurus](https://docusaurus.io/) application. The Markdown files in the `docs` directory are imported from the [amsterdam/development-standards project](https://github.com/Amsterdam/development-standards).

## Aims of this repo

This repository strives to offer a comprehensive overview of the standards presently utilized within the developer community at the municipality of the city of Amsterdam. Additionally, it encompasses a summary of both rejected and under-review standards. You can access the overview by following this link.

## How to use this repo?

Within the `docs/general` directory, you will find descriptions of standards that apply regardless of whether you identify as a back- or frontend developer. In the `backend` and `frontend` directories, you can locate standards specifically tailored for each respective group of developers.

If a standard is labeled as a recommendation, it indicates that it is not widely embraced by our developer community.

## How to contribute to this repo?

If you would like to include additional standards, please refer to the [manual for instructions on implementing new standards](https://developers.amsterdam/docs/general/project-documentation). If you have any other matters to bring to our attention, you can contact us via Slack (#engineering-enablement) or Teams (DV - Engineering Enablement).

### Markdown rules

This application uses <a href="https://docusaurus.io/" target="_blank">Docusaurus</a>, which creates documentation pages from `.md` (Markdown) and `.mdx` (<a href="https://mdxjs.com/" target="_blank">Markdown + JSX</a>) files. Docusaurus compiles each type into a React component. However, if during compilation it encounters invalid markup or markup it is unsure of, the compiler will stop and return an error.

Therefore, it is a requirement that Markdown files are properly formatted otherwise this application can crash. When running the import script in this application, it will attempt to compile each Markdown file to ensure there are no errors present otherwise the file will be skipped.

Documentation and various tools that can assist in validation markdown content:

- <a href="https://docusaurus.io/docs/markdown-features" target="_blank">Docusaurus markdown features</a>
- <a href="https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax" target="_blank">GitHub has several in-depth pages regarding Markdown, formatting, syntax and advanced usage.</a>
- <a href="https://commonmark.org/help/" target="_blank">Markdown basics and 10 minute tutorial</a>
- <a href="https://mdxjs.com/playground/" target="_blank">MDX Playground</a>
    *Here you can toggle between `Input format` as `MDX` or `markdown` to test Markdown compilation*

### Markdown metadata

Docusaurus uses '[Front matter](https://docusaurus.io/docs/markdown-features#front-matter)' to override common template metadata, for example, page titles, OG meta data and more. A full list is available [here](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter).

## Docusaurus

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```bash
npm i
```

### Local Development

```bash
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Import documentation

```bash
npm run import-docs
```

This command downloads the latest markdown files from the [development-standards](https://github.com/Amsterdam/development-standards) repository. By default this will save documentation in the `docs` directory; to customize this you can pass as argument of the desired path after the `import-docs` command.

### Deployment

Using SSH:

```bash
USE_SSH=true npm run deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
