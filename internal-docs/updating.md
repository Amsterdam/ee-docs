# Updating Docusaurus

1. Check the latest version on npm: https://www.npmjs.com/package/@docusaurus/core
2. Check the latest release post: https://docusaurus.io/blog/releases/3.6 for any manual steps or necessary changes
3. Open `package.json` and update any relevant `@docusaurus` modules in `dependencies` and `devDependencies`
4. Run `npm i` to install the version changes
5. Now we need to test that things still compile and run
   1. `npm run start` should setups a live reload development server without errors.
   2. `npm run build` generates a production bundle. If this runs without outputting errors then it looks like the update was successful. You can verify this by running `npm run serve` to setup a local server at `https://localhost:3000` with the built files.
   3. `npm run test` still returns 100% success.

## Handling errors

Sometimes errors occur because code has changed in a component that has been [swizzled](https://docusaurus.io/docs/swizzling). This error is often not noticeable with the `npm run start` command but it will throw errors with `npm run build`.

Debugging this can sometimes be quite time-consuming, as it involves comparing [our swizzled theme files](https://github.com/Amsterdam/ee-docs/tree/develop/src/theme) (component files in `src/theme`) to the [production theme files](https://github.com/facebook/docusaurus/tree/main/packages/docusaurus-theme-classic/src/theme) to identify possible breaking differences.

[Here](https://github.com/Amsterdam/ee-docs/pull/42) is an example PR of a previous fix.
