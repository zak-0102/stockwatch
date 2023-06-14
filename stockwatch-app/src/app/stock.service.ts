import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class StockService {


//Create a contructor that will take in the HttpClient
 constructor(private http: HttpClient) { }


    //Metod to get stock data by calling the API https://api.twelvedata.com/stocks?countyr=${country} by passing in the country as a parameter\
    //This method will return an observable

    getStocks(country: string): Observable<any> {
      return this.http.get(`https://api.twelvedata.com/stocks?country=${country}`);
    }

    //Method to call https://api.twelvedata.com/time_series?symbol=${symbol}&interval=1min&apikey=0975893c35e04bc59419ad713796a678&outputsize=20 by passing symbol as parameter
    //This method will return an observable

    getStockTimeSeries(symbol: string) :Observable<any>  {
      return this.http.get(`https://api.twelvedata.com/time_series?symbol=${symbol}&interval=1min&apikey=0975893c35e04bc59419ad713796a678&outputsize=20`);
    }

     // Method to call http://localhost:3000/stock by passing stock as parameter
    
    addWishlist(stock: any):any {
       //headers
      const headers = { 'content-type': 'application/json'}
      //Convert the stock object to JSON
      const body = JSON.stringify(stock);
      return this.http.post('http://localhost:3000/stock', body, {'headers': headers});
    }

    //Method to call http://localhost:3000/stock by passing stock as parameter

    getWishlist() :Observable<any>  {
      return this.http.get('http://localhost:3000/stock');
    }

}
