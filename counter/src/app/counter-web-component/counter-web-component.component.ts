import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-counter-web-component',
  templateUrl: './counter-web-component.component.html',
  styleUrls: ['./counter-web-component.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CounterWebComponentComponent implements OnInit {
  // @Output('counterButton') counterItem = new EventEmitter<number>();  
  // counter:number = 0;
  @ViewChild('input', { static: true }) input!: ElementRef;
  @Output() submitted = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  // incrementButton() {
  //   this.counterItem.emit(this.counter++);
  // }
  // decrementButton() {
  //   this.counterItem.emit(this.counter--);
  // }

  submit() {
    this.submitted.emit(this.input.nativeElement.value);
  }
}






