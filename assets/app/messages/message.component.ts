import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Message } from "./message.model";
import { MessageService } from "./message.service";

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html'
})
export class MessageComponent {
    @Input() message: Message;   // value can be passed from parent component
    @Output() editClicked = new EventEmitter<string>();

    // inject same instance with message-input component
    constructor(private messageService: MessageService) {

    }

    color = "red";
    onEdit() {
        this.editClicked.emit('A new value');   // refer as $event
    }

    onDelete() {
        this.messageService.deleteMessage(this.message);
    }
}