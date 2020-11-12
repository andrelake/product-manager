import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{

    _products: Product[] = []
    filteredProducts: Product[] = []
    _search: string


    constructor(private service: ProductService) {}
    

    ngOnInit(): void {
        this.loadAll()
    }

    loadAll(): void {
        this.service.loadAll().subscribe({
            next: products => {
                this._products = products
                this.filteredProducts = this._products
            },
            error: err => console.log('Error loading list of products', err)
        })
    }

    get filter() {
        return this._search
    }

    set filter(prop: string) {
        this._search = prop
        this.filteredProducts = this._products
                                .filter((product: Product) => product.name.toLocaleLowerCase().indexOf(this._search.toLocaleLowerCase())>-1)
    }
}