import { Component } from '@angular/core';
import { DataTableService } from './data-table/data-table.service';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar>
      <span>{{title}}</span>
    </mat-toolbar>
    <main>
      <app-data-table *ngIf="dataTableService.hasData$ | async; else fileDrop"></app-data-table>

      <ng-template #fileDrop>
        <app-file-drop (fileDropped)="dataTableService.loadFile($event)"></app-file-drop>
      </ng-template>
    </main>
    <footer>
      <span>Caspar Sambrook-Smith</span>
    </footer>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Rabo Assigment';

  constructor(public dataTableService: DataTableService) {}
}
