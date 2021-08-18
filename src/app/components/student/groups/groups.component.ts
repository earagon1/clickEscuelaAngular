import { WorkGroup } from '../../../models/work-group';
import { Component, OnInit } from '@angular/core';
import { WorkGroupService } from 'src/app/services/work-group.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  workGroupList: WorkGroup[];
  constructor(private workgroupService: WorkGroupService) {
    this.workGroupList = [];
    this.workGroupList = workgroupService.groupsList;

  }

  ngOnInit() {
  }

}
