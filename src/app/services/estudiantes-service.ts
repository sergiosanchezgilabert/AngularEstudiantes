import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseEstudiante } from '../model/req-response-estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  constructor(private http: HttpClient) {
    console.log('estudiantes services listo')
  }

  cargarStudents() {
    const url='http://localhost:3000/estudiantes';


    return this.http.get<Array<ResponseEstudiante>>(url);
  }

  getStudent(id: string | null) {

    const url = 'http://localhost:3000/estudiantes/' + id;

    return this.http.get<ResponseEstudiante>(url);
  }

  eliminarStudent(id: number) {
    const url = 'http://localhost:3000/estudiantes/' + id;


    return this.http.delete(url);
  }

  aniadirStudent(unico: []) {

     const url='http://localhost:3000/estudiantes';

 
     return this.http.post(url,unico);

    // return this.http.post("http://localhost:3000/personas/",unico)
  }

  editarStudent(unico: [], id: number) {

    const url = 'http://localhost:3000/estudiantes/' + id;

    return this.http.put(url, unico);
  }
}