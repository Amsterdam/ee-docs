# Secure coding
>
> This page was last reviewed January 16th 2025. It needs to be reviewed again on October 16th 2025.

## What is the standard for secure coding?

Code must be developed in accordance with the security-by-design principle.

## When and for whom is this standard applicable?

This standard applies to anyone involved in working with source code, including but not limited to front-end developers, back-end developers, cloud engineers, and other related roles.

This standard must be applied to all repositories of the city of Amsterdam

## What is required?

When developing an application, the following **10 rules of security by design** should be applied:

1. **Proactive Security Integration**  
   Security measures should be incorporated during the requirements, design, and architecture phases, rather than added as patches later.

2. **Principle of Least Privilege**  
   Limit user and process access to only what is necessary for their roles or tasks.

3. **Principle of Defense in Depth**  
   Implement multiple layers of security controls to protect against a wide range of threats. If one layer fails, others will still provide protection.

4. **Principle of Fail-Safe**  
   Applications should default to a secure state in the event of failure, ensuring sensitive data or functionality remains protected.

5. **Minimize the Attack Surface**  
  Use only the essential tools, software, data, and hardware needed for a service to stay secure while fulfilling its purpose thereby reducing the attack surface of the service.

6. **Do Not Trust Services**  
   Always validate and sanitize all data provided by external or internal services including data provided by users.

7. **Principle of Open Design**  
   The security of an application should not rely on the secrecy of its design or source code.

8. **Security by Default**  
   Default configuration settings should prioritize security and only allow users to lower these settings through deliberate action.

9. **Principle of Separation of Duties**  
   Tasks should require multiple conditions or participants to prevent any single entity from having complete control over sensitive processes.

10. **Keep Security Simple**  
   Simplify security measures for end-users to avoid workarounds, and for developers to minimize code complexity.

This means for the developers of Amsterdam it is required to:

- [ ] use safe coding practises such as [branch protection rules](/general/storing-source-code.md)
- [ ] publish your [source code](/general/storing-source-code.md) unless it pertains to infra-as-code
- [ ] set up your workflow in Git according to [the rules](/general/using-git.md)
- [ ] [test your code](/general/testing.md) before being deployed
- [ ] determine which third party dependencies to use according to [the guidelines](/general/third-party-dependencies.md)
- [ ] authenticate your users as per [the city's standard](https://github.com/Amsterdam/development-standards/tree/main/internal/sso)
- [ ] set up monitoring and logging as per [the city's standard](https://github.com/Amsterdam/development-standards/tree/main/internal/monitoring)

## What to avoid?

- SQL injection or cross-site scripting vulnerabilities caused by neglecting input validation and sanitization.
- Exposing your application to known threats by neglecting regular updates and patches.

## Further reading

- [https://owasp.org/www-project-developer-guide/draft/foundations/security_principles/](https://owasp.org/www-project-developer-guide/draft/foundations/security_principles/)
- [https://www.security.gov.uk/policy-and-guidance/secure-by-design/principles/](https://www.security.gov.uk/policy-and-guidance/secure-by-design/principles/)

## Acknowledgements

Many thanks to [Sirée Koolen-Wijkstra](https://github.com/SireeKoolenWijkstra)
