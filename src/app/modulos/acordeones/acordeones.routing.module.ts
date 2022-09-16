import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcordeonComponent } from 'src/app/components/acordeon/acordeon.component';

const routes: Routes = [
  { path: "", component: AcordeonComponent },
  { path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcordeonesRoutingModule { }
