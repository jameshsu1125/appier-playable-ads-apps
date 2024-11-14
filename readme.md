[![NPM](https://img.shields.io/badge/NPM-ba443f?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![NODE](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/)
[![React](https://img.shields.io/badge/-ReactJs-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://zh-hant.reactjs.org/)
[![TS](https://img.shields.io/badge/Typescript-4277c0?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![LESS](https://img.shields.io/badge/Less-1d365d?style=for-the-badge&logo=less&logoColor=white)](https://lesscss.org/)
[![TW](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=npm&logoColor=white)](https://lesscss.org/)
[![ROUTER](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=npm&logoColor=white)](https://lesscss.org/)

<p align="center">
  <a href="https://github.com/jameshsu1125">
    <img src="https://user-images.githubusercontent.com/70932507/188534539-a68734ac-9330-4fe0-bc49-5fa85116493e.png" alt="Logo" width=72 height=72>
  </a>
  <h3 align="center">Logo</h3>
  <p align="center">
    Short description   
  </p>
</p>

## Table of contents

- [pnpm workspace installation guide](#pnpm-workspace-installation-guide)
  - [LIFF (Line In-App Frontend Framework) Web App Project](#liff-line-in-app-frontend-framework-web-app-project)
  - [Development Guides](#development-guides)
  - [Technical Stacks](#technical-stacks)
  - [Branch Workflow](#branch-workflow)
  - [Testing Environments](#testing-environments)

# pnpm workspace installation guide

```
pnpm add typescript -D -w  # install pkgs globally , -w: --workspace-root
pnpm add typescript -D --filter pkg-a # install certain pkg
```

for more information about the repo workspace, please check the `pnpm-workspace.yaml` config file.

## LIFF (Line In-App Frontend Framework) Web App Project

This is a general guide for LIFF Web App. Please check the specific app for more information.

## Development Guides

Install project dependencies:

```sh
pnpm install
```

Start the development server:

```sh
pnpm dev
```

Because the HTTPS connection is required by LIFF, you can start the https server by

```sh
pnpm dev:https
```

## Technical Stacks

- pnpm
  - package manager
  - workspace for monorepo management
- React
  - frontend UI library
  - React-related ecosystem libs: `react-router-dom`, `react-hook-form`, `react-query`.
- Vite
  - the front end bundler
- Tailwind CSS
  - the popular CSS frameworks
- Prettier & Eslint
  - code formatter and linter
  - custom rules are defined inside `.eslintrc.cjs` and `.prettierrc.json`.
- Netlify
  - Internal testing link deployment environment during the staging phase

## Branch Workflow

- `master`
  - default branch and commonly used for all products.
- `feat`
  - new feature or wish
- `rel`
  - ready to release

When the new release branch is ready, please someone manually sync to the Appier internal repo.

## Testing Environments

There are different `.env` files for deployment listed in the following:

- `.env.example`
  - an env example template file. Please duplicate this file and rename it to the ones below.
- `.env.local`
  - for development use and will be ignored by git.
- `.env.staging`
  - for internal QA testing process.
- `.env.prod`
  - for real world production release.
