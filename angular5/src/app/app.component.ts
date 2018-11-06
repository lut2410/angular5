import { Component } from '@angular/core';
import { NgSelectConfig } from '@ng-select/ng-select';
import { ok } from 'assert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  companies = Array<string>("Orient","CXS","DXC");
  value:any
  // constructor(private config: NgSelectConfig) {
    // this.config.notFoundText = 'Custom not found';
//     // this.config.clearAllText = "Clear all companies filter";
// }
OK(){
  console.log(this.value)
}
}
