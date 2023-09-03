import { Component, OnInit } from '@angular/core';
import { StompService } from './wensocket/stomp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'angular-stomp-client';
  receivedMessages: string[] = [];

  constructor(private stompService: StompService) {}

  ngOnInit() {
    this.stompService.watch('/topic/messages').subscribe((message: any) => {
      this.receivedMessages.push(message.body);
    });
  }

  onSendMessage() {
    const message = `Message generated at ${new Date()}`;
    this.stompService.publish({ destination: '/app/chat', body: message });
  }
}
