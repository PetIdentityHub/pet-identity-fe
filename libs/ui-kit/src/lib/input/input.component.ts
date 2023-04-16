import { ChangeDetectionStrategy, Component, Injector, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiInputModule } from '@taiga-ui/kit';
import { TuiTextfieldControllerModule } from '@taiga-ui/core';
import { ControlValueAccessorConnectorComponent } from '../control-value-accessor-connector/control-value-accessor-connector.component';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'ui-input',
  standalone: true,
  imports: [CommonModule, TuiInputModule, TuiTextfieldControllerModule, ReactiveFormsModule ],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: InputComponent, multi: true }]
})
export class InputComponent extends ControlValueAccessorConnectorComponent{
  @Input() icon!: string; //tuiIconSearchLarge for search icon
  @Input() placeholder!: string;
  @Input() TextfieldLabelOutside: boolean = true;
  @Input() type: string = 'text';

  constructor(injector: Injector) {
    super(injector)
  }
}
