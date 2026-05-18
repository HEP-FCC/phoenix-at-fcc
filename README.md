# Phoenix@FCC

This repository contains the [Phoenix](https://hepsoftwarefoundation.org/phoenix/)
based application used to visualize event data at FCC. The application is written
in [Angular](https://angular.dev/).

## Installation

To install the application run

```sh
yarn install
```

> Note1: Make sure that you use Yarn2 or later
>
> Note2: To install Angular CLI globally use:
>
> ```sh
>   npm install -g @angular/cli
> ```

## Running

After installation, to serve the application locally run

```sh
yarn serve
```

Navigate to `http://localhost:4200/`. The application will automatically
reload if you change any of the source files.

## Development version of Phoenix

In order to have access to the latest development version of phoenix two links
to the Phoenix sub-packages need to be created:

```json
"phoenix-ui-components" # Pointing to packages/phoenix-event-display
"phoenix-event-display" # Pointing to packages/phoenix-ng/projects/phoenix-ui-components"
```


Also, do not forget to build phoenix sub-packages, otherwise you will get
compilation errors.

### Compiling phoenix-ui-components

In packages/phoenix-ng/projects/phoenix-ui-components/package.json you need to modify the exports. The package.json has an exports field for ./theming, which Node.js treats it as strict. And once exports exists, any subpath not listed (including '.') is blocked. This is a workaround for manually liked files and not something that should be commited.

```json
    ".": {
      "types": "./dist/index.d.ts",
      "default": "./dist/fesm2022/phoenix-ui-components.mjs"
    },

```

To compile the package:

```bash
yarn install # Don´t forget to install the dependencies
cd packages/phoenix-ng
yarn build:ui-components
```

### Compiling phoenix-event-display

To compile the package:

```bash
yarn install # Don´t forget to install the dependencies
cd packages/phoenix-event-display/
yarn tsc:build
```

## Production vs. development version

- Production version is available from the main page of [FCCSW website][fccsw]
  ([direct link][produrl]) and corresponds to the latest tagged version.
- The `main` branch holds the latest development version available from
  [here][develurl].

## Deploying to the FCCSW website

Production version should be build and deployed from latest tagged version and
development version from the `main` branch with the help of following two
commands

```sh
yarn build:prod
yarn deploy:prod
```

or

```sh
yarn build:dev
yarn deploy:dev
```

[fccsw]: https://fccsw.web.cern.ch/fccsw/
[produrl]: https://fccsw.web.cern.ch/fccsw/phoenix/
[develurl]: https://fccsw.web.cern.ch/fccsw/phoenix-dev/
