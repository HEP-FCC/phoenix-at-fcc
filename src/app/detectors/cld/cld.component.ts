import { Component,
         OnInit } from '@angular/core';
import { EventDisplayService } from 'phoenix-ui-components';
import { Configuration,
         PhoenixLoader,
         PresetView,
         ClippingSetting,
         PhoenixMenuNode } from 'phoenix-event-display';

@Component({
  selector: 'app-cld',
  templateUrl: './cld.component.html',
  styleUrls: ['./cld.component.scss']
})
export class CldComponent implements OnInit {

  /** The root Phoenix menu node. */
  phoenixMenuRoot = new PhoenixMenuNode("Phoenix Menu");

  constructor(private eventDisplay: EventDisplayService) { }

  ngOnInit(): void {
    // Create the event display configuration
    const configuration: Configuration = {
      eventDataLoader: new PhoenixLoader(),
      presetViews: [
        // simple preset views, looking at point 0,0,0 and with no clipping
        new PresetView('Left View', [0, 0, -12000], [0, 0, 0], 'left-cube'),
        new PresetView('Center View', [-500, 12000, 0], [0, 0, 0], 'top-cube'),
        // more fancy view, looking at point 0,0,5000 and with some clipping
        new PresetView('Right View', [0, 0, 12000], [0, 0, 5000], 'right-cube', ClippingSetting.On, 90, 90)
      ],
      // default view with x, y, z of the camera and then x, y, z of the point it looks at
      defaultView: [4000, 0, 4000, 0, 0 ,0],
      phoenixMenuRoot: this.phoenixMenuRoot,
      // Event data to load by default
      defaultEventFile: {
        // (Assuming the file exists in the `src/assets` directory of the app)
        eventFile: 'assets/event-data/cld.edm4hep.json',
        eventType: 'edm4hep-json'
      },
    }

    // Initialize the event display
    this.eventDisplay.init(configuration);

    // Load detector geometry (assuming the file exists in the `src/assets` directory of the app)
    this.eventDisplay.loadGLTFGeometry('assets/detectors/cld.gltf', 'CLD');
  }

}
