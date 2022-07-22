import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aareon-ws-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() {console.log('constructor Menu') }

  ngOnInit(): void {
    console.log('init Menu') 
  }

}
