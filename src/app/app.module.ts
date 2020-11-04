import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServerstwoComponent } from './serverstwo/serverstwo.component';
import { WarningComponent } from './warning/warning.component';
import { SuccessComponent } from './success/success.component';
import { ServerthreeComponent } from './serverthree/serverthree.component';

@NgModule({
  declarations: [
    AppComponent, 
    ServerComponent, ServerstwoComponent, SuccessComponent, WarningComponent, ServerthreeComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
