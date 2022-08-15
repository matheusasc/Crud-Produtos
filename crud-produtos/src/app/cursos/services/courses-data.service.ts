import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Course} from "../course-interface";

@Injectable({
  providedIn: 'root'
})
export class CourseDataService {
  private cursoSource = new BehaviorSubject({ curso: null, key: '' });
  currentCurso = this.cursoSource.asObservable();

  constructor() { }

  changeCurso( curso: Course, key: string) {
    this.cursoSource.next({ curso: null, key: key });
  }
}
