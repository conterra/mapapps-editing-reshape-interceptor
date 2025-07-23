# Editing Reshape Interceptor

The Editing Reshape Interceptor bundle prevents that geometries can be moved while editing.

## Sample App
https://demos.conterra.de/mapapps/resources/apps/public_demo_editingreshapeinterceptor/index.html

## Installation Guide
**Requirement: map.apps 4.16.0**

[dn_editingreshapeinterceptor Documentation](https://github.com/conterra/mapapps-editing-reshape-interceptor/tree/master/src/main/js/bundles/dn_editingreshapeinterceptor)

## Quick start

Clone this project and ensure that you have all required dependencies installed correctly (see [Documentation](https://docs.conterra.de/en/mapapps/latest/developersguide/getting-started/set-up-development-environment.html)).

Then run the following commands from the project root directory to start a local development server:

```bash
# install all required node modules
$ mvn initialize

# start dev server
$ mvn compile -Denv=dev -Pinclude-mapapps-deps

# run unit tests
$ mvn test -P run-js-tests,include-mapapps-deps
```
