import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Cursos } from "../curso-model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() courses: Cursos[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);

  readonly displayedColumns = ['name', 'category', 'actions'];

  constructor() { }

  ngOnInit(): void {}

  onAdd() {
    this.add.emit(true);
  }

  onEdit(course: Cursos) {
    this.edit.emit(course);
  }

}

