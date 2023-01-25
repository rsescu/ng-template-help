import { Component, ContentChild, TemplateRef } from '@angular/core';

@Component({
    selector: 'my-working-nested',
    template: `
        <div>
<!--       Works because we're passing the template as input here and the child gets a reference to the template directly    -->
          <my-farm-template-nested-working-outlet [buttonTemplate]="button">
          </my-farm-template-nested-working-outlet>
        </div>
    `
})
export class WorkingNestedComponent {
    @ContentChild(TemplateRef) button: TemplateRef<any>;
}
