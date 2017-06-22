import { Routes, RouterModule } from '@angular/router';

import { UserRoutes } from './user/user.routes';
import { UserDetailRoutes } from './user-detail/user-detail.routes';


const appRoutes: Routes = [
    ...UserRoutes,
    ...UserDetailRoutes
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
