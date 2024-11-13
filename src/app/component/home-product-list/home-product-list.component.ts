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
      url: "https://cdn.tgdd.vn/Products/Images/42/329143/s16/iphone-16-pro-sa-mac-650x650.png",
      name: 'iPhone 16 Pro 128GB',
      price: '28.990.000₫'
    },
    {
      id: 2,
      url: "https://cdn.tuoitre.vn/zoom/700_700/471584752817336320/2023/4/25/son-tung-1682429100141711717000-181-0-1080-1717-crop-16824291249331603053151.jpg",
      name: 'Sơn tùng',
      price: '150'
    },
    {
      id: 2,
      url:"https://cdn.tuoitre.vn/zoom/700_700/2021/6/12/hieuthuhai-2-16234572917851280326311-crop-1623457321420383967555.jpg",
      name: 'hiếu thứ hai',
      price: '150'
    },
    {
      id: 2,
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHDkXbNh0WKfHKG8loKAUdl_rmONhSBL6UkQ&s",
      name: 'jack',
      price: '5 củ'
    },

  ];

  filteredProducts = this.products;
}
