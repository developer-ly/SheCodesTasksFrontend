import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
 names :any = [
   "Libya",
  "something else" ,
"LA" ];

  constructor() { }

  ngOnInit() {
  }

}
