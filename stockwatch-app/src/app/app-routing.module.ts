import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { TimedComponent } from './timed/timed.component';


//Define aroutes
// Path: '' is the default route
// Path: 'home' is the home route
// Path: '/wishlist' is the wishlist route
// Path: 'time-series/:symabol' is the timed route
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  { path: 'wishlist', component: WishlistComponent },
  { path: 'time-series/:symbol', component: TimedComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
