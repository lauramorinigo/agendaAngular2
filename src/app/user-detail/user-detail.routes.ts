import { Routes } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { UserDetailComponent } from './user-detail.component';

export const UserDetailRoutes: Routes = [
  { path: 'user/:id',  component: UserDetailComponent }
];