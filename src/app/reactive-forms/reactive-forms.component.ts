import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {
  formdata: FormGroup;
  formStatus = 'Not Submitted';
  submittedValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  constructor() {
    this.formdata = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  onClickSubmit() {
    if (this.formdata.valid) {
      this.formStatus = 'Form Submitted';
      this.submittedValues = this.formdata.value;
    } else {
      this.formStatus = 'Form Invalid, Please Correct Errors';
      this.formdata.markAllAsTouched();
    }
  }
}
