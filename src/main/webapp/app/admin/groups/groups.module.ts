import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {MkhodabandeluFrameworkSharedModule} from 'app/shared';
import {GroupDeleteDialogComponent, GroupDetailComponent, GroupsComponent, groupsRoute, GroupUpdateComponent} from "./";


const ENTITY_STATES = [...groupsRoute];

@NgModule({
    imports: [MkhodabandeluFrameworkSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        GroupsComponent,
        GroupDetailComponent,
        GroupUpdateComponent,
        GroupDeleteDialogComponent,
    ],
    entryComponents: [GroupsComponent, GroupUpdateComponent, GroupDeleteDialogComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MkhodabandeluFrameworkGroupsModule {
}
