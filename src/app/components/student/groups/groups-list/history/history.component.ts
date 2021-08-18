import { Component, Input, OnInit } from '@angular/core';
import { WorkGroup } from 'src/app/models/work-group';
import { WorkGroupService } from 'src/app/services/work-group.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  @Input() group: WorkGroup;
  @Input() currentIndex: number;
  @Input() currentSender: string;
  @Input() showSpan: boolean;

  constructor(private workGroupService: WorkGroupService) { }

  ngOnInit() {
  }

  addComment(index, comment) {
    this.workGroupService.addComment(index, this.currentSender, comment);
  }

  addHistory(index, history) {
    this.workGroupService.addHistory(index, this.currentSender, history);
  }
}
