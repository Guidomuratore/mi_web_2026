import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-hero',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <!-- Background gradient -->
      <div class="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-dark-bg to-dark-bg"></div>
      
      <!-- Animated background elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-float"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float" style="animation-delay: 1s;"></div>
      </div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-5xl mx-auto text-center">
          <!-- Main heading -->
          <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up">
            <span class="text-gradient">Product Vision</span>
            <br />
            <span class="text-dark-text">&</span>
            <br />
            <span class="text-gradient">Technical Execution</span>
          </h1>
          
          <!-- Subtitle -->
          <p class="text-xl md:text-2xl text-dark-muted mb-12 animate-fade-in" style="animation-delay: 0.2s;">
            Transformando ideas en productos digitales escalables
          </p>
          
          <!-- Role badge -->
          <div class="inline-block mb-12 animate-fade-in" style="animation-delay: 0.4s;">
            <span class="px-6 py-3 glass-effect rounded-full text-primary-400 font-mono text-sm">
              Product Manager + Developer
            </span>
          </div>
          
          <!-- CTA Button -->
          <div class="animate-fade-in" style="animation-delay: 0.6s;">
            <a href="#projects" class="inline-block px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-primary-600/50 hover:-translate-y-1">
              Ver Proyectos
              <svg class="inline-block w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div class="w-6 h-10 border-2 border-primary-500 rounded-full flex items-start justify-center p-2">
          <div class="w-1 h-2 bg-primary-500 rounded-full"></div>
        </div>
      </div>
    </section>
  `,
    styles: []
})
export class HeroComponent { }
