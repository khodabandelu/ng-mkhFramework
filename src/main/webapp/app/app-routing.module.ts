import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {errorRoute} from "app/layouts/error/error.route";
import {sidebarRoute} from "app/layouts/sidebar/sidebar.route";
import {DEBUG_INFO_ENABLED} from 'app/app.constants';


const LAYOUT_ROUTES = [sidebarRoute, ...errorRoute];

@NgModule({
    imports: [RouterModule.forRoot(
        [
            ...LAYOUT_ROUTES,
            // {
            //   path: 'admin',
            //   loadChildren: './admin/admin.module#MkhodabandeluFrameworkAdminModule'
            // }
        ],
        {
            useHash: true,
            // enableTracing: DEBUG_INFO_ENABLED
        }
    ), NgbModule],
    exports: [RouterModule]
})
export class MkhodabandeluFrameworkAppRoutingModule {
}

