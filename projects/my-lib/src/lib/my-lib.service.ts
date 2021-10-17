import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyLibService {

  constructor() { }

  jerryPrint(){
    console.log('Jerry service developed in Lib!');
  }
}
