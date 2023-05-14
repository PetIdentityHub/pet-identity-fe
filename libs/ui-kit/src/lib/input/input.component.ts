import { ChangeDetectionStrategy, Component, Injector, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiInputModule } from '@taiga-ui/kit';
import { TuiLabelModule, TuiTextfieldControllerModule, TuiTooltipModule } from '@taiga-ui/core';
import { ControlValueAccessorConnectorComponent } from '../control-value-accessor-connector/control-value-accessor-connector.component';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'ui-input',
  standalone: true,
  imports: [CommonModule, TuiInputModule, TuiTextfieldControllerModule, ReactiveFormsModule, TuiLabelModule, TuiTooltipModule ],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: InputComponent, multi: true }]
})
export class InputComponent extends ControlValueAccessorConnectorComponent{
  @Input() icon!: string; //tuiIconSearchLarge for search icon
  @Input() placeholder!: string;
  @Input() TextfieldLabelOutside = true;
  @Input() type = 'text';
  @Input() size: 's' | 'm' | 'l' = 'm';
  @Input() tooltip = '';
  @Input() label = '';

  constructor(injector: Injector) {
    super(injector)
  }
}
