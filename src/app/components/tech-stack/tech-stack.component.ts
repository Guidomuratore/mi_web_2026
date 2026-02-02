import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-tech-stack',
    imports: [CommonModule],
    template: `
    <section id="stack" class="min-h-screen py-20 bg-slate-950 text-white flex items-center">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold mb-16 text-center">
          Tech <span class="text-blue-500">Stack</span>
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-green-500 transition duration-300">
            <h3 class="text-xl font-bold mb-6 text-green-400 flex items-center">
              Automation & Backend
            </h3>
            <div class="space-y-3">
              <div *ngFor="let tech of automationTech" class="flex items-center space-x-3 p-2 rounded hover:bg-slate-800">
                <span class="w-2 h-2 rounded-full bg-green-500"></span>
                <span class="text-gray-300">{{ tech }}</span>
              </div>
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-pink-500 transition duration-300">
            <h3 class="text-xl font-bold mb-6 text-pink-400 flex items-center">
              Frontend & Design
            </h3>
            <div class="space-y-3">
              <div *ngFor="let tech of frontendTech" class="flex items-center space-x-3 p-2 rounded hover:bg-slate-800">
                <span class="w-2 h-2 rounded-full bg-pink-500"></span>
                <span class="text-gray-300">{{ tech }}</span>
              </div>
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-purple-500 transition duration-300">
            <h3 class="text-xl font-bold mb-6 text-purple-400 flex items-center">
              Tools & Infra
            </h3>
            <div class="space-y-3">
              <div *ngFor="let tech of toolsTech" class="flex items-center space-x-3 p-2 rounded hover:bg-slate-800">
                <span class="w-2 h-2 rounded-full bg-purple-500"></span>
                <span class="text-gray-300">{{ tech }}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `,
    styles: []
})
export class TechStackComponent {
  automationTech = ['n8n', 'PostgreSQL', 'Docker', 'Python', 'Node.js'];
  frontendTech = ['Angular 19', 'TypeScript', 'TailwindCSS', 'Figma'];
  toolsTech = ['Git / GitHub', 'Jira', 'AI Agents', 'Raspberry Pi'];

  // Método helper para compatibilidad si el template viejo lo usaba
  getAutomationTech() { return this.automationTech; }
}