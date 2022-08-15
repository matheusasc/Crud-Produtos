import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CoursesService} from "../services/courses.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute} from "@angular/router";
import {Course} from "../course-interface";

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.scss']
})
export class NewCourseComponent implements OnInit {

  form: FormGroup;
  // form = this.formBuilder.group({
  //   _id: [''],
  //   name: [''],
  //   category: ['']
  // });

  constructor(private formBuilder: FormBuilder,
              private service: CoursesService,
              private snackBar: MatSnackBar,
              // private location: Location,
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
