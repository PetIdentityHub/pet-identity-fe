import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, InputComponent } from '@pet-identity/ui-kit';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PetsService } from '../../../data-access/services/pets.service';
import { Pet } from '../../../data-access/models/pet.model';

@Component({
    selector: 'pet-identity-add-pet',
    standalone: true,
    imports: [CommonModule, InputComponent, ReactiveFormsModule, ButtonComponent],
    templateUrl: './add-pet.component.html',
    styleUrls: ['./add-pet.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddPetComponent {
    formGroup!: FormGroup;

    constructor(private readonly formBuilder: FormBuilder, private petsService: PetsService) {
        this.initForm();
    }

    initForm() {
        this.formGroup = this.formBuilder.group({
            name: '',
            pedigreeName: '',
            kennelName: '',
            dob: '',
            species: '',
            breed: '',
            chipNumber: '',
            owner: '',
            photo: '',
            color: '',
            furType: '',
            distinguishingMarks: '',
        });
    }

    clear() {
        this.formGroup.reset();
    }

    submit() {
        this.petsService.postPet(this.formGroup.value as Pet).subscribe(
            (response) => {console.log(response)},
            (error) => {console.log(error)}
        );
    }
}
