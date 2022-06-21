import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class SymbolPriceTickerService {
  constructor(private http: HttpClient) {

  }

  getSymbolPriceTicker(symbol) {
    return this.http.get(
      'https://testnet.binance.vision/api/v3/ticker/price?symbol=' +symbol
    );
  }
}
