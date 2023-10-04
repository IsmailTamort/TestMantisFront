import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssueListComponent } from './components/issue-list/issue-list.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'issue-list' },
  { path: 'issues-list', component: IssueListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
