import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { Book } from '../shared/models/book-mode';

@Component({
  selector: 'app-book-management',
  templateUrl: './book-management.component.html',
  styleUrls: ['./book-management.component.css']
})
export class BookManagementComponent implements OnInit {

  bookList: Book[];

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
    this.addresses.push(this.fb.control(''));
  }

  onSubmit(){
    let newBook: Book = {
      title: this.bookForm.controls.title.value,
      author: this.bookForm.controls.author.value,
      details: {
        pages: +this.bookForm.controls.details.value.pages,
        price: +this.bookForm.controls.details.value.price
      },
      addresses: this.bookForm.controls.addresses.value,
    }

    this.bookList.push(newBook);
  }

  constructor(private fb: FormBuilder) { 
    this.bookList = [
      {title: "title1", author: "author1", details: {pages: 100, price: 50}, addresses: []}
    ];
  }

  ngOnInit(): void {
  }

}
