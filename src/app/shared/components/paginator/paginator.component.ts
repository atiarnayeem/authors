import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  pageIndex = 10;

  // @Output() onNxt? = new EventEmitter();
  // @Output() onPrev? = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  // onPrevious(event: any): void {
  //   this.onNxt.emit('clicked');
  // }
  
  // onNext(event: any): void {
  //   this.onPrev.emit('clicked');
  // }

}
