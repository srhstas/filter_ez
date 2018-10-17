import { Component, OnInit } from '@angular/core';
import {UserDataService} from '../_services/user-data.service';
import {UserData} from '../models/data';


@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  userdata: UserData;

  constructor(private userData: UserDataService) {
  }

  ngOnInit() {
    this.userData
              .getUserData()
              .subscribe((data: UserData) => {
                this.userdata = data;
              });
              console.log(this.userdata);
  }
}
