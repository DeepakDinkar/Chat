import { Injectable } from '@angular/core';
import { ChatsService } from './service/chat.service';

@Injectable()
export class ContactsService {
    private socket: any;
    constructor(private chatsService: ChatsService) {
        this.socket = this.chatsService.getSocket();
    }

    getContacts() {

    }
}
