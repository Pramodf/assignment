import { Component, OnInit , Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ClassListService } from '../service/class-list.service';

@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.css']
})
export class ClassDetailComponent implements OnInit {

  @Input() className: string;
  students: Object;
  selectedStudent: string;
  studentDetail: Object;

  constructor(
    private route: ActivatedRoute,
    private classList: ClassListService,
    private location: Location
  ){}

  ngOnInit() {
    this.route.params.subscribe(() => {
      this.getStudents();
    });
  }

  getStudents() {
    const className = this.route.snapshot.paramMap.get('className');
    this.classList.getClassByName(className)
    .subscribe(classObj => this.students = Object.keys(classObj));
    console.log('===' + this.students);
  }

  getStudentByName() {
    const className = this.route.snapshot.paramMap.get('className');
    this.classList.getClassByName(className)
    .subscribe(classObj => this.studentDetail = classObj[this.selectedStudent]);
  }

  onSelect(studentName: string) {
    this.selectedStudent = studentName;
    console.log('===||' + studentName);
    this.getStudentByName();

  }


}
