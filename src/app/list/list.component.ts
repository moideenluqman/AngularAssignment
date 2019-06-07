import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
private data:any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.data=this.dataService.getUsers();
  }

}
