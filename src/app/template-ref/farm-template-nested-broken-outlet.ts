import { Component, TemplateRef, ContentChild } from '@angular/core';


@Component({
    selector: 'my-farm-template-nested-broken-outlet',
    template: `
        <div class="fence">
            <ng-container [ngTemplateOutlet]="buttonTemplate"></ng-container>
            <ng-container [ngTemplateOutlet]="buttonTemplate"></ng-container>
            <ng-container [ngTemplateOutlet]="buttonTemplate"></ng-container>
        </div>
    `,
    host: {
        "[class.farm]": "true"
    }
})
export class FarmTemplateNestedBrokenOutletComponent {
    @ContentChild(TemplateRef) buttonTemplate: TemplateRef<any>;
}
