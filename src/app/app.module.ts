import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateRefModule } from './template-ref/template-ref.module';

@NgModule({
    imports: [BrowserModule, TemplateRefModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
