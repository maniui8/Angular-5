import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() {}
    cars = ['Range rover', 'BMW', 'Rolles']

    myData() {
      return 'this is my data';
    }
  
}
