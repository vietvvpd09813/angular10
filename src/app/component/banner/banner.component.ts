import { Component, OnInit } from '@angular/core';
declare function slider2():void

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent implements OnInit {
 ngOnInit(): void {
   slider2()
 }
}
