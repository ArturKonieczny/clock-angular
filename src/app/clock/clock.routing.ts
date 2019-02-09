import { Routes, RouterModule } from '@angular/router';

import { ClockContainerComponent } from './containers/clock-container/clock-container.component';

const routes: Routes = [
  {
    path: '',
    component: ClockContainerComponent,
  },
];

export const ClockRouting = RouterModule.forRoot(routes);
