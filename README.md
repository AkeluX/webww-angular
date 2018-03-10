## Demo of WebWorldWind integrated in an Angular application

This project requires Angular-CLI, see https://github.com/angular/angular-cli

It uses WebWorldWind 0.9.0 and was created as follows:

```bash
$ ng new webww-angular
$ cd webww-angular
$ npm install --save @nasaworldwind/worldwind
```

The files `src/app/app.component.html` and `src/app/app.component.ts` were then modified for adding a basic WebWorldWind scene.

Finally, in order to use the images provided with WebWorldWind, they need to be copied in `src/images` and added to the list of assets in `.angular-cli.json`.

The project can be run using:

```bash
$ ng serve
```

## WebWorldWind 0.10.0

The next version of WebWorldWind will include improvements facilitating further its integration in Angular.
