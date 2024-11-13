import { Component } from '@angular/core';
import { SliderComponent } from '../component/slider/slider.component';
import { RouterOutlet } from '@angular/router';
import { StatisticalComponent } from '../component/statistical/statistical.component';
import { HomeProductListComponent } from '../component/home-product-list/home-product-list.component';
import { BannerComponent } from '../component/banner/banner.component';
import { ProducthotComponent } from '../component/producthot/producthot.component';
import { CommonModule } from '@angular/common';
import { ProductnewComponent } from '../component/productnew/productnew.component';
import { ListproductnewComponent } from "../component/listproductnew/listproductnew.component";
import { OrderComponent } from '../component/order/order.component';


@Component({
  selector: 'home',
  standalone: true,
  imports: [RouterOutlet, SliderComponent, StatisticalComponent, HomeProductListComponent, BannerComponent, ProducthotComponent, StatisticalComponent, CommonModule, ProductnewComponent, ListproductnewComponent,OrderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
