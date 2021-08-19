import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AniadirEstudianteComponent } from './aniadir-estudiante/aniadir-estudiante.component';
import { AppComponent } from './app.component';
import { EditarEstudianteComponent } from './editar-estudiante/editar-estudiante.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaEstudiantesComponent } from './lista-estudiantes/lista-estudiantes.component';

const routes: Routes = [
  {
    path: 'formulario',
    component: FormularioComponent
  },
  {
    path: 'aniadir-estudiante',
    component: AniadirEstudianteComponent
  },
  {
    path: 'editar-estudiante/:id',
    component: EditarEstudianteComponent
  },
  {
    path: 'inicio',
    component: AppComponent
  },
  {
    path: 'app-lista-estudiantes',
    component: ListaEstudiantesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
