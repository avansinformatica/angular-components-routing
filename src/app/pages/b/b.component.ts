import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../entity/user.model';
import { UserService } from '../entity/user.service';

/**
 * Observables en uitlezen van data - variant 2: async pipe in template.
 *
 * In deze variant voer je de .subscription() functie impliciet uit via de
 * async-pipe in het HTML template. Kijk goed naar de code: we roepen hier
 * geen .subscribe() en geen .unsubscribe aan! Angular regelt dat voor je.
 *
 * De conventie is dat variabelen in dit geval een $ als postfix krijgen.
 * Doe dat dus ook in jouw code.
 *
 * Nadeel: eigenlijk zijn er geen nadelen. Er is hier geen memory leak.
 * Let wel op dat iedere aanroep van de async-pipe eigenlijk de .subscribe()
 * aanroept en dus een call naar de service en API uitvoert.
 *
 *
 */
@Component({
  selector: 'app-b',
  template: `
    <div class="component B">
      <p>B works!</p>
      <table>
        <!-- users$ is hier een Observable waar je doorheen kunt lopen. -->
        <tr *ngFor="let user of users$ | async">
          <td>{{ user.firstName }} {{ user.lastName }}</td>
        </tr>
      </table>
    </div>
  `,
  styles: [],
})
export class BComponent implements OnInit {
  // Conventie: naam met $ als extentie.
  users$?: Observable<User[]>;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    console.log('BComponent.ngOnInit()');
    this.users$ = this.userService
      .getUsersAsObservable()
      // Je kunt hier zelfs de observable stream nog bewerken!
      .pipe(tap(console.log));
  }
}
