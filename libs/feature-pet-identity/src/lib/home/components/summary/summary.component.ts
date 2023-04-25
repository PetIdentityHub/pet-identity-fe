import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryItemComponent } from '../summary-item/summary-item.component';
import { ButtonComponent } from '@pet-identity/ui-kit';

@Component({
    selector: 'home-summary',
    standalone: true,
    imports: [CommonModule, SummaryItemComponent, ButtonComponent],
    templateUrl: './summary.component.html',
    styleUrls: ['./summary.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SummaryComponent {}
