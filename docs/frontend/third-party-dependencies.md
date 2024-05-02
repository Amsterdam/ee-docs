# Third Party Dependencies

It is common practice utilizing third-party libraries for our projects. Choosing the right one can be a difficult task. Therefore we curated a list of recommended packages and set guidelines for choosing a package which is not on the list.

## Guidelines for choosing a third party package.

When choosing a NPM package for your project please check the [recommended packages](#-list-of-recommended-packages) list first. This is a curated list recommended by the frontend developer community of the Gemeente Amsterdam.

If the packages in the list do not fit your requirements you can pick a non-recommended package. When do so, follow these guidelines.

- Does it have the correct license?
- Is the package health still good?
  - Who is maintaining it?
  - Is it actively maintained?
  - How many downloads per week?
- Does it have an acceptable bundle size?
- Comparison of similar packages.s

You could propose a package to the list of Recommonded Packages. Create a PR with a description to motivate your proposal.

## List of recommended packages

A collection of third party (React) libraries we recommend using in your frontend project.

### Developer Environments

- [Vite](https://github.com/vitejs/vite) - Next Generation Frontend Tooling
  - [Vite community templates](https://github.com/vitejs/awesome-vite#templates) - Vite based project templates

### Libraries

#### Hooks

- [useHooks](https://usehooks-ts.com/) - Set of typed utility hooks

#### State management

- [React Redux](https://github.com/reduxjs/react-redux) - Official React bindings for Redux
  - [Redux Toolkit](https://github.com/reduxjs/redux-toolkit) - The official, opinionated, batteries-included toolset for efficient Redux development
  - [Redux DevTools](https://github.com/reduxjs/redux-devtools) - DevTools for Redux with hot reloading, action replay, and customizable UI
  - [Reselect](https://github.com/reduxjs/reselect) - Selector library for Redux
  - [Redux Thunk](https://github.com/reduxjs/redux-thunk) - Thunk middleware for redux
  - [redux-saga](https://github.com/redux-saga/redux-saga) - An alternative side effect model for Redux apps
- [TanStack Query](https://github.com/TanStack/query) - Powerful asynchronous state management
- [Jotai](https://github.com/pmndrs/jotai) - Bottom-up approach to React state management with an atomic model

#### Routing

- [React Router](https://github.com/remix-run/react-router) - Declarative routing for React

#### Forms

- [React Hook Form](https://github.com/react-hook-form/react-hook-form) - React Hooks for form state management and validation

#### UI Components

- [React-select](https://github.com/JedWatson/react-select) - The Select Component for React
- [React DnD](https://github.com/react-dnd/react-dnd) - Drag and Drop for React
- [react-dropzone](https://github.com/react-dropzone/react-dropzone) - Simple drag-drop zone with React

#### Testing

- [Jest](https://github.com/facebook/jest) - Delightful JavaScript Testing
- [Enzyme](https://github.com/enzymejs/enzyme) - JavaScript Testing utilities for React
- [React Testing Library](https://github.com/testing-library/react-testing-library) - Simple and complete React DOM testing utilities
- [Vitest](https://vitest.dev/) - A Vite-native testing framework.

#### Component Sandbox

- [Storybook](https://github.com/storybookjs/storybook) - Storybook is a frontend workshop for building UI components and pages in isolation

#### Schema validators

- [Zod](https://github.com/colinhacks/zod)
- [Yup](https://github.com/jquense/yup)

#### Utilities

- [Classnames](https://github.com/JedWatson/classnames)
- [clsx](https://github.com/lukeed/clsx)
- [Lodash](https://lodash.com/)
- [date-fns](https://date-fns.org/)

## Managing dependencies

> _To Be Defined_

## Reference

[Third Party Dependency Standard](../standards/third-party-dependencies.md)
