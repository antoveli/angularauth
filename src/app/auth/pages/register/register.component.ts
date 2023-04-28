import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  miFormulario: FormGroup = this.fb.group({
    name: ['Test 4', [Validators.required]],
    email: ['test@test.com', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    password: ['123456', [Validators.required, Validators.minLength(6)]]

  })

  constructor(private fb: FormBuilder) { }

  

  registro() {
    console.log(this.miFormulario.valid);
    console.log(this.miFormulario.value);
  }
}
