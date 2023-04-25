import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@pet-identity/ui-kit';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutComponent } from '../../components/about/about.component';
import { SummaryComponent } from '../../components/summary/summary.component';

@Component({
  selector: 'pet-identity-home',
  standalone: true,
  imports: [CommonModule, ButtonComponent, HeroComponent, AboutComponent, SummaryComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
