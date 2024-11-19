import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './component/login/login.component';
import { ProductsComponent } from './component/products/products.component';
import { PagenotComponent } from './component/pagenot/pagenot.component';
import { DetailComponent } from './component/detail/detail.component';
import { RootComponent } from './root/root.component';
import { AdminComponent } from './admincomponent/admin/admin.component';


import { AdminuserComponent } from './admincomponent/adminuser/adminuser.component';
import { CartComponent } from './component/cart/cart.component';
import { PayComponent } from './component/pay/pay.component';
import { RegisterComponent } from './component/register/register.component';
import { ProductnewComponent } from './component/productnew/productnew.component';
import { OrderComponent } from './component/order/order.component';
import { TextComponent } from './admincomponent/text/text.component';
import { AdcategoryComponent } from './admincomponent/adcategory/adcategory.component';
import { AdproductComponent } from './admincomponent/adproduct/adproduct.component';
import { AdcommentComponent } from './admincomponent/adcomment/adcomment.component';
import { AdorderComponent } from './admincomponent/adorder/adorder.component';
import { CanActivate } from '@angular/router';
import { DashboardComponent } from './admincomponent/dashboard/dashboard.component';




const canlogin: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  return false
  // canActivate  :[canlogin],
}

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '',
    component: RootComponent,
    children: [
      { path: 'home',component: HomeComponent },
      { path: 'products/:id', component: DetailComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'pay', component: PayComponent },
      { path: 'order', component: OrderComponent },
      { path: 'productnew', component: ProductnewComponent },

      { path: '', redirectTo: '/home', pathMatch: 'full' },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    pathMatch: "prefix",
    children: [

      { path: '', component: DashboardComponent },
      { path: 'users', component: AdminuserComponent },
      { path: 'text', component: TextComponent },
      { path: 'adcategory', component: AdcategoryComponent },
      { path: 'adproduct', component: AdproductComponent },
      { path: 'adcomment', component: AdcommentComponent },
      { path: 'adorder', component: AdorderComponent },


    ],
  },

  { path: '**', component: PagenotComponent },
];
