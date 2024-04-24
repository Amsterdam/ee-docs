# Storing source code
Also see [using git](using-git.md).

We use Git to store our source code. Git is a version control system of which Github is one of the largest providers of Git. Azure Repos and GitLab are other examples of provders. 

Using Git has multiple benefits:
- It allows us to be transparent when storing code publicly. 
- It makes collaboration easy.
- It provides version control, allowing us to track all changes to the repository. 

## Where to store your code
The following guidelines can be used to determine where and how to store your code:

### Github vs Azure Repos
1. **Infra-as-code** that is used to deploy infrastructure and/or applications to our Azure Public Cloud is always stored in Azure Repos, close to the pipelines that deploy the infra and/or applications.
    > The Cloudplatform (the team responsible for the Azure Cloud) requires infrastructure code to be private and stored on Azure Repos, allowing them to enforce authorization rules. 

    Note: this will change soon, when all infra-as-code will be stored in the private Github organization in our new Github Enterprise environment.

2. **All other code** should be stored in Github (https://www.github.com/amsterdam). 
    > By storing all other code in Github we improve the discoverability of our projects and it will improve transparancy for projects that should be public. 

### Public vs private
The main rule is simple: repositories should be public, unless they can't be. This improves transparancy and reusability.

TODO: define when projects can't be public. 

### Getting access to Github
There is an Amsterdam organization in Github: https://www.github.com/amsterdam. To get access to this organization send an email to `datapunt@amsterdam.nl`. State your github username, teamname, first/lastname and include your product owner. 

Repositories should always be created in the Amsterdam organization, never in your personal account. 

## Files that never go into Git
Certain files should never be stored in Git, regardless of whether or not the repository is public or not. For example:
- Private keys, secrets, usernames or other credentials.
- Personally identifiable data.
- Usually any other data should not go into a repository either, unless its testing data.

If you accidentally push private data to the repository report a dataleak immediately. Even if you remove the content directly, there are bots scanning repositories continuously on published secrets, so it might have been picked up already. Also, simply removing something from the repository will not remove it completely; the content will still be available through the history.

## Basic Git files
Each repository should include a set of basic files:
- README.md: a basic introduction on the repositories purpose and how to use it. 
- LICENSE.md: a license file describing the terms under which the code is available to be used or modified. This should be EUPL-1.2 for code and CC0 for documentation.
