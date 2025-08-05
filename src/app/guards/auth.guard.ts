import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
export const authGuard: CanActivateFn = (route) => {
 const username = localStorage.getItem('username');
const role = localStorage.getItem('role');
 const router = inject(Router);

 if (!username) {
    router.navigate(['/login']);
    return false;
  }
return true;
};
