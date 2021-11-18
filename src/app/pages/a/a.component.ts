import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../entity/user.model';
import { UserService } from '../entity/user.service';

/**
 * Observables en uitlezen van data - variant 1: subscription in component.
 *
 * In deze variant voer je de .subscription() functie uit in de component. Je
 * leest hierbij de data uit (users) en bewaart die in een lokale variabele
 * (this.users). In het template kun je die lokale variabele gebruiken (ngFor).
 *
 * Nadeel: een Observable blijft actief totdat je .unsubscribe() aanroept - ook
 * als de component na route navigatie niet meer bestaat! En als je opnieuw teruggaat
 * naar de A-component via routing, wordt opnieuw op dezelfde Observable subscribed.
 * Dit is een MEMORY LEAK.
 *
 * Oplossing: ngDestroy() met .unsubscribe. Zie het voorbeeld.
 */
@Component({
  selector: 'app-a',
  template: `
    <div class="component A">
      <p>A works!</p>
      <table>
        <!-- users is hier een regulier array waar je doorheen kunt lopen. -->
        <tr *ngFor="let user of users">
          <td>{{ user.firstName }} {{ user.lastName }}</td>
        </tr>
      </table>
    </div>
  `,
  styles: [],
})
export class AComponent implements OnInit, OnDestroy {
  users: User[] = [];
  subscription?: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    console.log('AComponent.ngOnInit()');
    this.subscription = this.userService
      .getUsersAsObservable()
      .subscribe((users) => (this.users = users));
  }

  ngOnDestroy() {
    console.log('AComponent.ngOnDestroy()');
    // Verplicht: unsubscribe bij het verlaten van de component.
    this.subscription?.unsubscribe();
  }
}
