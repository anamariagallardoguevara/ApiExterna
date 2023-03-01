import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-vista-usuario',
  templateUrl: './vista-usuario.component.html',
  styleUrls: ['./vista-usuario.component.css']
})

export class VistaUsuarioComponent implements OnInit{

  usuario: Usuario | any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private usuariosService: UsuariosService,
    private router: Router
    ){}

    ngOnInit(): void{
      this.activatedRoute.params.subscribe((params: any) => {
        let id: number = parseInt(params.id);
        let response = this.usuario = this.usuariosService.getById(id)
        if(response){
          this.usuario = response
        }else{
          alert("Lo sentimos, este usuario no existe");
          this.router.navigate(['home'])
        }
      })
    }
  }

  
