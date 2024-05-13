import { Component } from '@angular/core';

@Component({
  selector: 'app-equipment',
  standalone: true,
  imports: [],
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent {
  equipmentSlots = [
    { type: "Head", item: null },
    { type: "Body", item: null },
    { type: "Legs", item: null }
  ];
}
