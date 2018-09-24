import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MkhodabandeluFrameworkSharedModule } from 'app/shared';
import { LOGIN_ROUTE, LoginComponent } from './';

@NgModule({
    imports: [MkhodabandeluFrameworkSharedModule, RouterModule.forChild([LOGIN_ROUTE])],
    declarations: [LoginComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MkhodabandeluFrameworkLoginModule {}
