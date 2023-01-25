import { Component } from '@angular/core';

@Component({
    selector: 'my-template-ref-broken',
    template: `
        <my-broken-nested>
            <button *mySheepBlueprint></button>
        </my-broken-nested>
    `
})
export class TemplateRefBrokenComponent {
}
