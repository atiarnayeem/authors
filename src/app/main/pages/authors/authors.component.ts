import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../../services/authors/authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors:[] = [];

  constructor(private service: AuthorsService) { }

  ngOnInit(): void {
    this.getAuthors();
  }
  
  getAuthors(): void { 
    this.service.getAllAuthors().subscribe(response=> {
      this.authors = response.results;
      // this.authors.forEach(element => {
      //   element.isFavorite = false;
      // });
    localStorage.setItem("authors", JSON.stringify(this.authors));
    // let data =JSON.parse(localStorage.getItem('authors') || '[]');
    // console.log('storage data', data)
    //   console.log('response', this.authors)
    })
  }
  

}
