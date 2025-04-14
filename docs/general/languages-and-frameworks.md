# Languages & Frameworks for Software Development

> This page was last reviewed on 10th April. It needs to be reviewed again on 10th January 2026.

## What is the standard?

### Backend

New backend applications are developed using **[Python](https://www.python.org/)** or **[Node.js](https://nodejs.org/)** (with **[TypeScript](https://www.typescriptlang.org/)**).

- Python applications use **[Django](https://www.djangoproject.com/)** or **[FastAPI](https://fastapi.tiangolo.com/)**.
- Node.js applications use **[NestJS](https://nestjs.com/)** or **[Express.js](https://expressjs.com/)**.

A single (monolithic) codebase where the backend renders the frontend (i.e., without separate frontend and backend codebases) is generally not permitted. The only exception is if you have presented your problem and code to the Gilde to explore whether more suitable solutions exist and there was none.

### Frontend

New frontend applications are developed using **[TypeScript](https://www.typescriptlang.org/)**.

- UI logic is implemented with **[React](https://react.dev/)** in combination with the **[Amsterdam Design System](https://designsystem.amsterdam/)**.
- CSS is implemented using **[CSS modules](https://github.com/css-modules/css-modules)**.
- Full application development is implemented with **[Next.js](https://nextjs.org/)** or **[React Router (Framework)](https://reactrouter.com/)**.

### Mobile Applications

New mobile applications are developed using **[React Native](https://reactnative.dev/)** and should be implemented as modules into the existing **[Amsterdam App platform](https://github.com/Amsterdam/amsterdam-app-frontend)**.

### Low-code

New low-code applications are developed using **[Mendix](https://www.mendix.com/)**.

## When to apply this standard?

### New applications

When developing new applications, teams have the freedom to choose technologies within the preferred stacks mentioned above that best fit their project requirements.

### Existing applications

No active rebuild or migration of existing applications will occur unless there's a clear business case (e.g., security risks, end-of-life technology, or strategic necessity). Teams remain responsible for maintaining and extending these systems in their current technology.

### What if I want to deviate from the standard?

Deviations from the established standards must be submitted to the Engineering Enablement team of the Software Development Department. They will consult with experts from the guilds to make a decision. This prevents uncontrolled growth and ensures a rational evaluation of technical choices.

### What about innovation or prototyping?

Teams may explore new technologies or tools, but only within defined pilot projects or proof-of-concepts. If successful, these technologies can be integrated into the policy in consultation with the Management Team of the Software Development Department.

## What is the aim of this standard?

The software development department aims to promote consistency and efficiency within our teams without restricting innovation and flexibility.

We see standardization as a crucial element to ensure scalability, knowledge sharing, and maintainability of projects now and in the future. Additionally, we want to provide sufficient space for autonomy within teams so that they can respond to project-specific needs or task requirements.

## When and for whom is this standard applicable?

- This standard applies to all developers.

## Acknowledgments

Many thanks to [Jeffrey Klardie](https://github.com/jklardie) and [Sirée Koolen-Wijkstra](https://github.com/SireeKoolenWijkstra)
