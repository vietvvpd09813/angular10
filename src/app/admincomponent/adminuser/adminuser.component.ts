import { Component , OnInit } from '@angular/core';
 declare function edituser():void;

@Component({
  selector: 'app-adminuser',
  standalone: true,
  imports: [],
  templateUrl: './adminuser.component.html',
  styleUrl: './adminuser.component.css'
})
export class AdminuserComponent implements OnInit {
 ngOnInit(): void {
   edituser()
 }
}
