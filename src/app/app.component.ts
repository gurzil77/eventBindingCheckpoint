import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eventBindingCheckpoint';
  newColor;
  getColor(input) {
    this.newColor = input;
  }
  resetColor() {
    this.newColor = null;
  }
}
