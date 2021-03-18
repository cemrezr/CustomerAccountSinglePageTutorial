import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listcustomer',
  templateUrl: './listcustomer.component.html',
  styleUrls: ['./listcustomer.component.css']
})
export class ListcustomerComponent implements OnInit {
  
  constructor(private http: HttpClient, private router: Router) { }
  customers;
  template;
  filteredCustomer;
  account;






  ngOnInit() {
  }
  listCustomer(): void {

    console.log(this.http.get<Customer[]>("https://localhost:44372/api/customer"))

    this.http.get("https://localhost:44372/api/customer").subscribe(res => {
      this.customers = res
      this.customers = this.customers.filter(item => {

        return item.id == parseInt(this.filteredCustomer)
      })
      console.log(this.filteredCustomer);
    })
    
  }
  listAccount(id): void {

    console.log(this.http.get<Account[]>("https://localhost:44372/api/account"))


    this.http.get("https://localhost:44372/api/account").subscribe(res => {
      this.account = res
      this.account = this.account.filter(item => {

        return item.id == parseInt(id)
      })
      console.log(this.account);
      //this.router.navigate(['/customer-account-info'], id);
    })

  }
}



