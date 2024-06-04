# Engineering Enablement Docs

Team responsible: Engineering Enablement team

This is [Docusaurus](https://docusaurus.io/) application. The Markdown files in the `docs` directory are imported from the [amsterdam/development-standards project](https://github.com/Amsterdam/development-standards).

## Aims of this repo

This repository strives to offer a comprehensive overview of the standards presently utilized within the developer community at the municipality of the city of Amsterdam. Additionally, it encompasses a summary of both rejected and under-review standards. You can access the overview by following this link.

## How to use this repo?

Within the `docs/general` directory, you will find descriptions of standards that apply regardless of whether you identify as a back- or frontend developer. In the `backend` and `frontend` directories, you can locate standards specifically tailored for each respective group of developers.

If a standard is labeled as a recommendation, it indicates that it is not widely embraced by our developer community.

## How to contribute to this repo?

If you would like to include additional standards, please refer to the manual for instructions on implementing new standards. (TODO: Create a link to the implementation page of standards.) If you have any other matters to bring to our attention, you can contact us via Slack (#engineering-enablement) or Teams (DV - Engineering Enablement).

## Docusaurus

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```bash
npm run
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
