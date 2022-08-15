import { Injectable } from '@angular/core';
import { Course } from "../course-interface";
import { HttpClient } from "@angular/common/http";
import {delay, first, map, tap} from "rxjs";
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {


  private readonly API = '/assets/courses.json';


  constructor(
    // private db: AngularFireDatabase,
   private httpClient: HttpClient) { }
  //
  // insert(curso: Course) {
  //   this.db.list('contato').push(curso)
  //     .then((result: any) => {
  //       console.log(result.key);
  //     });
  // }
  //
  // update(curso: Course, key: string) {
  //   this.db.list('curso').update(key, curso)
  //     .catch((error: any) => {
  //       console.error(error);
  //     });
  // }
  //
  // getAll() {
  //   return this.db.list('curso')
  //     .snapshotChanges()
  //     .pipe(
  //       map(changes => {
  //         return changes.map(c => ({ key: c.payload.key }));
  //       })
  //     );
  // }
  //
  // delete(key: string) {
  //   this.db.object(`curso/${key}`).remove();
  // }

  list() {
    return this.httpClient.get<Course[]>(this.API)
      .pipe(
        first(),
        delay(0),
        tap( courses => console.log(courses))
      );
  }
}
