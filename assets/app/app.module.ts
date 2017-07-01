import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { MessageListComponent } from "./messages/message-list.component";
import {MessageComponent} from "./messages/message.component";
 
@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
    ],
    imports: [BrowserModule, FormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}