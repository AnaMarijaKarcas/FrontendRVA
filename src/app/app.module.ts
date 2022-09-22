import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import{MatIconModule} from '@angular/material/icon';
import{MatSidenavModule} from '@angular/material/sidenav';
import{MatGridListModule} from '@angular/material/grid-list';
import{MatExpansionModule} from '@angular/material/expansion';
import{MatListModule} from '@angular/material/list';
import{MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './components/core/home/home.component';
import { AutorComponent } from './components/core/autor/autor.component';
import { AboutComponent } from './components/core/about/about.component';
import { StatusComponent } from './components/status/status.component';
import { DepartmanComponent } from './components/departman/departman.component';
import { FakultetComponent } from './components/fakultet/fakultet.component';
import { StudentComponent } from './components/student/student.component';
import { StatusDialogComponent } from './components/dialogs/status-dialog/status-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { FakultetDialogComponent } from './components/dialogs/fakultet-dialog/fakultet-dialog.component';
import { DepartmanDialogComponent } from './components/dialogs/departman-dialog/departman-dialog.component';
import {MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { StudentDialogComponent } from './components/dialogs/student-dialog/student-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AutorComponent,
    AboutComponent,
    StatusComponent,
    DepartmanComponent,
    FakultetComponent,
    StudentComponent,
    StatusDialogComponent,
    FakultetDialogComponent,
    DepartmanDialogComponent,
    StudentDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    MatTableModule,
    MatSnackBarModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSortModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
