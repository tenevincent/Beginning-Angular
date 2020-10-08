import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs';
import { filter, max, reduce } from 'rxjs/operators';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private observer: Observable<string>;
  private subject_test: Subject<string> = new Subject<string>();


  ngOnInit(): void {



      setInterval(  () => { this.subject_test.next("A");  }, 3000);

    this.doCreateObservable();


    this.subject_test.subscribe({
      next: (v) => console.log(`From Subject : ${v}`)
    });
    this.subject_test.subscribe({
      next: (v) => console.log(`From Subject: ${v}`)
    });


  }
  title = 'NxJsIntroduction';
  list1: Array<number> = [1, 6, 15, 10, 58, 2, 40];

  doMaximumRxJs() {

    from(this.list1).pipe(max((a, b) => a < b ? -1 : 1)).subscribe(x => console.log("The Max value is " + x));
  }

  doCreateObservable() {

    this.observer = new Observable(
      function subscribe(subscriber) {
        subscriber.next("My First Observable");
        subscriber.next("My First Observable");
        subscriber.next("My First Observable");
      }
    );

    this.observer.subscribe(x => console.log(x));

  }

  doExecuteObservable() {

    var observer = new Observable(
      function subscribe(subscriber) {
        try {
          subscriber.next("My First Observable");
          subscriber.next("Testing Observable");
          subscriber.complete();
        } catch (e) {
          subscriber.error(e);
        }
      }
    );
    observer.subscribe(x => console.log(x), (e) => console.log(e), () => console.log("Observable is complete"));

  }


  doExecutePipe() {

    let test1 = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    let case1 = test1.pipe(
      filter(x => x % 2 === 0),
      filter(x => x % 2 === 0),
      filter(x => x % 2 === 0),
      reduce((acc, one) => acc + one, 0)
    )
    case1.subscribe(x => console.log(x));

  }


  addSubject() {
    this.subject_test.next("A");
  }


}
