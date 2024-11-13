import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SliderComponent } from './component/slider/slider.component';
import { StatisticalComponent } from './component/statistical/statistical.component';
import { LoginComponent } from './component/login/login.component';
import { ProductsComponent } from './component/products/products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent,HeaderComponent,FooterComponent,SliderComponent,StatisticalComponent,LoginComponent,ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular10';
}
