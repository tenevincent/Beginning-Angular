import { Component, OnInit } from '@angular/core';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggingService]
})
export class AppComponent implements OnInit {
  title = 'WeatherApp';
  logs = [];

  constructor(private loggingService: LoggingService) {

  }


  ngOnInit() {

    this.getLogs();
  }
  getLogs() {
    this.logs = this.loggingService.getLogs();
  }


  onClick(message: string) {
    this.loggingService.log(message);
  }

}
