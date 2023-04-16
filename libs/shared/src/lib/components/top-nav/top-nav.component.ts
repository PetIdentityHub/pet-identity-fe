import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@pet-identity/ui-kit';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'shared-top-nav',
  standalone: true,
  imports: [CommonModule, ButtonComponent, RouterLink],
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopNavComponent {
  @Output() onLogin = new EventEmitter<boolean>();

  login() {
    this.onLogin.emit(true);
  }
}
