import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../../services/authors/authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors: any;

  constructor(private service: AuthorsService) { }

  ngOnInit(): void {
    // this.getAuthors();
  }

  getAuthors(): void {
    this.service.getAllAuthors().subscribe(response=> {
      this.authors = response.results;
      console.log('response', response.results)
    })
  }

  firstFunction(): void {
    console.log('add')
  }

  secondFunction(): void {
    console.log('remove')
  }
  

}
