import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent {
  @Input() miUsuario!: Usuario;
  usuariosService: UsuariosService = inject(UsuariosService);
  router: Router = inject(Router);

  async borrarUsuario(pId: string | undefined): Promise<void> {
    if (pId !== undefined) {
      try {
        Swal.fire({
          title: '¿Quieres eliminar el usuario?',
          text: 'Esta acción no se podrá revertir',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, eliminar!',
        }).then(async (result) => {
          if (result.isConfirmed) {
            let response = await this.usuariosService.delete(pId);
            console.log(response);
            if (response) {
              Swal.fire('Eliminado!', 'El registro ha sido borrado', 'success');
            }
          }
        });
        //alert("El usuario ha sido borrado")
      } catch (error) {
        console.log(error);
      }
    }
  }
}
