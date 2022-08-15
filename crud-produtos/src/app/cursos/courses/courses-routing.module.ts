import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CoursesComponent} from "./courses.component";
import {CourseFormComponent} from "../course-form/course-form.component";
import {NewCourseComponent} from "../new-course/new-course.component";

const routes: Routes = [
  {path: '', component:CoursesComponent},
  { path: 'new', component: CourseFormComponent },
  { path: 'new-course', component: NewCourseComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
