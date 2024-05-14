import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-backpack',
  templateUrl: './backpack.component.html',
  styleUrls: ['./backpack.component.css'],
  standalone: true
})
export class BackpackComponent {
  @Input() backpackItems = [];
}
