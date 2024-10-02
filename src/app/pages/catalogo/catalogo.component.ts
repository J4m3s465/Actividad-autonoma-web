import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {

  constructor(private router: Router) {}

  // Función para cerrar sesión
  logout() {
    // Eliminamos el token del almacenamiento local (asumiendo que el token está almacenado en localStorage)
    localStorage.removeItem('authToken');

    // Navegamos de vuelta a la página de login
    this.router.navigate(['/login']);
  }
}