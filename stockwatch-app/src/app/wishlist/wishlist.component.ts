import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {


  //variable to store wishlist data
  wishlist: any;
  //constructor to injext the service
  constructor(private stockService: StockService,private router: Router) { }

//on init to get wishlist by subscribing to getWishlist method in the stock service
  ngOnInit() {
    this.stockService.getWishlist().subscribe(data=> {
      console.log(data);
      this.wishlist = data;
    });
  }
  //method to route to /time-series page by passing symbol as parameter
  getStockTimeSeries(symbol: any) {
    this.router.navigate(['/time-series', symbol]);
  }


}
