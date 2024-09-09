import { CanActivateFn } from '@angular/router';

export const AuthGuard: CanActivateFn = (_route, _state) => {
  return true;
};
