import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Departman } from 'src/app/models/departman';
import { Status } from 'src/app/models/status';
import { StudentService } from 'src/app/services/student.service';
import { StudentDialogComponent } from '../dialogs/student-dialog/student-dialog.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit, OnChanges, OnDestroy {

  displayedColumns = ['id', 'ime','prezime','brojIndeksa','status', 'departman', 'actions'];
  dataSource!:MatTableDataSource<StudentComponent>;
  subscription!:Subscription;
  @Input() selektovanDepartman!:Departman;
  constructor(private studentService:StudentService, 
              private dialog:MatDialog) { }
  
  @ViewChild(MatSort, {static:false}) sort!: MatSort;
  @ViewChild(MatPaginator, {static:false}) paginator!: MatPaginator;

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnChanges(): void {
    if(this.selektovanDepartman.id){
      this.loadData();
    }
  }

  ngOnInit(): void {
    //this.loadData();
  }

  loadData(){
    this.studentService.getStudentZaDepartman(this.selektovanDepartman.id)
    .subscribe(
      data=>{
        this.dataSource=new MatTableDataSource(data);
        this.dataSource.sort= this.sort;
        this.dataSource.paginator=this.paginator;
      }
    ),
    (error:Error)=>{
      console.log(error.name+ ' ' + error.message);
    }
  }

  openDialog(flag :number, id?:number, ime?:string, prezime?:string, brojIndeksa?:string, status?:Status, departman?: Departman ){
      const dialogref=this.dialog.open(StudentDialogComponent, {data :{id, ime, prezime, brojIndeksa, status, departman}});
      dialogref.componentInstance.flag=flag;
      if(flag===1){
        dialogref.componentInstance.data.departman=this.selektovanDepartman;
      }
      dialogref.afterClosed().subscribe(res => {
        if(res === 1) {
          this.loadData();
        }
      });
  }

  applyFilter(filterValue: any){
    filterValue = filterValue.target.value;
    filterValue=filterValue.trim();
    filterValue= filterValue.toLocaleLowerCase();

    this.dataSource.filter= filterValue;
  }

}
