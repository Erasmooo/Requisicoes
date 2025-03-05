import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

declare var bootstrap: any; 

@Component({
  selector: 'app-home',
  standalone: true,  
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        const dropdowns = document.querySelectorAll('.dropdown-toggle');
        console.log('Dropdowns encontrados:', dropdowns); // 🔴 Verifica se os elementos existem no DOM
  
        dropdowns.forEach((dropdown) => {
          new bootstrap.Dropdown(dropdown);
        });
      }, 100);
    }
  }
  
}
