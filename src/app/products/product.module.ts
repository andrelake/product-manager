import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { StarModule } from '../shared/component/stars/star.module';
import { ProductInfoComponent } from './product-info.component';
import { ProductListComponent } from './product-list.component';

@NgModule({
    declarations: [
        ProductListComponent,
        ProductInfoComponent,
        
    ],
    imports: [
        CommonModule,
        FormsModule,
        StarModule,
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