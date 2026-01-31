import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutComponent } from '../../components/about/about.component';
import { TechStackComponent } from '../../components/tech-stack/tech-stack.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,
        HeroComponent,
        AboutComponent,
        TechStackComponent,
        ProjectsComponent,
        ContactComponent
    ],
    template: `
    <main>
      <app-hero />
      <app-about />
      <app-tech-stack />
      <app-projects />
      <app-contact />
    </main>
  `,
    styles: []
})
export class HomeComponent {
}
