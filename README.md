# AngularDemoProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Documentation:

## Pre-request to install:
	Node version 12.13.0
	Angular version 8.1
	
## Application to Setup:
	we have to run the below command to download the project dependencies into node modules folder. which will be downloaded from node package manager repository. 
	for this project I am sharing the project code with out node modules.
	Note: Its mandatory to exectue npm install command before starting the application. and please make sure that not facing or having any errors while executing the npm install"
	Ex: https://www.npmjs.com/package/@angular/material
	command: npm install
	
## Application to start:
	To start or run the Application, 
	please navigate to dist folder in the project path (ex: AngularDemoProject\dist\AngularDemoProject) and run below command
	or else In direct project path we have to run below command that node already downloaded dependency from npm to look the startup key value to execute command which is there in the package.json (configuration file) 
	command: npm start or ng serve
	
	After successful start of application, firstly we have to check the json is accessable or not.
	http://localhost:4200/assets/data/jobs.json
	http://localhost:4200
	
## Application to Test:
	we have to run below command to check the all the test cases.node will try to look into ackage.jsin file to execute below command and will start ng test execution internally by node which is configured already.
	command: npm test or ng test
	
## Application to Build:
	We have to execute the below command to take a new build from the latest changes in project. for production mode specify '--prod'.
	command: npm run build --prod
	
## If Application required to add or modify with additional components or services then we have to execute the below command at required path so that angular will take care of dependency inject and resolving the dependency injection to connect with module.ts files that using it for export and imports.
	command:
	ng g c custom-component-name (it will be generating the component html, ts, spec.ts, scss file of component)
	ng g s custom-service-name (it will be generating the service ts, spec.ts file of service)
	ng g m custom-module-name --module=app.module.ts (it will be generating the module ts, spec.ts file of service)
