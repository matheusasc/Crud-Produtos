import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoursesComponent } from './cursos/courses/courses.component';

import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ErrorDialogComponent } from './shared/components/error-dialog/error-dialog.component';
import {MaterialAngularModule} from "./shared/material-angular.module";
import { CategoryPipe } from './shared/pipes/category.pipe';
import {SharedModule} from "./shared/shared.module";
import { CourseFormComponent } from './cursos/course-form/course-form.component';



@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialAngularModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {

}
