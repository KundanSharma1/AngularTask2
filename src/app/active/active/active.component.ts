import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css'],
})
export class ActiveComponent implements OnInit {
  public user: any = [];
  public ids: any = [];
  constructor(private userservice: UserDataService) {}

  ngOnInit() {
    this.userservice.Getusers().subscribe((result) => (this.user = result));
  }
  oneclick(value: string) {
    this.user.isDeleted = !this.user.isDeleted;
    this.ids.push(value);
  }
}
