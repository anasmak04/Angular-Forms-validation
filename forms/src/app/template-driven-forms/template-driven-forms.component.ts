import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {
  FullName!:string;
  Email!: string;
  comment!:string;

  constructor() { }

  ngOnInit(): void {
  }

  onsubmit(){
    console.table([this.FullName, this.Email, this.comment]);

  }
  submit(){
    alert('look in the console to see the result binding')
  }
}
