# Dependency management
A typical application or library will have dependencies that it depends on. There are several
ways to manage which dependencies and versions of those dependencies will be installed.
Of course the preferred way would be to use a dependency management tool, however for NodeJS
and Python projects for example, there are several different dependency management tools available.

This standard describes which dependency management tool to use.

## What is the standard?
Since different environments (language, framework, ...) require different tools we will have a
standard per environment.

### Python
Historically, there have been multiple ways to manage dependencies in Python for a long time.
Some of these ways are still in use in the organization, for example using `pip`, `pip-tools` or
even `setuptools`.

Not too long ago however, a large part of the community decided to move towards other ways like
`Poetry`, `Hatch`, `PDM`, `uv`, etc... A big reason for that is most likely that
[PEP-621](https://peps.python.org/pep-0621/) came out and provided a standard to specify
dependencies in the `pyproject.toml` file instead of in one or more `requirements.txt` type files.

After trying several of these tools, we settled on using [uv](https://docs.astral.sh/uv/). It
provides us with a very fast tool written in Rust and all the convenience we need by providing
container images with `uv` pre-installed, an easy way to initialize new projects, easy to use
`venv` support, building and publishing support, etc...

## When and for whom is this standard?
This standard applies to all Python based projects of vakgroep softwareontwikkeling.

## How to apply this standard?
### Existing projects
If the project does not yet use `uv` to manage its dependencies, then the project should be
converted to use it. This can be done by creating or modifying the `pyproject.toml` file and
following the specified directory structure. See
[the official docs](https://docs.astral.sh/uv/guides/projects/#project-structure) for more
information on what that should look like.
### New projects
New projects should be setup using `uv`, more information on how that works can be found in the
[official documentation](https://docs.astral.sh/uv/guides/projects/#creating-a-new-project). More
information on how to combine this with the use of containers can be found
[here](https://docs.astral.sh/uv/guides/integration/docker/).
### CI/CD
For our CI/CD in the GitHub actions workflows, there is a integration available in the form of a
reusable action. See the [docs](https://docs.astral.sh/uv/guides/integration/github/) for more
information. Use it where appropriate.
### Dependabot
Dependabot has support for `uv` to keep our dependencies up-to-date. The
[official docs](https://docs.astral.sh/uv/guides/integration/dependabot/) describe how to configure
dependabot for `uv` based projects.

## Considerations
When using a new tool it is always a good idea to get acquainted with it first. If you've never used
a chain saw before, it's probably not the best idea to immediately start trying to cut down the
biggest trees you can find. The same goes for any tool. Study the documentation, perform some simple
tasks, build your way up to more complicated tasks.

Don't complicate things that do not need complexity, if the default setup works, why change it?
