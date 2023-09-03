import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StompService } from './wensocket/stomp.service';
import { stompServiceFactory } from './wensocket/stomp.factory';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: StompService,
      useFactory: stompServiceFactory,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
