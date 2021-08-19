import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResponseEstudiante } from '../model/req-response-estudiante';
import { EstudiantesService } from '../services/estudiantes-service';

@Component({
  selector: 'app-editar-estudiante',
  templateUrl: './editar-estudiante.component.html',
  styleUrls: ['./editar-estudiante.component.scss']
})
export class EditarEstudianteComponent implements OnInit {

  estudiante:ResponseEstudiante;
  
  showStudent:boolean;

  constructor( private route: ActivatedRoute,private studentService: EstudiantesService) { }

  ngOnInit(): void {
       this.route.paramMap.subscribe((param)=>
      {
        this.showStudent=false;
        this.studentService.getStudent(param.get("id"))
        .subscribe( (resp) => {
          console.log(resp)
          this.estudiante=resp;
          this.showStudent=true;
        });
      });
   }
}
