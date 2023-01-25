import { Component } from '@angular/core';

import { FarmComponent } from './farm';

@Component({
    selector: 'my-farm-template-outlet',
    template: `
        <div class="fence">
            <ng-container [ngTemplateOutlet]="sheepTemplate"></ng-container>
            <ng-container [ngTemplateOutlet]="sheepTemplate"></ng-container>
            <ng-container [ngTemplateOutlet]="sheepTemplate"></ng-container>
        </div>
    `,
    host: {
        "[class.farm]": "true"
    },
    providers: [{provide: FarmComponent, useExisting: FarmTemplateOutletComponent}]
})
export class FarmTemplateOutletComponent extends FarmComponent {
}
