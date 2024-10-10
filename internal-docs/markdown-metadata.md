# Markdown metadata

Docusaurus uses '[Front matter](https://docusaurus.io/docs/markdown-features#front-matter)' to override common template metadata, for example, page titles, OG meta data and more. A full list is available [here](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter).

So far internally, we are using the following properties:

* sidebar_position (in `docs/intro.md`)
* custom_edit_url (in `docs/projects/**.md`)

Be aware that in the current import setup, any metadata in imported markdown files (files in `frontend`, `general` and `projects`) will be overwritten.
