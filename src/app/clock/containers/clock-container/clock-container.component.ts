import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subscription, timer } from 'rxjs';

import { State } from '../../../app.root.reducer';
import { CurrentTime, CurrentDate } from '../../models/clock.interfaces';
import { UpdateDateAction, UpdateTimeAction } from '../../actions/clock.actions';

@Component({
  selector: 'app-clock-container',
  templateUrl: './clock-container.component.html',
})
export class ClockContainerComponent implements OnDestroy, OnInit {
  public clockType = new FormControl('digital');
  public currentTime$: Observable<CurrentTime>;
  public currentDate$: Observable<CurrentDate>;
  private timerSubscription: Subscription;

  constructor(
    private store: Store<State>,
  ) { }


  ngOnInit() {
    this.currentTime$ = this.store.select(state => state.clock.currentTime);
    this.currentDate$ = this.store.select(state => state.clock.currentDate);

    this.timerSubscription = timer(0, 500).subscribe(() => {
      this.store.dispatch(new UpdateTimeAction());
      this.store.dispatch(new UpdateDateAction());
    });
  }

  ngOnDestroy() {
    this.timerSubscription.unsubscribe();
  }
}
