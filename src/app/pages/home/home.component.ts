import { Component } from '@angular/core';
import { fadeIn, slideFromRight, slideFormLeft } from 'src/app/animation/animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeIn, slideFromRight, slideFormLeft],
})
export class HomeComponent {}
