import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: any;
  constructor() {

    this.data= this.retriveData()||[];
  }
  getUsers() {
    // return this.data;
    return this.retriveData();
  }

  addUser(userData: object) {
    this.data.push(userData);
    return this.storeData(this.data);
  }
  modifyUser(id: number, userData: object) {
    this.data[id] = userData;
    return this.storeData(this.data);
  }
  getSingleItem(id: number) {
    return this.data[id];
  }

  storeData(data: any) {
    return localStorage.setItem('user-data', JSON.stringify(data));
  }
  retriveData() {
    return JSON.parse(localStorage.getItem('user-data'));
  }

}
