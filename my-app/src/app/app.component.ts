import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  template: `
  <p> {{ someProperty }} </p>  `,
  styles: [
    `
    h1 {
      text-decoration: underline;
    }

    .red-title {
      color: red;
    }

    .large-title {
      font-size: 4em;
    }
    `
  ]
})


export class AppComponent {
  constructor(private dataService:DataService) {

  }

  someProperty: string = '';

  ngOnInit() {
    console.log(this.dataService.cars);
    this.someProperty = this.dataService.myData();

  }
}
