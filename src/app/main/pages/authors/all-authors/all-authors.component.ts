import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from 'src/app/main/models/authors.model';
import { AuthorsService } from 'src/app/main/services/authors/authors.service';

@Component({
  selector: 'app-all-authors',
  templateUrl: './all-authors.component.html',
  styleUrls: ['./all-authors.component.css']
})
export class AllAuthorsComponent implements OnInit {
  isLoading = false;
  authors: any[] = [];
  favoriteAuthors: any[] = [];  
  constructor(private service: AuthorsService) { }

  ngOnInit(): void {
    this.getAuthors();
  }

  getAuthors(): void { 
    this.authors = JSON.parse(localStorage.getItem('authors') || '[]');

    console.log('authors', this.authors)
  }
  
  add(author: any) {
    author.isFavorite = true;
    // this.favoriteAuthors.push(author);
    localStorage.setItem("authors", JSON.stringify(this.authors));
    let data =JSON.parse(localStorage.getItem('authors') || '[]');
    console.log('storage data', data)
  }
  
  remove(author: any) {
    author.isFavorite = false;
    localStorage.setItem("authors", JSON.stringify(this.authors));
    // console.log('functioncall2', author);
    let data =JSON.parse(localStorage.getItem('authors') || '[]');
    console.log('storage data', data)
  }

}
