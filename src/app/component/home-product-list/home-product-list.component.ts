import { Component } from '@angular/core';
import { ProductitemComponent } from '../productitem/productitem.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-product-list',
  standalone: true,
  imports: [ProductitemComponent, CommonModule],
  templateUrl: './home-product-list.component.html',
  styleUrl: './home-product-list.component.css'
})
export class HomeProductListComponent {
  products = [
    {
      id: 1,
      url: "https://cdn.tgdd.vn/Products/Images/44/322612/s16/macbook-air-15-inch-m3-2024-bac-1-650x650.png",
      name: 'MacBook Air M2 256GB',
      price: 1200,
      isSave:false
    },
    {
      id: 2,
      url: "https://cdn.tgdd.vn/Products/Images/44/322616/s16/macbook-air-15-inch-m3-2024-bac-650x650.png",
      name: 'MacBook Pro 13 M2 ',
      price: 1600,
      isSave:false
    },
    {
      id: 3,
      url: "https://cdn.tgdd.vn/Products/Images/5698/318238/s16/imac-m3-ba%CC%A3c-thumb-650x650.png",
      name: 'Acer Aspire 5',
      price: 700,
      isSave:false
    },
    {
      id: 4,
      url: "https://cdn.tgdd.vn/Products/Images/44/231244/s16/mac-air-m1-13-xam-new-650x650.png",
      name: 'Dell XPS 13',
      price: 1300,
      isSave:false
    },

];

  filteredProducts = this.products;
}
