import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () =>
          import('../pages/pages.module').then((m) => m.PagesModule),
      },

      {
        path: 'login',
        loadChildren: () =>
          import('./../pages/login/login.module').then((m) => m.LoginModule),
      },
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}
