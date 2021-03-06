import { Component, OnInit } from '@angular/core';
import { AuthorsService } from 'src/app/main/services/authors/authors.service';

@Component({
  selector: 'app-all-authors',
  templateUrl: './all-authors.component.html',
  styleUrls: ['./all-authors.component.css']
})
export class AllAuthorsComponent implements OnInit {
  authors: any;
  
  constructor(private service: AuthorsService) { }

  ngOnInit(): void {
    this.getAuthors();
  }

  getAuthors(): void {
    this.service.getAllAuthors().subscribe(response=> {
      this.authors = response.results;
      console.log('response', response.results)
    })
  }

}
