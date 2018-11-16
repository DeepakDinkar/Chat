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
}
