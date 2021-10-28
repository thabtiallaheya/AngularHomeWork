import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormUserComponentComponent } from './form-user-component/form-user-component.component';
import { MainUserComponentComponent } from './main-user-component/main-user-component.component';

const routes: Routes = [{path: 'add', component: FormUserComponentComponent },{path: 'home', component: MainUserComponentComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
