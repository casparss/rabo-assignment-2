import { Component, EventEmitter, HostBinding, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Filter } from 'src/types';
import { FilterControlService } from './filter-control.service';

@Component({
  selector: 'app-filter-control',
  styleUrls: ['./filter-control.component.scss'],
  template: `
    <input matInput placeholder="Filter..." [type]="type.value === 'match' ? 'text' : 'number'" [formControl]="value" (keyup)="triggerEvent()" />
    <mat-select (selectionChange)="triggerEvent()" [formControl]="type">
      <mat-option value="less">
        <=
      </mat-option>
      <mat-option value="more">
        >=
      </mat-option>
      <mat-option value="match">
        Match
      </mat-option>
    </mat-select>
  `
})
export class FilterControlComponent implements OnInit {
  constructor(public filterControlService: FilterControlService) {}

  @HostBinding('class') public classes;
  @Input() name: string;
  @Output() update: EventEmitter<Filter> = new EventEmitter();
  type = new FormControl('match');
  value = new FormControl('');
  isFocused: boolean;

  ngOnInit(): void {
    this.filterControlService.focus.subscribe((name: string) => {
      this.isFocused = name === this.name;
      if (!this.isFocused) {
        this.value.reset();
      }
      this.classes = this.isFocused ? 'focused' : '';
    });
  }

  triggerEvent(): void {
    this.update.emit(this.updatePayload);
    this.filterControlService.focus.emit(this.name);
  }

  get updatePayload(): Filter {
    const { name, type, value } = this;
    return { name, type: type.value, value: value.value };
  }
}
