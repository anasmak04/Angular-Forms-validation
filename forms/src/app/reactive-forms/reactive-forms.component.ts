import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormBuilder, Validators, FormControl  } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
    myForm !: FormGroup;

    FullName = new FormControl('',Validators.required);
    Email = new FormControl('',Validators.required);
    comment = new FormControl('',Validators.required);

  constructor(fb : FormBuilder) { 
      this.myForm = fb.group({
        FullName : this.FullName,
        Email : this.Email,
        comment : this.comment,
      })
  }

  ngOnInit(): void {
  }

  onsubmit(){
    console.table([this.myForm.value]);

  }

  submit(){
    alert('look in the console to see the result binding')

  }

}
