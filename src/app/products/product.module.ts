import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StarComponent } from '../stars/star.component';
import { ProductInfoComponent } from './product-info.component';
import { ProductListComponent } from './product-list.component';

@NgModule({
    declarations: [
        ProductListComponent,
        ProductInfoComponent,
        StarComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: 'products/info/:id', component: ProductInfoComponent
              },
              {
                path: 'products', component: ProductListComponent
              },
        ])
    ]
})
export class ProductModule {

}