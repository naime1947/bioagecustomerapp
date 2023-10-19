import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScienceComponent } from './science.component';

const routes: Routes = [
  {
    path: '',
    component: ScienceComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScienceRoutingModule {}
