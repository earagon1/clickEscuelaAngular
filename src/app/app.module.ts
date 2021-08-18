import { RouterModule } from '@angular/router';
import { CommonsModule } from './components/commons/commons.module';

import { NormalizeWordPipe } from './pipes/normalize-word.pipe';
import { StudentModule } from './components/student/student.module';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { ParentModule } from './components/parent/parent.module';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './components/admin/admin.module';
import { TeacherModule } from './components/teacher/teacher.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NotificationComponent } from './components/commons/notification/notification.component';
import { LoadDashboardComponent } from './components/commons/load-dashboard/load-dashboard.component';
import { DetailStudentComponent } from './components/commons/detail-student/detail-student.component';
import { DashboardChartComponent } from './components/commons/dashboard-chart/dashboard-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FormsModule } from '@angular/forms';
import { DashboardChartAdvanceComponent } from './components/commons/dashboard-chart-advance/dashboard-chart-advance.component';
import { VerticalBarChartComponent } from './components/commons/vertical-bar-chart/vertical-bar-chart.component';
import { DashboardVerticalComponent } from './components/commons/dashboard-vertical/dashboard-vertical.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatRippleModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, VerticalBarChartComponent, NormalizeWordPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    TeacherModule,
    ParentModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    MatDialogModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatRippleModule,
    CommonModule,
    StudentModule,
    HttpClientModule,
    CommonsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-AR' }],

  bootstrap: [AppComponent],
  exports: [NormalizeWordPipe,AppRoutingModule],
})
export class AppModule {}
