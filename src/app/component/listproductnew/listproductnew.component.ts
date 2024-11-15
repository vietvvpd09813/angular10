import { Component } from '@angular/core';
import { ProductnewComponent } from '../productnew/productnew.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-listproductnew',
  standalone: true,
  imports: [ProductnewComponent,CommonModule],
  templateUrl: './listproductnew.component.html',
  styleUrl: './listproductnew.component.css'
})
export class ListproductnewComponent {

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
      id: 5,
      url: "https://cdn.tgdd.vn/Products/Images/44/318230/s16/mac-topzone-promax-black-650x650.png",
      name: 'HP Spectre x360',
      price: 1400,
      isSave:false
    },
    {
      id: 6,
      url: "https://cdn.tgdd.vn/Products/Images/5698/309281/s16/mac-studio-m2-max-2023-150623-105154-650x650.png",
      name: 'Lenovo ThinkPad X1 Carbon',
      price: 1800,
      isSave:false
    },
    {
      id: 7,
      url: "https://cdn.tgdd.vn/Products/Images/44/309016/s16/mac-air-15-xam-new-650x650.png",
      name: 'Surface Laptop 5',
      price: 1500,
      isSave:false
    },
    {
      id: 8,
      url: "https://cdn.tgdd.vn/Products/Images/44/309016/s16/mac-air-15-xam-new-650x650.png",
      name: 'Asus ZenBook Flip',
      price: 1100,
      isSave:false
    }
];

 getdata(data:any){
  console.log(data);
  let index = this.products.findIndex((item)=>{
    return item.id == data.id;
  })
   this.products[index].isSave= data.isSave;

 }
  filteredProducts = this.products;

}
