import { Component } from '@angular/core';
import { FarmComponent } from './farm';

@Component({
  selector: 'my-broken-nested',
  template: `

        <div>
            <ng-content></ng-content>
        </div>
    `,
  providers: [{ provide: FarmComponent, useExisting: BrokenNestedComponent }],
})
export class BrokenNestedComponent extends FarmComponent {}
