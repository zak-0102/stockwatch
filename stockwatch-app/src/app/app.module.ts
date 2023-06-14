import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { TimedComponent } from './timed/timed.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ToolbarComponent } from './toolbar/toolbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WishlistComponent,
    TimedComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCardModule,
    HttpClientModule,
    MatSnackBarModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
