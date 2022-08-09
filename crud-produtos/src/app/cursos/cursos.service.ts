import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Cursos } from "./curso-model";
import { delay, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = 'api/courses';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Cursos[]>(this.API)
      .pipe(
        first(),
        //delay(5000),
        tap(courses => console.log(courses))
      );
  }

  loadById(id: string) {
    return this.httpClient.get<Cursos>(`${this.API}/${id}`);
  }

  save(record: Partial<Cursos>) {
    return this.httpClient.post<Cursos>(this.API, record).pipe(first());
  }
}
