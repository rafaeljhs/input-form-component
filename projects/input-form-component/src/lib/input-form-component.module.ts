import { NgModule } from '@angular/core';
import { InputFormComponentComponent } from './input-form-component.component';
import { NgxMaskModule } from 'ngx-mask'
import { NgSelectModule } from '@ng-select/ng-select';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UiSwitchModule } from 'ngx-ui-switch';
import { ColorPickerModule } from 'ngx-color-picker';



@NgModule({
  declarations: [InputFormComponentComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgSelectModule,
    UiSwitchModule,
    CKEditorModule,
    ColorPickerModule,
    NgxMaskModule.forRoot(),
  ],
  exports: [InputFormComponentComponent]
})
export class InputFormComponentModule { }
