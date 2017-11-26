# Angular4Dogpark
 


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.5.  This is a simple app that will be used with Kubernetes, Jenkins and Docker.  Will be run on Google Cloud Platform.

taken from 2 examples:

https://hackernoon.com/angular-cli-and-docker-kubernetes-12bd30b345b
https://github.com/avatsaev/angular4-docker-examples

git clone ...
cd
npm install
ng serve

##  Build for production - creates  dist directory

ng build --prod --aot


## build docker image for nginx to upload to GCP

docker build -t dogpark .
docker run -d -p 8080:80 dogpark
http://localhost:8080/





## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

end
