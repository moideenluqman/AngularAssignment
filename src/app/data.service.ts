import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: any;
  constructor() {
    // this.data = [
    //   {
    //     name: 'albert',
    //     email: 'albert@gmail.com',
    //     website: 'http://www.albert.com',
    //     age: "22",
    //     gender: 'm',
    //     address: 'utopia city',
    //     dob: '1993-12-11'
    //   }];
    this.data= this.retriveData()||[];
      // .subscribe((data: any) => {
      //   this.data = JSON.parse(data);
      // })
    //   {
    //     name: 'albert pinto',
    //     email: 'albertPinto@gmail.com',
    //     website: 'http://www.albert-pinto.com',
    //     age: "24",
    //     gender: 'm',
    //     address: 'utopia city',
    //     dob: '1993-12-10'
    //   },
    //   {
    //     name: 'albert jose',
    //     email: 'josealbert@gmail.com',
    //     website: 'http://www.jose-albert.com',
    //     age: "43",
    //     gender: 'm',
    //     address: 'utopia city',
    //     dob: '1993-12-09'
    //   }
    // ];
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
