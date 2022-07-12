import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css'],
})
export class ManageComponent implements OnInit {
  public user: any = [];
  public ids: string | undefined;
  public flags: boolean = false;
  // message: any;
  constructor(private userservice: UserDataService) {
    // this.message = this.ids;
  }

  ngOnInit() {
    this.userservice.Getusers().subscribe((result) => (this.user = result));
    // this.userservice.setMessage(this.message);
  }
  details(value: string) {
    this.flags = true;
    this.ids = value;
  }
}
