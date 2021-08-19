import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponseEstudiante } from '../model/req-response-estudiante';
import { EstudiantesService } from '../services/estudiantes-service';

//Ventaja de validaciones en ts y no en html

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit, OnChanges {

  showAniadir: boolean;

  @Input() estudiante: ResponseEstudiante;

  constructor(private formBuilder: FormBuilder, private estudiantesService: EstudiantesService, private route: ActivatedRoute, private router: Router) { }


  registerForm = this.formBuilder.group({

    num_hours_week: [''],
    coments: [''],
    branch: ['']
  });

  ngOnInit(): void {

    if (this.route.snapshot.url[0].path === 'editar-estudiante/:id') {
      console.log("falso")
      this.showAniadir = false;
    }
    else{ this.showAniadir=true;
      console.log("true")

    }
  }

  ngOnChanges(change: SimpleChanges): void {
    if (change.estudiante) {
      this.registerForm.patchValue(this.estudiante)
    }
  }


  submit() {
    console.log(this.registerForm.value);
  }

  refrescar() {

    this.registerForm.reset();
  }

  aniadirDatos() {
    this.estudiantesService.aniadirStudent(this.registerForm.value)
    .subscribe(() => {
      alert("Añadido")
    })
    this.router.navigateByUrl('app-lista-estudiantes');
  }

  enviarDatos(id: number) {

    console.log(this.registerForm.value)
    this.estudiantesService.editarStudent(this.registerForm.value, id)
      .subscribe(() => {
        alert("Editado")
      })
    this.router.navigateByUrl('lista');
  }

}

