import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pet, PetsService } from '@pet-identity/feature-pet-identity';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { TuiIslandModule } from '@taiga-ui/kit';

@Component({
    selector: 'pet-identity-pet-details',
    standalone: true,
    imports: [CommonModule, TuiIslandModule],
    templateUrl: './pet-details.component.html',
    styleUrls: ['./pet-details.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetDetailsComponent{
    photoBaseUrl!: string;
    getPet$!: Observable<Pet | undefined>;

    constructor(
        private petsService: PetsService,
        private route: ActivatedRoute
    ) {
        this.getPet$ = Number.isNaN(+this.route.snapshot.params['id'])
            ? this.petsService.getPetMetadataByName(
                  this.route.snapshot.params['id']
              )
            : this.petsService.getPetMetadataByChipNumber(
                  this.route.snapshot.params['id']
              );
        this.photoBaseUrl = 'https://gateway.pinata.cloud/ipfs/'
    }

}
