import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  login(username: any, password: any) {
    const data = {
      username,
      password,
    };

    return this.http.post('http://technical.test.prvak.co.in/api/login', data);
  }

  register(
    username: any,
    password: any,
    empid: any,
    name: any,
    email: any,
    phone: any,
    designation: any,
    address: any
  ) {
    const data = {
      username,
      password,
      empid,
      name,
      email,
      phone,
      designation,
      address,
    };

    return this.http.post(
      'http://technical.test.prvak.co.in/api/employeeregister',
      data
    );
  }

  logout(username: any, authkey: any) {
    const data = {
      username,
      authkey,
    };

    return this.http.post('http://technical.test.prvak.co.in/api/logout', data);
  }
}
