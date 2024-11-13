import { CommonModule } from '@angular/common';
import { Component, Input , Output} from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-productnew',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productnew.component.html',
  styleUrl: './productnew.component.css'
})
export class ProductnewComponent {
  @Input() name ='';
  @Input() idproduct = 0;
  @Input() price = 0;
  @Input( ) url = '';
  @Input() isSave = false;
  @Output()  isSaveEvent = new EventEmitter<any>();


handleClick(){
 this.isSaveEvent.emit({id:this.idproduct , isSave: !this.isSave})
}
}
