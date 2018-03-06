import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { YogiComponent } from './yogi/yogi.component';
import { CindyComponent } from './cindy/cindy.component';
import { BoobooComponent } from './booboo/booboo.component';
import { BasketComponent } from './basket/basket.component';
import { SandwichComponent } from './sandwich/sandwich.component';

@NgModule({
  declarations: [
    AppComponent,
    YogiComponent,
    CindyComponent,
    BoobooComponent,
    BasketComponent,
    SandwichComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
