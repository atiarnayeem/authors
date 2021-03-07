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
  hasData = false;
  authors: any[] = [];
  favoriteAuthors: any[] = [];  
  constructor(private service: AuthorsService) { }

  ngOnInit(): void {
    this.authors = JSON.parse(localStorage.getItem('authors') || '[]');
    if (this.authors.length === 0) {
      this.getAuthorsData()
    } else {
      this.authors = JSON.parse(localStorage.getItem('authors') || '[]');
      this.hasData = true;
    }
  }

  getAuthorsData(): void {
    console.log('called')
    this.service.getAllAuthors().subscribe((response) => {
      this.authors = response.results;
      localStorage.setItem('authors', JSON.stringify(this.authors));
      this.hasData = true;
    });
  }

  getAuthors(): void { 
    this.authors = JSON.parse(localStorage.getItem('authors') || '[]');
  }
  
  add(author: any) {
    author.isFavorite = true;
    localStorage.setItem("authors", JSON.stringify(this.authors));
  }
  
  remove(author: any) {
    author.isFavorite = false;
    localStorage.setItem("authors", JSON.stringify(this.authors));
  }
  
  next(author: any) {
    author.isFavorite = true;
    localStorage.setItem("authors", JSON.stringify(this.authors));
  }
  
  prev(author: any) {
    author.isFavorite = false;
    localStorage.setItem("authors", JSON.stringify(this.authors));
  }
}
