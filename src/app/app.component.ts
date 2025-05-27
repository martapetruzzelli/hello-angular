import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationBarComponent } from "./components/navigation-bar/navigation-bar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, NavigationBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  message = 'hello angular';
}
