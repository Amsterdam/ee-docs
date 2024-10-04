# Using Git
> This page was last reviewed May 14th, 2024. It needs to be reviewed again on February 14th, 2025.

## What is the standard for using Git?
The city of Amsterdam uses Git to push its code to GitHub.
The city of Amsterdam maintains minimal requirements for the work flow, branches and commits.    

## When and for whom is this standard applicable?
This standard applies to all developers.<br/>
This standard must be applied to all new projects of the city of Amsterdam (new since June 2024).

## What is required?
### Work flow
- [ ] Utilise the branch 'main' as a stable production-ready version of your project. Utilise the branch 'develop' as the integration branch for features and bug fixes.
- [ ] Set up and document your team work flow. As part of your work flow you must do the following:
  - [ ] Set `develop` as the default branch and set the branch protection rules as follows:
    - [ ] Enable "Require a pull request before merging".
    - [ ] Enable "Require approvals".
    - [ ] Set "Required number of approvals before merging" to at least 1. 
  - [ ]  Create a new branch every time you're implementing a feature, bug fix or other task.
  - [ ] Test before you push.

### Branches
- [ ] Branch names must include 
  - [ ] a prefix, which can be either: 
    - [ ] feature,
    - [ ] chore,
    - [ ] bugfix,
    - [ ] hotfix or
    - [ ] docs.
  - [ ] a ticket number that references the PBI (product backlog item) if applicable.
  - [ ] a short name to indicate the branch purpose.

### Commits
- [ ] Commit messages must quickly convey what a change is supposed to do and why it was necessary. In the [What is recommended](#what-is-recommended) section some best practices are described. 
- [ ] A commit message must at least contain a title and a description. A title describes what's changed, a description describes why the change is needed.
- [ ] Never commit generated files, dependencies or local configuration files unless there is a good reason.

## What is recommended?
- [ ] The recommended team work flows for using Git are [GitLab workflow](https://docs.gitlab.com/ee/topics/gitlab_flow.html), [Git Flow](https://www.gitkraken.com/learn/git/git-flow) or [Trunk based development](https://www.atlassian.com/continuous-delivery/continuous-integration/trunk-based-development).
  Trunk-based development should only be used when Continuous Integration is in place and code can be deployed at any time it is merged.
- [ ] Discuss with your team how to manage your change- and release logs. [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary), together with [commitizen](https://commitizen-tools.github.io/commitizen/getting_started/) can be really helpful in creating clean crisp logs.
- [ ] Push often to ensure that your work is visible and not lost.
- [ ] Create a draft pull request to discuss the progress on the current task.
- [ ] Create the same branch protection rules as for the 'main' and 'develop' branch for each long-lived environment branch:
  - [ ] Enable "Require a pull request before merging"
  - [ ] Enable "Require approvals"
  - [ ] Set "Required number of approvals before merging" to at least 1.
- [ ] Commits should be atomic, meaning that it contains only one change. It could be multiple files, but it's a single change. 
- [ ] Commit early and often.

## What to avoid?
- [ ] Never commit sensitive information such as passwords, personal data or API keys.

## Further reading
For more information on commits,
please refer to this [blog post](https://initialcommit.com/blog/git-commit-messages-best-practices) [and this blog](https://cbea.ms/git-commit/)

## Acknowledgements
Many thanks to [Hee Chan van der Haar](https://github.com/hcvdhaar) and [Sirée Koolen-Wijkstra](https://github.com/SireeKoolenWijkstra)

