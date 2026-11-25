# Linting and formatting
Linting is a form of [static analysis](https://en.wikipedia.org/wiki/Static_program_analysis). It will check our code without executing it, based on sets of rules. It can warn us about things like unused variables or imports, but also check things like the coding style. Formatters however, will modify the code to follow the rule sets of the coding style.

We do this to prevent bugs, but also to have as little deviation in the way our code is written, as possible.

## What is the standard?

### Python
For Python projects the standard is to use [Ruff](https://docs.astral.sh/ruff/).
We can configure it to use all rules and then add exceptions for rules that we disagree with:
```toml
# pyproject.toml
[tool.ruff.lint]
select = ["ALL"]
```
example with exceptions:
```toml
[tool.ruff.lint]
select = ["ALL"]
ignore = ["CPY001", "D100", "D101", "D102", "D103", "D104", "D105", "D107", "D401"]
```

## When and for whom is this standard?
This standard applies to all projects of vakgroep softwareontwikkeling. Existing projects can migrate using this guide: https://pydevtools.com/handbook/how-to/how-to-replace-black-isort-flake8-pyupgrade-with-ruff/.

## How to apply this standard?
Install [Ruff](https://docs.astral.sh/ruff/) as a dev dependency and configure as outlined in the section above.
Make sure to run it in the CI process and that pull request checks fail if [Ruff](https://docs.astral.sh/ruff/) finds any issues.

## Considerations
We have considered other tools, like [Black](https://pypi.org/project/black/), [isort](https://pypi.org/project/isort/), [Flake8](https://pypi.org/project/flake8/), however [Ruff](https://docs.astral.sh/ruff/) combines the functionality of these tools in one tool, which on top of that, is much faster and efficient to run.
