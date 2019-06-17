import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

  import { from } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tasks : any;
  items :any;
  name : String = "";
  description : String ="";
  title : String ="";
  status : String = "Todo";
  // priorities = [0 , 1 , 2]


  create(){
    if(this.name != "" &&  this.title != "")
  this.tasks.push({createdBy : this.name , description : this.description , title : this.title , status : this.status})
  }
  // deadline : Date = new Date(1998 , 6 ,7)
  constructor(private Data : DataService) { }

  ngOnInit() {
    // console.log(this.deadline)
    this.items = ["Todo" ,"InProgress" , "Done"]

    this.tasks = [
      {
        title : "clean the car",
        description : "wash the wheels, organise it in the inside and clean the dust",
        createdBy : "bofa",
        status : "Todo",
        priority : 3
      },
      {
        title : "eat cookies",
        description : "as slowly as possible to enjoy the taste",
        createdBy : "Ziou",
        status : "InProgress",
        priority : 2


      },
      {
        title : "clean the car",
        description : "wash the wheels, organise it in the inside and clean the dust",
        createdBy : "bofa",
        status : "Done",
        priority : 2

      },
      {
        title : "clean the car",
        description : "wash the wheels, organise it in the inside and clean the dust",
        createdBy : "bofa",
        status : "Todo",
        priority : 2

      },
      {
        title : "clean the car",
        description : "wash the wheels, organise it in the inside and clean the dust",
        createdBy : "bofa",
        status : "Todo",
        priority : 1

      },

    ]



  }

}
