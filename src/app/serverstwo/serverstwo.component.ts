import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serverstwo',
  templateUrl: './serverstwo.component.html',
  // styleUrls: ['./serverstwo.component.css']
  styles: [`
    p {
      color: green;
    }
  `],
})
export class ServerstwoComponent implements OnInit {
  //Property Binding
  allowNewServer = false;
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }

  ngOnInit(): void {
  }

}
