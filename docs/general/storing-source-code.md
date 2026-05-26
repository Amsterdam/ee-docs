# Store your project in GitHub

## How to store projects on Github?
- All projects must have their repository on GitHub in the account of the city of Amsterdam and should be public,
see the section "Public or private" for allowed exemptions.
- You must use Git to store your code on GitHub. Include a CODEOWNERS file with your team name in the source code. See [the EE-docs repository](https://github.com/Amsterdam/ee-docs/blob/develop/CODEOWNERS) for an example.
- Secure your repository by enabling these branch protection rules:
  - Require a pull request before merging
    - Require approvals
      - The required number of approvals before merging is at least 1

### Sign your commits
We recommend signing your commits, as it enhances both reliability and security. [You can use](https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification) either GPG ([GNU Privacy Guard](https://www.gnupg.org/)) or SSH; you simply need to inform Git which key you are using. Setting up a GPG signature can be somewhat [complex](https://docs.github.com/en/authentication/managing-commit-signature-verification/generating-a-new-gpg-key), so we recommend using [an SSH key](https://stackoverflow.com/questions/72844616/how-do-i-sign-git-commits-using-my-existing-ssh-key) instead.

## When and for whom is this standard?
This standard applies to all developers.<br/>
This standard must be applied to all new repositories of the city of Amsterdam (new since May 2024).

## Public or private
Infra-as-code logic must always be stored in a private repository.
This improves transparency and reusability,
but protects us from exposing sensitive information that could benefit potential bad actors.

## Recommendations  
- Send an e-mail to github@amsterdam.nl to get in touch with the Engineering Enablement team to access the Amsterdam organization in GitHub. Your e-mail must include the following:
  - The GitHub username(s).
  - The user(s) first and last name(s).
  - The team.
  - Include your Product Owner in the CC.
- Don't store data in your repository unless it's testing data. Data used with tests must always be anonymized.

## What pitfalls to avoid?
- Don't store the following files on GitHub whether the repository is public or not: 
  - Private keys, secrets, usernames or other credentials. Make use of the templates on [gitignore template] (https://github.com/github/gitignore) repository to exclude files. 
  - Personally identifiable data. Report a data breach immediately if done so. Just removing the data will not erase it completely. The data will still be available through the history. Assume the data is publicly known as soon as you've published it. Bots are scanning repositories continuously looking for secrets. 
- Don't disable the branch protection policies when they're inconvenient. Ask other developers outside your team to approve pull requests if no team members are available.  

## Further reading
- [The GitHub documentation](https://docs.github.com/en/get-started) is a good source of information.
- [GitHub](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners) also has information about CODEOWNERS files. 

## Acknowledgments
Many thanks to [Hee Chan van der Haar](https://github.com/hcvdhaar), [Benny van de Hoogen](https://github.com/bennyvdhoogen), [Youri Westerman](https://github.com/4c0n) and [Sirée Koolen-Wijkstra](https://github.com/SireeKoolenWijkstra)

## Further reading
-  Want to know more about the Fork and Pull model? We recommend you read [the GitHub Docs](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/getting-started/about-collaborative-development-models#fork-and-pull-model).
