import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="py-20 bg-slate-900 text-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
          Featured Projects
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div *ngFor="let project of projects" class="group bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl">
            <div class="flex justify-between items-start mb-4">
              <h3 class="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                {{ project.title }}
              </h3>
              <span class="px-3 py-1 text-xs font-semibold rounded-full bg-blue-900 text-blue-200">
                {{ project.status }}
              </span>
            </div>
            
            <p class="text-gray-400 mb-6 leading-relaxed">
              {{ project.description }}
            </p>
            
            <div class="flex flex-wrap gap-2">
              <span *ngFor="let tech of project.stack" class="px-3 py-1 bg-slate-900 rounded-md text-sm text-gray-300 border border-slate-700">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ProjectsComponent {
  projects = [
    {
      title: 'TucumAI',
      description: 'Asistente personal de finanzas con IA integrado en WhatsApp. Utiliza OCR para leer facturas, procesa audio y texto mediante Evolution API y guarda todo en Google Sheets.',
      stack: ['n8n', 'Evolution API', 'Raspberry Pi', 'Docker', 'PostgreSQL'],
      status: 'En Desarrollo'
    },
    {
      title: 'Infraestructura Homelab',
      description: 'Ecosistema de self-hosting gestionado con Docker. Incluye proxy reverso, túneles seguros con Cloudflare y monitoreo de servicios.',
      stack: ['Docker', 'Nginx Proxy Manager', 'Cloudflare', 'Linux'],
      status: 'Activo'
    }
  ];
}