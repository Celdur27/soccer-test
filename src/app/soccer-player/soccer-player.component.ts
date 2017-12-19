import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-soccer-player',
  templateUrl: './soccer-player.component.html',
  styleUrls: ['./soccer-player.component.css']
})
export class SoccerPlayerComponent implements OnInit {
  @Input() playerAttr: Array<number>;

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.setPosition();
  }

  setPosition() {
    var elem = document.getElementById("player_" + this.playerAttr[0]); 
    var newYPos = this.playerAttr[2]*100;
    var newXPos = this.playerAttr[1]*100;
    
    if(newYPos > 100) {
      newYPos = 100;
    } else if(newYPos < 0) {
      newYPos = 0;
    }

    if(newXPos > 100) {
      newXPos = 100;
    } else if(newXPos < 0) {
      newXPos = 0;
    }

    elem.style.bottom = newYPos + '%'; 
    elem.style.left = newXPos + '%';
  }
}
