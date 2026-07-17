import { Component, OnInit, inject } from '@angular/core';
import {
  EventDisplayService,
  EventDataFormat,
  EventDataImportOption,
} from 'phoenix-ui-components';
import {
  Configuration,
  PhoenixLoader,
  PresetView,
  ClippingSetting,
  PhoenixMenuNode,
} from 'phoenix-event-display';

@Component({
  selector: 'app-fcchh-baseline',
  templateUrl: './fcchh-baseline.component.html',
  styleUrls: ['./fcchh-baseline.component.scss'],
  standalone: false,
})
export class FcchhBaselineComponent implements OnInit {
  private eventDisplay = inject(EventDisplayService);

  events: unknown;

  /** The root Phoenix menu node. */
  phoenixMenuRoot: PhoenixMenuNode = new PhoenixMenuNode(
    'Phoenix Menu',
    'phoenix-menu',
  );

  loaded = false;
  loadingProgress = 0;

  eventDataImportOptions: EventDataImportOption[] = [
    EventDataFormat.EDM4HEPJSON,
  ];

  ngOnInit(): void {
    // Create the event display configuration
    const configuration: Configuration = {
      eventDataLoader: new PhoenixLoader(),
      presetViews: [
        new PresetView(
          'Global View',
          [800, 800, 800],
          [0, 0, 0],
          'perspective',
          ClippingSetting.On,
          340,
          120,
        ),
        new PresetView(
          'Side View',
          [1200, 0, 0],
          [0, 0, 0],
          'right-cube',
          ClippingSetting.Off,
        ),
        new PresetView(
          'Front View',
          [0, 0, -1800],
          [0, 0, 0],
          'left-cube',
          ClippingSetting.Off,
        ),
        new PresetView(
          'Top View',
          [0, 900, 900],
          [0, 0, 0],
          'top-cube',
          ClippingSetting.Off,
        ),
      ],
      // default view with x, y, z of the camera and then x, y, z of the point it looks at
      defaultView: [1200, 1200, 1200, 0, 0, 0],
      phoenixMenuRoot: this.phoenixMenuRoot,
    };

    // Initialize the event display
    this.eventDisplay.init(configuration);

    // Load detector geometry (assuming the file exists in the `src/assets` directory of the app)
    this.eventDisplay.loadGLTFGeometry(
      'assets/detectors/fcchh_baseline.gltf',
      'FCC-hh',
      undefined,
      1,
      true,
    );

    this.eventDisplay
      .getLoadingManager()
      .addProgressListener((progress) => (this.loadingProgress = progress));

    this.eventDisplay
      .getLoadingManager()
      .addLoadListenerWithCheck(() => (this.loaded = true));
  }
}
