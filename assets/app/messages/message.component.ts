import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Message } from "./message.model";

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html'
})
export class MessageComponent {
    @Input() message: Message;   // value can be passed from parent component
    @Output() editClicked = new EventEmitter<string>();

    onEdit() {
        console.log('clicked');
        this.editClicked.emit('A new value');   // refer as $event
    }

    onDelete() {

    }
}