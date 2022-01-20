import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {
  name: string = 'Anthony'
  
  handleClick() {
    this.name = 'Minnaugh';
  }
  handleChange(value: string) {
    this.name = value;
  }
}
