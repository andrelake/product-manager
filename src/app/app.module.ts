import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { NavBarComponent } from './navbar/nav-bar.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ProductModule,
    RouterModule.forRoot([
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
