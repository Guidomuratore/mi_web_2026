import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutComponent } from '../../components/about/about.component';
import { TechStackComponent } from '../../components/tech-stack/tech-stack.component';
import { ProjectsComponent } from '../../components/projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    HeroComponent,
    AboutComponent,
    TechStackComponent,
    ProjectsComponent
  ],
  template: `
    <main>
      <app-hero />
      <app-about />
      <app-tech-stack />
      <app-projects />
      
      <!-- Call to Action -->
      <section class="py-20 px-6">
        <div class="container mx-auto max-w-4xl text-center">
          <div class="glass-card p-12 rounded-2xl">
            <h2 class="text-4xl md:text-5xl font-bold text-gradient mb-8">
              ¿Tenés una idea en mente?
            </h2>
            <a 
              routerLink="/contact" 
              class="inline-block px-10 py-4 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-primary-600/50 hover:scale-105"
            >
              Contáctame
            </a>
          </div>
        </div>
      </section>
    </main>
  `,
  styles: []
})
export class HomeComponent {
}
