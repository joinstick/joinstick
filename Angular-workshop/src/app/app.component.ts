import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-workshop';
  // name: string = "Miss Kanyawee Srikongkaew";
  // score:number = 49;
  student:any = {
    name : "Peter",
    studentId : "5921600172",
    weight : 57,
    height : 164
  }
  studentList = [{
    name : "Angulala",
    studentId : "5921600172",
    weight : 68,
    height : 164
  },{
    name : "Joy",
    studentId : "5921600172",
    weight : 52,
    height : 164
  },{
    name : "Vita",
    studentId : "5921600172",
    weight : 85,
    height : 164
  }];
  constructor(){
    //let student = "student is function";
    // console.log(this.student);
    // console.log(student);
    // console.log(this.studentList);
    this.student.bmi = (this.student.weight/((this.student.height/100)*(this.student.height/100))).toFixed(2);
    this.studentList.map((object,index)=>{
              let obj:any = object;
               obj.bmi = (object.weight/((object.height/100)*(object.height/100))).toFixed(2);
               return obj;
               
    })
    // console.log(this.studentList);
    
    
  }
}
