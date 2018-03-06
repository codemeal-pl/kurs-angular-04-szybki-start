import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sandwich',
  template: `
    Sandwich {{ index }}
    <button (click)="removeSandwich(index)">x</button>
    `,
  styleUrls: ['./sandwich.component.css']
})
export class SandwichComponent implements OnInit {

  @Input() index: number;
  @Output() remove: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeSandwich(index: number) {
    this.remove.emit(index);
  }
}
