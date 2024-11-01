import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Usuario } from './modelos/usuario';
import { UsuariosService } from './services/usuarios.service';
import { NombrePipe } from './pipes/nombre.pipe';
import { DatePipe, NgFor } from '@angular/common';
import { GeneroPipe } from './pipes/genero.pipe';
import { HighlightGenderDirective } from './directivas/highlight-gender.directive';
import { HoverZoomDirective } from './directivas/hover-zoom.directive';
import { HighlightDirective } from './directivas/highlight.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NombrePipe, DatePipe, HighlightDirective, GeneroPipe, NgFor, HighlightGenderDirective, HoverZoomDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  usuarios: Usuario[] = [];
  busqueda = '';

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.usuariosService.getUsuarios()
    .subscribe(response => {
      this.usuarios = response.results;
    });
  }
}
