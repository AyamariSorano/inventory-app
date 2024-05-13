import { Component } from '@angular/core';

@Component({
  selector: 'app-main-inventory',
  standalone: true,
  imports: [],
  templateUrl: './main-inventory.component.html',
  styleUrls: ['./main-inventory.component.css']
})
export class MainInventoryComponent {
  items = [
    { name: "First Aid Kit", width: 1, height: 1 },
    { name: "Rifle", width: 2, height: 1 },
    { name: "Ammo", width: 1, height: 1 }
  ];
}
