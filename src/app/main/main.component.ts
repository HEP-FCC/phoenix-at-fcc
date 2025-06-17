import { Component, OnInit } from '@angular/core';
import { EventDisplayService } from 'phoenix-ui-components';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone: false
})
export class MainComponent implements OnInit {
  year: number;

  constructor(private eventDisplay: EventDisplayService) {
    this.year = new Date().getFullYear();
    this.eventDisplay.getThreeManager().stopAnimationLoop();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.eventDisplay.getUIManager().detectColorScheme();
  }
}
