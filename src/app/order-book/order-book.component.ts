import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { OrderBookService } from "../services/order-book.service";

@Component({
  selector: 'app-order-book',
  templateUrl: './order-book.component.html',
  styleUrls: ['./order-book.component.css']
})
export class OrderBook implements OnInit {

  public orderbookForm: FormGroup;
  public orderbookData: any;

  constructor(
    private orderbookservice: OrderBookService,
    private formBuilder: FormBuilder
  ) {

  }

  ngOnInit(): void {
    this.orderbookForm = this.formBuilder.group({
      symbol: [''],
    })
  }

  sendOrderBook(formValues) {
    this.orderbookservice.getOrderBook(formValues.symbol).subscribe((data: any) => {
      this.orderbookData = (data.bids.slice(0, 5));
      console.log(formValues.symbol)
      console.log('orderbookDataax', (data))
      console.log('orderbookDataa', (this.orderbookData))
    })
  }
}
