import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent as ContactSectionComponent } from '../../components/contact/contact.component';

@Component({
    selector: 'app-contact-page',
    standalone: true,
    imports: [
        CommonModule,
        ContactSectionComponent
    ],
    template: `
    <main class="min-h-screen pt-20">
      <app-contact />
    </main>
  `,
    styles: []
})
export class ContactComponent {
}
