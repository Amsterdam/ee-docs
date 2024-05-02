# Testing

Testing is a crucial part of the developing high-quality software products. It should give you more confidence in shipping products to the world.
Tests do not only ensure quality and reliability but also describes how (parts of) the software works.
There are different kinds of tests with each having its own purpose and benefits. In the frontend the following are very common.

**Unit testing**:
Unit tests focus on a single part of a whole application in total isolation, usually, a function or class. Ideally, the tested component is free of side effects so it is as easy to isolate and test as possible.

**Integration testing:**
While unit test are run in isolation and are free of side effects, integration tests aim to test interaction between components/modules and where side effects might occur. It is does not test the implementation details, but the context of a functionality.

**E2E-testing:**
E2E-testing goes a step further than integration testing. It test the whole flow from start to end, in example a user journey. For e2e tests the team is responsible for describing scenerios and cases. E2E are time consuming, require high maintenance and have a more complex setup. Running e2e test is usually a team effort. Although e2e tests are quite expensive, it ensures a higher confidence in shipping software. It tests real world scenerios on a production like environment.

**Snapshot testing:**
Snapshot tests ensure that the UI did not unexpectedly change compared to the previous state of the rendered output. A typical snapshot test case renders a UI component, takes a snapshot, then compares it to a reference snapshot.

## Guidelines for testing frontend applications

These guidelines will help to integrate testing in your development process. They also provide a "framework" to plan, execute and manage the testing process.

### Unit & Integration Tests

Every production ready frontend project needs to have unit and integration tests included. Developers are responsible for writing and maintaining these tests. E2E are optional since not all expertise or the required resources are at hand. We strongly recommend Jest as a testing framework. React Testing Library is an useful utility library for testing React applications.

### Define a Test Plan

It is good to have a predefined test plan. This helps us to write consistent and high-quality test suits.
A test plan may outline:

- The scope of the tests.
- Whether the focus is on unit or intergration test.
- Determine what to mock. I.e. mock away http responses.
- How to structure test files, mocks and stubs.
- Determine which code coverage is leading.
- Determine baseline for code coverage.
- How to integrate in the deployment pipeline.

## Best practices

Here are some things to keep it mind when writing tests. For code snippets see examples in this Github repo.

- Components test re-rendering logic not business logic.
- Write test to simulate user interactions.
- Separate helper/util functions from the component context. Easier to test.
- Don't test implementation details.
- Don't test 3rd party library api.
- Make use of `data-testid`.

## Framework / Libraries / Tooling

- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/)
- [VS Code Jest extension](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)
- [VS Code Jest Runner](https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner)
- For mocking API: [Mirage JS](https://miragejs.com/)
- For mocking API: [Mock Service Worker - MSW](https://mswjs.io/)

## References

- https://circleci.com/blog/unit-testing-vs-integration-testing/
- https://circleci.com/blog/snapshot-testing-with-jest/
- https://www.geeksforgeeks.org/difference-between-unit-testing-and-integration-testing/
- https://testing-library.com/docs/guiding-principles/
- Don't test [implementation detail](https://kentcdodds.com/blog/testing-implementation-details)
- what to test https://kentcdodds.com/blog/write-tests
- https://www.benmvp.com/blog/react-testing-library-best-practices/
- https://github.com/patternfly/patternfly-react/wiki/React-Testing-Library-Basics,-Best-Practices,-and-Guidelines
- [Clean and flexible way to write fixtures](https://michalzalecki.com/fixtures-the-way-to-manage-sample-and-test-data/)
