import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css'],
})
export class NuevoUsuarioComponent implements OnInit {
  title: string = 'Registro';
  formModel: FormGroup;
  id!: string;

  constructor(
    private usuariosService: UsuariosService,
    private router: Router,
    private activatedRouted: ActivatedRoute
  ) {
    this.formModel = new FormGroup(
      {
        first_name: new FormControl('', [Validators.required]),
        last_name: new FormControl('', [Validators.required]),
        email: new FormControl('', [
          Validators.required,
          Validators.pattern(/^\S+\@\S+\.\S+/),
        ]),
        image: new FormControl('', [
          Validators.required,
          Validators.pattern(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/),
        ]),
      },
      []
    );
  }

  ngOnInit(): void {
    this.activatedRouted.params.subscribe(async (params: any) => {
      let id = params.id;
      if (id) {
        this.id = id;
        this.title = 'Actualización';
        let response = await this.usuariosService.getById(id);
        console.log(response);
        const usuario: Usuario = response;
        this.formModel.get('first_name')?.setValue(usuario.first_name);
        this.formModel.get('last_name')?.setValue(usuario.last_name);
        this.formModel.get('email')?.setValue(usuario.email);
        this.formModel.get('image')?.setValue(usuario.image);
        this.formModel.addControl('id', new FormControl(this.id));
      }
    });
  }

  async getDataForm() {
    let usuario: Usuario = {
      _id: this.formModel.value.id,
      image: this.formModel.value.image,
      first_name: this.formModel.value.first_name,
      last_name: this.formModel.value.last_name,
      username: this.formModel.value.email.split('@')[0],
      email: this.formModel.value.email,
      password: this.formModel.value.password,
    };
    if (this.id) {
      try {
        let response = await this.usuariosService.actualizarUsuario(usuario);
        if (response.id) {
          Swal.fire('El usuario se ha modificado correctamente', 'success');
          //alert('Los datos se han modificado correctamente');
          this.router.navigate(['home']);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        let response = await this.usuariosService.insertarUsuario(usuario);
        if (response.id) {
          Swal.fire(
            'Buen trabajo',
            'El usuario se ha creado correctamente',
            'success'
          );
          //alert('El usuario ha sido creado correctamente'); //me gustaría meter el nombre del usuario
          this.router.navigate(['home']);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  checkControl(pControlName: string, pError: string): boolean {
    if (
      this.formModel.get(pControlName)?.hasError(pError) &&
      this.formModel.get(pControlName)?.touched
    ) {
      return true;
    }
    return false;
  }
}
