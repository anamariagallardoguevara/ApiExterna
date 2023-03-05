import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vista-usuario',
  templateUrl: './vista-usuario.component.html',
  styleUrls: ['./vista-usuario.component.css'],
})
export class VistaUsuarioComponent implements OnInit {
  usuario!: Usuario | any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private usuariosService: UsuariosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (params: any) => {
      let id: string = params.id;
      console.log(id);
      let response: any = await this.usuariosService.getById(id);
      if (response) {
        this.usuario = response;
      } else {
        alert('Lo sentimos, este usuario no existe');
        this.router.navigate(['home']);
      }
    });
  }

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
              Swal.fire(
                'Eliminado!',
                'El registro ha sido borrado',
                'success'
              ).then((result) => {
                if (result.isConfirmed) {
                  this.router.navigate(['home']);
                }
              });
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
