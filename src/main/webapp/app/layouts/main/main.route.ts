import {Route} from '@angular/router';
import {MainComponent} from "app/layouts/main/main.component";
import {UserRouteAccessService} from "app/core";

export const MAIN_ROUTE: Route = {
    path: '',
    component: MainComponent,
    data: {
        authorities: ['ROLE_USER']
    },
    canActivate: [UserRouteAccessService],
    children: [{
        path: 'admin',
        loadChildren: '../../admin/admin.module#MkhodabandeluFrameworkAdminModule'
    }]
};
