import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appFileDrop]'
})
export class FileDropDirective {
  @Output() fileDropped = new EventEmitter<any>();
  @HostBinding('style.opacity') private opacity = '0.8';
  @HostBinding('style.transform') private transform = 'scale(1)';

  @HostListener('dragover', ['$event']) onDragOver(evt): void {
    evt.preventDefault();
    evt.stopPropagation();
    this.opacity = '1';
    this.transform = 'scale(1.1)';
  }

  @HostListener('dragleave', ['$event']) onDragLeave(evt): void {
    evt.preventDefault();
    evt.stopPropagation();
    this.opacity = '1';
    this.transform = 'scale(1)';
  }

  @HostListener('drop', ['$event']) onDrop(evt): void {
    evt.preventDefault();
    evt.stopPropagation();
    this.opacity = '1';
    this.transform = 'scale(1)';
    const files = evt.dataTransfer.files;
    if (files.length > 0) {
      this.fileDropped.emit(files);
    }
  }
}
