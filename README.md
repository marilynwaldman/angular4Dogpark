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

### Tutorial from :
    https://medium.com/google-cloud/running-a-simple-kubernetes-frontend-backend-service-on-google-cloud-platform-85eb0346f600

This works!!!!


gcloud config set project testkube-187517
gcloud config set compute/zone us-west1-b 

gcloud container clusters create kubetest --num-nodes=3

git clone https://github.com/marilynwaldman/kubefrontback.git

cd kub*

cd fe
   docker build -t fe .

cd ../be
   docker build -t be .

cd ..

kubectl create -f  be-rc.yaml
kubectl create -f  be-srv.yaml
kubectl create -f  fe-rc.yaml
kubectl create -f  fe-srv.yaml


kubectl get service


docker tag fe gcr.io/testkube-187517/fe
docker tag be gcr.io/testkube-187517/be

gcloud docker -- push gcr.io/testkube-187517/be
gcloud docker -- push gcr.io/testkube-187517/fe

curl http://....

kubectl logs -f POD-NAME

kubectl delete -f  fe-srv.yaml
kubectl delete -f  be-srv.yaml
kubectl delete -f  be-rc.yaml
kubectl delete -f  fe-rc.yaml








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
