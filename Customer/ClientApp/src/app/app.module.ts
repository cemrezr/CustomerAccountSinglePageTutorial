import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { CustomerComponent } from './customer.component';
import { ListcustomerComponent } from './listcustomer/listcustomer.component';
import { AccountlistComponent } from './account-list/accountlist/accountlist.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    CustomerComponent,
    ListcustomerComponent,
    AccountlistComponent
  ],
  imports: [
    
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ListcustomerComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'customer-account-info/:id', component: AccountlistComponent }
    //  { path: 'customer-account-info/:id', component: AccountlistComponent }
      


    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
