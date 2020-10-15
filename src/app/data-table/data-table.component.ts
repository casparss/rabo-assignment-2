import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataTableService } from './data-table.service';

@Component({
  selector: 'app-data-table',
  styleUrls: ['./data-table.component.scss'],
  template: `
    <table mat-table matSort [dataSource]="tableDataSource" class="mat-elevation-z8">
      <ng-container *ngFor="let columnName of (dataTableService.columns$ | async)" [matColumnDef]="columnName">
        <th mat-header-cell mat-sort-header *matHeaderCellDef>{{columnName}}</th>
        <td mat-cell *matCellDef="let element">{{element[columnName]}} </td>
        <td mat-footer-cell *matFooterCellDef>
          <app-filter-control [name]="columnName" (update)="dataTableService.setFilter($event)"></app-filter-control>
        </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="dataTableService.columns$ | async"></tr>
      <tr mat-row *matRowDef="let row; columns: dataTableService.columns$ | async;"></tr>
      <tr mat-footer-row *matFooterRowDef="dataTableService.columns$ | async"></tr>
    </table>
  `
})
export class DataTableComponent implements OnInit, AfterViewInit {
  constructor(public dataTableService: DataTableService) {}

  public tableDataSource: MatTableDataSource<Record<string, string>>;

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit(): void {
    this.tableDataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.dataTableService.table$.subscribe((table) => {
      this.tableDataSource = new MatTableDataSource(table);
    });
  }
}
