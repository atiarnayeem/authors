import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() name?: string;
  @Input() bio?: string;
  @Input() link?: string;
  @Input() isFavorite?: boolean;

  @Output() myClick = new EventEmitter();
  @Output() myClick2 = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  onMyClick(event: any): void {
    this.myClick.emit('clicked');
    // console.log('add', event)
  }
  
  onMyClick2(event: any): void {
    this.myClick2.emit('clicked');
    // console.log('remove', event)
  }
  

}
