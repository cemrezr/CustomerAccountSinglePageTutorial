import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs';
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-listcustomer',
  templateUrl: './listcustomer.component.html',
  styleUrls: ['./listcustomer.component.css']
})
export class ListcustomerComponent implements OnInit {
  constructor(private http: HttpClient) { }
    customers;
    template;
    filteredCustomer;
  

  ngOnInit() {
    }
    listCustomer():void {

        console.log(this.http.get<Customer[]>("https://localhost:44372/api/customer"))

        this.http.get("https://localhost:44372/api/customer").subscribe(res => {
            this.customers = res
            this.customers = this.customers.filter(item => {

             return  item.id == parseInt(this.filteredCustomer)
            })
            console.log(this.filteredCustomer);
        })

       
  }
}
