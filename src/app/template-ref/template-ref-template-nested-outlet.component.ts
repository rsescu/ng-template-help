import { Component } from '@angular/core';

@Component({
    selector: 'my-template-ref-nested-template-outlet',
    template: `
        <my-nested>
            <button a-button>This is a Button</button>
        </my-nested>
    `
})
export class TemplateRefTemplateNestedOutletComponent {
}
