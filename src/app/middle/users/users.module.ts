import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersComponent} from './users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import {RouterModule} from '@angular/router';
import {MODULE_ROUTES} from './users.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(MODULE_ROUTES)
  ],
  declarations: [
    UsersComponent,
    UserDetailComponent
  ]
})
export class UsersModule { }
