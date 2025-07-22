import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box-white',
  templateUrl: 'box-white.component.html'
})
export class BoxWhiteComponent {

  @Input() classDiv: string = '';
  @Input() title: string = '';
  @Input() titleClass: string = '';
  @Input() desc: string = '';
  @Input() descClass: string = '';

  constructor() {}
}
