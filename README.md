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

## Create a shared UI library

```sh
cd packages
mkdir shared-ui

cd shared-ui
pnpm init
```

Run the following command on rood directory.

```sh
pnpm add --filter shared-ui react
pnpm add --filter shared-ui typescript -D
```

```sh
pnpm --filter shared-ui build
```

## Consuming shared-ui package from the Remix app

```sh
pnpm add shared-ui --filter my-remix-app --workspace
```

## Installing Nx

```sh
pnpm add nx -D -w
```

## Running tasks with Nx

```sh
npx nx <target> <project>

npx nx build shared-ui
npx nx dev my-remix-app
npx nx run-many --target=build --all
npx nx run-many --target=build --projects=my-remix-app,shared-ui
```

## Running just what changed

```sh
npx nx affected:<target>
```
