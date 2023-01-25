import { Component } from '@angular/core';

@Component({
    selector: 'my-template-ref-template-outlet',
    template: `
        <my-farm-template-outlet>
            <my-sheep *mySheepBlueprint></my-sheep>
        </my-farm-template-outlet>
    `
})
export class TemplateRefTemplateOutletComponent {
}
