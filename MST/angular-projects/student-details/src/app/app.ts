import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { generateMarksArray, StudentType } from '../types/student.type';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  student_data:StudentType = {
    markCount:3,
    totalMarks: 300,
    students:[],
    markArr:[]
  }
  showDialog = false
  name = ""
  rollNo = ""
  error:any = ""
  filter = "all"
  sortBy = "rollNo"
  passMark = 40
  ngOnInit(): void {
    this.setTotalmarks()
  }
  setTotalmarks (){
    if(this.student_data.students.length > 0)
    {
      this.student_data.markCount = this.student_data.markArr.length
      this.student_data.totalMarks = this.student_data.markCount * 100
      return
    }

    if(this.student_data.markCount > 0 && this.student_data.markCount <= 6)
    {
      this.student_data.totalMarks = this.student_data.markCount * 100
    }
    else
    {
      this.student_data.markCount = 3
      this.student_data.totalMarks = 300
    }
    this.student_data.markArr = generateMarksArray(this.student_data.markCount)
  }
  AddStudent (){
    try{
      this.error = ""
      if(this.name.trim() == "" || this.rollNo.trim() == "") 
        throw new Error("Enter roll no and student name")

      this.student_data.markArr.forEach((value)=>{
        if(value == null)
          throw new Error("Marks can't be empty")

        if(value < 0 || value > 100)
          throw new Error("Marks must be between 0 and 100")
      })

      const studentMarks = this.student_data.markArr.map((value)=> Number(value))
      this.student_data.students.push({
        name:this.name.trim(),
        rollNo:this.rollNo.trim(),
        marks:studentMarks,
        getTotal:()=>{
          let total = 0
          studentMarks.forEach((value)=>{
            total += value
          })
          return total
        }
      })

      this.name = ""
      this.rollNo = ""
      this.student_data.markArr = generateMarksArray(this.student_data.markCount)
    }
    catch(e:any)
    {
      this.error = e.message
    }
  }
  toogleDialog(){
    this.showDialog = !this.showDialog
    this.error = ""
  }
  isFailed(student:any){
    let failed = false
    student.marks.forEach((mark:number)=>{
      if(mark < this.passMark)
        failed = true
    })
    return failed
  }
  getStudents(){
    let students = [...this.student_data.students]

    if(this.filter == "failed")
      students = students.filter((student)=> this.isFailed(student))

    if(this.filter == "pass")
      students = students.filter((student)=> !this.isFailed(student))

    if(this.filter == "top5")
      students = students.sort((a,b)=> b.getTotal() - a.getTotal()).slice(0,5)

    if(this.sortBy == "rollNo")
      students = students.sort((a,b)=> this.sortRollNo(a.rollNo,b.rollNo))

    if(this.sortBy == "name")
      students = students.sort((a,b)=> a.name.localeCompare(b.name))

    if(this.sortBy == "totalHigh")
      students = students.sort((a,b)=> b.getTotal() - a.getTotal())

    if(this.sortBy == "totalLow")
      students = students.sort((a,b)=> a.getTotal() - b.getTotal())

    return students
  }
  sortRollNo(a:string,b:string){
    const firstNo = Number(a)
    const secondNo = Number(b)

    if(!Number.isNaN(firstNo) && !Number.isNaN(secondNo))
      return firstNo - secondNo

    return a.localeCompare(b)
  }
}
