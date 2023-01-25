import { Component } from '@angular/core';

@Component({
    selector: 'my-nested',
    template: `

        <div>
            <my-farm-template-nested-outlet>
                <ng-content select="[a-button]" ngProjectAs="[a-button]"></ng-content>
            </my-farm-template-nested-outlet>
        </div>
    `,
})
export class NestedComponent {

}
