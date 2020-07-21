import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[] = []; // Array
  show = true;
  selected = 0;
  submitted = false;

  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.maxLength(20)]],
      lastName: ['', Validators.required],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  saveData(): void {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    const fullName = `${this.f.firstName.value} ${this.f.lastName.value}`;

    const user = new User(fullName, false);
    this.users.push(user);
  }

  onSelect(index: number): void {
    this.users[index].status = !this.users[index].status;
    this.selected = this.users.filter((u) => u.status).length;
  }
}
