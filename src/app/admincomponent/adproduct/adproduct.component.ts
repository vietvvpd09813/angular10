import { Component,OnInit } from '@angular/core';
declare function addproduct():void;

@Component({
  selector: 'app-adproduct',
  standalone: true,
  imports: [],
  templateUrl: './adproduct.component.html',
  styleUrl: './adproduct.component.css'
})
export class AdproductComponent implements OnInit {
 ngOnInit(): void {
   addproduct();
 }
}
