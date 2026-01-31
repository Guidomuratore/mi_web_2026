import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent as ContactSectionComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [
    CommonModule,
    ContactSectionComponent
  ],
  template: `
    <main class="min-h-screen pt-20 animated-gradient">
      <!-- Glow effect -->
      <div class="absolute inset-0 glow-effect"></div>
      
      <div class="relative z-10 fade-in-up">
        <app-contact />
      </div>
    </main>
  `,
  styles: []
})
export class ContactComponent implements AfterViewInit {
  ngAfterViewInit() {
    // Trigger fade-in animation
    setTimeout(() => {
      const element = document.querySelector('.fade-in-up');
      if (element) {
        element.classList.add('visible');
      }
    }, 100);
  }
}
