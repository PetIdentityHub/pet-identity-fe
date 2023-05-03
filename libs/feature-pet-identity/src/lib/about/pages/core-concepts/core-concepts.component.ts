import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'pet-identity-core-concepts',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './core-concepts.component.html',
    styleUrls: ['./core-concepts.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoreConceptsComponent {}
