import { Component } from '@angular/core';
import { CrudComponent } from './crud/crud.component'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [CrudComponent] 
})
export class AppComponent { 
  constructor() {
    console.log('Deu certo!');
  }
}