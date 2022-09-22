import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { Departman } from 'src/app/models/departman';
import { Status } from 'src/app/models/status';
import { Student } from 'src/app/models/student';
import { StatusService } from 'src/app/services/status.service';
import { StudentService } from 'src/app/services/student.service';
import { StudentComponent } from '../../student/student.component';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrls: ['./student-dialog.component.css']
})
export class StudentDialogComponent implements OnInit, OnDestroy {


  statusi!:Status[];
  departmani!:Departman[];
  public flag!:number;
  statusSubscription!: Subscription;
  

  constructor(public snackBar:MatSnackBar,
              public dialogRef:MatDialogRef<StudentComponent>,
              @Inject(MAT_DIALOG_DATA) public data:Student,
              public studentService: StudentService,
              public statusService:StatusService
              
   ) { }
  ngOnDestroy(): void {
    this.statusSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.statusSubscription=this.statusService.getAllStatus().subscribe(
      data=>{
      this.statusi=data;
    }),
    (error:Error)=>{
      console.log(error.name+' '+error.message);
    };
    
  }

  compareTo(a: any, b:any) {
    return a.id == b.id;
  }
  public add():void{
    this.studentService.addStudent(this.data).subscribe(() => {
      this.snackBar.open('Dodali ste novog studenta!', 'OK', {duration: 2500});
    }, (error: Error) => {
      this.snackBar.open('Došlo je do greške', 'Zatvori', {duration:2500});
    }); 
  }

  public update():void{
    this.studentService.updateStudent(this.data)
        .subscribe(data=>{
          this.snackBar.open("Uspesno modifikovan student ", "U redu", {
            duration: 2500
          });
    }),
    (error: Error)=>{
      console.log(error.name + '-->'+ error.message);
      this.snackBar.open("Dogodila se greska" ,"Zatvori", {
        duration: 2500
      });
    };
  }

  public delete(): void{
    this.studentService.deleteStudent(this.data.id)
      .subscribe(() =>{
        this.snackBar.open("Uspesno obrisan student", "U redu", {
          duration: 2500
      });
    }),
    (error: Error)=>{
    console.log(error.name + '-->'+ error.message);
      this.snackBar.open("Dogodila se greska" ,"Zatvori", {
      duration: 2500
      });
    };
  }

  public cancel():void{
    this.dialogRef.close();
    this.snackBar.open("Odustali ste od izmena" ,"U redu", {
      duration: 1000
    });
  }
}
