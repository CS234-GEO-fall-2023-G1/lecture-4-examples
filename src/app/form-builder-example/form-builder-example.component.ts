import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-builder-example',
  templateUrl: './form-builder-example.component.html',
  styleUrls: ['./form-builder-example.component.css']
})
export class FormBuilderExampleComponent implements OnInit {

  bookForm = this.fb.group({
    title: [''],
    author: [''],
    details: this.fb.group({
      pages: [''],
      price: ['']
    })
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.bookForm.value);
  }

  onBookUpdate(){
    // this.bookForm.setValue({
    //   title: '',
    //   author: '',
    //   details: {
    //     pages: '',
    //     price: ''
    //   }
    // });

    this.bookForm.patchValue({
      title: 'New title',
      details: {
        price: '1000',
      }
    });
  }
}
