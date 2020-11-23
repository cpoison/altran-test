import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GnomeDetailComponent } from './components/gnome-detail/gnome-detail.component';
import { GnomeListComponent } from './components/gnome-list/gnome-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'gnomes' },
  { path: 'gnomes', component: GnomeListComponent },
  { path: 'gnome/:id', component: GnomeDetailComponent }
  // { path: '**', component: GnomeListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
