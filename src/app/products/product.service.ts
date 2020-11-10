import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    loadAll(): Product[] {
        return PRODUCTS
    }

    findById(id: number): Product {
        return PRODUCTS.find((product: Product) => product.id === id)
    }

    save(product: Product): void {
        if(product.id) {
            const index = PRODUCTS.findIndex((productx: Product) => productx.id === product.id)
            PRODUCTS[index] = product
        }
    }
}

var PRODUCTS: Product[] = [
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
    },
    {
        id: 3,
        name: 'Ball',
        brand: 'Adidas',
        price: 100.00,
        warranty: 90,
        imageUrl: '/assets/img/bola.jpg',
        code: 'BL_ADIDAS',
        rating: 5
    },
    {
        id: 4,
        name: 'T-Shirt',
        brand: 'Nike',
        price: 250.00,
        warranty: 120,
        imageUrl: '/assets/img/camiseta.png',
        code: 'TS_NIKE',
        rating: 3.5
    },
    {
        id: 5,
        name: 'Cap',
        brand: 'Puma',
        price: 150.00,
        warranty: 90,
        imageUrl: '/assets/img/bone.jpg',
        code: 'CP_PUMA',
        rating: 3
    },
    {
        id: 6,
        name: 'Sneaker',
        brand: 'Nike',
        price: 530.00,
        warranty: 120,
        imageUrl: '/assets/img/tenis.jpg',
        code: 'SK_Nike',
        rating: 5
    }
]