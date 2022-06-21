import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderBook } from './order-book/order-book.component';
import { SymbolPriceTicker } from './symbol-price-ticker/symbol-price-ticker.component';

const routes: Routes = [
  {
    path: 'order-book',
    component: OrderBook
  },
  {
    path: 'symbol-price-ticker',
    component: SymbolPriceTicker
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
