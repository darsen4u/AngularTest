import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBcrComponent } from './create-bcr/create-bcr.component';
import { CurrentBcrComponent } from './current-bcr/current-bcr.component';
import { CreateBcr2Component } from './create-bcr2/create-bcr2.component';

const routes: Routes = [{path: '', redirectTo: '/create-bcr2', pathMatch: 'full'},{path: 'create-bcr2', component: CreateBcr2Component},{path: 'create-bcr', component: CreateBcrComponent},{path: 'current-bcr', component: CurrentBcrComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
