import { Component, AfterViewInit, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  template: `
    <main class="min-h-screen pt-20 animated-gradient">
      <!-- Glow effect -->
      <div class="absolute inset-0 glow-effect"></div>
      
      <div class="relative z-10 fade-in-up">
        <div class="container mx-auto px-6 py-12">
          <!-- Header -->
          <div class="text-center mb-12">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">
              Contacta<span class="text-gradient">me</span>
            </h1>
            <p class="text-dark-muted text-lg max-w-2xl mx-auto">
              ¿Tenés un proyecto en mente? Completá el formulario y te responderé a la brevedad.
            </p>
          </div>

          <!-- Main Content Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-stretch">
            
            <!-- Contact Form -->
            <div class="glass-card p-8 rounded-2xl w-full max-w-2xl mx-auto lg:max-w-none">
              <h2 class="text-2xl font-bold mb-6">Envíame un mensaje</h2>
              
              <form (ngSubmit)="onSubmit(contactForm, htmlForm)" #contactForm="ngForm" #htmlForm class="space-y-4">
                
                <!-- Row 1: Name & Email -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <!-- Name -->
                  <div>
                    <label for="name" class="block text-sm font-medium mb-2">Nombre *</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      ngModel
                      required
                      [disabled]="isSubmitting"
                      class="w-full px-4 py-3 bg-dark-surface border border-dark-muted/30 rounded-lg focus:outline-none focus:border-primary-500 transition-colors disabled:opacity-50"
                      placeholder="Tu nombre"
                    >
                  </div>

                  <!-- Email -->
                  <div>
                    <label for="email" class="block text-sm font-medium mb-2">Email *</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      ngModel
                      required
                      email
                      [disabled]="isSubmitting"
                      class="w-full px-4 py-3 bg-dark-surface border border-dark-muted/30 rounded-lg focus:outline-none focus:border-primary-500 transition-colors disabled:opacity-50"
                      placeholder="tu@email.com"
                    >
                  </div>
                </div>

                <!-- Row 2: Phone & Company -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <!-- Phone -->
                  <div>
                    <label for="phone" class="block text-sm font-medium mb-2">Teléfono *</label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      ngModel
                      required
                      [disabled]="isSubmitting"
                      class="w-full px-4 py-3 bg-dark-surface border border-dark-muted/30 rounded-lg focus:outline-none focus:border-primary-500 transition-colors disabled:opacity-50"
                      placeholder="+54 9 11..."
                    >
                  </div>

                  <!-- Company (Optional) -->
                  <div>
                    <label for="company" class="block text-sm font-medium mb-2">Empresa <span class="text-dark-muted text-xs">(Opcional)</span></label>
                    <input 
                      type="text" 
                      id="company"
                      name="company"
                      ngModel
                      [disabled]="isSubmitting"
                      class="w-full px-4 py-3 bg-dark-surface border border-dark-muted/30 rounded-lg focus:outline-none focus:border-primary-500 transition-colors disabled:opacity-50"
                      placeholder="Nombre de tu empresa"
                    >
                  </div>
                </div>

                <!-- Row 3: Subject -->
                <div class="relative">
                  <label for="subject" class="block text-sm font-medium mb-2">Asunto *</label>
                  <div class="relative">
                    <select 
                      id="subject"
                      name="_subject"
                      ngModel
                      required
                      [disabled]="isSubmitting"
                      class="w-full px-4 py-3 bg-dark-surface border border-dark-muted/30 rounded-lg focus:outline-none focus:border-primary-500 transition-colors disabled:opacity-50 appearance-none cursor-pointer"
                    >
                      <option value="" disabled selected class="bg-slate-800">Seleccioná un asunto</option>
                      <option value="Propuesta de Proyecto" class="bg-slate-800">Propuesta de Proyecto</option>
                      <option value="Oportunidad Laboral" class="bg-slate-800">Oportunidad Laboral</option>
                      <option value="Consulta General" class="bg-slate-800">Consulta General</option>
                      <option value="Solicitud de Presupuesto" class="bg-slate-800">Solicitud de Presupuesto</option>
                      <option value="Otro" class="bg-slate-800">Otro</option>
                    </select>
                    <!-- Custom Arrow -->
                    <div class="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-dark-muted">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </div>
                </div>

                <!-- Row 4: Message -->
                <div>
                  <label for="message" class="block text-sm font-medium mb-2">Mensaje *</label>
                  <textarea 
                    id="message"
                    name="message"
                    ngModel
                    required
                    [disabled]="isSubmitting"
                    rows="5"
                    class="w-full px-4 py-3 bg-dark-surface border border-dark-muted/30 rounded-lg focus:outline-none focus:border-primary-500 transition-colors resize-none disabled:opacity-50"
                    placeholder="Contame sobre tu proyecto..."
                  ></textarea>
                </div>

                <!-- Submit Button -->
                <button 
                  type="submit"
                  [disabled]="!contactForm.valid || isSubmitting"
                  class="w-full px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary-600/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <span *ngIf="isSubmitting" class="animate-spin">⏳</span>
                  {{ isSubmitting ? 'Enviando...' : 'Enviar Mensaje' }}
                </button>

                <!-- Status Messages -->
                <p *ngIf="submitSuccess" class="text-green-400 text-center mt-4 bg-green-500/10 py-2 rounded-lg border border-green-500/20">
                  ✅ Tu email fue enviado, te estaré respondiendo a la brevedad.
                </p>
                
                <p *ngIf="submitError" class="text-red-400 text-center mt-4 bg-red-500/10 py-2 rounded-lg border border-red-500/20">
                  ❌ Hubo un error al enviar el mensaje. Por favor intenta nuevamente.
                </p>
              </form>
            </div>

            <!-- Map & Info -->
            <div class="flex flex-col gap-6 h-full">
              <!-- Map -->
              <div class="glass-card p-5 rounded-2xl flex-1 flex flex-col">
                <h2 class="text-xl font-bold mb-3">Ubicación</h2>
                <div class="flex-1 min-h-[200px] rounded-lg overflow-hidden relative">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.8592857674!2d-58.38156908477028!3d-34.60373098045867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacb9f8ff113%3A0x22fd08b8c4db5c88!2sBuenos%20Aires%2C%20Argentina!5e0!3m2!1ses!2sar!4v1234567890123!5m2!1ses!2sar"
                    class="absolute inset-0 w-full h-full border-0 rounded-lg"
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <p class="text-dark-muted mt-3 text-center text-sm">
                  📍 Ciudad Autónoma de Buenos Aires
                </p>
              </div>

              <!-- Availability -->
              <div class="glass-card p-5 rounded-2xl">
                <h2 class="text-xl font-bold mb-3">Disponibilidad</h2>
                <div class="space-y-3">
                  <div class="flex items-start gap-3">
                    <span class="text-xl">⏰</span>
                    <div>
                      <p class="font-semibold text-sm">Tiempo de respuesta</p>
                      <p class="text-dark-muted text-sm">24 horas</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-3">
                    <span class="text-xl">🌎</span>
                    <div>
                      <p class="font-semibold text-sm">Zona horaria</p>
                      <p class="text-dark-muted text-sm">GMT-3 (Buenos Aires)</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-3">
                    <span class="text-xl">💼</span>
                    <div>
                      <p class="font-semibold text-sm">Disponibilidad</p>
                      <p class="text-dark-muted text-sm">Proyectos freelance y colaboraciones</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Links -->
          <div class="glass-card p-8 rounded-2xl">
            <h2 class="text-2xl font-bold mb-6 text-center">O contactame directamente</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <a 
                *ngFor="let link of contactLinks"
                [href]="link.url" 
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center gap-3 p-4 bg-dark-surface/50 rounded-xl hover:bg-dark-surface transition-all duration-300 hover:scale-105 border border-transparent hover:border-primary-500/30"
                [style.--link-color]="link.color"
              >
                <!-- SVG Icons -->
                <div class="w-6 h-6 fill-current text-[var(--link-color)]" [innerHTML]="link.safeIcon"></div>
                <span class="font-semibold">{{ link.name }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  `,
  styles: []
})
export class ContactComponent implements AfterViewInit, OnInit {
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  rawContactLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/guido-ignacio-muratore-2b14991a2',
      color: '#0077b5',
      // SVG path for LinkedIn
      icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`
    },
    {
      name: 'Email',
      url: 'mailto:guidomuratore@gmail.com',
      color: '#a855f7',
      // SVG path for Email (Envelope)
      icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/5491122529232',
      color: '#25D366',
      // SVG path for WhatsApp
      icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>`
    },
    {
      name: 'GitHub',
      url: 'https://github.com/guidomuratore',
      color: '#ffffff',
      // SVG path for GitHub
      icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>`
    }
  ];

  contactLinks: any[] = [];

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.contactLinks = this.rawContactLinks.map(link => ({
      ...link,
      safeIcon: this.sanitizer.bypassSecurityTrustHtml(link.icon)
    }));
  }

  ngAfterViewInit() {
    // Trigger fade-in animation
    setTimeout(() => {
      const element = document.querySelector('.fade-in-up');
      if (element) {
        element.classList.add('visible');
      }
    }, 100);
  }

  async onSubmit(form: NgForm, htmlForm: HTMLFormElement) {
    if (form.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.submitSuccess = false;
      this.submitError = false;

      try {
        const response = await emailjs.sendForm(
          'service_v02uvv2',
          'template_u5pf3n8',
          htmlForm,
          'H9bH1NFoAoCUOkkfb'
        );

        if (response.status === 200) {
          this.submitSuccess = true;
          form.resetForm();

          // Auto-dismiss success message after 5 seconds
          setTimeout(() => {
            this.submitSuccess = false;
          }, 5000);
        } else {
          this.submitError = true;
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        this.submitError = true;
      } finally {
        this.isSubmitting = false;
      }
    }
  }
}
