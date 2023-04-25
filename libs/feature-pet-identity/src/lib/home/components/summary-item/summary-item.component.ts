import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'home-summary-item',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './summary-item.component.html',
    styleUrls: ['./summary-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SummaryItemComponent {
    @Input() title!: string;
}
