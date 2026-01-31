import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ContactLink {
    name: string;
    url: string;
    icon: string;
    color: string;
}

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section id="contact" class="py-24">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <!-- Section title -->
          <h2 class="text-4xl md:text-5xl font-bold text-center mb-4">
            Hablemos de <span class="text-gradient">tu proyecto</span>
          </h2>
          <p class="text-dark-muted text-center text-lg mb-16">
            ¿Tenés una idea? Construyámosla juntos
          </p>
          
          <!-- Contact Links -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a *ngFor="let link of contactLinks" 
               [href]="link.url"
               target="_blank"
               rel="noopener noreferrer"
               class="glass-effect rounded-2xl p-8 hover-lift transition-all duration-300 text-center group hover:border-primary-600/50 border-2 border-transparent">
              
              <!-- Icon -->
              <div class="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center text-4xl transition-transform duration-300 group-hover:scale-110"
                   [style.background-color]="link.color + '20'">
                {{ link.icon }}
              </div>
              
              <!-- Name -->
              <h3 class="text-xl font-bold mb-2 group-hover:text-primary-400 transition-colors duration-300">
                {{ link.name }}
              </h3>
              
              <!-- URL/Email -->
              <p class="text-dark-muted text-sm font-mono break-all">
                {{ getDisplayText(link) }}
              </p>
            </a>
          </div>
          
          <!-- Footer -->
          <div class="mt-16 text-center">
            <p class="text-dark-muted">
              Hecho con 
              <span class="text-red-500 animate-pulse">❤️</span> 
              usando 
              <span class="text-primary-400 font-mono">Angular</span> 
              + 
              <span class="text-primary-400 font-mono">TailwindCSS</span>
            </p>
            <p class="text-dark-muted mt-2 text-sm">
              © 2026 Guido Muratore. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
    styles: []
})
export class ContactComponent {
    contactLinks: ContactLink[] = [
        {
            name: 'LinkedIn',
            url: 'https://linkedin.com/in/guidomuratore',
            icon: '💼',
            color: '#0077b5'
        },
        {
            name: 'Email',
            url: 'mailto:guidomuratore@gmail.com',
            icon: '📧',
            color: '#ea4335'
        },
        {
            name: 'GitHub',
            url: 'https://github.com/guidomuratore',
            icon: '💻',
            color: '#333333'
        }
    ];

    getDisplayText(link: ContactLink): string {
        if (link.name === 'Email') {
            return 'guidomuratore@gmail.com';
        }
        return link.url.replace('https://', '').replace('mailto:', '');
    }
}
