import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-info.component.html'
})
export class ProductInfoComponent implements OnInit{

    product: Product

    constructor(
        private activatedRoute: ActivatedRoute,
        private productService: ProductService
        ) { }

    ngOnInit(): void {

        this.product = this.productService.findById(+this.activatedRoute.snapshot.paramMap.get('id'))  // + cast para number
    }

    save(): void {
        this.productService.save(this.product)
    }
}