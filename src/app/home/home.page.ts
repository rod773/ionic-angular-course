import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  text = 'Default Starting Text';

  onChangeText() {
    this.text = 'Changed!';
  }
  constructor() {}
}
