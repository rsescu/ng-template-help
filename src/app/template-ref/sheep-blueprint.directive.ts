import { Directive, TemplateRef } from '@angular/core';

import { FarmComponent } from './farm';

@Directive({
    selector: '[mySheepBlueprint]'
})
export class SheepBlueprintDirective {
    constructor(templateRef: TemplateRef<void>, farm: FarmComponent) {
        farm.sheepTemplate = templateRef;
    }
}
