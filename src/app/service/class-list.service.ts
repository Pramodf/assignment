import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { CLASSES } from './../class-room/class-list';

@Injectable()
export class ClassListService {

  getClasses(): Observable<Object> {
    return of(CLASSES);
  }

  getClassByName(name: string): Observable<any>{
    let classobject = CLASSES[0];
    return of(classobject[name][0]);
  }
}
