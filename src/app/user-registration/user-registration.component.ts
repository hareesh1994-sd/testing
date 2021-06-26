import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {
  studientsForm: FormGroup;

  constructor() {
    this.studientsForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      emailAdress: new FormControl('', [Validators.required]),
      selectedLanguage: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
  }
  register(): void{
    localStorage.setItem('first_name', this.studientsForm.value.firstName);
    localStorage.setItem('last_name', this.studientsForm.value.lastName);
    localStorage.setItem('email_adress', this.studientsForm.value.emailAdress);
    localStorage.setItem('selected_language', this.studientsForm.value.selectedLanguage);
    localStorage.setItem('phone_number', this.studientsForm.value.phoneNumber);
  }
}
