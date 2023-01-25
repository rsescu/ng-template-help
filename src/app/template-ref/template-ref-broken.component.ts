import { Component } from '@angular/core';

@Component({
    selector: 'my-template-ref-broken',
    template: `
        <my-broken-nested>
            <ng-template>
                <button>Some other Button</button>
            </ng-template>
        </my-broken-nested>
    `,
})
export class TemplateRefBrokenComponent {
}
