import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field'
import {HttpClientModule} from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { ListaEstudiantesComponent } from './lista-estudiantes/lista-estudiantes.component';
import { AniadirEstudianteComponent } from './aniadir-estudiante/aniadir-estudiante.component';
import { FormularioComponent } from './formulario/formulario.component';
import { EditarEstudianteComponent } from './editar-estudiante/editar-estudiante.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogEstudianteComponent } from './dialog-estudiante/dialog-estudiante.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ListaEstudiantesComponent,
    AniadirEstudianteComponent,
    FormularioComponent,
    EditarEstudianteComponent,
    DialogEstudianteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatTableModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
