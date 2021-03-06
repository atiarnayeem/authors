import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-authors',
  templateUrl: './favorite-authors.component.html',
  styleUrls: ['./favorite-authors.component.css']
})
export class FavoriteAuthorsComponent implements OnInit {

  favoriteAuthors : any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.getData();
  }
  getData(): any {
    this.favoriteAuthors = JSON.parse(localStorage.getItem('datas') || '[]');
    console.log('favorites', this.favoriteAuthors)
  }

  add(author: any) {
    author.isFavorite = true;
    this.favoriteAuthors.push(author);
    localStorage.setItem("datas", JSON.stringify(this.favoriteAuthors));
    let data =JSON.parse(localStorage.getItem('datas') || '[]');
    console.log('storage data', data)
  }
  
  remove(author: any) {
    author.isFavorite = false;
    console.log('author', author)
    localStorage.setItem("datas", JSON.stringify(this.favoriteAuthors));
    // // console.log('functioncall2', author);
    let data =JSON.parse(localStorage.getItem('datas') || '[]');
    console.log('storage data', data)
  }
}
