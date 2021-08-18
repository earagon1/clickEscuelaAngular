import { StudentGradeListComponent } from './student-grade/student-grade-list/student-grade-list.component';
import { StudentGradeComponent } from './student-grade/student-grade.component';
import { RouterModule } from '@angular/router';
import { ModalEditComponent } from './modal-edit/modal-edit.component';
import { HistoryComponent } from './groups/groups-list/history/history.component';
import { CommentComponent } from './groups/groups-list/comment/comment.component';
import { GroupsListComponent } from './groups/groups-list/groups-list.component';
import { GroupsComponent } from './groups/groups.component';
import { ParentModule } from './../parent/parent.module';
import { ReportCardComponent } from './../parent/report-card/report-card.component';
import { StudentMenuComponent } from './student-menu/student-menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HomeworkStudentComponent } from './homework/homework.component';
import { HomeworkListComponent } from './homework/homework-list/homework-list.component';
import { LibraryComponent } from './library/library.component';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonsModule } from '../commons/commons.module';

@NgModule({
  declarations: [
    StudentMenuComponent,
    HomeworkStudentComponent,
    HomeworkListComponent,
    LibraryComponent,
    GroupsComponent,
    GroupsListComponent,
    CommentComponent,
    HistoryComponent,
    ModalEditComponent,
    StudentGradeComponent,
    StudentGradeListComponent
  ],
  imports: [
    CommonModule,
    CommonsModule,
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
    RouterModule,
  ],
})
export class StudentModule {}
