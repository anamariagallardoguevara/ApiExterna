import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent {
  formModel: FormGroup;

  constructor(private usuariosService: UsuariosService){
    this.formModel = new FormGroup({
      name: new FormControl("",[
        Validators.required,
      ]),
      surname: new FormControl("",[
        Validators.required,
      ]),
      email: new FormControl("",[
        Validators.required,
        Validators.pattern(/^\S+\@\S+\.\S+/)
      ]),
      image: new FormControl("",[
        Validators.required,
        Validators.pattern(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)
      ])
    }, [])
  }

  getDataForm(){
    //console.log(this.formModel.value)
    const nuevoUsuario: Usuario = {
      image: this.formModel.value.image,
      name: this.formModel.value.name,
      surname: this.formModel.value.surname,
      username: this.formModel.value.email.split("@")[0],
      email: this.formModel.value.email
    }

    this.usuariosService.insertar(nuevoUsuario);

  }

  checkControl(pControlName: string, pError: string) : boolean{
    if(this.formModel.get(pControlName)?.hasError(pError) && this.formModel.get(pControlName)?.touched){
      return true
    }
    return false
  }

  

  

}
