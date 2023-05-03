import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiAccordionModule } from '@taiga-ui/kit';

export interface AccordionItem {
    title: string;
    content?: string | MenuItem
}

export interface MenuItem {
    title: string;
    link: string;
}

@Component({
    selector: 'ui-accordion',
    standalone: true,
    imports: [CommonModule, TuiAccordionModule],
    templateUrl: './accordion.component.html',
    styleUrls: ['./accordion.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent {
    @Input() items!: AccordionItem[];
}
