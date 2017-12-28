import { Component, OnInit } from '@angular/core';
import { CLASSES } from './class-list';
import { ClassListService } from '../service/class-list.service';

@Component({
  selector: 'class-room',
  templateUrl: './class-room.component.html',
  styleUrls: ['./class-room.component.css']
})
export class ClassRoomComponent implements OnInit {
  public arrayOfKeys;
  classes: Object;
  selectedClass: string;
  students: Object;
  constructor(private classList: ClassListService) { }

  ngOnInit() {
    this.getClasses();
  }

  onSelect(className: string) {
    this.selectedClass = className;
    this.classList.getClassByName(className);
    this.getStudents();
  }

  getClasses(): void {
    this.classList.getClasses()
        .subscribe(data => this.classes = Object.keys(data[0]));
  }

  getStudents(): void {
    this.classList.getClassByName(this.selectedClass)
        .subscribe(data => this.students = Object.keys(data));
  }
}
