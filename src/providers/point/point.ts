import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PointProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PointProvider {
  private balance;
  private transactions = [];

  constructor(public http: HttpClient) {
    console.log('Hello PointProvider Provider');
    this.balance = 10;
  }

  payMoney(amount){
    this.balance = this.balance - amount;
  }

  recieveMoney(amount){
    this.balance = this.balance + amount;
  }

  addTransaction(amount){
    this.transactions.push("-" + amount);
  }

  getTransactions(){
    return this.transactions;
  }

  getBalance(){
    return this.balance;
  }

}
