import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class FilterControlService {
  focus = new EventEmitter();
}
