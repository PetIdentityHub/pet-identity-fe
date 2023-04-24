import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, InputComponent } from '@pet-identity/ui-kit';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'home-hero',
  standalone: true,
  imports: [CommonModule, ButtonComponent, InputComponent, ReactiveFormsModule, RouterLink],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  formGroup!: FormGroup;

  constructor() {
    this.formGroup = new FormGroup({
      search: new FormControl('')
    });
  }
}
