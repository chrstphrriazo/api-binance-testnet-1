import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderBookModule } from './order-book/order-book.module';
import { OrderBookService } from './services/order-book.service';
import { SymbolPriceTickerService } from './services/symbol-price-ticker.service';
import { SymbolPriceTickerModule } from './symbol-price-ticker/symbol-price-ticker.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SymbolPriceTickerModule,
    OrderBookModule,
    HttpClientModule,
    
  ],
  providers: [SymbolPriceTickerService, OrderBookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
