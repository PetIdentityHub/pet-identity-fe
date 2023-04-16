import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pet-identity-pet-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetDetailsComponent {}
