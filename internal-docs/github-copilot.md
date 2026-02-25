
# Instructions and rules for using GitHub Copilot  

The following rules have been established for using GitHub Copilot. This is to ensure that the final software continues to meet the quality standards, that we remain careful and vigilant when working with this new technology, and that everyone using GitHub Copilot is aware of what is expected of them.


## 1 Rules

To ensure the code performs as expected, we have established the following rules and regulations. You may only use GitHub Copilot if you agree to them. If, for any reason, you are unable or unwilling to comply with these, please notify Nynke Brunner or Jeffrey Klardie and refrain from further use of GitHub Copilot.


### 1.1 Caution is required

While all programmers always do their best, we want to emphasize general caution. Furthermore, everyone should read the [GitHub Copilot best practices](https://docs.github.com/en/copilot/get-started/best-practices) before use.

  

### 1.2 Personal Data

Because GitHub Copilot receives context when asking questions, it's important to be vigilant when sending a prompt that includes personal data. Personal data should never be included in the input/prompt. Although GitHub states that prompts only exist as long as they are necessary for the answer, prevention is better than cure.
Programmers should configure which specific parts of a project should not be indexed. Before using GitHub Copilot within a repository, analyze whether any files or folders exist within the project that should not be indexed. If there is data in the repository that shouldn't be there, exclude it. Instructions for this can be found [here](https://docs.github.com/en/copilot/how-tos/configure-content-exclusion/exclude-content-from-copilot).
  

### 1.3 Merging code to main - review by another programmer

All code using GitHub Copilot may only be merged to main if it has been approved by another developer via a pull request (PR). The PR description must clearly indicate that GitHub Copilot was used in the code creation process. If any personal data is accidentally included in the code (output), the code must be rejected and the personal data removed. Use [the central data breach process](https://hoofdstad.sharepoint.com/sites/in-rw-hsp/SitePages/Datalekken,-privacy-en-informatiebeveiliging.aspx?web=1&CT=1771320231072&OR=OWA-NT-Mail&CID=1ac75725-71fe-28ec-0d72-e942a2eb8ebe) for this.
 

### 1.4 Bias and inclusivity in answers  

Because GitHub Copilot is trained on data that may not be inclusive and may contain biases, this may also be reflected in the answers generated. Therefore, both the developer and the programmer conducting the review should actively consider whether the code may be biased by adding answers from GitHub Copilot.

  

### 1.5 If automated tests are present in a project: Code from GitHub Copilot should be tested automatically  

If a project contains any form of automated testing, the code sections using GitHub Copilot should be added to the automated tests. It is important that both the "happy path" and the paths that generate errors are tested.

- The developer who wrote the code is responsible for adding these.

- The reviewer is responsible for checking whether the code is covered by automated tests.