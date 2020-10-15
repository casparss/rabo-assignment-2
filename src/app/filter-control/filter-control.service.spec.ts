import { TestBed } from '@angular/core/testing';

import { FilterControlService } from './filter-control.service';

describe('FilterControlService', () => {
  let service: FilterControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
