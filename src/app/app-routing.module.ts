import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputTypesComponent } from './features/components/input-types/input-types.component';

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
    path: '**',
    redirectTo: 'input-types',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
