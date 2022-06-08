import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-web-component',
  templateUrl: './counter-web-component.component.html',
  styleUrls: ['./counter-web-component.component.css']
})
export class CounterWebComponentComponent implements OnInit {
 @Input() counter:number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  incrementButton() {
    this.counter++;
  }
  decrementButton() {
    this.counter--;
  }

}
