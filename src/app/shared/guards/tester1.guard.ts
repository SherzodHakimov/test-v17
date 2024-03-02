import { inject } from '@angular/core';
import type { CanActivateFn } from '@angular/router';
import { Tester1Service } from '../services/tester1.service';

export const tester1Guard: CanActivateFn = (route, state) => {
  const mysers = inject(Tester1Service);
  
  return true;
};
