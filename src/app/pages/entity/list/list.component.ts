import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [],
})
export class ListComponent implements OnInit, OnDestroy {
  users: User[] = [];
  subscription?: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.subscription = this.userService
      .getUsers()
      .subscribe((users) => (this.users = users));
  }

  ngOnDestroy() {
    // Geef de subscription weer vrij om memory leak te voorkomen.
    if (this.subscription) this.subscription.unsubscribe();
  }
}
