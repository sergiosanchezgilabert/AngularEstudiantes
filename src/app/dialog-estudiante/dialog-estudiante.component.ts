import { Component, OnInit, Inject, Input,OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponseEstudiante } from '../model/req-response-estudiante';
import { EstudiantesService } from '../services/estudiantes-service';

@Component({
  selector: 'app-dialog-estudiante',
  templateUrl: './dialog-estudiante.component.html',
  styleUrls: ['./dialog-estudiante.component.scss']
})
export class DialogEstudianteComponent implements OnInit, OnChanges {

  @Input() estudiante: ResponseEstudiante;

  constructor(
    public dialogRef: MatDialogRef<DialogEstudianteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ResponseEstudiante,private formBuilder: FormBuilder, 
    private estudiantesService: EstudiantesService, 
    private route: ActivatedRoute, private router: Router) {}

  onNoClick(): void {
    this.dialogRef.close(this.estudiante);
  }

  registerForm = this.formBuilder.group({

    num_hours_week: [''],
    coments: [''],
    branch: ['']
  });

  ngOnInit(): void {}

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
      alert("Añadido");
      this.dialogRef.close(this.registerForm.value);
    })
  }

}
