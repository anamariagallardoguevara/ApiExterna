import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { UsuariosService } from 'src/app/services/usuarios.service';


@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit{

  arrUsuarios: Usuario[] = [];
  // idEliminar?: number;
  
  constructor(private usuariosService: UsuariosService){}

  ngOnInit(): void {
    this.arrUsuarios = this.usuariosService.getAll()
  }

  probando(): void{(error: any) => {
    Swal.fire('Any fool can use a computer')
  };

  }

  // eliminar(id: number): void{
  //   this.usuariosService.eliminar(id).subcribe(
  //     () => this.arrUsuarios
  //   )
  // }

}
