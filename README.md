# Capable Monorepo concept

Concept for a monorepository utilizing yarn workspaces, shared configuration files, a components library and three applications.

## What's inside?

This turborepo uses [pnpm](https://pnpm.io/) as a package manager. This manager utilizes symlinks to reduce the amount of package duplication. This can vastly speed up CI times, as installs can often be the culprit to long times.

### Apps and Packages

- `kariko`: a [react ts vite](https://vitejs.dev/) app
- `pacemaker`: Capables React component library utilized by any `apps` applications
- `config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting

### Get started

```
cd monorepo
pnpm i
<!-- This will run all workspace projects with a dev script -->
pnpm dev
```

This project uses yarn workspaces

```
cd monorepo
<!-- This will specifically run yarn dev for the kariko workspace -->
pnpm --filter kariko dev
```

### Build

To build all apps and packages, run the following command:

```
cd monorepo
<!-- This will build all workspaces with turborepo cacheing -->
pnpm build
```

Because this app has is initialized with turborepo, builds and their artifacts are cached. You can test this by running the above command, making a change to `apps/kariko/App.tsx` and then running the above command again. The build time should be substantially faster because it is only rebuilding Kariko.

### Plopfile

Plopfile takes care of generating the necessary files that builds out our applications. Currently it is set up to build copmonents in our shared ui library. You can access the propt by typing `yarn run plop`. This can be expanded to assist in creating Containers/Hooks/Pages/Routes whatever we want.

Currently the generated files will include:

- \*.stories.tsx (jumpstart storybook development)
- \*.tsx (main typescript react component file)
- \*.types.tsx (add prop types here)
- index.tsx (handles exports)

### Storybook

The storybook is already configured to consume stories found in our `ui` package. Once a component is generated by `Plop` any changes to the component & its respective story file will be tracked by storybook.

```
cd monorepo
yarn run dev

<!-- in a different terminal -->
cd monorepo
pnpm plop
<!-- make changes to the created component and rapidly iterate using storybook -->
```
