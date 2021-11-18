import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
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
  selector: 'app-b',
  template: `
    <div class="component B">
      <p>B works!</p>
      <table>
        <!-- users$ is hier een Observable waar je doorheen kunt lopen. -->
        <tr *ngFor="let user of users$ | async">
          <td>{{ user.firstName }}</td>
        </tr>
      </table>
    </div>
  `,
  styles: [],
})
export class BComponent implements OnInit {
  users$?: Observable<User[]>;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    console.log('BComponent.ngOnInit()');
    this.users$ = this.userService.getUsersAsObservable();
  }
}
