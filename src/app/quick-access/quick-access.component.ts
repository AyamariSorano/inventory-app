import { Component } from '@angular/core';

@Component({
  selector: 'app-quick-access',
  standalone: true,
  imports: [],
  templateUrl: './quick-access.component.html',
  styleUrls: ['./quick-access.component.css']
})
export class QuickAccessComponent {
  quickAccessItems = [
    { name: "Potion" },
    { name: "Magic Scroll" }
  ];
}
