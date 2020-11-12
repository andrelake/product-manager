import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-info.component.html',
    styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit{

    product: Product

    constructor(
        private activatedRoute: ActivatedRoute,
        private productService: ProductService
        ) { }

    ngOnInit(): void {

        this.productService.findById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
            next: product => this.product = product,
            error: err => console.log('Error loading product by id', err)
        })  // + cast para number
    }

    save(): void {
        this.productService.save(this.product).subscribe({
            next: product => console.log('Product saved', product),
            error: err => console.log('Error saving product', err)
        })
    }

    delete(): void {
        this.productService.delete(this.product).subscribe({
            next: _ => console.log('Product deleted'),
            error: err => console.log('Error deleting product', err)
        })
    }
}