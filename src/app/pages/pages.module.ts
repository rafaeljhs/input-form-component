import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PagesRoutingModule } from './pages-routing.module';
import { ExempleComponent } from './exemple/exemple.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputFormComponentModule } from 'projects/input-form-component/src/lib/input-form-component.module';
import { CopyswComponent } from './copysw/copysw.component';
// import { InputFormComponentModule } from 'input-form-component';

@NgModule({
  declarations: [ExempleComponent,CopyswComponent],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    PagesRoutingModule,
    InputFormComponentModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
