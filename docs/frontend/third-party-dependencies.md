# Third Party Dependencies

> This page was last reviewed on July 8th, 2025. It needs to be reviewed again on April 8th, 2026.

Guidelines for choosing a third party package can be found in the [general third party dependencies documentation page](../general/third-party-dependencies.md).

## How can you secure front-end third-party integrations?

* Use modern browser features such as HTTPS, Content Security Policy (CSP), Subresource Integrity (SRI).
  * use [HTTPS (Hypertext Transfer Protocol Secure)](https://developer.mozilla.org/en-US/docs/Glossary/HTTPS) for all your web traffic, including the requests and responses from third-party services. HTTPS encrypts the data in transit, preventing eavesdropping, tampering, or spoofing.
  * [CSP (Content Security Policy)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP), a browser security feature that allows you to specify what is allowed on your website, such as scripts, styles, images and fonts. CSP can help prevent cross-site scripting (XSS) attacks, which can inject malicious code into your web pages through third-party integrations.
  * [Subresource Integrity (SRI)](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity), a browser security feature that enables browsers to verify that the resources they fetch (for example, from a CDN) are delivered without unexpected manipulation.
* Monitor and audit your integrations.
  * Monitoring means keeping track of the performance, availability and errors of your integrations, using tools like logs, alerts, dashboards and reports. For example, [Azure Monitor](https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview).
  * Auditing means reviewing the security and compliance of your integrations, using tools like scanners, analyzers and testers. For example, [GitHub Dependabot](https://docs.github.com/en/code-security/getting-started/dependabot-quickstart-guide), [NPM audit](https://docs.npmjs.com/cli/v10/commands/npm-audit) and [Snyk](https://snyk.io/).
* Update and review your integrations (ideally annually).
  * Updating means applying the latest patches and fixes.
  * Reviewing means evaluating the quality, reliability and necessity.

## Recommended third-party packages

Maintaining a list of third-party frontend packages is too complex, therefore, we have reduced our recommendations to project build tools previously used by Gemeente Amsterdam projects.

* [Vite](https://github.com/vitejs/vite) - Next Generation Frontend Tooling
  * [Vite community templates](https://github.com/vitejs/awesome-vite#templates) - Vite based project templates
* [esbuild](https://esbuild.github.io/) - Next Generation Frontend Tooling

You may also be interested in [Languages and Frameworks (frontend)](./languages-and-frameworks.md).
