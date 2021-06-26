import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  firstName = localStorage.getItem('first_name');
  lastName = localStorage.getItem('last_name');
  selectedLanguage = localStorage.getItem('selected_language');
  emailAdress = localStorage.getItem('email_adress');
  phoneNumber = localStorage.getItem('phone_number');
  constructor() { }

  ngOnInit(): void {
  }

}
