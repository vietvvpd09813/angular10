import { Component ,OnInit } from '@angular/core';
declare function addcategory():void

@Component({
  selector: 'app-adcategory',
  standalone: true,
  imports: [],
  templateUrl: './adcategory.component.html',
  styleUrl: './adcategory.component.css'
})
export class AdcategoryComponent  implements OnInit {
ngOnInit(): void {
  addcategory()
}
}
