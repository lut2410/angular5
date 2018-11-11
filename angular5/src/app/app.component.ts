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
  companies = Array<Object>(
    {id : 1 , text: "Orient"},
    {id : 2 , text: "DXC"},
    {id : 3 , text: "CSC"},
    {id : 1 , text: "Orient"},
    {id : 2 , text: "DXC"},
    {id : 3 , text: "CSC"},
    {id : 1 , text: "Orient"},
    {id : 2 , text: "DXC"},
    {id : 3 , text: "CSC"},
    {id : 1 , text: "Orient"},
    {id : 2 , text: "DXC"},
    {id : 3 , text: "CSC"},
    {id : 1 , text: "Orient"},
    {id : 2 , text: "DXC"},
    {id : 3 , text: "CSC"},
    {id : 1 , text: "Orient"},
    {id : 2 , text: "DXC"},
    {id : 3 , text: "CSC"},
    {id : 1 , text: "Orient"},
    {id : 2 , text: "DXC"},
    {id : 3 , text: "CSC"},
    {id : 1 , text: "Orient"},
    {id : 2 , text: "DXC"},
    {id : 3 , text: "CSC"},
    {id : 1 , text: "Orient"},
    {id : 2 , text: "DXC"},
    {id : 3 , text: "CSC"},
    {id : 1 , text: "Orient"},
    {id : 2 , text: "DXC"},
    {id : 3 , text: "CSC"});
    selected:any
  // constructor(private config: NgSelectConfig) {
    // this.config.notFoundText = 'Custom not found';
//     // this.config.clearAllText = "Clear all companies filter";
// }
OK(){
  console.log(this.selected)
}
}
