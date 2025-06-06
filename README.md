# Angular - Creating Dynamic Components

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 19.
Implementing a sample to understand how to create and add dynamic components in Angular. This repo has an implementation that shows how using ViewContainerRef package we can achieve this.

Angular 13 onwards there is no need to used the ComponentFactoryResolver for creating the the instance of the component to be added. 
This could be achieved directly using the ViewContainerRef.

This repo has sample implemented covering 4 scenarios which could be using independently or combined as per the programmers need 
- Implementing Dynamic component rendering using ViewContainerRef
- Implementing Dynamic component rendering using ViewContainerRef, where the components are loaded from a config (JSON) file.
- Implementing Dynamic component rendering using NgComponentOutlet attribute directive 
- Implementing Dynamic component rendering using NgComponentOutlet attribute directive, when the component is Lazy Loaded.



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
