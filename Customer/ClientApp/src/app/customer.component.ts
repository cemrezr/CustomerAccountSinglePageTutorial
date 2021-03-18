import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './models/customer';

@Component({
  selector: 'app-value',
  templateUrl: './customer.component.html'
})

export class CustomerComponent implements OnInit {
  constructor(private http: HttpClient) { }
  customers: Customer[]=[];

  ngOnInit() {

    this.getCustomers()
  }

  getCustomers() {
    return this.http.get<Customer[]>("https://localhost:44372/api/customer")
  }
}
