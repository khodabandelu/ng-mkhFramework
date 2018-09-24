import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {MkhodabandeluFrameworkSharedModule} from 'app/shared';
import {DASHBOARD_ROUTE, DashboardComponent} from './';
import {
  ActivityComponent,
  CustomerSupportComponent,
  EarningComponent,
  FeedsComponent,
  IncomeCounterComponent,
  PageAnalyzerComponent,
  ProfileComponent,
  ProjectComponent,
  ProjectCounterComponent,
  RecentcommentComponent,
  RecentmessageComponent,
  SocialSliderComponent,
  TodoComponent,
  TotalEarningComponent,
  WidgetComponent
} from "app/dashboard/dashboard-components";

@NgModule({
  imports: [MkhodabandeluFrameworkSharedModule,
    RouterModule.forChild([DASHBOARD_ROUTE])],
  declarations: [
    DashboardComponent,
    /*ProjectCounterComponent,
    EarningComponent,
    RecentcommentComponent,
    RecentmessageComponent,
    TodoComponent,
    TotalEarningComponent,
    WidgetComponent,
    SocialSliderComponent,
    ActivityComponent,
    ProfileComponent,
    FeedsComponent,
    CustomerSupportComponent,
    IncomeCounterComponent,
    PageAnalyzerComponent,
    ProfileComponent,
    ProjectComponent*/],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MkhodabandeluFrameworkDashboardModule {
}
