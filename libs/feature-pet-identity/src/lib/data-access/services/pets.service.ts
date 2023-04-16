import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { petsMock } from "../mocks/pets.mock";
import { Pet } from "../models/pet.model";

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  getAll(): Observable<Pet[]> {
    return of(petsMock)
  }

  getPetById(id: string): Observable<Pet | undefined> {
    return of(petsMock.find(pet => pet.uuid === id));
  }
}
