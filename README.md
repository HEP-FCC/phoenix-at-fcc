# Phoenix@FCC

This repository hold the [Phoenix](https://hepsoftwarefoundation.org/phoenix/) based application used to visualize event data at FCC.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Install

To install the application without changing the `yarn.lock` file run:
```bash
yarn install --frozen-lockfile
```

## Development version of Phoenix

In order to have access to the latest development version of phoenix two links
to sub-packages are created:
```sh
phoenix-ui-components
phoenix-event-display
```

or more specifically

```sh
yarn link -r ../phoenix/packages/phoenix-ng/projects/phoenix-ui-components
yarn link -r ../phoenix/packages/phoenix-event-display
```


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
