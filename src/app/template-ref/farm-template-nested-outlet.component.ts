import { Component } from '@angular/core';

import { FarmComponent } from './farm';

@Component({
    selector: 'my-farm-template-nested-outlet',
    template: `
        <div class="fence">
            <ng-container [ngTemplateOutlet]="sheepTemplate"></ng-container>
            <ng-container [ngTemplateOutlet]="sheepTemplate"></ng-container>
            <ng-container [ngTemplateOutlet]="sheepTemplate"></ng-container>
        </div>

        <ng-template #sheepTemplate>
            <ng-content></ng-content>
        </ng-template>
    `,
    host: {
        "[class.farm]": "true"
    },
    providers: [{provide: FarmComponent, useExisting: FarmTemplateOutletNestedComponent}]
})
export class FarmTemplateOutletNestedComponent extends FarmComponent {
}
