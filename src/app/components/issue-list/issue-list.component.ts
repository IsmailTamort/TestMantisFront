import { Component } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent {

  anomalies: any[] = [];

  constructor(private apiService: ApiService) {}
  title = 'testMobileticFront';
  ngOnInit() {
    this.apiService.GetIssues().subscribe((anomalies:any) => {
      this.anomalies = anomalies.data;
    });
  }

}
