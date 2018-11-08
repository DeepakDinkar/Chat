import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

const url = 'http://localhost:3000';
@Injectable()
export class ChatsService {
    private socket: any;

    constructor() {
        this.socket = io(url);
    }

    getSocket(): any {
        return this.socket;
    }
    // sendMessage(message: string, userName: string) {
    //     this.socket.emit('message', {
    //         message: message,
    //         user: userName,
    //         time: Date.now()
    //     });
    //     this.socket.emit('typing', '');
    // }

    // receiveMessage() {
    //      this.socket.on('message', message => {});
    // }

    // receiveTypingMessage() {}

    // disconnectSocket(userName: string) {
    //     this.socket.emit('disconnect', userName);
    // }
}
