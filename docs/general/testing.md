# Testing

> This page was last reviewed October the 14th August 2024. It needs to be reviewed again on April 14th 2025.

## What is the standard for testing?
Every production ready project needs to have unit and integration tests included. Developers are responsible for writing and maintaining these tests. 

## When and for whom is this standard applicable?
This standard applies to all developers.

## How to test
- [ ] Set up a general testplan with your team. Include in your testplan the following:
  - [ ] the baseline for code coverage.
  - [ ] how to integrate the tests in the deployment pipeline.
  - [ ] how to structure test files, mocks and stubs.
- [ ] Use either Jest or Vitest and React Testing Library as your test framework for front-end projects.  
- [ ] Use Django's built-in testing framework for back-end projects using Django and Python.
- [ ] use either Playwright or Cypress for regression tests. 

## What to avoid?
- Don't treat testing as an afterthought. 
- Don't test implementation details.
- Don't test third party APIs/libraries.

## Recommendations
- Mock external services, API calls, and complex dependencies to isolate the component’s behavior. Front-end tests should test the user's interaction with the application. Therefore, avoid mocking code you’ve written within your own application. Doing so can obscure how well your integrated components work together and lead to less meaningful tests.  
- Write tests that closely resemble how your application is used.
- Use meaningful names for your test files and functions to clearly describe what is being tested.
- The Vakgroep recommends a code coverage of at least 70% of production code for front-end projects. It is up to the front-end developer to decide in their professional opinion what level of coverage is necessary for their specific project.
- The Vakgroep requires a minimum code coverage of 80% for new backend projects. For legacy applications this standard applies only to new code or features wherever feasible.

### End-to-end testing (E2E testing)
E2E testing is not mandatory. The Vakgroep employs two dedicated testers who can assist in creating and running e2e tests. Your Product Owner would need to contact the Vakgroep to inquire about the possibilities. 

### Snapshot testing
Snapshot testing ensures that the UI did not unexpectedly change compared to the previous state of the rendered output. It is recommended to use either [Jest](https://jestjs.io/) or [Vitest](https://vitest.dev/) together with [react-test-renderer](https://npmjs.com/package/react-test-renderer).  

## Further Reading
- [Guiding principles of testing-library](https://testing-library.com/docs/guiding-principles/)
- [Write tests. Not too many. Mostly integration.](https://kentcdodds.com/blog/write-tests)
- [Fixtures, the way to manage sample and test data](https://michalzalecki.com/fixtures-the-way-to-manage-sample-and-test-data/)
- [An advanced guide to Vitest testing and mocking](https://blog.logrocket.com/advanced-guide-vitest-testing-mocking/)

## Acknowledgments
Many thanks to [Sirée Koolen-Wijkstra](https://github.com/SireeKoolenWijkstra)
