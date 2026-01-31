import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <header class="fixed top-0 left-0 right-0 z-50 glass-effect animate-slide-down">
      <nav class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <!-- Logo/Name -->
          <a routerLink="/" class="text-2xl font-bold text-gradient">
            Guido Muratore
          </a>
          
          <!-- Navigation -->
          <ul class="hidden md:flex items-center space-x-8">
            <li>
              <a href="#about" class="text-dark-muted hover:text-primary-400 transition-colors duration-300">
                Sobre mí
              </a>
            </li>
            <li>
              <a href="#projects" class="text-dark-muted hover:text-primary-400 transition-colors duration-300">
                Proyectos
              </a>
            </li>
            <li>
              <a href="#stack" class="text-dark-muted hover:text-primary-400 transition-colors duration-300">
                Stack
              </a>
            </li>
            <li>
              <a routerLink="/contact" class="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary-600/50">
                Contacto
              </a>
            </li>
          </ul>
          
          <!-- Mobile Menu Button -->
          <button class="md:hidden text-dark-text" (click)="toggleMobileMenu()">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path *ngIf="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path *ngIf="mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <!-- Mobile Menu -->
        <div *ngIf="mobileMenuOpen" class="md:hidden mt-4 pb-4 animate-fade-in">
          <ul class="flex flex-col space-y-4">
            <li>
              <a href="#about" class="block text-dark-muted hover:text-primary-400 transition-colors duration-300" (click)="closeMobileMenu()">
                Sobre mí
              </a>
            </li>
            <li>
              <a href="#projects" class="block text-dark-muted hover:text-primary-400 transition-colors duration-300" (click)="closeMobileMenu()">
                Proyectos
              </a>
            </li>
            <li>
              <a href="#stack" class="block text-dark-muted hover:text-primary-400 transition-colors duration-300" (click)="closeMobileMenu()">
                Stack
              </a>
            </li>
            <li>
              <a routerLink="/contact" class="block px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-all duration-300 text-center" (click)="closeMobileMenu()">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  `,
  styles: []
})
export class HeaderComponent {
  mobileMenuOpen = false;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }
}
