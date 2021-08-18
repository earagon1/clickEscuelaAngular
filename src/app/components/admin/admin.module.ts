import { AppRoutingModule } from './../../app-routing.module';
import { RouterModule } from '@angular/router';
import { ConfigurationComponent } from './configuration/configuration.component';
import { CommonsModule } from './../commons/commons.module';
import { RangeSelectorComponent } from './../commons/range-selector/range-selector.component';
import { AccountListComponent } from './account/account-list/account-list.component';
import { AccountComponent } from './account/account.component';
import { EditTeacherComponent } from './teacher-component/edit-teacher/edit-teacher.component';
import { AddTeacherComponent } from './teacher-component/add-teacher/add-teacher.component';
import { TeacherBaseModelComponent } from './teacher-component/teacher-base-model/teacher-base-model.component';
import { EditStudentComponent } from './students-component/edit-student/edit-student.component';
import { StudentBaseModelComponent } from './students-component/student-base-model/student-base-model.component';
import { AddStudentComponent } from './students-component/add-student/add-student.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ParentModule } from '../parent/parent.module';
import { MatChipsModule } from '@angular/material/chips';


@NgModule({
  declarations: [
    RegisterComponent,
    AddStudentComponent,
    StudentBaseModelComponent,
    EditStudentComponent,
    AccountComponent,
    AccountListComponent,
    TeacherBaseModelComponent,
    AddTeacherComponent,
    EditTeacherComponent,
    ConfigurationComponent,
    RangeSelectorComponent,
  ],

  imports: [
    CommonModule,
    MatSidenavModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatDividerModule,
    MatListModule,
    ReactiveFormsModule,
    NgbModule,
    MatCardModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatIconModule,
    NgxChartsModule,
    MatBadgeModule,
    MatDialogModule,
    MatDatepickerModule,
    MatDatepickerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatMenuModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatRippleModule,
    ParentModule,
    MatSelectModule,
    MatGridListModule,
    MatChipsModule,
    CommonsModule,
    MatAutocompleteModule,
    RouterModule,
    AppRoutingModule
    
  ],
  exports: [RegisterComponent],
})
export class AdminModule {}
