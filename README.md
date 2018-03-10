## Demo of WebWorldWind integrated in a Angular application

This project was created as follows:

$ ng new webww-angular
$ cd webww-angular
$ npm install --save @nasaworldwind/worldwind

The files src/app/app.component.html and src/app/app.component.ts were modified for adding a basic WebWorldWind scene.

Finally, in order to use the images provided with WebWorldWind, they need to be copied in src/images and added to the list of assets in .angular-cli.json.

The project can be run using:

$ ng serve
