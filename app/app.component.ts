import { Component } from '@angular/core';
import { flatMap } from 'rxjs';

interface Character {
  name: string;
  rute: string;
  id: number;
  wasClick?: boolean | undefined;
  found?: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  win: string;
  couples_found: number;
  char_emolis: Character[] = [];
  ruteDefault: string = "./assets/party.png";
  contentTrue: boolean | undefined;
  contetName: Character | undefined;
  runing: boolean;


  constructor() {
    let name_emolis = [
      "angry", "happy", "sad", "smile", "smiling", "star", "thinking", "very_sad"
    ]

    for (let i = 0; i < name_emolis.length; i++) {
      this.shuffle(this.char_emolis);
      this.char_emolis.push({ name: name_emolis[i], rute: `./assets/${name_emolis[i]}.png`, wasClick: false, id: i });
      this.char_emolis.push({ name: name_emolis[i], rute: `./assets/${name_emolis[i]}.png`, wasClick: false, id: (i + 10) });
      console.log(i + 10);
    }


    console.log(name_emolis);
    console.log(this.char_emolis);
    this.couples_found = 0;
    this.win = "hidden-grid";
    this.runing = true;
  }


  whenWasClick(item: Character): void {//clicando dos veces se bug contador

    console.log(this.contentTrue);
    if (this.contentTrue == undefined) {
      this.contentTrue = true;
      item.wasClick = true;
      this.contetName = item;
      console.log("la uno");
    } else if (this.contentTrue) {
      this.contentTrue = false;
      item.wasClick = true;

      if (this.contetName?.name == item.name) {
        this.couples_found++;
        item.found = true;
        this.contetName.found = true;
        this.contentTrue = undefined;

        this.runing = this.couples_found < 8;

      } else {
        this.contentTrue = undefined;
        this.char_emolis.forEach(element => {
          if (element.found != true) {
            setTimeout(() => { element.wasClick = false; }, 500);
          }
        });
      }
      console.log("la dos");
    } else {//this.contentTrue==false
      this.contentTrue == undefined;
    }

  }

  shuffle<T>(array: T[]): T[] {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  };

}

