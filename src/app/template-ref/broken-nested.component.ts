import { Component, ContentChild, TemplateRef } from '@angular/core';

@Component({
    selector: 'my-broken-nested',
    template: `
        <div>
          <my-farm-template-nested-broken-outlet>
<!--         Doesn't work because once [ngTemplateOutlet] is applied the passed content is no longer a template   -->
            <ng-template [ngTemplateOutlet]="button"></ng-template>
              
<!--         Works if we re-wrap it in another template     -->
<!--              <ng-template>-->
<!--                  <ng-template [ngTemplateOutlet]="button"></ng-template>-->
<!--              </ng-template>-->
          </my-farm-template-nested-broken-outlet>
        </div>
    `
})
export class BrokenNestedComponent {
    @ContentChild(TemplateRef) button: TemplateRef<any>;
}
