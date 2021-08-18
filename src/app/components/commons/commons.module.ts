import { LoginComponent } from './login/login.component';
import { Router, RouterModule } from '@angular/router';
import { LoadScreenComponent } from './load-screen/load-screen.component';
import { DetailStudentComponent } from './detail-student/detail-student.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { PaymentsDetailComponent } from './payments-detail/payments-detail.component';
import { AddCalendarEventComponent } from './add-calendar-event/add-calendar-event.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
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


@NgModule({
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
    MatSelectModule,
    MatGridListModule,
    MatChipsModule,
    MatSelectModule,
    RouterModule
  ],
  declarations: [
    CalendarComponent,
    EventDetailComponent,
    AddCalendarEventComponent,
    PaymentsDetailComponent,
    ContactInfoComponent,
    ConfirmDialogComponent,
    DetailStudentComponent,
    LoadScreenComponent,
    LoginComponent
  ],
  exports: [
    CalendarComponent,
    EventDetailComponent,
    AddCalendarEventComponent,
    PaymentsDetailComponent,
    ContactInfoComponent,
    ConfirmDialogComponent,
    DetailStudentComponent,
    LoadScreenComponent,
    LoginComponent
  ],
})
export class CommonsModule {}
