import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AComponent } from './pages/a/a.component';
import { BComponent } from './pages/b/b.component';
import { ColumnsComponent } from './pages/columns/columns.component';
import { DetailComponent } from './pages/detail/detail.component';
import { ListComponent } from './pages/list/list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'component-a' },
  { path: 'component-a', pathMatch: 'full', component: AComponent },
  { path: 'component-b', pathMatch: 'full', component: BComponent },
  { path: 'users', pathMatch: 'full', component: ListComponent },
  { path: 'users/:id', pathMatch: 'full', component: DetailComponent },
  {
    path: 'columns',
    component: ColumnsComponent,
    children: [{ path: ':id', pathMatch: 'full', component: DetailComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
