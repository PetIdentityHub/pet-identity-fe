import { ControlContainer, ControlValueAccessor, FormControl, FormControlDirective } from '@angular/forms'
import { Component, Injector, Input, ViewChild } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  template: ``,
  standalone: true,
  imports: [CommonModule]
})
export class ControlValueAccessorConnectorComponent implements ControlValueAccessor {
  @ViewChild(FormControlDirective, { static: true }) formControlDirective?: FormControlDirective
  @Input() formControl = new FormControl()
  @Input() formControlName = ''

  get control(): FormControl {
    if (this.formControlName && this.controlContainer?.control) {
      return (this.controlContainer.control.get(this.formControlName) as FormControl) || undefined
    }
    return this.formControl
  }

  constructor(private readonly injector: Injector) {}

  get controlContainer(): ControlContainer {
    return this.injector.get(ControlContainer)
  }

  registerOnTouched(fn: () => void): void {
    this.formControlDirective?.valueAccessor?.registerOnTouched(fn)
  }

  registerOnChange(fn: () => void): void {
    this.formControlDirective?.valueAccessor?.registerOnChange(fn)
  }

  writeValue(value: unknown): void {
    this.formControlDirective?.valueAccessor?.writeValue(value)
  }

  setDisabledState(isDisabled: boolean): void {
    if (this.formControlDirective?.valueAccessor?.setDisabledState) {
      this.formControlDirective.valueAccessor.setDisabledState(isDisabled)
    }
  }
}
