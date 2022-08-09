import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {CursosService} from "../cursos.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Cursos} from "../curso-model";
import {catchError, Observable, of} from "rxjs";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  courses$: Observable<Cursos[]>;

  constructor(
    private cursosService: CursosService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.courses$ = this.cursosService.list()
      .pipe(
        catchError(error => {
          // this.onError('Erro ao carregar cursos.');
          return of([])
        })
      );
  }
    // onError(errorMsg: string) {
    //   this.dialog.open(ErrorDialogComponent, {
    //     data: errorMsg
    //   });


  ngOnInit(): void {
  }
  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onEdit(course: Cursos) {
    this.router.navigate(['edit', course._id], { relativeTo: this.route });
  }
}
