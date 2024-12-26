import { Component } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css'],
})
export class ItemFormComponent {
  name = '';
  description = '';

  constructor(private itemService: ItemService) {}

  createItem(): void {
    if (this.name && this.description) {
      this.itemService.createItem({ name: this.name, description: this.description });
      this.name = '';
      this.description = '';
    }
  }
}
