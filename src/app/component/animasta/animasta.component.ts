import { Component } from '@angular/core';
import { AnimastaitemComponent } from '../animastaitem/animastaitem.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-animasta',
  standalone: true,
  imports: [AnimastaitemComponent,CommonModule],
  templateUrl: './animasta.component.html',
  styleUrl: './animasta.component.css'
})
export class AnimastaComponent {
// Mảng sản phẩm phụ kiện điện thoại
  Items = [
  {
    id: 1,
    name: 'Tai nghe Bluetooth',
    price: 500000,  // Giá sản phẩm (VNĐ)
    url:'https://cdn.tgdd.vn/Products/Images/9499/230315/s16/adapter-sac-type-c-20w-cho-iphone-ipad-apple-mhje3-101021-023343-650x650.png'
  },
  {
    id: 2,
    name: 'Ốp lưng iPhone 13',
    price: 200000,  // Giá sản phẩm (VNĐ)
    url:'https://cdn.tgdd.vn/Products/Images/1662/325750/s16/bao-da-smart-folio-cho-ipad-pro-m4-11-inch-thumb-650x650.png'
  },
  {
    id: 3,
    name: 'Cáp sạc Lightning',
    price: 150000,  // Giá sản phẩm (VNĐ)
    url:'https://cdn.tgdd.vn/Products/Images/9499/230315/s16/adapter-sac-type-c-20w-cho-iphone-ipad-apple-mhje3-101021-023343-650x650.png'
  },
  {
    id: 4,
    name: 'Pin dự phòng 10000mAh',
    price: 350000,  // Giá sản phẩm (VNĐ)
    url:'https://cdn.tgdd.vn/Products/Images/1662/325750/s16/bao-da-smart-folio-cho-ipad-pro-m4-11-inch-thumb-650x650.png'
  }
];


 Data = this.Items;


}
