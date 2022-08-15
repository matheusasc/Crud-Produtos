import {Component, OnInit, EventEmitter, Input, Output, NgModule} from '@angular/core';
import {Course} from "../course-interface";
import {CoursesService} from "../services/courses.service";
import {catchError, Observable, of} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {ErrorDialogComponent} from "../../shared/components/error-dialog/error-dialog.component";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;
  // courses: Course [] = [];
  displayedColumns = ['name', 'category', 'actions'];

  // coursesService: CoursesService

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
    ) {
    // this.coursesService = new CoursesService();
    this.courses$ = this.coursesService.list()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar cursos.');
          return of([])
        })
      );
    // this.coursesService.list().subscribe(courses => this.courses = courses);
  }

  onError(errorMsg: String){
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    })
  }

  ngOnInit(): void {
  }

  onAdd() {
    this.router.navigate(['new-course'], {relativeTo: this.route});
  }

  onEdit(course: Course) {
    // this.router.navigate(course);
  }
  }





