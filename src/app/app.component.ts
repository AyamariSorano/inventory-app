import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CharacterDollComponent } from './character-doll/character-doll.component';
import { MainInventoryComponent } from './main-inventory/main-inventory.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { QuickAccessComponent } from './quick-access/quick-access.component';
import { StashComponent } from './stash/stash.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CharacterDollComponent,
    MainInventoryComponent,
    EquipmentComponent,
    QuickAccessComponent,
    StashComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'inventory-app';
}
