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
  serverCreationStatus = "No server was created";
  inputEventData = "Nothing here";

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }

  ngOnInit(): void {
  }
  //Reacting to Events
  onCreateServer() {
    this.serverCreationStatus = "Server was created 👍";
  }

  onUpdateServerName(event: Event) {
    this.inputEventData = (<HTMLInputElement>event.target).value;
    console.log(event);
  }

}
