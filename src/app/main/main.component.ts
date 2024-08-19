import { Component } from '@angular/core';

// components
import { MainItemComponent } from './main-item/main-item.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MainItemComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
