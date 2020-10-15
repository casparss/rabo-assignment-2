import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { DataTableComponent } from './data-table.component';
import { DataTableService } from './data-table.service';
import { FilterControlModule } from '../filter-control/filter-control.module';

@NgModule({
  providers: [DataTableService],
  declarations: [DataTableComponent],
  imports: [
    CommonModule, MatTableModule, MatSortModule, FilterControlModule
  ],
  exports: [DataTableComponent]
})
export class DataTableModule { }
