import { Injectable } from '@angular/core';

export interface User {
  id: number;
  name: string;
  age: number;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users: User[] = [];

  getAllUsers(): User[] {
    return this.users;
  }

  getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  addUser(user: User) {
    this.users.push(user);
  }

  updateUser(id: number, updatedUser: User) {
    const index = this.users.findIndex(user => user.id === id);
    if (index > -1) {
      this.users[index] = updatedUser;
    }
  }

  deleteUser(id: number) {
    this.users = this.users.filter(user => user.id !== id);
  }
}
