import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorsComponent } from './authors.component';
import { AllAuthorsComponent } from './all-authors/all-authors.component';
import { FavoriteAuthorsComponent } from './favorite-authors/favorite-authors.component';
import { RouterModule, Routes } from '@angular/router';
import { AppModule } from 'src/app/app.module';
import { ListItemModule } from 'src/app/shared/components/list-item/list-item.module';
import { SidebarModule } from '../../navigation/sidebar/sidebar.module';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'authors',
    component: AuthorsComponent,
  },
  {
    path: 'authors',
    component: AllAuthorsComponent,
  },
  {
    path: 'favorite-authors',
    component: FavoriteAuthorsComponent,
  },
];

@NgModule({
  declarations: [
    AuthorsComponent,
    AllAuthorsComponent,
    FavoriteAuthorsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    ListItemModule,
    SidebarModule,
  ],
})
export class AuthorsModule {}
