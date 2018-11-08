import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactsService } from './contacts.service';
import { ChatsService } from './service/chat.service';

@NgModule({
    declarations: [
        AppComponent,
        ChatComponent,
        ContactsComponent,
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [ContactsService, ChatsService],
    bootstrap: [AppComponent]
})
export class AppModule {}
