import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles:[`
        .active {
        color: white;
        }
    `]
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string ='Offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'Active' : 'Passive';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'Active' ?  'green' : 'red';
    }
}