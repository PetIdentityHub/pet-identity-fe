import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetDetailsComponent } from './pages/pet-details/pet-details.component';
import { AddPetComponent } from './pages/add-pet/add-pet.component';

const routes: Routes = [
  {
    path: 'search/:id',
    component: PetDetailsComponent
  },
  {
    path: 'add',
    component: AddPetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetRoutingModule { }
