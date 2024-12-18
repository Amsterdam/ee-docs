# Updating Docusaurus

>
> !! This is a work in process !!
>

1. Check the latest version on npm: https://www.npmjs.com/package/@docusaurus/core
2. Check the latest release post: https://docusaurus.io/blog/releases/3.6 for any manual steps or necessary changes
3. Open `package.json` and update any relevant `@docusaurus` modules in `dependencies` `devDependencies`
4. Run `npm i` to install the version changes
5. `npm run build` generates a production bundle - this is often where errors will be shown. The same errors that occur here do not always happen in `npm run start` mode.
   1. Swizzled components are often the source of this
   2. 
6. `npm run serve` this will ...