import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoUsuariosComponent } from './components/listado-usuarios/listado-usuarios.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { HeaderComponent } from './components/header/header.component';
import { VistaUsuarioComponent } from './components/usuario/vista-usuario/vista-usuario.component';
import { NuevoUsuarioComponent } from './components/nuevo-usuario/nuevo-usuario.component';
import { C404Component } from './components/c404/c404.component';


@NgModule({
  declarations: [
    AppComponent,
    ListadoUsuariosComponent,
    UsuarioComponent,
    HeaderComponent,
    VistaUsuarioComponent,
    NuevoUsuarioComponent,
    C404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
