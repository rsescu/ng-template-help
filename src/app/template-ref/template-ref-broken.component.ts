import { Component } from '@angular/core';

@Component({
  selector: 'my-template-ref-broken',
  template: `
        <my-broken-nested>
            <button *mySheepBlueprint>Some other Button</button>
        </my-broken-nested>
    `,
})
export class TemplateRefBrokenComponent {}
