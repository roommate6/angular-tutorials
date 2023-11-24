import { Type } from '@angular/core';
import { Observable, Subject } from 'rxjs';

class NextObject {
  constructor(public eventName: string, public payload: any) {}
}

class EventService {
  private subject = new Subject<NextObject>();

  emit(eventName: string, payload: any) {
    this.subject.next(new NextObject(eventName, payload));
  }

  addListener(eventName: string, callback: (event: any) => void) {
    this.subject.asObservable().subscribe((nextObject: NextObject) => {
      if (nextObject.eventName !== eventName) {
        return;
      }
      callback(nextObject.payload);
    });
  }
}

export default new EventService();
