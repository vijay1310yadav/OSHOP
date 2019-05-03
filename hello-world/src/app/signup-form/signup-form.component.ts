import { UserNameValidators } from './username.validators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';


@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  form = new FormGroup({
    'username': new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      UserNameValidators.noSpaces,
    ], UserNameValidators.UniqueUsername),
    'password': new FormControl('', Validators.required),
  })

  get username() {
    return this.form.get('username');
  }

}
