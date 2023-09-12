import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputTypesComponent } from './features/components/input-types/input-types.component';
import { ViewDataComponent } from './features/components/view-data/view-data.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'input-types',
    pathMatch: 'full',
  },
  {
    path: 'input-types',
    component: InputTypesComponent,
  },
  {
    path: 'view-data',
    component: ViewDataComponent,
  },
  {
    path: '**',
    redirectTo: 'input-types',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
