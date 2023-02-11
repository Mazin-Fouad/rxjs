import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, interval, timeout } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  timer = new BehaviorSubject<number>(0);

  ngOnInit() {
    this.timer.subscribe((timePassed) => {
      console.log(timePassed);
    });

    setInterval(() => {
      let newValue = this.timer.value + 1000;
      this.timer.next(newValue);
    }, 1000);

    // this.timer.next(5);
    // this.timer.next(10);
    // this.timer.next(15);
    // this.timer.next(20);
    // this.timer.next(25);
    // this.timer.next(30);
  }
}
