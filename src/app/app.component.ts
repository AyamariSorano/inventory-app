import { Component } from '@angular/core';
import { CharacterDollComponent } from './character-doll/character-doll.component';
import { MainInventoryComponent } from './main-inventory/main-inventory.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { QuickAccessComponent } from './quick-access/quick-access.component';
import { StashComponent } from './stash/stash.component';
import { BackpackComponent } from './backpack/backpack.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    CharacterDollComponent,
    MainInventoryComponent,
    EquipmentComponent,
    QuickAccessComponent,
    StashComponent,
    BackpackComponent
  ]
})
export class AppComponent { }
