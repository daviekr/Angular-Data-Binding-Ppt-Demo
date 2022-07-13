import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  // isUnchanged: boolean = false;

  // @Input()
  // item: string = '';

  // @Output()
  // newItemEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  // addNewItem() {
  //   console.log("ADDING NEW ITEM");
  //   const fc = "Set";
  //   this.newItemEvent.emit(fc);
  // }
}
