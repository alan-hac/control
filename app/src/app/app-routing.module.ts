import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PcStatusComponent } from './component/pc-status/pc-status.component';

const routes: Routes = [
  {path: '', component: PcStatusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
