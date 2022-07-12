import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './manage-routing.module';
import { UserComponent } from './user/user.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ManageComponent } from './manage/manage.component';

@NgModule({
  declarations: [
    UserComponent,
    UsersListComponent,
    UserDetailsComponent,
    ManageComponent,
  ],
  imports: [CommonModule, ManageRoutingModule],
})
export class ManageModule {}
