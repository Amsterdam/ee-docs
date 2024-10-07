# Deploying

Deploying the application is straightforward and uses a Docusaurus command, which offers a convenient way to build the website and push to the `gh-pages` branch.

## TODOs

Currently in this `ee-docs` application, deployments could be improved with:

- [ ] release versioning
- [ ] [deployment automation](https://docusaurus.io/docs/deployment#triggering-deployment-with-github-actions).

## How to deploy

Ensure you are [authenticated with GitHub via command-line](https://docusaurus.io/docs/deployment#deploy)

1. Merge all the latest completed changes from the `develop` branch to `main`
2. Run the command `npm run deploy`

## GitHub authentication options

You can use the following commands to switch between SSH for GitHub authentication:

Using SSH:

```bash
USE_SSH=true npm run deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> npm run deploy
```
