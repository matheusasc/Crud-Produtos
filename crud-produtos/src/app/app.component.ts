import { Component } from '@angular/core';
import {initializeApp} from "firebase/app";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crud-produtos';
}
const firebaseConfig = {
};
const app = initializeApp(firebaseConfig);
