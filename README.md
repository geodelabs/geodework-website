<div align="center" style="margin-top: 1em; margin-bottom: 3em;">
  <a href="https://geode.build"><img alt="Geode Labs hero and logo" src="./public/images/logo-vertical-blue.svg"></a>
</div>

# Geode Labs (Website)

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

## Blog Publishing

Blog posts are stored as markdown files in the `app/blog/content` directory. Each post has a unique file name, and contains required `title` and `publishedTime` metadata, or "front matter", at the top of the file:

```markdown
---
title: Some title for my post
publishedTime: 2025-04-20 16:20:00
---
```

## Create a file using GitHub

These instructions will guide a user through creating a pull request to add a blog entry, using only the GitHub interface:

1. Navigate to https://github.com/geodework/geodework-website/tree/main/app/blog/content - Log in if not yet

2. Click on the `Add file` button and select `Create new file`.

3. Add a file name with the `.md` extension (e.g., `my-new-post.md`). This will be used as the URL path for the post (e.g., `/blog/my-new-post`). Make sure the file name matches the slug in the corresponding blog provider.

4. Copy the above front matter template and paste it into the file contents.

5. Fill in the `title` field with the title of your post.

   Note, the `title` field will be parsed and used at the primary header for the page (an `<h1>` tag in HTML, or line beginning with `#` in Markdown).

   > There should only be one of these per page—refrain from using lines with single `#` in post content.

6. Write your post content in standard markdown format. [More on markdown syntax](https://www.markdownguide.org/basic-syntax/)

7. When ready, click "Commit changes".

   a. Name the commit or leave the default.

   b. Select _Create a new branch for this commit and start a pull request_ to allow review before merging to production

   c. Default suggested branch name should suffice

   d. Click "Propose changes"

8. Click "Create pull request" to submit the post for review, allowing the preview to build on Netlify.

This will generate a preview deployment through Netlify with a link to preview the post before merging. Review the post, and if everything looks good, contact an admin for review and merge, or for any assistance.
