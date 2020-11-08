import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html'
})

export class ProductListComponent implements OnInit{

    products: Product[] = []

    ngOnInit(): void {
        this.products = [
            {
                id: 1,
                name: 'Lighter',
                brand: 'Mr Smoke',
                price: 50.00,
                warranty: 90,
                imageUrl: '/assets/img/isqueiro.jpg',
                code: 'LT_MRSMOKE',
                rating: 4
            },
            {
                id: 2,
                name: 'Eletric Cigar',
                brand: 'Marlbroto',
                price: 230.00,
                warranty: 120,
                imageUrl: '/assets/img/cigarro.jpg',
                code: 'EC_MARLBROTO',
                rating: 3.5
            }
        ]
    }

}