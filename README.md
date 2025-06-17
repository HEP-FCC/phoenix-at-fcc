# Phoenix@FCC

This repository contains the [Phoenix](https://hepsoftwarefoundation.org/phoenix/)
based application used to visualize event data at FCC. The application is written
in [Angular](https://angular.dev/).

## Installation

To install the application run
```sh
yarn install
```

>
> Note1: Make sure that you use Yarn2 or later
>
> Note2: To install Angular CLI globally use:
> ```sh
>   npm install -g @angular/cli
> ```


## Running

After installation, to serve the application locally run
```sh
yarn serve
````
Navigate to `http://localhost:4200/`. The application will automatically
reload if you change any of the source files.


## Development version of Phoenix

In order to have access to the latest development version of phoenix two links
to the Phoenix sub-packages need to be created:
```
phoenix-ui-components
phoenix-event-display
```
easiest way to do have them created is by running the following command from
the main directory of this application
```sh
yarn link /absolute/path/to/phoenix --all
```
Also, do not forget to build phoenix sub-packages, otherwise you will get
compilation errors.


## Production vs. development version

* Production version is available from the main page of [FCCSW website][fccsw]
    ([direct link][produrl]) and corresponds to the latest tagged version.
* The `main` branch holds the latest development version available from
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
