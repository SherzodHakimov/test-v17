import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TakePhotoComponent } from '../take-photo/take-photo.component';
import { Tester1Service } from '../shared/services/tester1.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-temp-list',
  standalone: true,
  imports: [TakePhotoComponent, CommonModule],
  templateUrl: './temp-list.component.html',
  styleUrl: './temp-list.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TempListComponent {

  private mysers = inject(Tester1Service);


  
}
