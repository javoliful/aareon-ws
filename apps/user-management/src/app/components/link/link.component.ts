import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aareon-ws-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {

  constructor() {console.log("constructor link") }

  ngOnInit(): void {
    console.log("constructor link") 
  }

}
