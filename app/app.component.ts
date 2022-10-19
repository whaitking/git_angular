import { Component } from '@angular/core';

interface Character {
  name: string;
  rute: string;
  wasClick?: boolean;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  couples_found = 0;
  char_emolis: Character[] = [];
  ruteDefault: string =  "./assets/party.png";


  constructor() {
    let name_emolis = [
      "angry","happy","sad","smile","smiling","star","thinking","very_sad"
    ]

    for (let i = 0; i < name_emolis.length; i++) {
      this.char_emolis.push({ name: name_emolis[i], rute: `./assets/${name_emolis[i]}.png` });
      this.char_emolis.push({ name: name_emolis[i], rute: `./assets/${name_emolis[i]}.png` });
    }


    console.log(name_emolis);
    console.log(this.char_emolis);
  }

}

