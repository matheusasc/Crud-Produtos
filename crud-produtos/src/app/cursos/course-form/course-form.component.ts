import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CoursesService} from "../services/courses.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Form, FormBuilder, FormGroup} from "@angular/forms";
import { Course } from "../course-interface";


@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {
  form: FormGroup;
  // form = this.formBuilder.group({
  //   _id: [''],
  //   name: [''],
  //   category: ['']
  // });

  constructor(private formBuilder: FormBuilder,
    private service: CoursesService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      name: [null],
        category: [null]
    });
  }

  ngOnInit(): void {
    const course: Course = this.route.snapshot.data['course'];
    this.form.setValue({
      _id: course._id,
      name: course.name,
      category: course.category
  });
  }

}
