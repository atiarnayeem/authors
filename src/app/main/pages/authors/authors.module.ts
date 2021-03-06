import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorsComponent } from './authors.component';
import { AllAuthorsComponent } from './all-authors/all-authors.component';
import { FavoriteAuthorsComponent } from './favorite-authors/favorite-authors.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    component: AuthorsComponent
  },
];

@NgModule({
  declarations: [AuthorsComponent, AllAuthorsComponent, FavoriteAuthorsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
  ]
})
export class AuthorsModule { }
