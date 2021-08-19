import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { AniadirEstudianteComponent } from './aniadir-estudiante/aniadir-estudiante.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'estudiantes-app';

  ngOnInit(): void {

  }

  constructor(private router: Router) {
  }

  aniadirEstudiante() {
    this.router.navigateByUrl('aniadir-estudiante');
  }


  listaEstudiantes() {
    this.router.navigateByUrl('app-lista-estudiantes');
  }
}
