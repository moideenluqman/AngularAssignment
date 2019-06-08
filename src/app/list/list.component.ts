import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import{Router} from '@angular/router'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
private data:any;
  constructor(private dataService: DataService,private router:Router) { }

  ngOnInit() {
    this.data=this.dataService.getUsers();
    console.log("data->",this.data);
  }

  toModify(id:any){
    this.router.navigate(['update',id])
  }

}
