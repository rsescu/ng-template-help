import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SheepComponent } from './sheep.component';
import { ElephantComponent } from './elephant.component';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ SheepComponent, ElephantComponent ],
  exports: [ SheepComponent, ElephantComponent ]
})
export class CommonExamplesModule { }