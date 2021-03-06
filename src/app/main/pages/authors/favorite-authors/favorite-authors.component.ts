import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-authors',
  templateUrl: './favorite-authors.component.html',
  styleUrls: ['./favorite-authors.component.css']
})
export class FavoriteAuthorsComponent implements OnInit {

  authors : any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.getData();
  }
  getData(): any {
    this.authors = JSON.parse(localStorage.getItem('authors') || '[]');
  }

  add(author: any) {
    author.isFavorite = true;
    this.authors.push(author);
    localStorage.setItem("authors", JSON.stringify(this.authors));
  }
  
  remove(author: any) {
    author.isFavorite = false;
    localStorage.setItem("authors", JSON.stringify(this.authors));
  }
}
