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

  @Output() addFvt = new EventEmitter();
  @Output() removeFvt = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  onAddFavorite(event: any): void {
    this.addFvt.emit('clicked');
  }
  
  onRemoveFavourite(event: any): void {
    this.removeFvt.emit('clicked');
  }
  

}
