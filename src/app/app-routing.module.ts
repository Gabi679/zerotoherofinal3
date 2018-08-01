import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NewComponent } from './new/new.component';
const routes: Routes =  [{
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
      },

      {
        path: 'main',
        component: MainComponent,
        pathMatch: 'full',
      },
      {
        path: 'new',
        component: NewComponent,
        pathMatch: 'full',
      }
      ];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}