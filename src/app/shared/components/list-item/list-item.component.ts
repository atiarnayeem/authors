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

  @Output() myClick = new EventEmitter();
  @Output() myClick2 = new EventEmitter();
  // @Output() click? = new EventEmitter();
  // @Output() click? = new EventEmitter();
  // @Output() addFavorite = new EventEmitter();
  // @Output() rmvFavorite = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onMyClick(): void {
    this.myClick.emit('clicked');
    console.log('add', event)
  }
  
  onMyClick2(): void {
    this.myClick2.emit('clicked');
    console.log('remove', event)
  }
  
  // removeFavorite(event: MouseEvent): void {
  //   console.log('remove', event)

  // }

}
