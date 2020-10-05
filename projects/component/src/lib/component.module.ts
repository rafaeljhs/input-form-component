import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select/lib/ng-select.module';
import { ColorPickerModule } from 'ngx-color-picker/lib/color-picker.module';
import { NgxMaskModule } from 'ngx-mask/lib/ngx-mask.module';
import { ComponentComponent } from './component.component';
import { UiSwitchModule } from 'ngx-ui-switch';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';


@NgModule({
  declarations: [ComponentComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgSelectModule,
    UiSwitchModule,
    CKEditorModule,
    ColorPickerModule,
    NgxMaskModule.forRoot()
  ],
  exports: [ComponentComponent]
})
export class ComponentModule { }
