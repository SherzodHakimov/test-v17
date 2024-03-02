import { Component } from '@angular/core';

@Component({
  selector: 'app-take-photo',
  standalone: true,
  imports: [],
  templateUrl: './take-photo.component.html',
  styleUrl: './take-photo.component.less'
})
export class TakePhotoComponent {

  id!: number;
  name!: string;

}
