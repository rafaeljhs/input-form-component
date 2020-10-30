import { NgModule } from '@angular/core';
import { InputFormComponent } from './input-form-component';
import { NgxMaskModule } from 'ngx-mask'
import { NgSelectModule } from '@ng-select/ng-select';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UiSwitchModule } from 'ngx-ui-switch';
import { ColorPickerModule } from 'ngx-color-picker';



@NgModule({
  declarations: [InputFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgSelectModule,
    UiSwitchModule,
    CKEditorModule,
    ColorPickerModule,
    NgxMaskModule.forRoot(),
  ],
  exports: [InputFormComponent]
})
export class InputFormComponentModule { }
