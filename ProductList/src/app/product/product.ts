import { Component } from '@angular/core';
import { CurrencyPipe,NgClass,NgFor } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CurrencyPipe,NgClass,NgFor],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
  products = [
    { name: 'Laptop', price: 149900, onSale :true},
    { name: 'Headphones', price: 199 ,onSale :false},
    { name: 'Smartphone', price: 24000,onSale :true},
    { name: 'Monitor', price: 34998 ,onSale :false},
  ];
}

