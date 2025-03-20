import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsComponent } from "./reactive-forms/reactive-forms.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Reactive-Calma';
}
