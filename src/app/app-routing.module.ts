import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C404Component } from './components/c404/c404.component';
import { ListadoUsuariosComponent } from './components/listado-usuarios/listado-usuarios.component';
import { NuevoUsuarioComponent } from './components/nuevo-usuario/nuevo-usuario.component';
import { VistaUsuarioComponent } from './components/usuario/vista-usuario/vista-usuario.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: ListadoUsuariosComponent},
  {path: 'newuser', component: NuevoUsuarioComponent},
  {path: 'update/:id', component: NuevoUsuarioComponent},
  {path: 'user/:id', component: VistaUsuarioComponent},
  {path: '**', component: C404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
