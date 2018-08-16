import { BrowserModule } from '@angular/platform-browser';
import { Http, HttpModule } from '@angular/http';
import { HttpClientModule } from  '@angular/common/http';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmComponent } from './components/agm/agm.component';

@NgModule({
  declarations: [
    AppComponent,
    AgmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCCY8YPjB0IuW2Q-2bVd6iNlc-Xy127MHI'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
