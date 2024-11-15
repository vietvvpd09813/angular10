import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HomeProductListComponent } from "../home-product-list/home-product-list.component";
import { ProductitemComponent } from '../productitem/productitem.component';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { BannerComponent } from '../banner/banner.component';
import { ProductsITEMComponent } from '../products-item/products-item.component';

declare function btnlist():void


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [HomeProductListComponent, ProductitemComponent, CommonModule, FormsModule,BannerComponent,ProductsITEMComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
ngOnInit(): void {
  btnlist();
}
constructor (private router:Router){}
  searchQuery: string = '';
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
      name: 'MacBook Pro 13 M2 512GB',
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
      name: 'MacBook Pro 13 M2 512GB',
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
      name: 'MacBook Pro 13 M2 512GB',
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


  onSearch() {
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    this.router.navigate(['/products'],{
      queryParams: {q:this.searchQuery}
    })
  }


}
