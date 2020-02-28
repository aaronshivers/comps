import { Component } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: [ './mods-home.component.css' ],
})
export class ModsHomeComponent {
  modalOpen = false;
  items = [
    { title: 'Why is the sky blue?', content: 'The sky is blue, because it is.' },
    { title: 'What does an orange taste like?', content: 'Oranges taste like oranges.' },
    { title: 'What color is the cat?', content: 'The cat is orange.' },
  ];

  onToggleModal(): void {
    this.modalOpen = !this.modalOpen;
  }
}
