import { Component, OnInit } from '@angular/core';
import { AuthorsService } from 'src/app/main/services/authors/authors.service';

@Component({
  selector: 'app-all-authors',
  templateUrl: './all-authors.component.html',
  styleUrls: ['./all-authors.component.css'],
})
export class AllAuthorsComponent implements OnInit {
  hasData = false;
  isClickedNext = false;
  isClickedPrevious = false;
  authors: any[] = [];
  likedAuthors: [] = [];
  lastItemIndex!: number;
  pageNumber = 0;
  constructor(private service: AuthorsService) {}

  ngOnInit(): void {
    this.getAuthorsData();
  }

  getAuthorsData(): void {
    this.service.getAllAuthors().subscribe((response) => {
      this.authors = response.results;
      this.lastItemIndex = response.lastItemIndex;
      this.hasData = true;
    });
  }

  add(author: any) {
    author.isFavorite = true;
    localStorage.setItem('authors', JSON.stringify(this.authors));
  }

  remove(author: any) {
    author.isFavorite = false;
    localStorage.setItem('authors', JSON.stringify(this.authors));
  }

  onNext(): void {
    this.pageNumber += 1;
    this.isClickedPrevious == true
      ? (this.lastItemIndex += 6)
      : this.lastItemIndex;
    this.service.getAllAuthors(6, this.lastItemIndex).subscribe((response) => {
      this.authors = response.results;
      this.isClickedNext = true;
      this.isClickedPrevious = false;
      this.lastItemIndex = response.lastItemIndex;
    });
  }

  onPrev(): void {
    this.pageNumber -= 1;
    this.isClickedNext == true
      ? (this.lastItemIndex -= 12)
      : (this.lastItemIndex -= 6);
    this.service.getAllAuthors(6, this.lastItemIndex).subscribe((response) => {
      this.isClickedNext = false;
      this.isClickedPrevious = true;
      this.authors = response.results;
    });
  }
}
