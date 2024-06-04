# Using Git
> This page was last reviewed May 14th, 2024. It needs to be reviewed again on February 14th, 2025.

## What is the standard for using Git?
The city of Amsterdam uses Git to push its code to GitHub.
The city of Amsterdam maintains minimal requirements for the work flow, branches and commits.    

## When and for whom is this standard applicable?
This standard applies to all developers.<br/>
This standard must be applied to all new projects of the city of Amsterdam (new since June 2024).

## What is required?
### work flow
- [ ] Utilise the branch 'main' as a stable production-ready version of your project. Utilise the branch 'develop' as the integration branch for features and bug fixes.
- [ ] Set up and document your team work flow. We recommend using [Git Flow](https://www.gitkraken.com/learn/git/git-flow) but other work flow are available. See [the recommendations below](#what-is-recommended) for options. As part of your work flow you must do up the following:
  - [ ] Set `develop` as the default branch and set the branch protection rules as follows:
    - [ ] Enable "Require a pull request before merging"
    - [ ] Enable "Require approvals"
    - [ ] Set "Required number of approvals before merging" to at least 1. 
  - [ ]  Create a new branch every time you're implementing a feature, bug fix or other task.
  - [ ] Test before you push.

### branches
- [ ] Branch names must must 
  - [ ] prefix with either 
    - [ ] feature
    - [ ] chore
    - [ ] bugfix
    - [ ] hotfix
    - [ ] docs
  - [ ] contain a ticket number that references the PBI (product backlog item) if applicable
  - [ ] contain a short name to indicate the branch purpose


### commits
- [ ] Commit messages must quickly convey what a change is supposed to do and why it was necessary.
- [ ] Never commit generated files, dependencies or local configuration files unless there is a good reason.   
- [ ] A commit message consists of two parts: a title and the description. 
  - [ ] Title: describes what changed.
  - [ ] Description: describes why this change is needed.

## What is recommended?
- [ ] Recommended alternatives to Git Flow include the [GitLab workflow](https://docs.gitlab.com/ee/topics/gitlab_flow.html) and [Trunk based development](https://www.atlassian.com/continuous-delivery/continuous-integration/trunk-based-development).
  Trunk-based development should only be used when Continuous Integration is in place and code can be deployed at any time it is merged.
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
please refer to this [blog post](https://initialcommit.com/blog/git-commit-messages-best-practices)

## Acknowledgements
Many thanks to [Hee Chan van der Haar](https://github.com/hcvdhaar) and [Sirée Koolen-Wijkstra](https://github.com/SireeKoolenWijkstra)

