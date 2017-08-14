import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { BrowsePageComponent } from './browse-page/browse-page.component';
import { BrowseTopNavComponent } from './browse-page/components/browse-top-nav/browse-top-nav.component';
import { BrowseMusicStripComponent } from './browse-page/components/browse-music-strip/browse-music-strip.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftNavComponent,
    LeftNavComponent,
    BrowsePageComponent,
    BrowseTopNavComponent,
    BrowseTopNavComponent,
    BrowseTopNavComponent,
    BrowseMusicStripComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
