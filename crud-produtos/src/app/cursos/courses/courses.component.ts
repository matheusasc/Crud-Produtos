import {Component, OnInit, EventEmitter, Input, Output, NgModule} from '@angular/core';
import {Course} from "../curso-interface";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit {
  courses: Course[] = [
    {_id:'1', name: 'Angular', category:'Front-end'},
    {_id:'2', name: 'Angular', category:'Front-end'},
    {_id:'3', name: 'Angular', category:'Front-end'},
    {_id:'4', name: 'Angular', category:'Front-end'}
  ];
  displayedColumns: string[] = ['name', 'category'];

  constructor() { }

  ngOnInit(): void {}


}

