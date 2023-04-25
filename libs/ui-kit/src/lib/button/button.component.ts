import { Component, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TuiButtonModule} from '@taiga-ui/core';



@Component({
  selector: 'ui-button',
  standalone: true,
  imports: [CommonModule, TuiButtonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent implements OnInit{
  @Input() type: 'primary' | 'secondary' | 'secondary-destructive' | 'accent' | 'accent2' | 'accent3' | 'accent4' | 'accent5' | 'flat' | 'outline' = 'primary';
  @Input() disabled: boolean = false;
  @Input() height: 'tall' | 'regular' = 'regular';

  @HostBinding('className') buttonType!: string;

  ngOnInit() {
    this.buttonType = `${this.type} ${this.disabled ? 'disabled' : ''}`; 
  }
}
