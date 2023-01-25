import { Component, ContentChild, TemplateRef } from '@angular/core';

@Component({
    selector: 'my-template-ref-working',
    template: `
        <my-working-nested>
            <ng-template>
                <button>Some other Button</button>
            </ng-template>
        </my-working-nested>
    `,
})
export class TemplateRefWorkingComponent {
    @ContentChild(TemplateRef) button: TemplateRef<any>;
}

