import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, InputComponent } from '@pet-identity/ui-kit';

@Component({
  selector: 'home-hero',
  standalone: true,
  imports: [CommonModule, ButtonComponent, InputComponent],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {}
