import { ChangeDetectionStrategy, Component, Injector, Input } from "@angular/core";
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from "@angular/forms";
import { ControlValueAccessorConnectorComponent } from "../control-value-accessor-connector/control-value-accessor-connector.component";
import { CommonModule } from "@angular/common";
import { TuiButtonModule, TuiDropdownModule, TuiLabelModule, TuiTooltipModule, tuiDropdownAnimation } from "@taiga-ui/core";
import { provideAnimations } from '@angular/platform-browser/animations';

@Component({
    selector: 'ui-dropdown',
    standalone: true,
    imports: [CommonModule, TuiDropdownModule,TuiTooltipModule, TuiLabelModule, ReactiveFormsModule, TuiButtonModule],
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: DropdownComponent, multi: true }, provideAnimations()],
		animations: [tuiDropdownAnimation]
})
export class DropdownComponent extends ControlValueAccessorConnectorComponent {
  @Input() icon!: string; //tuiIconSearchLarge for search icon
  @Input() tooltip = '';
  @Input() label = '';
	@Input() options: {label: string, value: string}[] = [];

  //TODO: need to add a way to pass custom template for dropdown items
  // and lazy loading of items
  constructor(injector: Injector) {
    super(injector);
  }

  open = false;

	onClick(): void {
		this.open = !this.open;
	}

	onObscured(obscured: boolean | Event): void {
		if (obscured) {
			this.open = false;
		}
	}
	onActiveZone(active: boolean | Event): void {
		this.open = active && this.open;
	}
}

