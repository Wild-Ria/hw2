import {Component, Input} from '@angular/core';
import {ISocial} from '../data';

@Component({
  selector: 'app-village',
  templateUrl: './social.component.html'
})
export class SocialComponent {
  @Input()
  public social: ISocial;

}

