# Markdown rules

This application uses <a href="https://docusaurus.io/" target="_blank">Docusaurus</a>, which creates documentation pages from `.md` (Markdown) and `.mdx` (<a href="https://mdxjs.com/" target="_blank">Markdown + JSX</a>) files. Docusaurus compiles each type into a React component. However, if during compilation it encounters invalid markup or markup it is unsure of, the compiler will stop and return an error.

Therefore, it is a requirement that Markdown files are properly formatted otherwise this application can crash. When running the import script in this application, it will attempt to compile each Markdown file to ensure there are no errors present otherwise the file will be skipped.

Documentation and various tools that can assist in validation markdown content:

- <a href="https://docusaurus.io/docs/markdown-features" target="_blank">Docusaurus markdown features</a>
- <a href="https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax" target="_blank">GitHub has several in-depth pages regarding Markdown, formatting, syntax and advanced usage.</a>
- <a href="https://commonmark.org/help/" target="_blank">Markdown basics and 10 minute tutorial</a>
- <a href="https://mdxjs.com/playground/" target="_blank">MDX Playground</a>
    *Here you can toggle between `Input format` as `MDX` or `markdown` to test Markdown compilation*
