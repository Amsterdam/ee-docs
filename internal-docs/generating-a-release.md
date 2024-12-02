# Generating a release

This project uses [Release it!](https://github.com/release-it/release-it) to automate versioning and utilizes [Commitizen](https://commitizen-tools.github.io/commitizen/) to generate consistent and meaningful changelogs.

There is a [demo repository](https://github.com/Amsterdam/ee-release-it-demo) available with an explanation and some [example flows](https://github.com/Amsterdam/ee-release-it-demo/blob/main/docs/example-flows.md).

## In short

In short:

* Features and bug fixes should be merged into `develop` with a [Commitizen friendly commit message](https://github.com/Amsterdam/ee-release-it-demo/tree/feature/release-branch-strategy?tab=readme-ov-file#conventional-commits).
* When generating a new release, a new branch `release/[branch-name]` should be created from `develop`. In GitHub this will trigger the [`Release` action](../.github/workflows/), which will run Release it! Then the branch can be merged to `main`.
* Don't forget to merge `main` back into `develop` when complete.
