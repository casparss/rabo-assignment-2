import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as csv from 'csvtojson';
import { filterRows } from '../filter-control/filter-control.util';
import { Filter } from 'src/types';

@Injectable({
  providedIn: 'root'
})
export class DataTableService {
  private tableSubject$: BehaviorSubject<Record<string, string>[]> = new BehaviorSubject([]);
  private activeFilter: Filter;

  public columns$: Observable<string[]> = this.tableSubject$.asObservable().pipe(
    map(([row]) => Object.keys(row))
  );

  public table$: Observable<Record<string, string>[]> = this.tableSubject$.asObservable().pipe(
    map(table => this.activeFilter ? table.filter(filterRows(this.activeFilter)) : table)
  );

  public hasData$: Observable<boolean> = this.tableSubject$.asObservable().pipe(
    map(table => table.length > 0)
  );

  async loadFile(file: File): Promise<void> {
    const collection = await csv().fromString(await file.text());
    this.tableSubject$.next(collection);
  }

  setFilter(filter: Filter): void {
    this.activeFilter = filter;
    this.tableSubject$.next(this.tableSubject$.getValue());
  }
}
