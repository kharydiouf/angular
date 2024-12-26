import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemFormComponent } from './components/item-form/item-form.component';

const routes: Routes = [
  { path: '', component: ItemListComponent }, // Page par défaut
  { path: 'add', component: ItemFormComponent } // Page pour ajouter un item
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
