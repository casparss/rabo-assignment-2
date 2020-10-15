import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-file-drop',
  styles: [`
    :host {
      display: block;
    }

    div {
      display: flex;
      height: 100%;
      transition: all 0.2s ease-in-out;
      height: 500px;
      border: 6px dashed grey;
      justify-content: center;
      align-items: center;
    }
  `],
  template: `
    <div appFileDrop (fileDropped)="dragDrop($event)" class="drop-container">
      <p class="mat-h3">Drop CSV here</p>
    </div>
  `,
})
export class FileDropComponent {
  @Output() fileDropped = new EventEmitter();

  dragDrop(fileList: File[]): void {
    if (fileList.length > 1) {
      return alert('Only one file at a time.');
    }

    const [file] = fileList;

    if (file.type !== 'text/csv') {
      return alert('File must be a CSV.');
    }

    this.fileDropped.emit(file);
  }
}
