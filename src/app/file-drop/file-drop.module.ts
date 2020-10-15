import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileDropDirective } from './file-drop.directive';
import { FileDropComponent } from './file-drop.component';

@NgModule({
  declarations: [FileDropDirective, FileDropComponent],
  imports: [
    CommonModule
  ],
  exports: [FileDropDirective, FileDropComponent]
})
export class FileDropModule { }
