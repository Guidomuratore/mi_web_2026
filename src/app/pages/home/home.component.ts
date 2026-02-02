import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutComponent } from '../../components/about/about.component';
import { TechStackComponent } from '../../components/tech-stack/tech-stack.component';
import { ProjectsComponent } from '../../components/projects/projects.component';

@Component({
    selector: 'app-home',
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
      <div class="fade-in-up"><app-about /></div>
      <div class="fade-in-up"><app-tech-stack /></div>
      <div class="fade-in-up"><app-projects /></div>
    </main>
  `,
    styles: []
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit() {
    // Scroll animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all fade-in-up elements
    const elements = document.querySelectorAll('.fade-in-up');
    elements.forEach(el => observer.observe(el));
  }
}
