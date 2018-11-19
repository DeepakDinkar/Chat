import { Component, OnDestroy, OnInit } from '@angular/core';

import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { ChatsService } from '../service/chat.service';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
    user: any;
    message = '';
    messages: any[] = [];
    typingString = '';
    private socket: any;
    private loggedUser: any;

    constructor(private route: ActivatedRoute, private chatsService: ChatsService) {
        this.socket = this.chatsService.getSocket();
        this.route.queryParams.subscribe(params => {
            this.user = JSON.parse(params.user);
            console.log(this.user);
        });
        this.loggedUser = JSON.parse(sessionStorage.getItem('user'));
    }

    ngOnInit() {
        this.updateUser();
        this.receiveMessage();
    }

    private updateUser() {
        this.socket.emit('updateUser', this.loggedUser.id);
    }

    sendMessage(message: string) {
        this.socket.emit('message', {
            message: message,
            toId: this.user.id,
            fromId: this.loggedUser.id,
            time: Date.now(),
            avatar: this.loggedUser.profilePic
        });
        this.message = '';
        this.socket.emit('typing', '');
    }

    onFocus() {
        this.socket.emit('typing', 'is typing....');
    }

    onBlur() {}

    receiveMessage() {
        this.socket.on('message', message => {
            console.log(message);
            console.log(this.loggedUser);
                this.messages.push(message);
        });
        this.socket.on('typing', typingMsg => (this.typingString = typingMsg));
    }

    ngOnDestroy() {
        this.socket.emit('disconnect', this.user);
    }
}
