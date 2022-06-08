import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  { Injector} from '@angular/core';
import  { createCustomElement } from '@angular/elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterWebComponentComponent } from './counter-web-component/counter-web-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterWebComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, CounterWebComponentComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(CounterWebComponentComponent, { injector });
    customElements.define('counter-button', el);
  }
  ngDoBootstrap() {}

 }
