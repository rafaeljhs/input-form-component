import { CopyswComponent } from './copysw/copysw.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExempleComponent } from './exemple/exemple.component';

const routes: Routes = [
  { path: '', redirectTo: '/exemple', pathMatch: 'full' },
  {
    path: 'exemple',
    component: ExempleComponent
  },
  {
    path: 'copy',
    component: CopyswComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
