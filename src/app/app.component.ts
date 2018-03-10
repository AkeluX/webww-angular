import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

import * as WorldWind from '@nasaworldwind/worldwind';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('scene') scene: ElementRef;

  ngAfterViewInit() {
    // const wwd = WorldWind.WorldWindow(this.scene.nativeElement);
    // This will work with the next release of WebWorldWind, which supports an
    // actual element instead of the ID as a string.

    // In the meantime, the ID must be used and makes the component not easily
    // reusable.
    const wwd = new WorldWind.WorldWindow('scene');

    wwd.addLayer(new WorldWind.BMNGOneImageLayer());
    wwd.addLayer(new WorldWind.BMNGLandsatLayer());

    wwd.addLayer(new WorldWind.CompassLayer());
    wwd.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd));
    wwd.addLayer(new WorldWind.ViewControlsLayer(wwd));

    wwd.redraw();
  }
}
