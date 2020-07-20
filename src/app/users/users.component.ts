import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  firstName = '';
  lastName = '';
  users = []; // Array
  show = true;
  selected = 0;

  inputYourName(event: any): void {
    this.firstName = event.target.value;
  }

  inputLastname(input: string): void {
    this.lastName = input;
  }

  saveData(): void {
    const fullName = `${this.firstName} ${this.lastName}`;
    this.users.push({ name: fullName, status: false });
  }

  onSelect(index: number): void {
    this.users[index].status = !this.users[index].status;
    this.selected = this.users.filter((u) => u.status).length;
  }

  ngOnInit(): void {}
}
