import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms' ;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project'; 
  text = '';
  log(){
    console.log(this.text);
    console.log("ewqewqs");

  }
}
