import { Component, forwardRef, Injector, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { ControlValueAccessorConnectorComponent } from '../control-value-accessor-connector/control-value-accessor-connector.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { TuiLabelModule, TuiSvgModule } from '@taiga-ui/core';

@Component({
  selector: 'ui-upload',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent, TuiSvgModule, TuiLabelModule],
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UploadComponent),
      multi: true
    }
  ]
})
export class UploadComponent extends ControlValueAccessorConnectorComponent {
    @Input() label?: string;
    filename: string = '';
    file: any;

    constructor(injector: Injector) {
        super(injector)
      }

      onFileChange(event: any) {
        const file = event.target.files[0];
        this.control.setValue(file);
        this.filename = file.name;
      }

      clear(){
        this.control.setValue(null);
        this.filename = '';
      }
}