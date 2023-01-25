import { Component, ContentChild, TemplateRef, Input } from '@angular/core';

import { FarmComponent } from './farm';

@Component({
    selector: 'my-farm-template-nested-working-outlet',
    template: `
        <div class="fence">
            <ng-container [ngTemplateOutlet]="buttonTemplate"></ng-container>
            <ng-container [ngTemplateOutlet]="buttonTemplate"></ng-container>
            <ng-container [ngTemplateOutlet]="buttonTemplate"></ng-container>
        </div>
    `,
    host: {
        "[class.farm]": "true"
    },

})
export class FarmTemplateNestedWorkingOutletComponent {
    @Input() buttonTemplate: TemplateRef<any>;
}
