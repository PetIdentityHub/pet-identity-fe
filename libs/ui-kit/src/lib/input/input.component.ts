import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiInputModule } from '@taiga-ui/kit';
import { TuiSvgModule, TuiTextfieldControllerModule } from '@taiga-ui/core';

@Component({
  selector: 'ui-input',
  standalone: true,
  imports: [CommonModule, TuiInputModule, TuiTextfieldControllerModule, TuiSvgModule ],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  @Input() icon!: string; //tuiIconSearchLarge for search icon
  @Input() placeholder!: string;
  @Input() TextfieldLabelOutside: boolean = true;


}
