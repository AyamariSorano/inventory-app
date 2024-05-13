import { Component } from '@angular/core';

@Component({
  selector: 'app-stash',
  standalone: true,
  imports: [],
  templateUrl: './stash.component.html',
  styleUrls: ['./stash.component.css']
})
export class StashComponent {
  stashItems = [
    { name: "Extra Ammo" },
    { name: "Backup Weapon" }
  ];
}
