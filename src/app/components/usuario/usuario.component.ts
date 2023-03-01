import { Component, Input } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario.interface';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent {
  @Input() miUsuario: Usuario | any;

}
