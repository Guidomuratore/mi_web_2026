import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section id="about" class="py-24 bg-dark-surface/30">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <!-- Section title -->
          <h2 class="text-4xl md:text-5xl font-bold text-center mb-16">
            Sobre <span class="text-gradient">mí</span>
          </h2>
          
          <!-- Content -->
          <div class="glass-effect rounded-2xl p-8 md:p-12">
            <div class="flex flex-col md:flex-row items-center gap-8">
              <!-- Avatar placeholder -->
              <div class="flex-shrink-0">
                <div class="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-5xl font-bold text-white">
                  GM
                </div>
              </div>
              
              <!-- Bio -->
              <div class="flex-1 text-center md:text-left">
                <h3 class="text-2xl md:text-3xl font-bold mb-4">
                  Guido Muratore <span class="text-primary-400 font-mono text-xl">(El Tucu)</span>
                </h3>
                <p class="text-dark-muted text-lg leading-relaxed mb-4">
                  Soy un profesional híbrido que combina <span class="text-primary-400 font-semibold">visión de producto</span> con 
                  <span class="text-primary-400 font-semibold"> habilidades técnicas de desarrollo</span>. 
                </p>
                <p class="text-dark-muted text-lg leading-relaxed mb-4">
                  Mi enfoque es simple: <span class="text-primary-400 font-semibold">construir soluciones reales</span> que resuelvan problemas reales. 
                  No solo diseño productos, los desarrollo. No solo escribo código, entiendo el negocio detrás.
                </p>
                <p class="text-dark-muted text-lg leading-relaxed">
                  Desde automatizaciones con <span class="text-primary-400 font-mono">n8n</span> hasta infraestructura self-hosted, 
                  me apasiona crear sistemas escalables y eficientes que generen valor real.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
    styles: []
})
export class AboutComponent { }
