import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    ButtonComponent,
    InputComponent,
    UploadComponent,
} from '@pet-identity/ui-kit';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PetsService } from '../../../data-access/services/pets.service';
import { Pet } from '../../../data-access/models/pet.model';
import { ContractsService } from '../../../data-access/services/contracts.service';

@Component({
    selector: 'pet-identity-add-pet',
    standalone: true,
    imports: [
        CommonModule,
        InputComponent,
        ReactiveFormsModule,
        ButtonComponent,
        UploadComponent,
    ],
    templateUrl: './add-pet.component.html',
    styleUrls: ['./add-pet.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddPetComponent {
    formGroup!: FormGroup;

    constructor(
        private readonly formBuilder: FormBuilder,
        private petsService: PetsService,
        private contractsService: ContractsService
    ) {
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
            files: '',
        });
    }

    clear() {
        this.formGroup.reset();
    }

    submit() {
        if (this.formGroup.get('files')?.value) {
            const file = this.formGroup.get('files')?.value;
            this.formGroup.get('photo')?.setValue(file.name);
            this.contractsService.postImage(file).subscribe(
                (response) => {
                    console.log(response);
                    this.formGroup.get('photo')?.setValue(response.IpfsHash);
                    this.formGroup.removeControl('files');
                    this.savePet();
                },
                (error) => {
                    console.log(error);
                }
            );
        } else this.savePet();
    }

    savePet(): void {
        this.petsService.postPet(this.formGroup.value as Pet).subscribe(
            (response) => {
                console.log(response);
                this.formGroup.reset();
            },
            (error) => {
                console.log(error);
            }
        );
    }
}
