import { NgModule } from '@angular/core';

import { CarMaint1SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [CarMaint1SharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [CarMaint1SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class CarMaint1SharedCommonModule {}
