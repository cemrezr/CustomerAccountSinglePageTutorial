import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-accountlist',
  templateUrl: './accountlist.component.html',
  styleUrls: ['./accountlist.component.css']
})
export class AccountlistComponent implements OnInit {
  account;
  filteredAccount;
  id;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id')
    console.log(this.id)
    console.log(this.http.get<Account[]>("https://localhost:44372/api/account"))


    this.http.get("https://localhost:44372/api/account").subscribe(res => {
      this.account = res
      this.account = this.account.filter(item => {

        return item.id == parseInt(this.id)
      })
      console.log(this.account);
      //this.router.navigate(['/customer-account-info'], id);
    })
  }



  ngOnInit() {

  }
}


