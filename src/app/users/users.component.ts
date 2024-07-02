import { Component, OnInit } from '@angular/core';
import { UsersService, User } from '../users.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.users = this.usersService.getAllUsers();
  }

   addUser(name: string, age: number | string): void {
    const newUser: User = { id: Date.now(), name, age: Number(age) };
    this.usersService.addUser(newUser);
    this.users = this.usersService.getAllUsers();
  }
}
