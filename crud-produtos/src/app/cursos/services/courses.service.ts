import { Injectable } from '@angular/core';
import { Course } from "../course-interface";
import { HttpClient } from "@angular/common/http";
import {delay, first, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/courses.json';

  constructor( private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Course[]>(this.API)
      .pipe(
        first(),
        delay(0),
        tap( courses => console.log(courses))
      );
  }

}
