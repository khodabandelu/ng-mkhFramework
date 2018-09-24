import {CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule} from '@angular/core';
import {PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {MainComponent} from "app/layouts/main/main.component";
import {MkhodabandeluFrameworkSharedModule} from "app/shared";
import {RouterModule} from "@angular/router";
import {MAIN_ROUTE} from "app/layouts/main/main.route";
import {SidebarComponent} from "app/layouts/sidebar/sidebar.component";
import {FooterComponent} from "app/layouts/footer/footer.component";
import {NavigationComponent} from "app/layouts/header-navigation/navigation.component";
import {BreadcrumbComponent} from "app/shared/breadcrumb/breadcrumb.component";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {NotificationInterceptor} from "app/blocks/interceptor/notification.interceptor";

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true,
};

@NgModule({
  imports: [
    MkhodabandeluFrameworkSharedModule,
    RouterModule.forChild([MAIN_ROUTE]),
    PerfectScrollbarModule
  ],
  declarations: [MainComponent, SidebarComponent, FooterComponent, NavigationComponent, BreadcrumbComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NotificationInterceptor,
      multi: true,
      deps: [Injector]
    }
  ],
})
export class MkhodabandeluFrameworkMainModule {
}
