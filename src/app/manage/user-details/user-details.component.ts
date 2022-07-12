import { Component, Input, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  public user: any = [];
  // message: any;
  @Input() senddata: any;
  constructor(private userservice: UserDataService) {}

  ngOnInit() {
    this.userservice.Getusers().subscribe((result) => (this.user = result));
    // this.message = this.userservice.getMessage();

    // console.log(this.message);
  }
}
