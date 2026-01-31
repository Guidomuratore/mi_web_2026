import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      <!-- Background gradient -->
      <div class="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-dark-bg to-dark-bg"></div>
      
      <!-- Animated background elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-primary-600/10 rounded-full blur-3xl animate-float"></div>
        <div class="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-primary-500/10 rounded-full blur-3xl animate-float" style="animation-delay: 1s;"></div>
      </div>
      
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-5xl mx-auto text-center">
          <!-- Main heading -->
          <h1 class="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 animate-slide-up leading-tight">
            <span class="text-gradient">Product Vision</span>
            <br />
            <span class="text-dark-text">&</span>
            <br />
            <span class="text-gradient">Technical Execution</span>
          </h1>
          
          <!-- Subtitle -->
          <p class="text-base sm:text-lg md:text-xl lg:text-2xl text-dark-muted mb-8 sm:mb-10 md:mb-12 animate-fade-in px-4 sm:px-0" style="animation-delay: 0.2s;">
            Transformando ideas en productos digitales escalables
          </p>
          
          <!-- Role badge -->
          <div class="inline-block mb-8 sm:mb-10 md:mb-12 animate-fade-in" style="animation-delay: 0.4s;">
            <span class="px-4 py-2 sm:px-6 sm:py-3 glass-effect rounded-full text-primary-400 font-mono text-xs sm:text-sm">
              Product Manager + Developer
            </span>
          </div>
          
          <!-- CTA Button -->
          <div class="animate-fade-in" style="animation-delay: 0.6s;">
            <a href="#projects" class="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-primary-600 hover:bg-primary-700 text-white text-base sm:text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-primary-600/50 hover:-translate-y-1">
              Ver Proyectos
              <svg class="inline-block w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <!-- Scroll indicator -->
      <div class="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div class="w-6 h-10 border-2 border-primary-500 rounded-full flex items-start justify-center p-2">
          <div class="w-1 h-2 bg-primary-500 rounded-full"></div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class HeroComponent { }
