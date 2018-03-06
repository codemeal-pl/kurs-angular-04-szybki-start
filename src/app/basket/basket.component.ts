import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  sandwiches: Array<any> = [];
  message: string;

  constructor() { }

  ngOnInit() {
    this.addSandwich();
  }

  addSandwich() {
    this.sandwiches.push('sandwich');
    this.showMessage(`Added sandwich`);
  }
  
  removeSandwich(index) {
    this.sandwiches.splice(index, 1);
    this.showMessage(`Removed sandwich ${index}`);
  }
  
  showMessage(text: string) {
    this.message = text;
    setTimeout(() => this.message = null, 1000);
  }
}
