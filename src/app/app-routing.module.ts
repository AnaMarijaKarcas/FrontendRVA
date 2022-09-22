import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/core/about/about.component';
import { AutorComponent } from './components/core/autor/autor.component';
import { HomeComponent } from './components/core/home/home.component';
import { DepartmanComponent } from './components/departman/departman.component';
import { FakultetComponent } from './components/fakultet/fakultet.component';
import { StatusComponent } from './components/status/status.component';

const routes: Routes = [//kreiramo rute koje su nam potrebne
  {path:'status', component:StatusComponent},
  {path:'fakultet', component: FakultetComponent},
  {path:'departman', component:DepartmanComponent},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'autor', component:AutorComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
