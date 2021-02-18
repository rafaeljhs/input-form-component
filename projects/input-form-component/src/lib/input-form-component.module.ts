import { NgModule } from '@angular/core';
import { InputFormComponent } from './input-form-component';
import { NgxMaskModule } from 'ngx-mask'
import { NgSelectModule } from '@ng-select/ng-select';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UiSwitchModule } from 'ngx-ui-switch';
import { ColorPickerModule } from 'ngx-color-picker';
import { CurrencyMaskModule } from 'ng2-currency-mask';



@NgModule({
  declarations: [InputFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgSelectModule,
    UiSwitchModule,
    CKEditorModule,
    CurrencyMaskModule,
    ColorPickerModule,
    NgxMaskModule.forRoot(),
  ],
  exports: [InputFormComponent]
})
export class InputFormComponentModule { }
