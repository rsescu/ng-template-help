import { Component } from '@angular/core';

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
})
export class FarmTemplateOutletNestedComponent {
}
