import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'counter';
  resultOfCounter!:number;
  text!:string;
  counter(num:number) {
    this.resultOfCounter = num;
  }
  submit(text:string) {
    this.text = text;
  }
}
