import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-control-example',
  templateUrl: './form-control-example.component.html',
  styleUrls: ['./form-control-example.component.css']
})
export class FormControlExampleComponent implements OnInit {

  title = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

  updateTitle(){
    this.title.setValue('new title');
  }
}
