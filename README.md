<div align="center" style="margin-top: 1em; margin-bottom: 3em;">
  <a href="https://geodework.com"><img alt="Geodework hero and logo" src="./public/images/logo-vertical-blue-transparent.svg"></a>
</div>

# Geodework (Website)

## The stack

- [Node.js](https://nodejs.org/en) - JavaScript runtime
- [React](https://react.dev/) - Frontend library
- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Static type checker
- [pnpm](https://pnpm.io/) - Package manager
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - Components
- [ESLint](https://eslint.org/) - Code linter
- [Prettier](https://prettier.io/) - Code formatter
- [Vercel](https://vercel.com/) - Hosting and deployment

## Getting Started

### Node version

This project uses `nvm` (Node Version Manager) to manage Node.js versions. The `.nvmrc` file in the root directory specifies the canonical version of Node.js to use.

To install `nvm`, follow the [installation instructions](https://github.com/nvm-sh/nvm#installing-and-updating).

Once `nvm` is installed, you can switch to the correct Node.js version by running:

```bash
nvm use
```

### Dependencies

We use `pnpm` for package management. If needed, here are [instructions to install `pnpm`](https://pnpm.io/installation).

Start by installing the dependencies:

```bash
pnpm install
# or
pnpm i
```

### Development

Next, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development Scripts

- `pnpm dev`: Runs the development server.
- `pnpm build`: Builds the application for production.
- `pnpm start`: Starts the production server.
- `pnpm format`: Formats the code using Prettier.
