import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ErrorDialogComponent} from "./components/error-dialog/error-dialog.component";
import {MaterialAngularModule} from "./material-angular.module";
import {CategoryPipe} from "./pipes/category.pipe";

@NgModule({
  declarations: [
    ErrorDialogComponent,
    CategoryPipe

  ],
  imports: [
    CommonModule,
    MaterialAngularModule,
  ],
  exports: [
    ErrorDialogComponent,
    CategoryPipe
  ]
})
export class SharedModule { }
