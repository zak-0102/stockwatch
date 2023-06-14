import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StockService } from '../stock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {

// variable to store stockDetails
stockDetails: any;

// variable to store country names ['India', 'United States', 'China', 'Japan', 'Australia', 'Canada']
countries = ['India', 'United States', 'China', 'Japan', 'Australia', 'Canada', 'United Kingdom'];
// constructor to inject StockService, Router and MatSnackBar
constructor (private stockService: StockService, private snackBar: MatSnackBar, private router: Router) { }


// on init method to get stocks from India and store in stockDetails by calling getStocks method of StockService
ngOnInit(): void {

  this.stockService.getStocks('India').subscribe((data) => {
    this.stockDetails = data.data.slice(20,40);
  });
}
 // method to get stocks from selected country and store in stockDetails by calling getStocks method of StockService
getStocks(country: string) {
  this.stockService.getStocks(country).subscribe((data) => {
    this.stockDetails = data.data.slice(20,40);
  });
}
 // method to add stock to wishlist by calling postWishList method of StockService  
addWishlist(stock: any) {
  this.stockService.addWishlist(stock).subscribe((data:any)=> 
  {
    console.log(data);
    this.snackBar.open("Stock added to wishlist", 'Close', {duration: 2000});
  });
}

 // method to navigate to timed component by passing symbol as parameter
getStockTimeSeries(symbol: string) {
  this.router.navigate([`/time-series/${symbol}`]);
}

}
