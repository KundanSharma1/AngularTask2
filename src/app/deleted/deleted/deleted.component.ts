import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-deleted',
  templateUrl: './deleted.component.html',
  styleUrls: ['./deleted.component.css'],
})
export class DeletedComponent implements OnInit {
  public user: any = [];
  public ids: any = [];
  constructor(private userservice: UserDataService) {}

  ngOnInit() {
    this.userservice.Getusers().subscribe((result) => (this.user = result));
  }
  getUser() {
    console.log(this.user);
  }
  oneclick(value: string) {
    this.user.isDeleted = !this.user.isDeleted;
    this.ids.push(value);

    //console.log(value);
    // window.location.reload();
  }
}
