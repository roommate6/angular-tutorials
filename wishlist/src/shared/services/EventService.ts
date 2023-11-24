import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

class NextObject {
  constructor(public eventName: string, public payload: any) {}
}

@Injectable({ providedIn: 'root' })
export class EventService {
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
