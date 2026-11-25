# Browser Support

## What is the standard?

Our frontend and design-system code uses **[Baseline Widely Available](https://web.dev/baseline)** web features.

This means we build with features that have been available in all major browsers for at least 30 months.

## When and for whom is this standard applicable?

- This standard applies to all frontend developers.
- This standard applies to web applications and shared UI components.

## How to apply this standard?

Use the following lint plugins as the default and sufficient enforcement for this standard in CI and during local development.

This recommendation applies to both new applications and actively maintained applications.

- JavaScript and TypeScript:
  - [eslint-plugin-baseline-js](https://www.npmjs.com/package/eslint-plugin-baseline-js)
- CSS:
  - [stylelint-plugin-use-baseline](https://www.npmjs.com/package/stylelint-plugin-use-baseline)

Both plugins use feature data from [web-features](https://github.com/web-platform-dx/web-features). Check out the [following guide](https://baselinejs.vercel.app/docs#recommended-typescript--typeaware) for a TypeScript friendly implementation.

You do not need to maintain explicit browser-version targets for this standard.
If a project uses Browserslist for other tooling needs, that is optional and project-specific.

## What if I need a newer feature?

If a feature is not in Baseline Widely Available:

- Use progressive enhancement or a fallback.
- Document the reason in the pull request.
- Discuss in the frontend guild.

## Why this approach?

- It keeps browser support simple and predictable.
- It avoids long browser-version matrices.
- It aligns with the [Amsterdam Design System](https://designsystem.amsterdam) policy.

## Further reading

- [Baseline](https://web.dev/baseline/)
- [web-features](https://github.com/web-platform-dx/web-features)
- [eslint-plugin-baseline-js](https://www.npmjs.com/package/eslint-plugin-baseline-js)
- [stylelint-plugin-use-baseline](https://www.npmjs.com/package/stylelint-plugin-use-baseline)
