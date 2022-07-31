## About
This Repository have Multiple Libraries as to be shared between Frontend and Backend.
The repository is based on monorepo.

Project goal is to have a small Casino concept where players share same gameplay.

## SETUP
Uses Lerna as a to obtain monorepo setup.
Do install lerna globally, and verify the installed version.

```sh
npm install -g lerna
npx lerna --version
```

Projects includes different dependencies and requires to install modules such as tsc.
Do install each product dependencies using lerna as below.

luckily Lerna have a shortcut CLI called 'lerna bootstrap'
The root package have added the script so that we can install all packages easily by calling install from npm.

```sh
npm run setup
```

## Run locally
Each package has dedicated scripte files in package.json which can be used by root package.json
The below example shows a basic usage of root scripts which have mapping to children.

```sh
// Build
npm run build:be

// Serve production build

npm run serve:fe

// Development
npm run start:be

// Testing
npm run test:common

```

## Lerna
Lerna usefull tips can be found on their official site: https://lerna.js.org/docs/getting-started

Target Dependencies and Scope dependencies.
In Monorepo, --scope variable is the most important as it will run scripts based on project dependencies on either build or dev.
By Adding --scope, lerna checks for the repository be package.json and runs the dependencies first.
Afterwards it will run the actual --scope project.

```sh
npx lerna run build
// Will run the build targets in the right order.

npx lerna run dev --scope=be
// Will run the build targets for common and models first and then run the dev target for be.
```

The Packages.json have the above to scripts so it can easily add scope per project and share lerna CLI for projects.
