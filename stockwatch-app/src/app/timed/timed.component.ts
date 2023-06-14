import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-timed',
  templateUrl: './timed.component.html',
  styleUrls: ['./timed.component.css']
})
export class TimedComponent implements OnInit  {

//variable to store symbol
  symbol: string = '';
  stockTimeSeries: any;
  //constructor to inject the stock service, Activate Route
  constructor(private stockService: StockService, private route: ActivatedRoute) { }

  //oninit to make to get time series data by suscribing to getTimeSeries method in stock service
  //get symbol data to activate route

  ngOnInit(): void {
    this.symbol = this.route.snapshot.params['symbol'];
    this.stockService. getStockTimeSeries(this.symbol).subscribe((data) => {
      this.stockTimeSeries = data.values;

    });
  } 
}
