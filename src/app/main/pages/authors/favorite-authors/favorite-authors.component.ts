import { Component, OnInit } from '@angular/core';
import { AuthorData } from 'src/app/main/models/authors.model';

@Component({
  selector: 'app-favorite-authors',
  templateUrl: './favorite-authors.component.html',
  styleUrls: ['./favorite-authors.component.css'],
})
export class FavoriteAuthorsComponent implements OnInit {
  hasData = false;
  favoriteAuthors: AuthorData[] = [];
  constructor() {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): any {
    this.favoriteAuthors = JSON.parse(localStorage.getItem('authors') || '[]');
    this.hasData = true;
  }

  remove(author: any) {
    author.isFavorite = false;
    localStorage.setItem('authors', JSON.stringify(this.favoriteAuthors));
  }
}
