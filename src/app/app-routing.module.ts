import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharesComponent } from './components/shares/shares.component';
import { EditShareComponent } from './components/edit-share/edit-share.component';

const routes: Routes = [
  { path: '', component: SharesComponent },
  { path: 'edit/:id', component: EditShareComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
