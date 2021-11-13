import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inderspace-radio';

  showCategories = false;
  play = true;

  categories(){
    console.log("showCategories");
    this.showCategories = !this.showCategories;
  }

  playSong(){
    console.log("playSong");
    this.play = !this.play;
  }
}
