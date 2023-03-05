import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private baseUrl:string = 'https://peticiones.online/api/users/'

  constructor(private httpClient: HttpClient) {}
 
  getAll(pPage: number = 1): Promise<any>{
    return lastValueFrom(this.httpClient.get<any>(`${this.baseUrl}?page=${pPage}`))
  }

  getById(pId: string) : Promise<any>{
    return lastValueFrom(this.httpClient.get<any>(`${this.baseUrl}${pId}`))
  }

  insertarUsuario(pUsuario: Usuario) : Promise<Usuario>{
    return lastValueFrom(this.httpClient.post<Usuario>(this.baseUrl, pUsuario))
  }

  actualizarUsuario(pUsuario: Usuario) : Promise<Usuario>{
    return lastValueFrom(this.httpClient.put<Usuario>(`${this.baseUrl}${pUsuario._id}`, pUsuario))
  }

  delete(pId: string): Promise <any>{
    return lastValueFrom(this.httpClient.delete<any>(`${this.baseUrl}${pId}`));
  }
}



