import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

const url = 'http://localhost:3000';
@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
    message = '';
    messages: any[] = [];
    typingString = '';
    private socket: any;
    constructor() {
        this.socket = io(url);
    }

    ngOnInit() {
        this.receiveMessage();
    }

    sendMessage(message: string) {
        this.socket.emit('message', {
            message: message,
            time: Date.now()
        });
        this.message = '';
        this.socket.emit('typing', '');
    }

    onFocus() {
        this.socket.emit('typing', 'is typing....');
    }

    onBlur() {

    }

    receiveMessage() {
        this.socket.on('message', message => this.messages.push(message));
        this.socket.on('typing', typingMsg => (this.typingString = typingMsg));
    }
}
