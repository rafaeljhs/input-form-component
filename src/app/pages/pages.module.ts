import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PagesRoutingModule } from './pages-routing.module';
import { ExempleComponent } from './exemple/exemple.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputFormComponentModule } from 'projects/input-form-component/src/lib/input-form-component.module';
// import { InputFormComponentModule } from 'input-form-component';

@NgModule({
  declarations: [ExempleComponent],
  exports: [],
  imports: [
    CommonModule,
    PagesRoutingModule,
    InputFormComponentModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
