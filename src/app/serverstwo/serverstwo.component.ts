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
  userName = "";
  serverCreated = false;

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }

  ngOnInit(): void {
  }
  //Reacting to Events
  onCreateServer() {
    this.serverCreationStatus = "Server was created 👍" + this.inputEventData;
    this.serverCreated = true;
  }

  onUpdateServerName(event: Event) {
    this.inputEventData = (<HTMLInputElement>event.target).value;
    console.log(event);
  }

  onUpdateUserName() {
    this.userName = ""
  }

}
