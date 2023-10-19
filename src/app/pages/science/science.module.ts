import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScienceComponent } from './science.component';
import { ScienceRoutingModule } from './science-routing.module';

@NgModule({
  declarations: [ScienceComponent],
  imports: [CommonModule, ScienceRoutingModule],
})
export class ScienceModule {}
