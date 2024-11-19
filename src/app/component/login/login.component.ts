import {OnInit, Component } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms'
import { RouterLink } from '@angular/router';

declare function  loginaaa():void
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit  {
  ngOnInit(): void {
    loginaaa();
  }
//   username : string =  '';
//   pass : string =  ''

  login(formLogin: NgForm){
    alert(formLogin.value);

}

//   }


}
