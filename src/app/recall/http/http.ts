import { Component, inject } from '@angular/core';
import { HttpService } from './http.service';
import { ReactiveFormsModule, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-http',
  imports: [ReactiveFormsModule],
  templateUrl: './http.html',
  styleUrl: './http.css',
})
export class Http {
  httpService = inject(HttpService);

  fb = inject(FormBuilder);

  // hierarchy will be the

  // formGroup
  //   formControl

  userData!: any;

  empForm = this.fb.group({
    empId: [0, Validators.required],
    personalInfo: this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', Validators.email],
      phone: ['', Validators.maxLength(10)],
      isActive: ['', Validators.required],
    }),
  });

  ngOnInit() {
    this.httpService.getUserData();

    console.log(this.empForm.value);
  }

  submit() {
    console.log(this.empForm.invalid);

    this.empForm.get('empId')?.setValue(3)
    this.httpService.addUser(this.empForm.value).subscribe({
      next(value) {
        console.log(value);
      },
      error(err) {
        
      },
    })
    
  }
}
