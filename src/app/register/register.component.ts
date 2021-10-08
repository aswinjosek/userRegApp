import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = this.fb.group({
    username: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    password: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]*')]],
    empid: ['', [Validators.required, Validators.pattern('[0-9A-Za-z]*')]],
    name: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]*')]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(10), Validators.pattern('[0-9]*')]],
    designation: ['', [Validators.required]],
    address: ['', [Validators.required, Validators.pattern('[A-Za-z]*')]],



  });

  constructor(private fb:FormBuilder,private ds:DataService, private router:Router) { }

  ngOnInit(): void {
  }


  register(){

    var username = this.registerForm.value.username;
    var password = this.registerForm.value.password;
    var empid = this.registerForm.value.empid;
    var name = this.registerForm.value.name;
    var email = this.registerForm.value.email;
    var phone = this.registerForm.value.phone;
    var designation = this.registerForm.value.designation;
    var address = this.registerForm.value.address;




    if (this.registerForm.valid) {
      this.ds.register(username, password, empid, name,email,phone,designation,address).subscribe(
        (result: any) => {
          if (result) {
            alert(result.message);
          }
        },
        (result:any) => {
          alert(result.error.message);
        }
      );
    } else {
      alert('invalid form');
    }
  }

  
}
