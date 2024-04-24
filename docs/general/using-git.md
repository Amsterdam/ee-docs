# Using Git
Also see [storing source code](storing-source-code.md).

## Branching
Always use a new branch for a feature, bug fix or other task. 

### Branch names
Branch names should be clear and preferably contain a ticket number that references the ticket or PBI (product backlog item). Always include a short name to indicate a branches purpose.

### Default branch
The default branch name should be `main`. 

When creating a new Github repository, `main` will be created automatically as its default branch. 

#### Renaming an existing branch
See Github's documentation on [renaming existing branches](https://github.com/github/renaming#renaming-existing-branches) if you want to rename your old default branch `master` to `main`. 

Before renaming the default branch consider the possible impact on:
- internal users.
- external users.
- CI/CD integrations.

### Branch protection

The main branch should be protected. Go to your repository settings on github and then branches to set them up:
- Branch name pattern: `main`
- Enable "Require a pull request before merging"
  - Enable "Require approvals"
  - Set "Required number of approvals before merging" to at least 1. 

_Note: in our new Github enterprise environment these branch protection rules will be enforeced._

If you use the GitLab flow (see workflows below), create the same branch protection rules for each long-lived environment branch. 

This configuration enforces that all code in main has been reviewed by at least one person other then the other. 

In some teams this might cause issues when there is no one available to review pull requests. In that case search for colleagues outside of your team. Disabling these protection rules is not the right solution.

For more on protected branches see [Githubs documentation](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches).

## Commits
Commit messages encompass the history of the project. It is important to write proper commit messages in order to quickly understand what a change is/was supposed to do and also why it was necessary.

Commits should be atomic, meaning that it contains only one change. It could be multiple files, but it's a single change. Commit early and often.

In general never commit generated files, dependencies or local configuration files. 

A commit message consists of two parts: a title and the description. 
- Title: describes what changed.
- Description: describes why this change is needed.

Writing good commit messages is not a recommendation, but a must!

For more information on this topic, please refer to this [blog post](https://initialcommit.com/blog/git-commit-messages-best-practices)
for example. Surely there are many more sources available that state similar information.


## Workflow
In order to collaborate well on contributing to the same codebase, it is highly recommended to use a specific workflow using branches. Make sure to reach consensus in your team on what workflow is being used.

A lot of thought and experience has already been put into coming up with these workflows. Of course, it is possible to deviate from their standard specifications if absolutely necessary, although this should be rare.

Recommended are:
- [GitLab workflow](https://docs.gitlab.com/ee/topics/gitlab_flow.html) (recommended)
- [Trunk based development](https://www.atlassian.com/continuous-delivery/continuous-integration/trunk-based-development)

When choosing either of these workflows, please consider if and how the code will be deployed. If it is possible to do _Continuous Integration_, and it is possible to deploy at any time code is merged (obviously after going through the process of review and testing) then it may be a good choice to go for the Trunk based development
workflow.

However, when dealing with multiple environments and limited control over the deployment window, it would be a much better choice to go for the GitLab workflow. This will likely be the case for many of our projects when working with the OTAP environments and going through testing and user acceptance phases.


## Pushing
Preferably push early and often, but of course only to feature branches.  

That way changes will be available in the upstream repository and they will be available for others to see. Should anything happen to a machine or local repository, the changes will not be lost.

Do not directly push to long lived branches, instead always make a pull request. It's also possible to make a draft pull request while work is still in progress on a branch. This can particularly be useful when discussing progress on the task that is being worked on.

Test before you push.
