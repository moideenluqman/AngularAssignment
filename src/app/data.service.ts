import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: any;
  constructor() {
    this.data = [
      {
        name: 'albert',
        email: 'albert@gmail.com',
        website: 'http://www.albert.com',
        age: "22",
        gender: 'm',
        address: 'utopia city',
        dob: '16/12/1993'
      },
      {
        name: 'albert pinto',
        email: 'albertPinto@gmail.com',
        website: 'http://www.albert-pinto.com',
        age: "24",
        gender: 'm',
        address: 'utopia city',
        dob: '16/12/1992'
      },
      {
        name: 'albert jose',
        email: 'josealbert@gmail.com',
        website: 'http://www.jose-albert.com',
        age: "43",
        gender: 'm',
        address: 'utopia city',
        dob: '16/12/1995'
      }
    ];
  }
  getUsers() {
    return this.data;
  }

  setUser(userData: object) {
    this.data.push(userData);
  }
  modifyUser(id: number, userData: object) {
    this.data[id]=userData;
  }
}
