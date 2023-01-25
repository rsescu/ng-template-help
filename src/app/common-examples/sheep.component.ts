import { Component } from '@angular/core';

let instances = 0;

@Component({
    selector: 'my-sheep',
    template: `<h1>{{count}} 🐑</h1>`
})
export class SheepComponent {
    count: number;

    constructor() {
        this.count = ++instances;
    }
}
