import { Routes } from '@angular/router';
import { TakePhotoComponent } from './take-photo/take-photo.component';
import { tester1Guard } from './shared/guards/tester1.guard';

export const routes: Routes = [
    { path: 'take-photo', component: TakePhotoComponent, canActivate: [tester1Guard] }
];
