import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DataBinding';

  // currentItem: string = "Chrysanthemum";

  // parentVariable = 'Not Set';


  ngOnInit(): void {
    // console.log(this.parentVariable);

  }

  setParentVarWithOutput(input: any) {
    // this.parentVariable = input;
    // console.log(this.parentVariable);
  }
}
