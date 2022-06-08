import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter-web-component',
  templateUrl: './counter-web-component.component.html',
  styleUrls: ['./counter-web-component.component.css']
})
export class CounterWebComponentComponent implements OnInit {
  @Output() counterItem = new EventEmitter<number>();  
  counter:number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  incrementButton() {
    this.counterItem.emit(this.counter++);
  }
  decrementButton() {
    this.counterItem.emit(this.counter--);
  }

}
