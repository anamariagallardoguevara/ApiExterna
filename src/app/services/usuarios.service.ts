import { Injectable } from '@angular/core';
import { USUARIOS } from '../db/usuariosdb';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private arrUsuarios: Usuario[] = USUARIOS;

  constructor() {}

  getAll(): Usuario[] {
    return this.arrUsuarios;
  }

  getById(pId: number) : Usuario | undefined{
    return this.arrUsuarios.find(usuario => usuario.id === pId);
  }

  insertar(usurio: Usuario){
    if(this.arrUsuarios){
      const utimoUsuario = this.arrUsuarios.at(-1)
      if(utimoUsuario){
        usurio.id = utimoUsuario.id?utimoUsuario.id+1: 1
      } else{
        usurio.id = 1
      }
      this.arrUsuarios.push(usurio)
    }
  }
   

  actualizar(usurio: Usuario) {
  
   }

  borrar(usurio: Usuario){

  }



}

