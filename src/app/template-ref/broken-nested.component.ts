import { Component } from '@angular/core';

@Component({
    selector: 'my-broken-nested',
    template: `

        <div>
            <ng-content></ng-content>
        </div>
    `,
})
export class BrokenNestedComponent {

}
