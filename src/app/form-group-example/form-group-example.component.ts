import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-group-example',
  templateUrl: './form-group-example.component.html',
  styleUrls: ['./form-group-example.component.css']
})
export class FormGroupExampleComponent implements OnInit {

  //-----form group
  bookForm = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
    pages: new FormControl('')
  });

  onSubmit(){
    console.log(this.bookForm.value);
  }

  //----nested form group
  bookNestedForm = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
    details: new FormGroup({
      pages: new FormControl(''),
      price: new FormControl('')
    })
  });

  onSubmitNestedFormGroup(){
    console.log(this.bookNestedForm.value);
  }

  onBookUpdate(){
    // this.bookNestedForm.setValue({
    //   title: '',
    //   author: '',
    //   details: {
    //     pages: '',
    //     price: ''
    //   }
    // });

    this.bookNestedForm.patchValue({
      title: 'New title',
      details: {
        price: '1000',
      }
    });
  }


  constructor() { }

  ngOnInit(): void {
  }
}
