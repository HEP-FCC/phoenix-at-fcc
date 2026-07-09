import { Component, AfterViewInit, inject } from '@angular/core';
import { EventDisplayService } from 'phoenix-ui-components';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone: false,
})
export class MainComponent implements AfterViewInit {
  private eventDisplay = inject(EventDisplayService);

  year: number;
  envPath = environment.path;

  constructor() {
    this.year = new Date().getFullYear();
    this.eventDisplay.getThreeManager().stopAnimationLoop();
  }

  ngAfterViewInit() {
    this.eventDisplay.getUIManager().detectColorScheme();
  }
}
