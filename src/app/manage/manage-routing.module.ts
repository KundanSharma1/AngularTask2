import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ManageComponent } from './manage/manage.component';
const routes: Routes = [
  { path: 'user', component: UserComponent },

  { path: 'userList', component: UsersListComponent },
  {
    path: 'manage',
    component: ManageComponent,
    children: [{ path: 'userDetails', component: UserDetailsComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageRoutingModule {}
