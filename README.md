# Phoenix@FCC

This repository holds the [Phoenix](https://hepsoftwarefoundation.org/phoenix/)
based application used to visualize event data at FCC.

## Installation

To install the application run
```sh
yarn install
```

>
> Note: Make sure that you use Yarn2
>


## Running locally

After installation, to serve the application locally run
```sh
yarn start
````
Navigate to `http://localhost:4200/`. The application will automatically
reload if you change any of the source files.


## Development version of Phoenix

In order to have access to the latest development version of phoenix two links
to sub-packages need to be created:
```
phoenix-ui-components
phoenix-event-display
```
or more specifically, run following two commands from the main directory of this
application
```sh
yarn link -r ../phoenix/packages/phoenix-ng/projects/phoenix-ui-components
yarn link -r ../phoenix/packages/phoenix-event-display
```


## Development model

The repository employs following development model:
* `main` branch holds the latest released version available from the main page
    of [FCCSW website][fccsw] ([direct link][produrl]).
* `devel` holds the latest version available from [here][develurl].


## Deploying to the FCCSW website

Production version should be build and deployed from `main` branch and
development version from `devel` branch with the help of following two commands
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
