import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhoenixUIModule } from 'phoenix-ui-components';

import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { PlaygroundComponent } from './playground/playground.component';
// FCC-ee
import { CldComponent } from './detectors/fccee-cld/cld.component';
import { IdeaComponent } from './detectors/fccee-idea/idea.component';
import { AllegroComponent } from './detectors/fccee-allegro/allegro.component';
// FCC-hh
import { FcchhBaselineComponent } from './detectors/fcchh-baseline/fcchh-baseline.component';

let routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'playground', component: PlaygroundComponent },
  { path: 'fccee-cld', component: CldComponent },
  { path: 'fccee-idea', component: IdeaComponent },
  { path: 'fccee-allegro', component: AllegroComponent },
  { path: 'fcchh-baseline', component: FcchhBaselineComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CldComponent,
    IdeaComponent,
    AllegroComponent,
    FcchhBaselineComponent,
    MainComponent,
    PlaygroundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PhoenixUIModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
