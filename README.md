# pnpm + nx monorepo

https://blog.nrwl.io/setup-a-monorepo-with-pnpm-workspaces-and-speed-it-up-with-nx-bc5d97258a7e

## Initialize a new PNPM workspace

```sh
mkdir pnpm-mono
cd pnpm-mono
pnpm init

git init
```

## Setting up the Monorepo structure

```sh
cd apps
npx create-remix@latest
```

Add `name` to `apps/my-remix-app/package.json`,
Then, run the following command on rood directory.

```sh
pnpm install
pnpm --filter my-remix-app dev
```



