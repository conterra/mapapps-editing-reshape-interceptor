# Editing Reshape Interceptor

The Editing Reshape Interceptor bundle prevents that polygons and geometries can be moved while editing.

## Sample App
https://demos.conterra.de/mapapps/resources/apps/downloads_editing_reshape_interceptor/index.html

## Installation Guide
**Requirement: map.apps 4.6.0**

[dn_editingreshapeinterceptor Documentation](https://github.com/conterra/mapapps-editing-reshape-interceptor/tree/master/src/main/js/bundles/dn_editingreshapeinterceptor)

## Development Guide
### Define the mapapps remote base
Before you can run the project you have to define the mapapps.remote.base property in the pom.xml-file:
`<mapapps.remote.base>http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%</mapapps.remote.base>`

### Other methods to to define the mapapps.remote.base property.
1. Goal parameters
`mvn install -Dmapapps.remote.base=http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%`

2. Build properties
Change the mapapps.remote.base in the build.properties file and run:
`mvn install -Denv=dev -Dlocal.configfile=%ABSOLUTEPATHTOPROJECTROOT%/build.properties`
