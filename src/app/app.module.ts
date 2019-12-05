import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  // these properties are know as metadata
  // bring in other angular modules that this modules needs
  imports: [
    BrowserModule
  ],

  // make components, directives, and pipes available to this module that don't come from another module
  declarations: [
    AppComponent
  ],

  // used for a root module...let's angular know the component(s) for the starting point for bootstrap process
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {

}
