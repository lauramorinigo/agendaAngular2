import { Routes } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { UserComponent } from './user.component';

export const UserRoutes: Routes = [
  { path: '',  component: UserComponent }
];