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
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { ChatTabComponent } from './chat-tab/chat-tab.component';
import { GroupTabComponent } from './group-tab/group-tab.component';

@NgModule({
    declarations: [
        AppComponent,
        ChatComponent,
        ContactsComponent,
        LoginComponent,
        RegisterComponent,
        MainComponent,
        ProfileComponent,
        ChatTabComponent,
        GroupTabComponent
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
