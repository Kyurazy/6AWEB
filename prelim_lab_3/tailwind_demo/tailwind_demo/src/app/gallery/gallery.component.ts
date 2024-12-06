import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  Moana: string = "assets/img/Moana.png";
  OLS: string = "assets/img/OurLittleSecret.png";
  Nightbitch: string = "assets/img/Nightbitch.jpg";
}
