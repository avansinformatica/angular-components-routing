import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { of, Subscription } from 'rxjs';
import { delay, switchMap, tap } from 'rxjs/operators';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})
export class DetailComponent implements OnInit, OnDestroy {
  userId: string | null = null;
  user: User | null = null;
  subs?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    // Deze manier is statisch: bij navigatie krijgen we niet de nieuwe id uit de URL.
    // this.userId = this.route.snapshot.paramMap.get('id');

    // Deze manier maakt gebruik van RxJs Observables.
    // We komen hier bij services en HTTP op terug.
    this.subs = this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          of(this.userService.getUserById(Number(params.get('id'))))
        ),
        tap(console.log)
      )
      .subscribe((user) => (this.user = user));
  }

  ngOnDestroy() {
    if (this.subs) this.subs.unsubscribe();
  }
}
