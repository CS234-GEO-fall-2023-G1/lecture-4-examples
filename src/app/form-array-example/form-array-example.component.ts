import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-array-example',
  templateUrl: './form-array-example.component.html',
  styleUrls: ['./form-array-example.component.css']
})
export class FormArrayExampleComponent implements OnInit {

  bookForm = this.fb.group({
    title: [''],
    author: [''],
    details: this.fb.group({
      pages: [''],
      price: ['']
    }),
    addresses: this.fb.array([
      this.fb.control('')
    ])
  });

  get addresses(){
    return this.bookForm.get('addresses') as FormArray
  }

  addAddress(){
    this.addresses.push(this.fb.control(''))
  }

  onSubmit(){
    console.log(this.bookForm)
  }


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
