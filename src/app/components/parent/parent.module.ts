import { RouterModule } from '@angular/router';
import { CommonsModule } from './../commons/commons.module';
import { FirstLetterPipe } from './../../pipes/firstLetter.pipe';
import { MessageContentComponent } from './messages/message-content/message-content.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PaymentListComponent } from './payment/payment-list/payment-list.component';
import { AsistanceListComponent } from './asistance/asistance-list/asistance-list.component';
import { ParentMenuComponent } from './parent-menu/parent-menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsistanceParentComponent } from './asistance/asistance.component';
import { PaymentComponent } from './payment/payment.component';
import { MessagesComponent } from './messages/messages.component';
import { GradesResumeComponent } from './grades/grades.component';
import { ReportCardComponent } from './report-card/report-card.component';
import { BrowserModule } from '@angular/platform-browser';
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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {
  MatTooltipModule,
} from '@angular/material/tooltip';
import { GradesListComponent } from './grades/grades-list/grades-list.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { ReportCardListComponent } from './report-card/report-card-list/report-card-list.component';

@NgModule({
  declarations: [
    AsistanceParentComponent,
    PaymentComponent,
    MessagesComponent,
    MessageContentComponent,
    GradesResumeComponent,
    ReportCardComponent,
    ParentMenuComponent,
    AsistanceListComponent,
    PaymentListComponent,
    GradesResumeComponent,
    GradesListComponent,
    FirstLetterPipe,
    ReportCardListComponent,
    AsistanceListComponent,
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
    RouterModule,
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
    CommonsModule,
    MatMenuModule,
  ],
  exports: [
    ReportCardComponent,
    GradesResumeComponent,
    MessagesComponent,
    FirstLetterPipe,
    MessagesComponent,
  ],
})
export class ParentModule {}
