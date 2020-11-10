import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { ProductListComponent } from './products/product-list.component';
import { StarComponent } from './stars/star.component';
import { NavBarComponent } from './navbar/nav-bar.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import { ProductInfoComponent } from './products/product-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StarComponent,
    NavBarComponent,
    PageNotFoundComponent,
    ProductInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'products/info/:id', component: ProductInfoComponent
      },
      {
        path: 'products', component: ProductListComponent
      },
      {
        path: '', redirectTo: 'products', pathMatch: 'full'
      },
      {
        path: '**', component: PageNotFoundComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
