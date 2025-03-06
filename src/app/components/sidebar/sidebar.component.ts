import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

declare var bootstrap: any; 

@Component({
  selector: 'app-sidebar',
  standalone: true,  
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements AfterViewInit{

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const dropdownElements = document.querySelectorAll('.dropdown-toggle');
      
      console.log('Dropdowns encontrados:', dropdownElements); // Verifica se encontrou os elementos

      dropdownElements.forEach((dropdown) => {
        new bootstrap.Dropdown(dropdown);
      });
    }
  }
}
