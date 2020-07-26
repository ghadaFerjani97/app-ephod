import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PvUploadComponent} from './pv-upload/pv-upload.component';
import {DeclarationComponent} from './declaration/declaration.component';

const routes: Routes = [
    {path: '', redirectTo: 'declaration', pathMatch: 'full'},
    {path: 'declaration', component: DeclarationComponent},
    {path: 'pv', component: PvUploadComponent},];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
