import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { SymbolPriceTickerService } from "../services/symbol-price-ticker.service";

@Component({
  selector: 'app-symbol-price-ticker',
  templateUrl: './symbol-price-ticker.component.html',
  styleUrls: ['./symbol-price-ticker.component.css']
})
export class SymbolPriceTicker implements OnInit {

  public symbolpricetickerForm: FormGroup;
  public sptData: any;

  constructor(
    private symbolpricetickerservice: SymbolPriceTickerService,
    private symbolpricetickerBuilder: FormBuilder
  ) {

  }

  ngOnInit(): void {
    this.symbolpricetickerForm = this.symbolpricetickerBuilder.group({
      symbol: [""],
    });
  }

  sendSymbolPriceTicker(formValues) {
    this.symbolpricetickerservice.getSymbolPriceTicker(formValues.symbol).subscribe(data => {
      this.sptData = data;
            console.log('formValues', formValues)
      console.log(this.sptData);
    })

  }
}
