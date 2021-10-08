import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  constructor(private ds: DataService, private router: Router) {}
  name:any=localStorage.getItem("username")

  ngOnInit(): void {}

  logout() {
    var username = localStorage.getItem('username');
    var authkey = localStorage.getItem('authkey');
    this.ds.logout(username, authkey).subscribe(
      (result: any) => {
        if (result) {
          alert(result.message);
          this.router.navigateByUrl('');
          localStorage.removeItem('authkey');
          localStorage.removeItem('username');
        }
      },
      (result) => {
        alert(result.error.message);
      }
    );
  }
}
