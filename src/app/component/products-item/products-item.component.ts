import { Component,Input,OnInit } from '@angular/core';
declare function btnlist() : void;

@Component({
  selector: 'app-products-item',
  standalone: true,
  imports: [],
  templateUrl: './products-item.component.html',
  styleUrl: './products-item.component.css'
})
export class ProductsITEMComponent  implements OnInit {
  @Input() name ='';
  @Input() id ='';
  @Input() price = 0;
  @Input( ) url = '';
  ngOnInit(): void {
    btnlist();
  }
}
