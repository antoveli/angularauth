import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  miFormulario: FormGroup = this.fb.group({
    email: ['test@test.com', [Validators.required,
    Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    password: ['1234456', [Validators.required, Validators.minLength(6)]]

  });



  constructor(private fb: FormBuilder, private router:Router, private authService: AuthService) { }


  login() {
   
    console.log(this.miFormulario.value);
    const {email, password} = this.miFormulario.value;

    this.authService.login(email, password)
    .subscribe( resp => {
      console.log(resp);
    });
    

  }
}
