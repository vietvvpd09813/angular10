import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { RouterLink } from '@angular/router';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterLink,RegisterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username : string =  '';
  pass : string =  ''

  login(){
console.log(this.username , this.pass);

  }
}
