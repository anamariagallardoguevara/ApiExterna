import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css'],
})
export class ListadoUsuariosComponent implements OnInit {
  arrUsuarios: Usuario[] = [];
  currentPage: number = 1;
  totalPages: number = 1;

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.goToPage();
  }
  async goToPage(pNum: number = 1): Promise<void> {
    try {
      let response = await this.usuariosService.getAll(pNum);
      console.log(response);
      this.currentPage = response.page;
      this.totalPages = response.total_pages;
      this.arrUsuarios = response.results;
    } catch (error) {
      console.log(error);
    }
  }
}
