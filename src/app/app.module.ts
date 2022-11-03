import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhoenixUIModule } from 'phoenix-ui-components';

import { RouterModule, Routes } from '@angular/router';

import { CldComponent } from './detectors/cld/cld.component';
import { MainComponent } from './main/main.component';

let routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'cld', component: CldComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CldComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PhoenixUIModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
