import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-child',
  templateUrl: './example-child.component.html',
  styleUrls: ['./example-child.component.css']
})
export class ExampleChildComponent implements OnInit {

  // yourVariable: number = 0;

  // yourObject: any = {
  //   property: 'nice',
  // };

  constructor() { }

  ngOnInit(): void {
  }

}