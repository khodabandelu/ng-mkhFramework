import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersModule} from './users/users.module';
import {MiddleComponent} from './middle.component';
import {RouterModule} from '@angular/router';
import {MODULE_ROUTES} from './middle.routes';
import {HttpClientModule} from '@angular/common/http';
import {DashboardModule} from './dashboard/dashboard.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    UsersModule,
    DashboardModule,
    RouterModule.forRoot(MODULE_ROUTES)
  ],
  exports: [MiddleComponent],
  declarations: [MiddleComponent, NavbarComponent]
})
export class MiddleModule {
}
