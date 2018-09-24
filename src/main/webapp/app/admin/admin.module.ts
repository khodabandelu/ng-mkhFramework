import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { MkhLanguageHelper } from 'app/core';
import { MkhodabandeluFrameworkSharedModule} from 'app/shared';
/* jhipster-needle-add-admin-module-import - JHipster will add admin modules imports here */

import {
    adminState,
    AuditsComponent,
    UserMgmtComponent,
    UserMgmtDetailComponent,
    UserMgmtUpdateComponent,
    UserMgmtDeleteDialogComponent,
    LogsComponent,
    MkhMetricsMonitoringModalComponent,
    MkhMetricsMonitoringComponent,
    MkhHealthModalComponent,
    MkhHealthCheckComponent,
    MkhConfigurationComponent,
    MkhDocsComponent
} from './';
import {MkhodabandeluFrameworkGroupsModule} from "app/admin/groups/groups.module";

@NgModule({
    imports: [
        MkhodabandeluFrameworkSharedModule,
        MkhodabandeluFrameworkGroupsModule,
        RouterModule.forChild(adminState)
        /* jhipster-needle-add-admin-module - JHipster will add admin modules here */
    ],
    declarations: [
        AuditsComponent,
        UserMgmtComponent,
        UserMgmtDetailComponent,
        UserMgmtUpdateComponent,
        UserMgmtDeleteDialogComponent,
        LogsComponent,
        MkhConfigurationComponent,
        MkhHealthCheckComponent,
        MkhHealthModalComponent,
        MkhDocsComponent,
        MkhMetricsMonitoringComponent,
        MkhMetricsMonitoringModalComponent
    ],
    entryComponents: [UserMgmtDeleteDialogComponent, MkhHealthModalComponent, MkhMetricsMonitoringModalComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MkhodabandeluFrameworkAdminModule {
    constructor(private languageService: JhiLanguageService, private languageHelper: MkhLanguageHelper) {
        this.languageHelper.language.subscribe((languageKey: string) => {
            if (languageKey !== undefined) {
                this.languageService.changeLanguage(languageKey);
            }
        });
    }
}
