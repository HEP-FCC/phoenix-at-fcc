import { Component,
         OnInit } from '@angular/core';
import { EventDisplayService,
         EventDataFormat,
         EventDataImportOption,
         ImportOption } from 'phoenix-ui-components';
import { Configuration,
         PhoenixLoader,
         PresetView,
         ClippingSetting,
         PhoenixMenuNode } from 'phoenix-event-display';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cld',
  templateUrl: './cld.component.html',
  styleUrls: ['./cld.component.scss']
})
export class CldComponent implements OnInit {
  events: any;

  /** The root Phoenix menu node. */
  phoenixMenuRoot: PhoenixMenuNode = new PhoenixMenuNode('Phoenix Menu',
                                                         'phoenix-menu');

  loaded = false;
  loadingProgress = 0;

  eventDataImportOptions: EventDataImportOption[] = [
    EventDataFormat.EDM4HEPJSON,
  ];

  constructor(private eventDisplay: EventDisplayService,
              private route: ActivatedRoute) {};

  ngOnInit(): void {
    let optionVersion;
    this.route.params.subscribe(params => {
      optionVersion = params['option-version'];
    });
    if (optionVersion === undefined) {
      optionVersion = 'o1_v03';
    }

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
          120
        ),
        new PresetView(
          'Side View',
          [1200, 0, 0],
          [0, 0, 0],
          'right-cube',
          ClippingSetting.Off
        ),
        new PresetView(
          'Front View',
          [0, 0, -1800],
          [0, 0, 0],
          'left-cube',
          ClippingSetting.Off
        ),
        new PresetView(
          'Top View',
          [0, 900, 900],
          [0, 0, 0],
          'top-cube',
          ClippingSetting.Off
        ),
      ],
      // default view with x, y, z of the camera and then x, y, z of the point it looks at
      defaultView: [800, 800, 800, 0, 0 ,0],
      phoenixMenuRoot: this.phoenixMenuRoot,
      // Event data to load by default
      // defaultEventFile: {
        // (Assuming the file exists in the `src/assets` directory of the app)
      //   eventFile: 'assets/event-data/cld.edm4hep.json',
      //   eventType: 'edm4hep-json'
      // },
    };

    // Initialize the event display
    this.eventDisplay.init(configuration);

    // Load detector geometry (assuming the file exists in the `src/assets` directory of the app)
    this.eventDisplay.loadGLTFGeometry(
      // 'assets/detectors/CLD_' + optionVersion + '.gltf',
      'https://fccsw.web.cern.ch/fccsw/detectors/CLD_' + optionVersion + '.gltf',
      undefined,
      undefined,
      1,
      true);

    this.eventDisplay
        .getLoadingManager()
        .addProgressListener((progress) => (this.loadingProgress = progress));

    this.eventDisplay
        .getLoadingManager()
        .addLoadListenerWithCheck(() => (this.loaded = true));
  }
}
