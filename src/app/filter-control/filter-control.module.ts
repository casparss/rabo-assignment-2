import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { FilterControlComponent } from './filter-control.component';
import { FilterControlService } from './filter-control.service';

@NgModule({
  providers: [FilterControlService],
  declarations: [FilterControlComponent],
  imports: [
    CommonModule, MatSelectModule, ReactiveFormsModule
  ],
  exports: [FilterControlComponent]
})
export class FilterControlModule { }
