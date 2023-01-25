import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonExamplesModule } from '../common-examples/common-examples.module';
import { SheepBlueprintDirective } from './sheep-blueprint.directive';
import { FarmTemplateOutletComponent } from './farm-template-outlet.component';
import { TemplateRefTemplateNestedOutletComponent } from './template-ref-template-nested-outlet.component';
import { NestedComponent } from './nested.comonent';
import { TemplateRefTemplateOutletComponent } from './template-ref-template-outlet-component.component';
import { FarmTemplateOutletNestedComponent } from './farm-template-nested-outlet.component';
import { TemplateRefBrokenComponent } from './template-ref-broken.component';
import { BrokenNestedComponent } from './broken-nested.component';
import { FarmTemplateNestedBrokenOutletComponent } from './farm-template-nested-broken-outlet';
import { FarmTemplateNestedWorkingOutletComponent } from './farm-template-nested-working-outlet';
import { WorkingNestedComponent } from './working-nested.component';
import { TemplateRefWorkingComponent } from './template-ref-working.component';

@NgModule({
    imports: [CommonModule, CommonExamplesModule],
    declarations: [NestedComponent, BrokenNestedComponent, TemplateRefBrokenComponent, SheepBlueprintDirective, FarmTemplateOutletComponent, TemplateRefTemplateNestedOutletComponent, TemplateRefTemplateOutletComponent, FarmTemplateOutletNestedComponent, FarmTemplateNestedBrokenOutletComponent, FarmTemplateNestedWorkingOutletComponent, WorkingNestedComponent, TemplateRefWorkingComponent],
    exports: [TemplateRefTemplateNestedOutletComponent, TemplateRefTemplateOutletComponent, TemplateRefBrokenComponent, TemplateRefWorkingComponent]
})
export class TemplateRefModule {
}
