import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Note Taking App';
  notes: string[] = [];
  note: string = '';

  constructor() {
  }

  addNote() {
    this.notes.push(this.note);
    this.note = '';
  }
}
