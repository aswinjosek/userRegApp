import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    password: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]*')]],
  });

  constructor(
    private fb: FormBuilder,
    private ds: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    var username = this.loginForm.value.username;
    var password = this.loginForm.value.password;

    if (this.loginForm.valid) {
      this.ds.login(username, password).subscribe(
        (result: any) => {
          if (result) {
            
            if(result.success==true){
              localStorage.setItem('username', username);
  
  
              alert(result.message);
              this.router.navigateByUrl('welcome');
              localStorage.setItem('authkey', result.data[0].auth_key);
            }
            else{
              alert(result.message)
            }
            

          }
        });
    } else {
      alert('invalid Form');
    }
  }
}
