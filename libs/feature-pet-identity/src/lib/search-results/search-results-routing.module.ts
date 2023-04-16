import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetDetailsComponent } from './pages/pet-details/pet-details.component';

const routes: Routes = [
  {
    path: ':id',
    component: PetDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchResultsRoutingModule { }
