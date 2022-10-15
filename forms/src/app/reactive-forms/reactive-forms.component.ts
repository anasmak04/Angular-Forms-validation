import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormBuilder  } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
    myForm !: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
