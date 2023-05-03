import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent, MenuItem } from '@pet-identity/ui-kit';
import { AccordionItem } from '@pet-identity/ui-kit';

@Component({
    selector: 'about-about',
    standalone: true,
    imports: [CommonModule, AccordionComponent],
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {

}
